package com.zscheduler.app;

import android.os.Handler;
import android.os.Looper;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.annotation.CapacitorPlugin;
import com.getcapacitor.PluginMethod;

@CapacitorPlugin(name = "ZScheduler")
public class ZScheduler extends Plugin {

    private Handler handler;
    private Runnable runnable;
    private boolean isRunning = false;

    @PluginMethod
    public void startPeriodic(PluginCall call) {

        int interval = call.getInt("interval", 1000);
        String eventName = call.getString("eventName", "schedulerEvent");

        // Validate interval
        if (interval < 500) {
            call.reject("Interval must be at least 500ms");
            return;
        }

        // Stop previous scheduler if running
        stopInternal();

        handler = new Handler(Looper.getMainLooper());

        runnable = new Runnable() {
            @Override
            public void run() {

                if (!isRunning) return;

                notifyListeners(eventName, null);
                handler.postDelayed(this, interval);
            }
        };

        isRunning = true;
        handler.postDelayed(runnable, interval);

        call.resolve();
    }

    @PluginMethod
    public void stopPeriodic(PluginCall call) {
        stopInternal();
        call.resolve();
    }

    private void stopInternal() {
        isRunning = false;

        if (handler != null && runnable != null) {
            handler.removeCallbacks(runnable);
        }

        handler = null;
        runnable = null;
    }

    @Override
    protected void handleOnDestroy() {
        stopInternal();
        super.handleOnDestroy();
    }
}
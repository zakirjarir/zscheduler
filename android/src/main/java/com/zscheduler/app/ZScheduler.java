package com.zscheduler.app;

import com.getcapacitor.Logger;


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

    @PluginMethod
    public void startPeriodic(PluginCall call) {
        int interval = call.getInt("interval", 1000); // milliseconds
        String eventName = call.getString("eventName", "schedulerEvent");

        handler = new Handler(Looper.getMainLooper());

        runnable = new Runnable() {
            @Override
            public void run() {
                // JS এ event পাঠানো হচ্ছে
                notifyListeners(eventName, null);
                handler.postDelayed(this, interval); // next execution
            }
        };

        handler.postDelayed(runnable, interval);

        call.resolve();
    }

    @PluginMethod
    public void stopPeriodic(PluginCall call) {
        if (handler != null && runnable != null) {
            handler.removeCallbacks(runnable);
        }
        call.resolve();
    }
}
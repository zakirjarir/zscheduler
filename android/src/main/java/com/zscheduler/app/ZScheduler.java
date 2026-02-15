package com.zscheduler.app;

import com.getcapacitor.Logger;

public class ZScheduler {

    public String echo(String value) {
        Logger.info("Echo", value);
        return value;
    }
}

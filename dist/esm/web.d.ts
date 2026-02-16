import { WebPlugin } from '@capacitor/core';
import type { ZSchedulerPlugin } from './definitions';
export declare class ZSchedulerWeb extends WebPlugin implements ZSchedulerPlugin {
    private intervalId;
    startPeriodic(options: {
        interval: number;
        eventName: string;
    }): Promise<void>;
    stopPeriodic(): Promise<void>;
}

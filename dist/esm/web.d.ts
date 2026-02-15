import { WebPlugin } from '@capacitor/core';
import type { ZSchedulerPlugin } from './definitions';
export declare class ZSchedulerWeb extends WebPlugin implements ZSchedulerPlugin {
    echo(options: {
        value: string;
    }): Promise<{
        value: string;
    }>;
}

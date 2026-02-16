import { WebPlugin } from '@capacitor/core';
import type { ZSchedulerPlugin } from './definitions';

export class ZSchedulerWeb extends WebPlugin implements ZSchedulerPlugin {
  private intervalId: any;

  async startPeriodic(options: { interval: number; eventName: string }): Promise<void> {
    this.intervalId = setInterval(() => {
      this.notifyListeners(options.eventName, {});
    }, options.interval);
  }

  async stopPeriodic(): Promise<void> {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }
}

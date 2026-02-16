import { WebPlugin } from '@capacitor/core';
export class ZSchedulerWeb extends WebPlugin {
    async startPeriodic(options) {
        this.intervalId = setInterval(() => {
            this.notifyListeners(options.eventName, {});
        }, options.interval);
    }
    async stopPeriodic() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
//# sourceMappingURL=web.js.map
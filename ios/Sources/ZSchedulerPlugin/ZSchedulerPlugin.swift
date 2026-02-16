import Foundation
import Capacitor

@objc(ZSchedulerPlugin)
public class ZSchedulerPlugin: CAPPlugin {

    private let implementation = ZScheduler()

    @objc func startPeriodic(_ call: CAPPluginCall) {
        let interval = call.getInt("interval") ?? 1000
        let eventName = call.getString("eventName") ?? "schedulerEvent"

        implementation.start(interval: interval, eventName: eventName) {
            self.notifyListeners(eventName, data: nil)
        }

        call.resolve()
    }

    @objc func stopPeriodic(_ call: CAPPluginCall) {
        implementation.stop()
        call.resolve()
    }
}

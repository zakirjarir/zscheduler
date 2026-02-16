import Foundation

@objc public class ZScheduler: NSObject {

    private var timer: Timer?

    @objc public func start(interval: Int, eventName: String, notify: @escaping () -> Void) {
        timer?.invalidate()

        timer = Timer.scheduledTimer(withTimeInterval: Double(interval) / 1000.0, repeats: true) { _ in
            notify()
        }
    }

    @objc public func stop() {
        timer?.invalidate()
        timer = nil
    }
}

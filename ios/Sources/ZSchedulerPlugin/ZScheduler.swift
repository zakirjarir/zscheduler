import Foundation

@objc public class ZScheduler: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}

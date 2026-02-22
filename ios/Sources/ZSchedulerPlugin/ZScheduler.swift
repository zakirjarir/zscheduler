import Foundation
import Capacitor
import BackgroundTasks

@objc(ZScheduler)
public class ZScheduler: CAPPlugin {

    let taskIdentifier = "com.zscheduler.sync"

    public override func load() {
        super.load()
        registerBackgroundTask()
    }

    private func registerBackgroundTask() {
        BGTaskScheduler.shared.register(
            forTaskWithIdentifier: taskIdentifier,
            using: nil
        ) { task in
            self.handleBackgroundTask(task: task as! BGProcessingTask)
        }
    }

    @objc func startPeriodic(_ call: CAPPluginCall) {
        scheduleTask()
        call.resolve()
    }

    private func scheduleTask() {

        let request = BGProcessingTaskRequest(identifier: taskIdentifier)
        request.requiresNetworkConnectivity = true
        request.requiresExternalPower = false

        do {
            try BGTaskScheduler.shared.submit(request)
        } catch {
            print("Could not schedule task: \(error)")
        }
    }

    private func handleBackgroundTask(task: BGProcessingTask) {

        scheduleTask() // Reschedule next run

        task.expirationHandler = {
            task.setTaskCompleted(success: false)
        }

        // 🔥 এখানে sync logic লিখবা
        notifyListeners("schedulerEvent", data: nil)

        task.setTaskCompleted(success: true)
    }
}
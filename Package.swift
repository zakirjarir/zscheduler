// swift-tools-version: 5.9
import PackageDescription

let package = Package(
    name: "Zscheduler",
    platforms: [.iOS(.v15)],
    products: [
        .library(
            name: "Zscheduler",
            targets: ["ZSchedulerPlugin"])
    ],
    dependencies: [
        .package(url: "https://github.com/ionic-team/capacitor-swift-pm.git", from: "8.0.0")
    ],
    targets: [
        .target(
            name: "ZSchedulerPlugin",
            dependencies: [
                .product(name: "Capacitor", package: "capacitor-swift-pm"),
                .product(name: "Cordova", package: "capacitor-swift-pm")
            ],
            path: "ios/Sources/ZSchedulerPlugin"),
        .testTarget(
            name: "ZSchedulerPluginTests",
            dependencies: ["ZSchedulerPlugin"],
            path: "ios/Tests/ZSchedulerPluginTests")
    ]
)
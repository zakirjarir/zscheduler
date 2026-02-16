export interface ZSchedulerPlugin {
  startPeriodic(options: {
    interval: number;
    eventName: string;
  }): Promise<void>;

  stopPeriodic(): Promise<void>;

  addListener(
      eventName: string,
      listenerFunc: () => void,
  ): Promise<{ remove: () => void }>;
}

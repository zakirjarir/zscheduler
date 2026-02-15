export interface ZSchedulerPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}

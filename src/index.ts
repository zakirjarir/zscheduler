import { registerPlugin } from '@capacitor/core';
import type { ZSchedulerPlugin } from './definitions';

const ZScheduler = registerPlugin<ZSchedulerPlugin>('ZScheduler', {
  web: () => import('./web').then((m) => new m.ZSchedulerWeb()),
});

export * from './definitions';
export { ZScheduler };

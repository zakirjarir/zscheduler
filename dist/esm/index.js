import { registerPlugin } from '@capacitor/core';
const ZScheduler = registerPlugin('ZScheduler', {
    web: () => import('./web').then((m) => new m.ZSchedulerWeb()),
});
export * from './definitions';
export { ZScheduler };
//# sourceMappingURL=index.js.map
import { WebPlugin } from '@capacitor/core';

import type { ZSchedulerPlugin } from './definitions';

export class ZSchedulerWeb extends WebPlugin implements ZSchedulerPlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
}

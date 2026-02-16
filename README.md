# ZScheduler

**ZScheduler** is a Capacitor Native Plugin that allows you to schedule **periodic JavaScript events** in your Ionic/Vue app. Using this plugin, you can trigger JS functions at a defined interval while the app is in the foreground.

---

## Features

- Native Android & iOS support
- Schedule periodic JS events at custom intervals
- Start and stop scheduled tasks easily
- Simple and lightweight API
- Integrates seamlessly with Ionic/Vue apps

> ⚠️ **Note:** This plugin works when the app is **in the foreground**. Running tasks in the background requires **Foreground Service** on Android and has **strict limitations on iOS**.

---

## Installation

```bash
npm install zakirjarir/zscheduler
npx cap sync


import { onMounted, onUnmounted } from 'vue';
import { ZScheduler } from 'zscheduler';

onMounted(async () => {
  await ZScheduler.startPeriodic({
    interval: 30000,
    eventName: 'every30s'
  });

  ZScheduler.addListener('every30s', () => {
    console.log('🔥 30s done');
  });
});

onUnmounted(async () => {
  await ZScheduler.stopPeriodic();
});

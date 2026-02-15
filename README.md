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


<script setup lang="ts">
import { onMounted } from 'vue';
import { ZScheduler } from 'zscheduler';

onMounted(async () => {
  // Start a periodic task every 30 seconds
  await ZScheduler.startPeriodic({
    interval: 30000, // in milliseconds
    eventName: 'myPeriodicEvent'
  });

  // Listen for the scheduled event
  ZScheduler.addListener('myPeriodicEvent', () => {
    console.log('Periodic event fired!');
    // Call any JS function here, e.g., show a toast
  });
});
</script>

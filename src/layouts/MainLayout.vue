<template>
  <q-layout view="lHh lpr lFf">
    <q-header elevated>
      <q-toolbars>
        <q-toolbar-title>
          <q-btn flat label="ОО Магура" size="1.2rem" />
        </q-toolbar-title>

        <q-tabs v-model="tab" no-caps>
          <q-route-tab to="/main" exact replace label="Activate in 2s" />
          <q-route-tab to="/main" exact replace label="Activate in 2s" />
          <q-route-tab to="/main" exact replace label="Activate in 2s" />
          <q-route-tab to="/main" exact replace label="Activate in 2s" />
        </q-tabs>
      </q-toolbars>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer>
      <q-toolbar>
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MainLayout",
  setup() {
    return {
      tab: ref(""),
    };
  },
});
</script>

<style lang="scss" scoped></style>

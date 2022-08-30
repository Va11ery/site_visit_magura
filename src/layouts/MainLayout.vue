<template>
  <q-layout view="lHh lpr lFf" class="container">
    <q-header>
      <q-toolbar class="toolbar bg-dark container">
        <q-list dark>
          <q-item clickable v-ripple @click="$router.push('/')">
            <q-item-section>
              <q-avatar class="q-mr-sm" size="6rem">
                <img src="~/assets/logo.png" /> </q-avatar
            ></q-item-section>
            <q-item-section>
              <q-item-label style="font-size: 1.5rem">Магура</q-item-label>
              <q-item-label caption>Услуги охраны</q-item-label></q-item-section
            >
          </q-item>
        </q-list>

        <q-tabs
          v-model="tab"
          shrink
          indicator-color="transparent"
          active-color="yellow"
        >
          <q-route-tab to="about" exact label="О компании" />
          <q-route-tab to="/about" exact label="Новости" />
          <q-route-tab to="/about" exact label="Контакты" />
          <q-route-tab to="/about" exact label="Услуги" />
        </q-tabs>

        <q-btn
          color="orange"
          label="Свзязь с нами"
          flat
          class="text_label_btn"
          icon="mail"
        >
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 234.3px">
              <q-item clickable>
                <q-item-section>Номер телефона</q-item-section>
              </q-item>
              <q-item clickable>
                <q-item-section>Адрес электронной почты</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-dark">
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

<style lang="scss" scoped>
.toolbar {
  min-height: 120px;
}
</style>

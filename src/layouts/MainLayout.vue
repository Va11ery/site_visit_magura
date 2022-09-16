<template>
  <q-layout view="lHh lpr lFf">
    <q-header>
      <q-toolbar class="toolbar justify-around bg-dark">
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

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="accent" />
      </q-page-scroller>
    </q-page-container>

    <q-list
      class="bg-dark"
      style="padding-bottom: 100px; padding-top: 100px"
      dark
    >
      <div class="container">
        <div
          style="
            font-size: 3vw;
            line-height: 3vw;
            font-weight: 700;
            text-transform: uppercase;
          "
        >
          Контактная информация
        </div>
        <div class="row q-col-gutter-xl q-pt-xl">
          <div
            class="col col-xs-12 col-sm-6 col-md-4 col-lg-3"
            v-for="(i, index) in card_info"
            :key="index"
          >
            <q-card class="my-card bg-dark" dark flat>
              <q-card-section class="text-orange">
                <div class="text-h6" style="">{{ i.title }}</div>
              </q-card-section>
              <q-card-section>{{ i.text }}</q-card-section>
            </q-card>
          </div>
        </div>
      </div>
    </q-list>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      card_info: [
        {
          title: "Номер телефона: ",
          text: "3213111",
          icon: {
            name: "",
          },
        },
        {
          title: "Электронная почта: ",
          text: "3213111",
          icon: {
            name: "",
          },
        },
        {
          title: "Время работы: ",
          text: "3213111",
          icon: {
            name: "",
          },
        },
        {
          title: "Наш адрес: ",
          text: "3213111",
          icon: {
            name: "",
          },
        },
      ],
    };
  },
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

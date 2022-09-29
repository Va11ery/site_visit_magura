<template>
  <q-layout view="lHh lpr lFf" class="bg-dark">
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
          <q-route-tab to="/company" exact label="О компании" />
          <q-route-tab to="/contacts" exact label="Контакты" />
          <q-route-tab exact label="Услуги">
            <q-menu transition-show="jump-down" transition-hide="jump-up">
              <q-list>
                <q-item clickable v-ripple to="/services/objects" exact>
                  <q-item-section class="item-label"
                    >Охрана объектов</q-item-section
                  >
                </q-item>
                <q-item clickable to="/services/cargo" exact>
                  <q-item-section class="item-label"
                    >Сопровождение грузов</q-item-section
                  >
                </q-item>
                <q-item clickable to="/services/personal" exact>
                  <q-item-section class="item-label"
                    >Личная охрана</q-item-section
                  >
                </q-item>
                <q-item clickable to="/services/events" exact>
                  <q-item-section class="item-label"
                    >Охрана мероприятий</q-item-section
                  >
                </q-item>
              </q-list>
            </q-menu></q-route-tab
          >
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
                <q-item-section @click="callTel()">Позвонить</q-item-section>
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

    <div class="container text-white ptb-100">
      <div
        class="card-oswald q-pb-xl"
        style="
          font-size: 5vw;
          line-height: 5vw;
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
          <q-card class="my-card bg-grey-10" dark flat>
            <q-card-section class="text-orange">
              <div class="text-h6" style="">{{ i.title }}</div>
            </q-card-section>

            <q-card-section style="font-size: 16px"
              >{{ i.text }}
            </q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <div class="container">
      <q-toolbar class="text-white">
        <div>Copyright © 2022 Охранная организация Магура</div>
      </q-toolbar>
    </div>
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
          text: "+7 960 268-40-44",
          icon: {
            name: "",
          },
        },
        {
          title: "Электронная почта: ",
          text: "В разработке",
          icon: {
            name: "",
          },
        },
        {
          title: "Время работы: ",
          text: "Пн. - Пт.: с 9:00 до 18:00",
          icon: {
            name: "",
          },
        },
        {
          title: "Наш адрес: ",
          text: "г. Санкт-Петербург, Большая Пороховская ул, дом № 61, литера Б, офис 1",
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
      callTel() {
        window.open("tel:89602684044", "_self");
      },
    };
  },
});
</script>

<style lang="scss" scoped>
.toolbar {
  min-height: 120px;
}
.item-label {
  font-weight: 500;
  font-size: 16px;
}
.q-item.q-router-link--active,
.q-item--active {
  color: var(--q-positive);
}
</style>

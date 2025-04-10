<template>
  <q-layout view="lHh lpr lFf" class="bg-dark">
    <q-header>
      <q-toolbar class="toolbar justify-around bg-dark toolbar-adaptive">
        <q-list dark>
          <q-item clickable v-ripple @click="$router.push('/')">
            <q-item-section avatar>
              <q-avatar class="q-mr-sm" size="6rem">
                <img src="~/assets/kgb.png" />

                <q-tooltip> ООО "ОО "КГБ"</q-tooltip>
              </q-avatar>
            </q-item-section>
            <q-item-section avatar>
              <q-avatar class="q-mr-sm" size="6rem">
                <img src="~/assets/sk.jpg" />
                <q-tooltip> ООО ОО "Сокол" </q-tooltip>
              </q-avatar>
            </q-item-section>
            <q-item-section avatar>
              <q-avatar class="q-mr-sm" size="6rem">
                <img src="~/assets/chop.jpg" />
                <q-tooltip> ООО "ЧОП "Гвардия" </q-tooltip>
              </q-avatar>
            </q-item-section>
            <q-item-section>
              <q-item-label style="font-size: 1.5rem">
                Группа охранных предприятий</q-item-label
              >
              <q-item-label caption>Услуги охраны</q-item-label></q-item-section
            >
          </q-item>
        </q-list>

        <q-tabs
          v-model="tab"
          shrink
          indicator-color="transparent"
          active-color="blue"
          class="adaptive-header"
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
          color="red"
          label="Свзязь с нами"
          flat
          class="text_label_btn adaptive-header"
          icon="mail"
        >
          <q-menu transition-show="jump-down" transition-hide="jump-up">
            <q-list style="min-width: 234.3px">
              <q-item clickable>
                <q-item-section @click="callTel()">Позвонить</q-item-section>
              </q-item>
              <q-item clickable @click="callMail()">
                <q-item-section>Адрес электронной почты</q-item-section>
              </q-item>
              <q-separator />
            </q-list>
          </q-menu>
        </q-btn>

        <q-btn
          flat
          round
          dense
          icon="menu"
          class="btn-adaptive"
          @click="activate('right')"
          style="display: none"
        />
        <n-drawer v-model:show="active" :placement="placement">
          <n-drawer-content closable title="ООО Кгб" style="padding: 0px">
            <q-list class="text-dark">
              <q-item
                clickable
                v-ripple
                to="/company"
                exact
                active-class="my-menu-link"
              >
                <q-item-section>О компании</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                to="/contacts"
                exact
                active-class="my-menu-link"
              >
                <q-item-section>Контакты</q-item-section>
              </q-item>
              <q-separator spaced />
              <q-item
                clickable
                v-ripple
                to="/services/objects"
                exact
                active-class="my-menu-link"
              >
                <q-item-section>Охрана объекта</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                to="/services/cargo"
                exact
                active-class="my-menu-link"
              >
                <q-item-section>Сопровождение груза</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                to="/services/personal"
                exact
                active-class="my-menu-link"
              >
                <q-item-section>Личная охрана</q-item-section>
              </q-item>

              <q-item
                clickable
                v-ripple
                to="/services/events"
                exact
                active-class="my-menu-link"
              >
                <q-item-section>Охрана мероприятий</q-item-section>
              </q-item>
            </q-list>
          </n-drawer-content>
        </n-drawer>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />

      <q-page-scroller
        position="bottom-right"
        :scroll-offset="150"
        :offset="[18, 18]"
      >
        <q-btn fab icon="keyboard_arrow_up" color="red" />
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
            <q-card-section class="text-blue">
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
        <div>© 2025 Группа охранных организаций КГБ</div>
      </q-toolbar>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { NDrawer, NDrawerContent } from "naive-ui";
export default defineComponent({
  name: "MainLayout",
  components: {
    NDrawer,
    NDrawerContent,
  },
  data() {
    return {
      card_info: [
        {
          title: "Номер телефона: ",
          text: "+7 (812) 224 24 96",
          icon: {
            name: "",
          },
        },
        {
          title: "Электронная почта: ",
          text: "op.kgb@mail.ru",
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
          text: "г. Санкт-Петербург, Большая Пороховская ул, дом 61",
          icon: {
            name: "",
          },
        },
      ],
    };
  },
  setup() {
    const active = ref(false);
    const placement = ref("right");
    const activate = (place) => {
      active.value = true;
      placement.value = place;
    };
    return {
      tab: ref(""),
      callTel() {
        window.open("tel:8 812 224 24 96", "_self");
      },
      callMail() {
        window.open("mailto:op.kgb@mail.ru", "_self");
      },
      active,
      placement,
      activate,
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
  color: #2196f3;
}
@media (max-width: 925px) {
  .adaptive-header {
    display: none;
  }
  .btn-adaptive {
    display: block !important;
  }
  .toolbar-adaptive {
    justify-content: space-between !important;
  }
}
</style>

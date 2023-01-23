<template>
  <q-page class="bg-white">
    <div class="container">
      <div class="ptb-100">
        <div
          class="card-oswald text-dark adaptive-title"
          style="
            font-size: 3vw;
            line-height: 3vw;
            font-weight: 700;
            text-transform: uppercase;
          "
        >
          Контакты
        </div>
      </div>

      <q-list padding class="rounded-borders">
        <q-item class="q-pb-xl">
          <q-item-section>
            <q-item-label class="item-label q-pb-sm"
              >Санкт-Петербург</q-item-label
            >
            <q-item-label class="item-caption text-orange" caption>
              +7 812 224 24 96
            </q-item-label></q-item-section
          >
        </q-item>
        <q-item class="q-pb-xl">
          <q-item-section>
            <q-item-label class="item-label q-pb-sm">Адрес</q-item-label>
            <q-item-label class="item-caption text-orange" caption>
              г. Санкт-Петербург, Большая Пороховская ул, дом № 61, литера Б,
              офис 1</q-item-label
            ></q-item-section
          >
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label class="item-label q-pb-sm">Почта</q-item-label>
            <q-item-label class="item-caption text-orange" caption>
              foton024@yandex.ru
            </q-item-label></q-item-section
          >
        </q-item>
      </q-list>

      <!-- <div class="ptb-100">
        <div
          class="card-oswald text-dark"
          style="
            font-size: 3vw;
            line-height: 3vw;
            font-weight: 700;
            text-transform: uppercase;
          "
        >
          Социальные сети
        </div>
      </div>

      <q-list padding class="rounded-borders">
        <div class="q-pb-xl">
          <q-item class="" clickable v-ripple>
            <q-item-section>
              <q-item-label class="item-label text-teal">Вконтаке</q-item-label>
            </q-item-section>
          </q-item>
        </div>
        <q-item clickable v-ripple>
          <q-item-section>
            <q-item-label class="item-label text-orange"
              >Инстаграм</q-item-label
            >
          </q-item-section>
        </q-item>
      </q-list> -->
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "ContactsPage",
  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.item-label {
  font-weight: bold;
  font-size: 30px;
}
.item-caption {
  font-size: 26px;
  font-weight: 600;
}
@media (max-width: 1200px) {
  .adaptive-title {
    font-size: 45px !important;
    line-height: 45px !important;
  }
}
</style>

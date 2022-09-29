<template>
  <q-page class="bg-white">
    <div class="container">
      <div class="ptb-100">
        <div
          class="card-oswald text-dark"
          style="
            font-size: 3vw;
            line-height: 3vw;
            font-weight: 700;
            text-transform: uppercase;
          "
        >
          О компании
        </div>
      </div>

      <q-list padding class="rounded-borders">
        <q-item class="q-pb-xl">
          <q-item-section>
            <q-item-label class="item-caption text-teal" caption>
              Компания «Магура» приветствует Вас на сайте нашей компании!
              Возможности сайта:</q-item-label
            ></q-item-section
          >
        </q-item>
      </q-list>

      <div class="ptb-100">
        <div
          class="card-oswald text-dark"
          style="
            font-size: 3vw;
            line-height: 3vw;
            font-weight: 700;
            text-transform: uppercase;
          "
        >
          Лицензии и сертификаты
        </div>
      </div>
      <div>В разработке ...</div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "CompaPage",
});
</script>

<style lang="scss" scoped>
.item-label {
  font-weight: bold;
  font-size: 20px;
}
.item-caption {
  font-size: 1.5vw;
  font-weight: 500;
}
</style>

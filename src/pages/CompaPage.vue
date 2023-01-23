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
          О компании
        </div>
      </div>

      <q-list padding class="rounded-borders">
        <q-item class="q-pb-xl">
          <q-item-section>
            <q-item-label
              class="item-caption text-teal adaptive-text text-justify"
              caption
            >
              <span style="padding-left: 70px"></span>
              «Магура» приветствует вас на сайте нашей компании! Мы осуществляем
              охранную деятельность с 2015 года. Наша команда опытных
              сотрудников, которая обеспечит надежную охрану вашей жизни, а
              также возьмет на себя ответственность за сохранение собственности,
              грузов, объектов, офисов, мероприятий и др.

              <div class="q-mt-xl">
                <span style="padding-left: 70px"></span>
                Команда «Магура» применяет индивидуальный подход к каждому
                клиенту и действует на основании законодательства РФ.
              </div>
            </q-item-label></q-item-section
          >
        </q-item>
      </q-list>

      <div class="ptb-100" style="padding-top: 52px">
        <div
          class="card-oswald text-dark adaptive-title"
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
      <div style="padding-bottom: 100px">
        <div class="q-pa-xl bg-teal">
          <n-image-group :theme-overrides="imageGroupThemeOverrides">
            <n-space justify="space-around">
              <n-image width="500" :src="lis_1" />
              <n-image width="500" :src="lis_2" />
            </n-space>
          </n-image-group>
        </div>
        <!-- <q-carousel
          v-model="slide"
          transition-prev="scale"
          transition-next="scale"
          swipeable
          animated
          control-color="white"
          padding
          arrows
          height="700px"
          class="bg-teal text-white shadow-1 rounded-borders"
        >
          <q-carousel-slide name="style" class="row flex-center">
            <div class="col-4">
              <q-img src="../assets/lis_1.png"></q-img>
            </div>
          </q-carousel-slide>
          <q-carousel-slide name="tv" class="row flex-center">
            <div class="col-4">
              <q-img src="../assets/lis_2.png"></q-img>
            </div>
          </q-carousel-slide>
        </q-carousel> -->
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { NImageGroup, NImage, useThemeVars, NSpace } from "naive-ui";
export default defineComponent({
  name: "CompaPage",
  data() {
    return {
      slide: "style",
    };
  },
  components: {
    NImageGroup,
    NImage,
    NSpace,
  },
  computed: {
    imageGroupThemeOverrides() {
      const { popoverColor, boxShadow2, textColor2, borderRadius } =
        useThemeVars().value;
      const themeOverrides = {
        toolbarColor: popoverColor,
        toolbarBoxShadow: boxShadow2,
        toolbarIconColor: textColor2,
        toolbarBorderRadius: borderRadius,
      };
      return themeOverrides;
    },
  },
  setup() {
    const lis_1 = new URL("../assets/lis_1.png", import.meta.url).href;
    const lis_2 = new URL("../assets/lis_2.png", import.meta.url).href;
    return {
      lis_1,
      lis_2,
    };
  },
  method: {},
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
@media (max-width: 1200px) {
  .adaptive-title {
    font-size: 45px !important;
    line-height: 45px !important;
  }
  .adaptive-text {
    font-size: 25px !important;
    line-height: 25px !important;
  }
  .adaptive-img {
    width: 200px !important;
  }
}
</style>

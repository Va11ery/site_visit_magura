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
              &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Компания
              «Магура» приветствует Вас на сайте нашей компании!<br />
              Наша команда опытных сотрудников, которая обеспечит надежную
              охрану вашей жизни, а также возьмет на себя ответственность за
              сохранение собственности, грузов, объектов, офисов, мероприятий и
              др.<br />
              <br />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Команда
              Магура применяет индивидуальный подход к каждому клиенту и
              действует на основании законодательства РФ.
            </q-item-label></q-item-section
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
      <div class="" style="padding-bottom: 100px">
        <q-carousel
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
        </q-carousel>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import lis_1 from "../assets/lis_1.png";
import cargo from "../assets/cargo.jpg";
export default defineComponent({
  name: "CompaPage",
  data() {
    return {
      slide: "style",
    };
  },
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

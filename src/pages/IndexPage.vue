<template>
  <q-page class="bg-dark">
    <div class="container q-pt-xl q-pb-xl">
      <q-card class="card border-right bg-dark" flat bordered dark>
        <q-card-section class="q-pt-xl">
          <div
            class="card-oswald card__title"
            style="font-size: 7vw; line-height: 7vw"
          >
            ОБЕСПЕЧИМ
          </div>
          <div
            class="card-oswald text-blue-13 card__title"
            style="font-size: 7vw; line-height: 7vw; opacity: 80%"
          >
            БЕЗОПАСНОСТЬ
          </div>
          <div
            class="text-caption text-grey q-pt-xl card__title"
            style="font-size: 16px"
          >
            Услуги охранного предприятия для частных лиц и компаний
          </div>
        </q-card-section>

        <q-card-actions class="q-pb-xl">
          <q-btn
            outline
            color="red"
            style="width: 300px"
            size="lg"
            @click="callMail()"
            >Оставить заявку
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>

    <!-- /////////////////////////////////////////////////////////////////////-->
    <div class="bg-white ptb-100">
      <div class="container">
        <div
          class="card-oswald q-pb-xl"
          style="font-size: 6vw; line-height: 6vw; font-weight: 700"
        >
          ПОЧЕМУ МЫ?
        </div>
        <div class="row q-col-gutter-lg q-pt-xl">
          <div
            class="col col-xs-12 col-sm-6 col-md-6 col-lg-4"
            v-for="(i, index) in card_wat_is_me"
            :key="index"
          >
            <q-card class="my-card">
              <q-icon
                :name="i.icon.name"
                size="8rem"
                style="width: 100%"
                :color="i.icon.color"
              />
              <q-card-section>
                <div class="text-h6">{{ i.title }}</div>
              </q-card-section>
              <q-card-section>{{ i.text }}</q-card-section>
            </q-card>
          </div>
        </div>

        <div
          class="card-oswald q-pt-xl q-pb-xl"
          style="font-size: 5vw; line-height: 6vw; font-weight: 700"
        >
          Они выбирают нас
        </div>

        <div class="q-pb-xl">
          <swiper
            :slides-per-view="4"
            :loop="true"
            :space-between="70"
            :grabCursor="true"
            :modules="modules"
            :breakpoints="{
              '100': {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              '640': {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              '900': {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              '1024': {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }"
          >
            <swiper-slide v-for="(item, index) in swiper_items" :key="index">
              <q-img fit="contain" style="height: 100px" :src="item"></q-img>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </div>
    <!-- /////////////////////////////////////////////////////////////////////-->
    <div class="container text-white ptb-100">
      <div
        class="card-oswald q-pb-xl"
        style="font-size: 6vw; line-height: 6vw; font-weight: 700"
      >
        О НАС
      </div>
      <q-card class="card" flat dark>
        <q-card-section style="font-size: 16px; opacity: 70%"
          >Мы оказываем высококлассные охранные услуги вот уже более 10 лет и
          среди наших постоянных клиентов есть сетевые магазины, филиалы
          крупнейших в России банков, офисы компаний, складские помещения
          огромной площади. Наш опыт, количество наших клиентов, их отзывы
          говорят сами за себя. Мы не подводим своих клиентов, всегда прибываем
          по первому звонку и в кратчайшее время. Наша команда превосходно
          оснащена, мы располагаем отличным автопарком, позволяющим оперативно
          реагировать на сигналы, современной технической базой, в том числе мы
          оказываем услуги по установке охранных сигнализаций и «Тревожных
          кнопок».</q-card-section
        >
        <div class="row q-col-gutter-lg">
          <div
            class="col col-xs-12 col-sm-6 col-md-6 col-lg-4 about_us_card-center"
            v-for="i in about_us"
            :key="i"
          >
            <q-icon
              :name="i.icon.name"
              size="8rem"
              :color="i.icon.color"
            ></q-icon>
            <q-card-section
              class="card-oswald"
              style="font-size: 5vw; line-height: 5vw; font-weight: 700"
            >
              {{ i.title }}
            </q-card-section>
            <q-card-section
              class="card-oswald"
              style="font-size: 20px; font-weight: 500"
            >
              {{ i.text }}
            </q-card-section>
          </div>
        </div>
      </q-card>
    </div>

    <!-- /////////////////////////////////////////////////////////////////////-->
    <div class="bg-white ptb-100">
      <div class="container">
        <div
          class="card-oswald q-pb-xl"
          style="font-size: 6vw; line-height: 6vw; font-weight: 700"
        >
          НАША КОМАНДА
        </div>
        <div
          class="row q-col-gutter-xl q-pt-xl"
          style="font-size: 20px; font-weight: 500"
        >
          <div class="col col-xs-12 col-sm-6 col-md-6 col-lg-6">
            Команда опытных сотрудников, которая обеспечит надежную охрану вашей
            жизни, а также возьмет на себя ответственность за сохранение
            собственности, грузов, объектов, офисов, мероприятий и др. Также
            применяет индивидуальный подход к каждому клиенту и действует на
            основании законодательства РФ.
          </div>
          <div class="col col-xs-12 col-sm-6 col-md-6 col-lg-6">
            Сотрудники офиса постоянно повышают свою квалификацию для
            стратегического развития охранной организации. Наши охранники
            повышают свою квалификацию доказывая уровень своих знаний и умений
            для оказания качественных охранных услуг.
          </div>
        </div>
      </div>
    </div>
    <!-- /////////////////////////////////////////////////////////////////////-->

    <div class="container text-white ptb-100">
      <div
        class="card-oswald q-pb-xl"
        style="font-size: 6vw; line-height: 6vw; font-weight: 700"
      >
        ЧТО МЫ ПРЕДЛАГАЕМ
      </div>
      <div class="row q-col-gutter-xl q-pt-xl">
        <div
          class="col col-xs-12 col-sm-6 col-md-6 col-lg-4"
          v-for="(i, index) in card_my_teams"
          :key="index"
        >
          <q-card class="my-card bg-grey-10" dark flat>
            <q-icon
              :name="i.icon.name"
              size="8rem"
              style="width: 100%"
              :color="i.icon.color"
            />
            <q-card-section>
              <div class="text-h6" style="">{{ i.title }}</div>
            </q-card-section>
            <q-card-section>{{ i.text }}</q-card-section>
          </q-card>
        </div>
      </div>
    </div>

    <!-- <div class="bg-white ptb-100">
      <div class="container">
        <div
          class="card-oswald q-pb-xl"
          style="font-size: 6vw; line-height: 6vw; font-weight: 700"
        >
          ОНИ ВЫБИРАЮТ НАС
        </div>
        <div
          class="row q-col-gutter-xl q-pt-xl"
          style="font-size: 20px; font-weight: 500"
        >
          <div class="col col-xs-12 col-sm-6 col-md-6 col-lg-6">
            Команда опытных сотрудников, которая обеспечит надежную охрану вашей
            жизни, а также возьмет на себя ответственность за сохранение
            собственности, грузов, объектов, офисов, мероприятий и др. Также
            применяет индивидуальный подход к каждому клиенту и действует на
            основании законодательства РФ.
          </div>
          <div class="col col-xs-12 col-sm-6 col-md-6 col-lg-6">
            Сотрудники офиса постоянно повышают свою квалификацию для
            стратегического развития охранной организации. Наши охранники
            повышают свою квалификацию доказывая уровень своих знаний и умений
            для оказания качественных охранных услуг.
          </div>
        </div>
      </div>
    </div> -->
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import delko from "../assets/delko.png";

import karat from "../assets/karat.png";
import mechet from "../assets/mechet.png";
import client from "../assets/client.png";
import piter from "../assets/piter.svg";
import monopoly from "../assets/monopoly.svg";
// Import Swiper styles
import "swiper/css";

export default defineComponent({
  name: "IndexPage",
  methods: {
    callMail() {
      window.open("mailto:op.kgb@mail.ru", "_self");
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      modules: [Autoplay, Pagination, Navigation],
      swiper_items: [delko, karat, piter, mechet, monopoly, client],
      about_us: [
        {
          title: "100+",
          text: "ШТАТ КВАЛИФИЦИРОВАННЫХ СОТРУДНИКОВ",
          icon: {
            name: "gpp_good",
            color: "blue",
          },
        },
        {
          title: "50",
          text: "КОМПАНИЙ НА ОБСЛУЖИВАНИИ",
          icon: {
            name: "business",
            color: "blue",
          },
        },
      ],
      card_my_teams: [
        {
          title: "Охрана объектов",
          text: "Охрана недвижимости, строительных объектов, промышленных объектов",
          icon: {
            name: "groups",
            color: "blue",
          },
        },
        {
          title: "Сопровождение грузов",
          text: "Ж/д способом, автомобилем, самолетом, сопровождение фур",
          icon: {
            name: "safety_check",
            color: "red",
          },
        },
        {
          title: "Личная охрана",
          text: "Явная личная охрана, скрытая личная охрана, телохранители",
          icon: {
            name: "admin_panel_settings",
            color: "indigo",
          },
        },
        {
          title: "Охрана мероприятий",
          text: "Внешняя охрана, внутренняя охрана, комплексная охрана",
          icon: {
            name: "groups",
            color: "blue",
          },
        },
        {
          title: "Почасовая охрана",
          text: "Охрана объекта на сутки, охрана объекта на день: на ночь",
          icon: {
            name: "safety_check",
            color: "red",
          },
        },
        {
          title: "Перевозка лекарственных и психотропных веществ",
          text: "Охранная организация имеет лицензию на перевозку лекарственных средств и психотропных веществ",
          icon: {
            name: "admin_panel_settings",
            color: "indigo",
          },
        },
      ],
      card_wat_is_me: [
        {
          title: "Квалифицированный персонал",
          text: "Каждый сотрудник ЧОО имеет большой опыт работы в охране и проходит ежегодное обучение",
          icon: {
            name: "groups",
            color: "blue",
          },
        },
        {
          title: "Оперативность работы",
          text: "Наши менеджеры составят для вас КП и оценят ваш объект в день обращения.",
          icon: {
            name: "safety_check",
            color: "red",
          },
        },
        {
          title: "Гарантии на время работы",
          text: "С каждым заказчиком ЧОО заключает договор, который регламентируется лицензионными органами.",
          icon: {
            name: "admin_panel_settings",
            color: "indigo",
          },
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #fff;

  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.border-right {
  border: 5px solid #2979ff;

  border-right: 0px solid !important;

  border-left: 0px solid !important;
}
.my-card {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

@media (max-width: 599.5px) {
  .about_us_card-center {
    i {
      width: 100%;
    }
    div {
      text-align: center;
    }
  }
}
@media (max-width: 800px) {
  .card__title {
    font-size: 40px !important;
    line-height: 40px !important;
  }
}
@media (max-width: 506px) {
  .card__title {
    font-size: 30px !important;
    line-height: 30px !important;
  }
}
@media (max-width: 390px) {
  .card__title {
    font-size: 24px !important;
    line-height: 24px !important;
  }
}
</style>

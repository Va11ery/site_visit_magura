<template>
  <q-page class="bg-white">
    <div class="container">
      <div class="ptb-100">
        <div
          class="card-oswald text-dark text-center adaptive-title"
          style="
            font-size: 3vw;
            line-height: 3vw;
            font-weight: 700;
            text-transform: uppercase;
          "
        >
          {{ getInfo.title }}
        </div>
      </div>
      <q-card class="my-card" flat>
        <q-card-section class="row q-col-gutter-xl q-pt-xl">
          <q-card-section class="col col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <q-img class="rounded-borders" :src="getInfo.img" />
          </q-card-section>
          <q-card-section class="col col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div class="item-caption text-dark" v-html="getInfo.text"></div>
          </q-card-section>
        </q-card-section>

        <q-card-actions class="q-pa-md">
          <q-btn
            outline
            color="red"
            style="width: 300px"
            size="lg"
            @click="callMail()"
          >
            Оставить заявку
          </q-btn>
        </q-card-actions>
      </q-card>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import sec from "../assets/sec.jpg";
import objects from "../assets/objects.jpg";
import personal from "../assets/personal.png";
import oxrana_gruza from "../assets/oxrana_gruza.png";
export default defineComponent({
  name: "ServicesPage",
  data() {
    return {
      dialog: false,
      data: [
        {
          path: "objects",
          title: "Охрана объектов",
          img: objects,
          text: "&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Команда  готова обеспечить безопасность функционирования объекта, сохранность материального имущества. Обеспечение безопасности объекта осуществляются обученными и подготовленными сотрудниками.  Их обучают владению оружием, навыкам психоанализа, оказанию первой медицинской помощи, что поможет обеспечить надежную охрану объектов. <br /> <br /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; В обязанности охранников входит: <br  /> - непосредственное присутствие на объекте;  <br  /> -  контроль территории;  <br  /> - при необходимости досмотр людей на проходных пунктах предприятий;  <br  /> - офисных зданий, фирм.  <br  /> <br />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Их деятельность осуществляется согласно Закону Российской Федерации от 11.03.1992 № 2487-1 «О частной детективной и охранной деятельности в Российской Федерации».",
        },
        {
          path: "cargo",
          title: "Сопровождение груза",
          img: oxrana_gruza,
          text: " &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Мы  также занимаемся сопровождением местных и междугородних перевозок груза.  <br  /> В нашей  компании данного вида услуг решаются задачи, как сохранности груза, так и обеспечения безопасности водителя во время оказания охранных услуг.   Сотрудники охраны, привлекаемые нами для выполнения этих задач, имеют достаточную квалификацию и опыт. <br  /><br  /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;При принятии груза под охрану в обязательном порядке заполняется акт приёма, куда вписаны все средства обеспечения.  Эта информация досконально проверяется материально ответственными лицами в пункте назначения груза.   Кроме того, наша компания осуществляет сопровождение и перевозку медицинских средств специально оборудованным транспортом, который оснащен климатическим оборудованием.  <br  /> <br  />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Персонал охраны в обязательном порядке обеспечен GPS-трекером с выводом на наш пульт наблюдения. С помощью этого же устройства сотрудник охраны всегда может подать сигнал «Тревога» в нашу дежурную часть.",
        },
        {
          path: "personal",
          title: "Личная охрана",
          img: sec,
          text: "&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Личная охрана доступна в любое время, также все охранники вооружены огнестрельным оружием. Обеспечение безопасности охраняемого лица, независимо от того, какого рода опасность может ему угрожать – целенаправленное покушение или форс-мажорные обстоятельства. <br  /><br /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; В компании вы можете заказать различные услуги, включая: <br /> - личная охрана на час; <br> - постоянно личная охрана и сопровождение; <br > - личный охранник для встречи клиента в аэропорту; <br>- охрана на время проведения определенных торжественных мероприятий.",
        },
        {
          path: "events",
          title: "Охрана мероприятий",
          img: objects,
          text: "&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Охрана культурно-массовых и спортивно-массовых мероприятий требует проведения целого комплекса организационных мер, направленных на обеспечение общественной безопасности. Наша компания обеспечит высокий уровень безопасности при охране массовых мероприятий любого типа. <br  /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Гарантируем: <br  /> - безопасность имущества, <br  /> - здоровье гостей и сотрудников, <br  /> - неприкосновенность приглашенных на объектах в Санкт-Петербурге и Ленобласти. <br  />&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Мы предоставляем группу опытных лицензированных охранников и спецтранспорт. <br  />  Оказываем охранные услуги на высшем уровне и берем на себя организацию контрольно-пропускного режима, координацию посетителей, контроль периметра, предупреждение и локализацию ситуаций, угрожающих жизни, здоровью и хорошему настроению гостей и персонала. <br  /> &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; Индивидуально подходим к каждому мероприятию. <br  />Обязанности и действия сотрудников охраны планируются согласно сценарию и согласовываются с организатором. Остаемся востребованной и на этом сегменте рынка охранных услуг и готова предоставить физическую охрану мероприятий для обеспечения Вашей безопасности.",
        },
      ],
    };
  },

  computed: {
    getInfo() {
      return this.data.filter((i) => i.path === this.$route.name)[0] ?? "";
    },
  },
  methods: {
    callMail() {
      window.open("mailto:op.kgb@mail.ru", "_self");
    },
    // getImageUrl(name) {
    //   return new URL(`${name}`, import.meta.url).href ?? "";
    // },
  },
});
</script>

<style lang="scss" scoped>
.item-caption {
  font-size: 18px;
  font-weight: 500;
}
@media (max-width: 925px) {
  .adaptive-title {
    font-size: 45px !important;
    line-height: 45px !important;
  }
}
</style>

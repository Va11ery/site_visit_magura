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
            <q-item-label class="item-caption text-red" caption>
              +7 812 224 24 96
            </q-item-label></q-item-section
          >
        </q-item>
        <q-item class="q-pb-xl">
          <q-item-section>
            <q-item-label class="item-label q-pb-sm">Адрес</q-item-label>
            <q-item-label class="item-caption text-red" caption>
              г. Санкт-Петербург, Большая Пороховская ул, дом 61</q-item-label
            ></q-item-section
          >
        </q-item>
        <q-item>
          <q-item-section>
            <q-item-label class="item-label q-pb-sm">Почта</q-item-label>
            <q-item-label class="item-caption text-red" caption>
              op.kgb@mail.ru
            </q-item-label></q-item-section
          >
        </q-item>
      </q-list>

      <q-card-actions class="q-pb-xl">
        <q-btn
          outline
          color="red"
          style="width: 300px"
          size="lg"
          @click="prompt = true"
          >Обратная связь
        </q-btn>
      </q-card-actions>

      <q-dialog v-model="prompt" persistent>
        <q-card style="min-width: 350px">
          <q-card-section>
            <div class="text-h6">Отправить сообщение на почту</div>

            <div class="text-h7">
              Введите ваше имя, телефон и причину обращения
            </div>
          </q-card-section>
          <form @submit.prevent="sendEmail">
            <q-card-section class="q-pt-none q-gutter-y-md column">
              <q-input
                dense
                v-model="formData.name"
                placeholder="Имя"
                required
              />

              <q-input
                v-model="formData.phone"
                placeholder="Телефон *"
                mask="+7 (###) ###-##-##"
                fill-mask
                :rules="[
                  (val) => !!val || 'Обязательное поле',
                  (val) =>
                    val.replace(/[^0-9]/g, '').length === 11 ||
                    'Введите корректный телефон',
                ]"
                required
              />

              <q-input
                v-model="formData.email"
                type="email"
                placeholder="Email"
                :rules="[
                  (val) =>
                    !val || /.+@.+\..+/.test(val) || 'Неверный формат email',
                ]"
              />

              <q-input
                type="textarea"
                v-model="formData.message"
                placeholder="Причина обращения *"
                :rules="[(val) => !!val || 'Обязательное поле']"
                required
              />
            </q-card-section>

            <q-card-actions align="right" class="text-primary">
              <q-btn flat label="Отмена" v-close-popup @click="close" />
              <q-btn flat label="Отправить" v-close-popup type="submit" />
            </q-card-actions>
          </form>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script setup>
import emailjs from "emailjs-com";
import { ref } from "vue";

const prompt = ref(false);
const formData = ref({
  name: "",
  phone: "",
  email: "",
  message: "",
});

const close = () => {
  formData.value = {
    name: "",
    phone: "",
    email: "",
    message: "",
  };
};

const sendEmail = async () => {
  try {
    const templateParams = {
      from_name: formData.value.name,
      from_phone: formData.value.phone,
      from_email: formData.value.email || "Не указан",
      message: formData.value.message,
      to_email: "sau3000@mail.ru",
    };

    await emailjs.send(
      "service_o9ioajk",
      "template_la4e9wk",
      templateParams,
      "BaIpNBhNXNi8FRONh"
    );

    alert("Письмо отправлено успешно!");

    close();
    // Очищаем форму после отправки
  } catch (error) {
    alert("Ошибка при отправке письма");
    console.error("Ошибка отправки:", error);
  }
};
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

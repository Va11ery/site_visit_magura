<template>
  <q-page class="bg-indigo-1">
    <div class="container q-pt-xl q-pb-xl">
      <q-card class="card border-right bg-indigo-1" flat bordered>
        <q-card-section class="q-pt-xl">
          <div class="text-overline text-teal" style="font-size: 35px">
            100% ГАРАНТИЯ БЕЗОПАСНОСТИ!
          </div>
          <div class="card-oswald" style="font-size: 7vw; line-height: 7vw">
            ОБЕСПЕЧИМ
          </div>
          <div
            class="card-oswald text-warning"
            style="font-size: 7vw; line-height: 7vw"
          >
            БЕЗОПАСНОСТЬ
          </div>
          <div class="text-caption text-grey q-pt-xl" style="font-size: 16px">
            Услуги охранного предприятия для компаний и частных лиц
          </div>
        </q-card-section>

        <q-card-actions>
          <q-btn outline color="secondary" style="width: 200px" size="lg"
            >Кнопка 1
          </q-btn>
          <q-btn outline color="deep-orange" style="width: 200px" size="lg"
            >Кнопка 2</q-btn
          >
        </q-card-actions>
      </q-card>
    </div>
    <div class="q-pt-xl q-pb-xl bg-white">
      <div class="container">
        <div
          class="card-oswald q-pb-xl"
          style="font-size: 6vw; line-height: 6vw; font-weight: 700"
        >
          ПОЧЕМУ МЫ?
        </div>
        <div class="row q-col-gutter-xl">
          <div class="col-4">
            <q-card class="my-card">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>
          </div>
          <div class="col-4">
            <q-card class="my-card">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>
          </div>

          <div class="col-4">
            <q-card class="my-card">
              <q-card-actions align="right">
                <q-btn flat round color="red" icon="favorite" />
                <q-btn flat round color="teal" icon="bookmark" />
                <q-btn flat round color="primary" icon="share" />
              </q-card-actions>
            </q-card>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

<style lang="scss" scoped>
.border-right {
  border-right: 0px solid !important;
  border: 5px solid #ff9800;
}
</style>

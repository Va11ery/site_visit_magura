<template>
  <q-page padding>
    <q-card class="my-card" flat bordered>
      <q-card-section horizontal>
        <q-card-section class="q-pt-xs">
          <div class="text-overline">100% ГАРАНТИЯ БЕЗОПАСНОСТИ!</div>
          <div class="text-h5 q-mt-sm q-mb-xs">ОБЕСПЕЧИМ БЕЗОПАСНОСТЬ</div>
          <div class="text-caption text-grey">
            Услуги охранного предприятия для компаний и частных лиц
          </div>
        </q-card-section>
      </q-card-section>

      <q-separator />

      <q-card-actions>
        <q-btn flat round icon="event" />
        <q-btn flat> 7:30PM </q-btn>
        <q-btn flat color="primary"> Reserve </q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>

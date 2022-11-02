<template>
  <router-view />
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  meta: {
    // sets document title
    title: "Index Page",
    // optional; sets final title as "Index Page - My Website", useful for multiple level meta
    titleTemplate: (title) => `${title} - My Website`,

    // meta tags
    meta: {
      description: { name: "description", content: "Page 1" },
      keywords: { name: "keywords", content: "Quasar website" },
      equiv: {
        "http-equiv": "Content-Type",
        content: "text/html; charset=UTF-8",
      },
    },

    // CSS tags
    link: {
      material: {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      },
    },

    // JS tags
    script: {
      ldJson: {
        type: "application/ld+json",
        innerHTML: `{ "@context": "http://schema.org" }`,
      },
    },

    // <html> attributes
    htmlAttr: {
      "xmlns:cc": "http://creativecommons.org/ns#", // generates <html xmlns:cc="http://creativecommons.org/ns#">,
      empty: undefined, // generates <html empty>
    },

    // <body> attributes
    bodyAttr: {
      "action-scope": "xyz", // generates <body action-scope="xyz">
      empty: undefined, // generates <body empty>
    },

    // <noscript> tags
    noscript: {
      default: "This is content for browsers with no JS (or disabled JS)",
    },
  },
});
</script>

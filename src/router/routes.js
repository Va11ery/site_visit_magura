const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/IndexPage.vue") },
      {
        path: "contacts",
        component: () => import("src/pages/ContactsPage.vue"),
      },
      {
        path: "company",
        component: () => import("src/pages/CompaPage.vue"),
      },
      {
        path: "services",
        children: [
          {
            path: "objects",
            component: () => import("src/pages/ServicesPage.vue"),
            name: "objects",
          },
          {
            path: "cargo",
            component: () => import("src/pages/ServicesPage.vue"),
            name: "cargo",
          },
          {
            path: "personal",
            component: () => import("src/pages/ServicesPage.vue"),
            name: "personal",
          },
          {
            path: "events",
            component: () => import("src/pages/ServicesPage.vue"),
            name: "events",
          },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;

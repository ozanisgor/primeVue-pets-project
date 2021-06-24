import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import router from "./router";

import Button from "primevue/button";
import Card from "primevue/card";
import InputText from "primevue/inputtext";

import "primevue/resources/themes/saga-blue/theme.css"; //theme
import "primevue/resources/primevue.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css";

createApp(App)
  .use(router)
  .use(PrimeVue, { ripple: true })
  .component("Button", Button)
  .component("Card", Card)
  .component("InputText", InputText)
  .mount("#app");

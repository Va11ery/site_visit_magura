import { boot } from "quasar/wrappers";
import Plugin from "../components/Maps/src/vue-plugin";

export default boot(({ app }) => {
  app.use(Plugin);
});

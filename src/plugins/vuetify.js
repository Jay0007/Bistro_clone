import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
// import colors from "vuetify/lib/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#E0CF5E",
        // secondary: "#FFDF2F",
        third: "#F7F7F7",
        forth: "#80550B"
      }
    }
  }
});

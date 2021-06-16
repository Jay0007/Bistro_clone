<template>
  <v-app>
    <v-app-bar
      app
      dark
      elevate-on-scroll
      height="90px"
      class="pt-0 px-16 app-bar"
    >
      <div class="d-flex align-center">
        <router-link to="/">
          <v-img
            class="mt-1 hidden-sm-and-down"
            contain
            min-width="90"
            src="https://flipdish.imgix.net/iTq1umXwFBF4xWqQKSTsLD56rpo.png?h=150&fm=png32"
            width="90"
          />
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        to="/"
        :ripple="false"
        text
        x-large
        style="font-weight:400"
        class="appbarButton"
      >
        <span>home</span>
      </v-btn>
      <v-btn
        to="/order"
        :ripple="false"
        text
        x-large
        style="font-weight:400"
        class="appbarButton"
      >
        <span>Menu</span>
      </v-btn>
      <v-btn
        :ripple="false"
        text
        x-large
        style="font-weight:400"
        class="appbarButton"
      >
        <span>about</span>
      </v-btn>
      <v-btn
        :ripple="false"
        text
        x-large
        style="font-weight:400"
        class="appbarButton"
      >
        <span>gallery</span>
      </v-btn>
      <v-btn
        :ripple="false"
        text
        x-large
        style="font-weight:400"
        class="appbarButton"
      >
        <span>contact</span>
      </v-btn>
      <v-btn
        :ripple="false"
        text
        x-large
        style="font-weight:400"
        class="appbarButton yellow--text"
      >
        <span>Order Online</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <v-snackbar
        v-model="$store.getters.getSnack.state"
        :color="$store.getters.getSnack.color"
        top
        :timeout="4500"
        elevation="24"
      >
        {{ $store.getters.getSnack.content }}
        <template v-slot:action="{ attrs }">
          <v-btn
            color="pink"
            v-bind="attrs"
            @click="$store.commit('closeSnackbar')"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    //
  }),
  created() {
    var full = window.location.host;
    if (full.substring(0, 9) !== "localhost") {
      this.$store.commit("setBaseUrl", "https://" + full);
    } else {
      this.$store.commit("setBaseUrl", "http://localhost:3000");
    }
  },
};
</script>
<style scoped>
.appbarButton:before {
  background-color: transparent;
  color: #fff200;
}
.appbarButton:hover {
  color: #fff200;
}
</style>

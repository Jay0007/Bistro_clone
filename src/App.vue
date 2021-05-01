<template>
  <v-app>
    <v-app-bar
      app
      dark
      elevate-on-scroll
      height = "90px"
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

      <v-btn to="/" :ripple="false" text x-large style="font-weight:400" class="appbarButton">
        <span >home</span>
      </v-btn>
      <v-btn to="/order" :ripple="false" text x-large  style="font-weight:400" class="appbarButton">
        <span >Menu</span>
      </v-btn>
      <v-btn :ripple="false" text x-large style="font-weight:400" class="appbarButton">
        <span >about</span>
      </v-btn>
      <v-btn :ripple="false" text x-large  style="font-weight:400" class="appbarButton">
        <span >gallery</span>
      </v-btn>
      <v-btn :ripple="false" text x-large style="font-weight:400" class="appbarButton">
        <span >contact</span>
      </v-btn>
      <v-btn :ripple="false" text x-large style="font-weight:400" class="appbarButton yellow--text">
        <span>Order Online</span>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
.appbarButton:before {
  background-color: transparent;
  color: #FFF200;
}
.appbarButton:hover{
  color: #FFF200;
}
</style>


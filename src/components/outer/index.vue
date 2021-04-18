<template>
  <v-app>
    <router-view/>
  </v-app>
</template>

<script>
export default {
  name: 'outer'
  // created () {
  //   var token = window.localStorage.getItem('token')
  //   if (token) {
  //     this.$axios.post(this.$store.getters.getBaseUrl + '/auth/agent/token/check', {token}).then((res) => {
  //       console.log(res.data)
  //       if (res.data.success) {
  //         if (res.data.role === 'Agent') {
  //           this.$router.push({path: '/app/agent/home'})
  //         } else if (res.data.role === 'Supervisor') {
  //           this.$router.push({path: '/app/supervisor/home'})
  //         } else if (res.data.role === 'Admin') {
  //           this.$router.push({path: '/app/admin/home'})
  //         }
  //       }
  //     })
  //   }
  // }
}
</script>

<style>
</style>


<v-app-bar
      app
      dark
      height = "90px"
      class="pt-0 px-16"
    >
      <div class="d-flex align-center">
        <v-img
          class="mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          href="https://github.com/vuetifyjs/vuetify/releases/latest"
          src="https://flipdish.imgix.net/iTq1umXwFBF4xWqQKSTsLD56rpo.png?h=150&fm=png32"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
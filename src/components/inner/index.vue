<template>
  <router-view/>
</template>

<script>
export default {
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

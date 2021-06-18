<template>
  <v-container fill-height class="pa-0">
    <v-row align="center" justify="center">
      <v-card align="center" class="pa-4" outlined>
        <v-row align="center" justify="center">
          <v-col cols="5" class="pa-0">
            <div class="display-1 text--primary">
              <v-icon class="pr-3" color="primary"> mdi-account </v-icon> Log in
            </div>
            <!-- <a href="/"> forgot password?</a> -->
            <div class="mt-5">
              <a @click="$emit('change-tab')">New User?</a>
            </div>
          </v-col>

          <v-col cols="7">
            <v-card flat>
              <v-card-text>
                <v-form v-model="validx" @keyup.native.enter="login">
                  <div class="user_login text-xs-left">
                    <v-text-field
                      v-model="email"
                      label="Email*"
                      :rules="emailRules"
                      required
                    ></v-text-field>
                    <v-text-field
                      :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                      :type="show1 ? 'text' : 'password'"
                      @click:append="show1 = !show1"
                      v-model="password"
                      :rules="passwordRules"
                      label="Password*"
                      required
                      class="mt-4"
                    ></v-text-field>
                  </div>
                  <v-btn
                    @click="login"
                    :disabled="!validx"
                    :loading="loading"
                    rounded
                    outlined
                    class=" white--text font-weight-bold"
                    color="primary"
                    >LOGIN</v-btn
                  >
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-card>
    </v-row>
    <!-- <v-snackbar
      v-model="snackbar"
      :timeout="1000"
      :value="true"
      absolute
      bottom
      color="deep-purple accent-4"
      elevation="24"
    >
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          v-bind="attrs"
          @click="snackbar = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar> -->
  </v-container>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    text: "Please, try again...",
    loading: false,
    validx: true,
    show1: false,
    email: null,
    emailRules: [
      (v) => !!v || "Email is required",
      (v) => (v && v.length >= 6) || "Email must be greater than 6 characters",
    ],
    password: null,
    passwordRules: [
      (v) => !!v || "Password is required",
      (v) => (v && v.length >= 1) || "Password must have 5+ characters",
      // v => /(?=.*[A-Z])/.test(v) || 'Must have one uppercase character',
      // v => /(?=.*\d)/.test(v) || 'Must have one number',
      // v => /([!@$%])/.test(v) || 'Must have one special character [!@#$%]'
    ],
  }),
  methods: {
    async login() {
      this.loading = true;
      var userData = {
        email: this.email,
        password: this.password,
      };
      var that = this;
      await axios
        .post(this.$store.getters.getBaseUrl + "/user/login", userData)
        .then(function(res) {
          that.loading = false;
          that.$store.state.user.email = that.email;
          that.$store
            .dispatch("setTokenForUser", {
              token: res.data,
            })
            .then(() => {
              that.$store.state.dialog2 = false;
              that.$store.state.loggedIn = true;
              that.$axios
                .get("http://localhost:3000/getuserdetails", {
                  params: { email: that.$store.state.user.email },
                })
                .then(function(res) {
                  console.log(res.data);
                  that.$store.state.user = res.data;
                  console.log(that.$store.state.user);
                })
                .catch(() => {
                  console.log("ERROR");
                });
            });
        })
        .catch(function(error) {
          that.loading = false;
          that.$store.commit("createSnackbar", {
            color: "red",
            content: error,
          });
        });
    },
    // login2() {
    //   this.loading = true;
    //   var userData = {
    //     subDomain: "srmist",
    //     email: this.email,
    //     password: this.password
    //   };
    //   var that = this;
    //   axios
    //     .post(this.$store.getters.getBaseUrl + "/auth/login", userData)
    //     .then(res => {
    //       if (res.data.success === false) {
    //         that.$store.commit("createSnackbar", {
    //           color: "red",
    //           content: res.data.reason
    //         });
    //         this.loading = false;
    //       } else {
    //         this.loading = false;
    //         this.$store.commit("setTokenForUser", {
    //           token: res.data.data.token
    //         }).then(res=>{
    //           console.log(res +'token already set')
    //           this.$router.push({ path: "/app/home" })
    //         })
    //       }
    //     })
    //     .catch(err => {
    //       console.error(err);
    //       that.$store.commit("networkError");
    //     });
    // }
  },
  computed: {
    valid: function() {
      return this.email != "" && this.password != ""; // eslint-disable-line
    },
  },
};
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="align-center py-0 my-0">
        <v-btn
          :ripple="false"
          link
          text
          class="px-0 back_button"
          to="/order/delivery"
        >
          <v-icon align="center" justify="center" class="mr-3 mt-0"
            >mdi-chevron-left</v-icon
          >
          <span
            class="text-h6 text-capitalize font-weight-bold text-decoration-underline"
            >Back</span
          >
        </v-btn>
      </v-col>
      <v-col cols="8">
        <v-card
          flat
          class="d-flex align-center pl-0 py-5 mb-7"
          to="/order/delivery/new"
        >
          <v-row class="align-center" align="center">
            <v-col class="d-flex align-center">
              <v-icon color="#E0CF5E" size="25" class="delivery_icon mr-5"
                >mdi-basket-outline</v-icon
              >
              <span class="text-subtitle-1 font-weight-bold"
                >{{ $store.state.address.type }} :
                {{ $store.state.address.house }},
                {{ $store.state.address.street }},
                {{ $store.state.address.city }},
                {{ $store.state.address.pincode }}</span
              >
            </v-col>
          </v-row>
        </v-card>
        <v-divider class="mt-5 "></v-divider>
      </v-col>
      <v-col cols="8">
        <menuItems />
      </v-col>
      <v-col>
        <v-card
          v-if="$store.state.loggedIn"
          class="pa-5 white--text mb-5"
          outlined
          tile
        >
          <div>
            <v-text-field
              v-model="name"
              solo
              flat
              class="ma-0 pa-0"
              hide-details
              label="Name"
              prepend-icon="mdi-face"
            ></v-text-field>
            <v-text-field
              v-model="$store.state.user.mobile"
              solo
              flat
              class="ma-0 pa-0"
              hide-details
              label="Mobile Number"
              prepend-icon="mdi-phone"
            ></v-text-field>
            <v-text-field
              v-model="$store.state.user.email"
              solo
              flat
              class="ma-0 pa-0"
              hide-details
              label="Email"
              prepend-icon="mdi-mail"
            ></v-text-field>
            <v-text-field
              v-model="$store.state.user.cardpay"
              solo
              flat
              class="ma-0 pa-0"
              hide-details
              label="Payment Method"
              prepend-icon="mdi-card"
            ></v-text-field>
            <v-checkbox
              v-model="$store.state.user.promotionreceive"
              class="ma-0 py-3"
              hide-details
              label="Receive promotions"
              required
            ></v-checkbox>
            <v-btn
              text
              color="blue-grey"
              class="pl-0 white--text"
              @click="loggingOut"
            >
              <v-icon class="mr-5">mdi-cloud-upload</v-icon>
              Logout
            </v-btn>
          </div>
        </v-card>
        <v-card v-else class="pa-5 white--text mb-5" outlined tile>
          <v-dialog
            v-model="$store.state.dialog2"
            fullscreen
            hide-overlay
            transition="dialog-bottom-transition"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                x-large
                block
                depressed
                :ripple="false"
                tile
                color="primary"
                v-bind="attrs"
                v-on="on"
              >
                LOGIN
              </v-btn>
            </template>
            <!-- class="d-flex flex-column align-center justify-center" -->
            <v-card>
              <v-toolbar flat color="primary" dark>
                <v-toolbar-title>User Login / SignUp</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn color="forth" text @click="$store.state.dialog2 = false"
                  >Cancle</v-btn
                >
                <template v-slot:extension>
                  <v-tabs
                    centered
                    dark
                    icons-and-text
                    fixed-tabs
                    v-model="activeTab"
                  >
                    <v-tab>
                      <v-icon left>mdi-lock</v-icon>
                      Login
                    </v-tab>
                    <v-tab>
                      <v-icon left>mdi-account</v-icon>
                      Sign Up
                    </v-tab>
                  </v-tabs>
                </template>
              </v-toolbar>
              <v-tabs-items v-model="activeTab">
                <v-tab-item>
                  <v-container class="mt-3">
                    <login v-on:change-tab="activeTab = 1" />
                  </v-container>
                </v-tab-item>
                <v-tab-item>
                  <v-container class="mt-3">
                    <signup />
                  </v-container>
                </v-tab-item>
              </v-tabs-items>
            </v-card>
          </v-dialog>
        </v-card>
        <cart />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import login from "../../../outer/login/index";
import signup from "../../../outer/register/index";
import cart from "./cart/index";
import menuItems from "./menu/index";
export default {
  components: {
    login,
    signup,
    cart,
    menuItems,
  },
  data: () => ({
    loggedIn: false,
    inset: false,
    menu: null,
    activeTab: null,
    total_price: 0,
  }),
  watch: {
    // $store.state.cart(){
    //   $store.state.cart =
    // },
    name() {
      setTimeout(() => {
        console.log("waiting");
      }, 5000).then((val) => {
        console.log(val);
      });
    },
  },
  methods: {
    mouseLeave: function() {
      alert("Mouse Leave");
    },
    loggingOut: function() {
      var that = this;
      that.$axios.get("http://localhost:3000/user/logout").then(function(res) {
        that.$store.dispatch("removeTokenForUser", {
          token: res.data,
        });
        that.$store.state.loggedIn = false;
      });
    },
  },
  computed: {
    // ...mapState(['$store.state.cart', '$store.state.group_by_category', '$store.state.address', 'user']),
    name: {
      get() {
        return this.username;
      },
      set(value) {
        this.$store.commit("updateUsername", value);
      },
    },
    configlist() {
      return this.info.filter((i) => i.col === "one");
    },
  },
  created() {
    console.log(window.localStorage.getItem("location"));
    this.$store.state.address = JSON.parse(
      window.localStorage.getItem("location")
    );
    if (!this.$store.state.address.street) {
      this.$router.push("/order");
    }

    // this.menu = this.$store.state.menu
  },
};
</script>
<style scoped>
.activeClass {
  color: yellow;
}
</style>

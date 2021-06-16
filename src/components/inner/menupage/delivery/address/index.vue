<template>
  <v-card>
    <v-form ref="form" v-model="valid">
      <v-card-title>
        <span class="headline">Enter address </span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="4">
              <v-text-field
                label="House No.*"
                v-model="address.house"
                :rules="rules"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="8">
              <v-text-field
                label="Street name"
                v-model="address.street"
                :rules="rules"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="City*"
                v-model="address.city"
                :rules="rules"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="State*"
                v-model="address.state"
                :rules="rules"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Pincode*"
                v-model="address.pincode"
                :rules="rules"
                required
              ></v-text-field>
            </v-col>
          </v-row>
        </v-container>
        <small>*indicates required field</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Close</v-btn>
        <v-btn color="blue darken-3" text :disabled="!valid" @click="save"
          >Save</v-btn
        >
      </v-card-actions>
    </v-form>
  </v-card>
</template>
<script>
// import axios from "axios"
export default {
  data: () => ({
    valid: true,
    address: {
      type: "Delivery",
      house: "",
      street: "",
      city: "",
      state: "",
      pincode: "",
    },
    rules: [(v) => !!v || "This field is required"],
  }),
  methods: {
    save() {
      this.$store.commit("set_address", this.address);
      window.localStorage.setItem("location", JSON.stringify(this.address));
      this.$router.push("/order/cart");
    },
    close() {
      this.$router.push("/order");
    },
  },
  computed: {},
};
</script>

<style scoped>
.back_button {
  background-color: white;
}
.back_button:hover {
  background-color: transparent !important;
  color: #e0cf5e;
}
</style>

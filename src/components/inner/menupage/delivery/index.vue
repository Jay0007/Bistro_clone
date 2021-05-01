<template>
  <v-container>
    <v-row>
      <v-col cols='12' class="align-center py-0 my-0">
        <v-btn :ripple="false" link text class="px-0 back_button" href="#/order">
          <v-icon align='center' justify='center' class="mr-3 mt-0">mdi-chevron-left</v-icon>
          <span class="text-h6 text-capitalize font-weight-bold text-decoration-underline">Back</span>
        </v-btn>
      </v-col>
      <v-col cols='8'>
        <v-card outlined class="delivery_card d-flex align-center py-1 mb-7" style="background-color:#F7F7F7">
          <v-row class="align-center" align='center'>
            <v-col cols='2' align='center' justify='center' class="px-0">
              <v-icon color="#E0CF5E" size='50' class="delivery_icon px-0">mdi-map-marker-radius</v-icon>
            </v-col>
            <v-col class="d-flex align-center justify-start px-0">
              <span style="color:#E0CF5E" class="text-h4">Delivery - </span><span class="text-h6 pl-3" style="color:#E0CF5E" > Deliver to</span>
            </v-col>
          </v-row>
        </v-card>
        <v-dialog v-model="dialog" persistent max-width="600px">
          <template v-slot:activator="{ on, attrs }">
            <v-card outlined class="d-flex align-center pa-5 mb-7" to="/order/delivery/new" v-bind="attrs" v-on="on">
              <v-row class="align-center" align='center'>
                <v-col class="d-flex align-center">
                  <v-icon size='25' class="delivery_icon mr-5">mdi-map-marker-radius-outline</v-icon>
                  <span class="text-subtitle-1 font-weight-regular"> Enter an address for delivery</span>
                </v-col>
              </v-row>
            </v-card>
          </template>
          <router-view/>
        </v-dialog>
        <v-divider class="mb-7"/>
        <v-card outlined class="delivery_card d-flex align-center py-1 mb-7" style="background-color:#F7F7F7">
          <v-row class="align-center" align='center'>
            <v-col cols='2' align='center' justify='center' class="px-0 mx-0">
              <v-icon color="#E0CF5E" size='50' class="delivery_icon px-0">mdi-shopping</v-icon>
            </v-col>
            <v-col class="d-flex align-center justify-start">
              <span class="text-h4" style="color:#E0CF5E">Pick Up</span>
            </v-col>
          </v-row>
        </v-card>
        <v-card outlined class="d-flex align-center pa-5 mb-7" style="background-color:#F7F7F7" @click="pickup">
          <v-row class="align-center" align='center'>
            <v-col class="d-flex align-center">
              <v-icon color="#E0CF5E" size='25' class="delivery_icon mr-5">mdi-shopping-outline</v-icon>
              <span class=" text-subtitle-1 font-weight-regular" style="color:#E0CF5E">Order for pick up</span>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols='4'>
        <v-card outlined class="pickup_card d-flex align-center">
          <v-row class="align-center">
            <v-col cols='4' align='center' justify='center'>
              <v-icon color="#E0CF5E" size='90'>mdi-map-marker-radius</v-icon>
            </v-col>
            <v-col>
              <div class="text-h4">Pick Up</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
// import axios from "axios"
export default {
  data:() => ({
    dialog: false,
  }),
  methods: {
    pickup(){
      this.$store.commit("pickup_address",{
        type : "Pickup",
        house : "118",
        street : "huntington court road",
        city : "thunder bay",
        state : "ontario",
        pincode : "P7C2B6"
      })
      this.$router.push('/order/cart')
    }
  },
  computed: {

  }
}
</script>

<style scoped>
.back_button{
  background-color:white;
}
.back_button:hover{
  background-color:transparent!important;
  color : #E0CF5E
}
</style>
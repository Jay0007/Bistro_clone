<template>
  <v-container>
    <v-row>
      <v-col cols='12' class="pb-0">
        <p class="text-h4" style="color: #E0CF5E">How do you want to order ?</p>
      </v-col>
      <v-col cols='12' class="align-center py-0 my-0">
        <v-btn :ripple="false" link text class="px-0 back_menu">
          <v-icon align='center' justify='center' class="mr-3 mt-0">mdi-chevron-left</v-icon>
          <span class="text-h6 text-capitalize font-weight-bold text-decoration-underline">Back To Menu</span>
        </v-btn>
      </v-col>
      <v-col cols='6'>
        <v-card outlined class="delivery_card d-flex align-center" to="/order/delivery">
          <v-row class="align-center" align='center'>
            <v-col cols='4' align='center' justify='center'>
              <v-icon color="#E0CF5E" size='90' class="delivery_icon">mdi-map-marker-radius</v-icon>
            </v-col>
            <v-col>
              <div class="text-h4">Delivery</div>
              <div>I want to order for delivery</div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
      <v-col cols='6'>
        <v-card outlined class="pickup_card d-flex align-center" @click="pickup">
          <v-row class="align-center">
            <v-col cols='4' align='center' justify='center'>
              <v-icon color="#E0CF5E" size='90'>mdi-map-marker-radius</v-icon>
            </v-col>
            <v-col>
              <div class="text-h4">Pick Up</div>
              <div>I want to pick up my order</div>
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
.back_menu:hover{
  background-color:transparent!important;
  color : #E0CF5E
}
.delivery_card{
  height:200%;
}
.pickup_card{
  height: 200%;
}
/* .delivery_card:hover{
  background-color: #E0CF5E;
  color: white;
}
.delivery_card:hover .delivery_icon{
  color: white
} */
</style>

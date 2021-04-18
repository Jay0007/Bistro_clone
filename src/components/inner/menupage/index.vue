<template>
  <v-container>
    <v-row>
      <v-col cols='12'>
        <p class="text-h4">How do you want to order ?</p>
      </v-col>
      <v-col cols='12' class="align-center">
        <v-btn flat text class="px-0">
        <v-icon align='center' justify='center' class="mr-3 mt-0">mdi-navigate-before</v-icon>
        <span class="text-h6">Back To Menu</span>
        </v-btn>
      </v-col>
      <v-col cols='6'>
        <v-row class="align-center">
          <v-col cols='4' align='center' justify='center'>
            <v-icon size='90'>mdi-map-marker-radius</v-icon>
          </v-col>
          <v-col>
            <div class="text-h4">Delivery</div>
            <div>I want to order for delivery</div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols='6'>
        <v-row class="align-center">
          <v-col cols='4' align='center' justify='center'>
            <v-icon size='90'>mdi-map-marker-radius</v-icon>
          </v-col>
          <v-col>
            <div class="text-h4">Pick Up</div>
            <div>I want to pick up my order</div>
          </v-col>
        </v-row>
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

  },
  computed: {

  }
}
</script>


<template>
  <v-card class="pa-0 white--text" outlined tile>
    <v-card-title class="headline primary px-5">
      Basket
      <v-spacer></v-spacer>
      CA${{ total_cart_price.toFixed(2) }}
    </v-card-title>
    <v-card-text v-if="$store.state.cart.length == 0">
      <v-card flat>
        <v-card-title>
          Your cart is empty
        </v-card-title>
      </v-card>
    </v-card-text>
    <v-card-text v-else>
      <v-list two-line>
        <template v-for="(item, j) in $store.state.cart">
          <v-list-item :key="j">
            <template>
              <v-list-item-content>
                <v-list-item-title
                  class="text-h6 mb-3 forth--text font-weight-bold"
                  v-text="item.item"
                ></v-list-item-title>
                <v-list-item-subtitle
                  v-for="i in item.configure.sides"
                  v-text="i.name"
                  :key="i.name"
                ></v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-list-item-action-text
                  class="text-h5 font-weight-bold forth--text"
                  v-text="'CA$' + item.total_price.toFixed(2)"
                ></v-list-item-action-text>
                <span>
                  <v-btn
                    outlined
                    icon
                    color="grey lighten-1"
                    @click="cart_decrease(item._id, j)"
                  >
                    -
                  </v-btn>
                  {{ item.count }}
                  <v-btn
                    outlined
                    icon
                    color="grey lighten-1"
                    @click="cart_increase(item._id, j)"
                  >
                    +
                  </v-btn>
                </span>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-divider :inset="inset" :key="'divider' + j"></v-divider>
          <!-- <v-divider v-if="j + 1 < types.length" :key="j"></v-divider> -->
        </template>
      </v-list>
    </v-card-text>
    <v-card-actions class="pa-5" v-if="$store.state.cart.length > 0">
      <v-btn x-large block depressed :ripple="false" tile color="primary"
        >Preorder</v-btn
      >
    </v-card-actions>
  </v-card>
</template>
<script>
// import axios from "axios"
export default {
  data: () => ({}),
  methods: {
    cart_increase: function(id, index) {
      console.log(id);
      this.$store.state.cart[index].count++;
      this.$store.state.cart[index].total_price =
        (this.$store.state.cart[index].price +
          this.$store.state.cart[index].sides_total_price) *
        this.$store.state.cart[index].count;
      for (const index1 in this.$store.state.group_by_category) {
        var a = this.$store.state.group_by_category[index1].find(
          (item) => item._id == id
        );
        if (a) {
          a.count++;
        }
      }
    },

    cart_decrease: function(id, index) {
      this.$store.state.cart[index].count--;
      this.$store.state.cart[index].total_price =
        (this.$store.state.cart[index].price +
          this.$store.state.cart[index].sides_total_price) *
        this.$store.state.cart[index].count;
      for (const index1 in this.$store.state.group_by_category) {
        var a = this.$store.state.group_by_category[index1].find(
          (item) => item._id == id
        );
        if (a) {
          a.count--;
          if (this.$store.state.cart[index].count == 0) {
            this.$store.state.cart.splice(index, 1);
          }
        }
      }
    },
  },
  computed: {
    total_cart_price: function() {
      return this.$store.state.cart.reduce(
        (prev, cur) => prev + cur.total_price,
        0
      );
    },
  },
};
</script>

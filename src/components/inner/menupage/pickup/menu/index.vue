<template>
  <v-container>
    <v-expansion-panels multiple flat light v-model="openedPanels">
      <v-expansion-panel
        v-for="(types, i) in Object.keys($store.state.group_by_category)"
        :key="i"
        class="pb-4"
      >
        <v-card class="pa-0 primary--text" outlined tile>
          <v-card-title class="pa-0">
            <v-expansion-panel-header class="text-h6 font-weight-regular">
              {{ types }}
              <template v-slot:actions>
                <v-icon color="primary">mdi-menu-down</v-icon>
              </template>
            </v-expansion-panel-header>
          </v-card-title>
        </v-card>
        <v-expansion-panel-content>
          <v-list two-line>
            <v-row>
              <template
                v-for="(item, j) in $store.state.group_by_category[types]"
              >
                <v-col cols="6" :key="j">
                  <v-list-item :class="{ primary: item.count > 0 }">
                    <template>
                      <v-list-item-content
                        @click="selecting(item)"
                        style="cursor: pointer"
                      >
                        <v-list-item-title
                          class="text-h6 mb-3 forth--text font-weight-bold"
                          v-text="item.item"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          v-text="item.description"
                        ></v-list-item-subtitle>
                      </v-list-item-content>
                      <v-list-item-action>
                        <v-list-item-action-text
                          class="text-h5 font-weight-bold forth--text"
                          v-text="'CA$' + item.price"
                        ></v-list-item-action-text>
                        <span v-if="item.count != 0">
                          <v-btn
                            small
                            outlined
                            icon
                            color="forth"
                            @click="item.count--, menu_decrease(item._id)"
                          >
                            -
                          </v-btn>
                          {{ item.count }}
                          <v-btn
                            small
                            outlined
                            icon
                            color="forth"
                            @click="item.count++, menu_increase(item._id)"
                          >
                            +
                          </v-btn>
                        </span>
                      </v-list-item-action>
                    </template>
                  </v-list-item>
                  <v-divider
                    v-if="j + 1 < types.length"
                    :key="'divider' + j"
                  ></v-divider>
                </v-col>
              </template>
            </v-row>
            <!-- </v-list-item-group> -->
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-dialog persistent v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title v-if="dialog_object != null">
          {{ dialog_object.item }}
        </v-card-title>
        <v-list v-if="dialog_object != null">
          <v-list-item-group v-model="config" multiple>
            <template>
              <v-list-item
                v-for="(item, i) in dialog_object.configure.sides"
                :key="`item-${i}`"
                :value="item.item"
                active-class="deep-purple--text text--accent-4"
              >
                <template v-slot:default="{ active }">
                  <v-list-item-content>
                    <v-list-item-title v-text="item.name"> </v-list-item-title>
                  </v-list-item-content>

                  <v-list-item-action>
                    <v-checkbox
                      :ripple="false"
                      :input-value="active"
                      color="deep-purple accent-4"
                    ></v-checkbox>
                  </v-list-item-action>
                </template>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
        <v-card-actions>
          <v-btn color="primary" text @click="closing_dialog">
            Close
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="adding_cart(dialog_object, config)"
          >
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
<script>
export default {
  data: () => ({
    openedPanels: [0, 1, 2],
    dialog: false,
    dialog_object: null,

    selected: [],
    config: [],
  }),
  methods: {
    selecting: function(item) {
      if (item.configure.sides.length != 0) {
        this.dialog_object = item;
        this.dialog = true;
      } else {
        item.count += 1;
        var flag = 0;
        if (this.$store.state.cart.length != 0) {
          for (let index = 0; index < this.$store.state.cart.length; index++) {
            if (item._id == this.$store.state.cart[index]._id) {
              this.$store.state.cart[index].count += 1;
              this.$store.state.cart[index].total_price =
                Number(this.$store.state.cart[index].count) *
                Number(this.$store.state.cart[index].price);
              flag = 1;
              break;
            }
          }
          if (flag == 0) {
            let temp = {
              _id: item._id,
              item: item.item,
              price: item.price,
              total_price: Number(item.price) * Number(item.count),
              count: 1,
              sides_total_price: 0,
              configure: {
                sides: [],
              },
            };
            this.$store.state.cart.push(temp);
          }
        } else {
          let temp = {
            _id: item._id,
            item: item.item,
            price: item.price,
            total_price: item.price * item.count,
            count: 1,
            sides_total_price: 0,
            configure: {
              sides: [],
            },
          };
          this.$store.state.cart.push(temp);
        }
      }
    },
    adding_cart: function(object, config) {
      config.sort();
      object.count += 1;
      var isObject = function(object) {
        return object != null && typeof object === "object";
      };
      var deepEqual = function(object1, object2) {
        console.log("Checking if equal", object2);
        var keys1 = Object.keys(object1);
        var keys2 = Object.keys(object2);
        const toRemove = [
          "category",
          "description",
          "price",
          "total_price",
          "count",
          "sides_total_price",
        ];
        keys1 = keys1.filter((el) => !toRemove.includes(el));
        keys2 = keys2.filter((el) => !toRemove.includes(el));
        if (keys1.length !== keys2.length) {
          console.log("Not equal1");
          return false;
        }

        for (const key of keys1) {
          console.log(key);
          const val1 = object1[key];
          const val2 = object2[key];
          const areObjects = isObject(val1) && isObject(val2);
          console.log("areObjects", val1, val2);
          if (
            (areObjects && !deepEqual(val1, val2)) ||
            (!areObjects && val1 !== val2)
          ) {
            console.log("Not equal2");
            return false;
          }
        }
        console.log("Equal");

        return true;
      };
      if (this.$store.state.cart.length == 0) {
        if (config.length == 0) {
          let temp = {
            _id: object._id,
            item: object.item,
            price: object.price,
            sides_total_price: 0,
            total_price: Number(object.price) * Number(object.count),
            count: 1,
            configure: {
              sides: [],
            },
          };
          this.$store.state.cart.push(temp);
        } else {
          let temp = {
            _id: object._id,
            item: object.item,
            price: object.price,
            sides_total_price: 0,
            total_price: object.price * object.count,
            count: 1,
            configure: {
              sides: [],
            },
          };
          for (let index = 0; index < config.length; index++) {
            temp.configure.sides.push(object.configure.sides[config[index]]);
            // temp.configure.sides[index].count = 1
            temp.sides_total_price += Number(temp.configure.sides[index].price);
          }
          temp.total_price = temp.count * (temp.price + temp.sides_total_price);
          this.$store.state.cart.push(temp);
        }
      } else {
        var flag = 0;
        if (config.length == 0) {
          for (let index = 0; index < this.$store.state.cart.length; index++) {
            if (this.$store.state.cart[index].configure.sides.length == 0) {
              if (object._id == this.$store.state.cart[index]._id) {
                this.$store.state.cart[index].count += 1;
                this.$store.state.cart[index].total_price =
                  Number(this.$store.state.cart[index].count) *
                  Number(this.$store.state.cart[index].price);
                flag = 1;
                break;
              }
            }
          }
          if (flag == 0) {
            let temp = {
              _id: object._id,
              item: object.item,
              price: object.price,
              sides_total_price: 0,
              total_price: Number(object.price),
              count: 1,
              configure: {
                sides: [],
              },
            };
            this.$store.state.cart.push(temp);
          }
        } else {
          let temp = {
            _id: object._id,
            item: object.item,
            price: object.price,
            sides_total_price: 0,
            total_price: 0,
            count: 1,
            configure: {
              sides: [],
            },
          };
          for (let index = 0; index < config.length; index++) {
            temp.configure.sides.push(object.configure.sides[config[index]]);
          }
          for (let index = 0; index < this.$store.state.cart.length; index++) {
            console.log("Checking");
            if (deepEqual(temp, this.$store.state.cart[index])) {
              console.log("EXIST");
              this.$store.state.cart[index].count += 1;
              for (let index = 0; index < config.length; index++) {
                temp.sides_total_price += Number(
                  temp.configure.sides[index].price
                );
              }
              this.$store.state.cart[index].total_price =
                Number(this.$store.state.cart[index].count) *
                (Number(this.$store.state.cart[index].price) +
                  temp.sides_total_price);
              flag = 1;
              break;
            }
          }
          if (flag == 0) {
            for (let index = 0; index < config.length; index++) {
              temp.sides_total_price += Number(
                temp.configure.sides[index].price
              );
            }
            temp.total_price =
              temp.count * (temp.price + temp.sides_total_price);
            this.$store.state.cart.push(temp);
          }

          console.log(temp);
        }
      }
      this.config = [];
      this.dialog = false;
    },
    menu_increase: function(id) {
      var index = this.$store.state.cart.map((e) => e._id).lastIndexOf(id);
      if (index == -1) {
        console.log();
      } else {
        this.$store.state.cart[index].count++;
      }
    },
    menu_decrease: function(id) {
      var index = this.$store.state.cart.map((e) => e._id).lastIndexOf(id);
      if (index == -1) {
        console.log();
      } else {
        this.$store.state.cart[index].count--;
        if (this.$store.state.cart[index].count == 0) {
          this.$store.state.cart.splice(index, 1);
        }
      }
    },
    closing_dialog: function() {
      this.config = [];
      this.dialog = false;
    },
  },
  computed: {},
  created() {
    if (this.$store.state.group_by_category == "") {
      this.$axios.get("http://localhost:3000/menu").then((response) => {
        this.menu = response.data;
        this.$store.state.group_by_category = groupBy(this.menu, "category");
      });
      var groupBy = function(xs, key) {
        return xs.reduce(function(rv, x) {
          (rv[x[key]] = rv[x[key]] || []).push(x);
          return rv;
        }, {});
      };
    }
  },
};
</script>
<style scoped>
.activeClass {
  color: yellow;
}
</style>

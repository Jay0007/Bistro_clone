import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    address : {
      type : "",
      house : "",
      street : "",
      city : "",
      state : "",
      pincode : ""
    },
    cart: [],
    menu: [
      {
        "_id": "1",
        "category": "SOUTH INDIAN SPECIAL",
        "item":"Plain Idly 1",
        "description": "steamed rice and lentil patties",
        "price": 8.99,
        "total_price": 0,
        "count": 0
      },
      {
        "_id": "2",
        "category": "SOUTH INDIAN SPECIAL",
        "item": "Plain Idly 2",
        "description": "steamed rice and lentil patties",
        "price": 9.99,
        "total_price": 0,
        "count": 0,
        "configure":
          {
            "sides":
              [
                { "name": "sambhar", "price": "0.99", "count": 0}
              ]
          }
      },
      {
        "_id": "3",
        "category": "SOUTH INDIAN SPECIAL",
        "item":"Plain Idly 3",
        "description":"steamed rice and lentil patties",
        "price": 11.99,
        "total_price": 0,
        "count": 0,
        "configure":
          {
            "sides":
              [
                { "name": "chutney", "price": "0.99", "count": 0},
                { "name": "sambhar", "price": "0.99", "count": 0}
              ]
          }
      },
      {
        "_id": "4",
        "category": "APPETIZERS",
        "item":"Plain Idly 4",
        "description":"steamed rice and lentil patties",
        "price": 9.49,
        "total_price": 0,
        "count": 0,
        "configure":
          {
            "sides":
              [
                { "name": "chutney", "price": "0.99", "count": 0},
                { "name": "sambhar", "price": "0.99", "count": 0}
              ]
          }
      },
      {
        "_id": "5",
        "category": "SOUTH INDIAN SPECIAL",
        "item":"Plain Idly 12",
        "description": "steamed rice and lentil patties",
        "price": 12.99,
        "total_price": 0,
        "count": 0,
      },
      {
        "_id": "6",
        "category": "SOUTH INDIAN SPECIAL",
        "item": "Plain Idly 3",
        "description": "steamed rice and lentil patties",
        "price": 10.49,
        "total_price": 0,
        "count": 0,
        "configure":
          {
            "sides":
              [
                { "name": "sambhar", "price": "0.99", "count": 0}
              ]
          }
      },
      {
        "_id": "7",
        "category": "SOUTH INDIAN SPECIAL",
        "item":"Plain Idly 2",
        "description":"steamed rice and lentil patties",
        "price": 5.99,
        "total_price": 0,
        "count": 0,
        "configure":
          {
            "sides":
              [
                { "name": "chutney", "price": "0.99", "count": 0},
                { "name": "sambhar", "price": "0.99", "count": 0}
              ]
          }
      },
      {
        "_id": "8",
        "category": "APPETIZERS",
        "item":"Plain Idly 3",
        "description":"steamed rice and lentil patties",
        "price": 7.49,
        "total_price": 0,
        "count": 0,
        "configure":
          {
            "sides":
              [
                { "name": "chutney", "price": "0.99", "count": 0},
                { "name": "sambhar", "price": "0.99", "count": 0}
              ]
          }
      },
    ]
  },
  mutations : {
    set_address(state, payload){
      state.address = payload
    },
    pickup_address(state, payload){
      state.address = payload
    }
  }
});

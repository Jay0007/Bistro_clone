<template>
  <v-container fluid class="px-0 py-0 fill-height">
    <v-sheet>
      <v-carousel
        height="100%"
        class="d-flex align-center justify-center"
        :show-arrows="false"
      >
        <v-carousel-item
          height="100%"
          class="align-self-center"
          v-for="(item, i) in items"
          :key="i"
          :src="item"
        >
          <v-container style="height:100%">
            <v-row
              wrap
              align="center"
              justify="center"
              class="d-flex flex-column fill-height"
            >
              <div>
                <router-link to="/">
                  <v-img
                    contain
                    src="https://flipdish.imgix.net/iTq1umXwFBF4xWqQKSTsLD56rpo.png?h=150&fm=png32"
                  />
                </router-link>
              </div>
              <div class="text-h2 mb-5 text-uppercase">
                <router-link
                  to="/"
                  style="text-decoration:none; text-shadow: white 5px 0 10px; color:white"
                  >Order Online</router-link
                >
              </div>
              <div class="display-1 mt-5">
                250 Red River Road, P7B 1A6, Thunder Bay
              </div>
            </v-row>
          </v-container>
        </v-carousel-item>
      </v-carousel>
    </v-sheet>
    <v-container class="px-0 mt-9">
      <v-sheet outlined label="HOME">
        <v-row justify="center" class="d-flex outline">
          <v-col cols="12" class="pb-0 d-flex justify-center">
            <v-img
              max-width="164px"
              src="https://www.indianbistrotb.com/Areas/AutoSites/elixircontent/elixirfull/images/timetable-decorator_light_gray.png"
            />
            <div
              class="mx-3 display-1 text-center align-self-center text--secondary"
            >
              OPENING HOURS
            </div>
            <v-img
              max-width="164px"
              src="https://www.indianbistrotb.com/Areas/AutoSites/elixircontent/elixirfull/images/timetable-decorator2_light_gray.png"
            />
          </v-col>
          <v-col class="align-self-center" cols="6">
            <div class="text-center text-h4 font-weight-black">
              Monday - Friday
            </div>
            <div class="text-center text-h4 font-weight-black text--secondary">
              4pm - 10:30pm
            </div>
          </v-col>
          <v-col class="align-self-center" cols="6">
            <div class="text-center text-h4 font-weight-black">
              Monday - Friday
            </div>
            <div class="text-center text-h4 font-weight-black text--secondary">
              4pm - 10:30pm
            </div>
          </v-col>
          <v-col cols="12">
            <v-divider :inset="inset"></v-divider>
          </v-col>
          <v-col cols="12" class="pb-0 d-flex justify-center">
            <v-img
              class="align-self-center"
              max-width="44px"
              max-height="14px"
              src="https://www.indianbistrotb.com/Areas/AutoSites/elixircontent/elixirfull/images/header_decorator_dark_gray.png"
            />
            <div
              class="mx-4 display-1 text-center align-self-center text--secondary"
            >
              ABOUT
            </div>
            <v-img
              class="align-self-center"
              max-width="44px"
              max-height="14px"
              src="https://www.indianbistrotb.com/Areas/AutoSites/elixircontent/elixirfull/images/header_decorator_dark_gray.png"
            />
          </v-col>
          <v-col class="align-self-center" cols="6">
            <div class="text-center text-subtitle-1 font-weight-medium">
              Krushi`s Indian Bistro Thunder Bay specializes in authentic Indian
              cuisines. Come over and knock yourself out on our mouth-watering
              varieties of cuisines and appetizers. Whether it is the lingering
              taste of our authentic curries or the finest of the tandooris or
              the world-famous Hyderabadi Dum Biryani.
            </div>
          </v-col>
          <v-col cols="6">
            <div>
              <v-img
                src="https://flipdish.imgix.net/e31rmcFr2zl8fUuky3aAf4VwFis.png?w=1080&h=720"
              />
            </div>
          </v-col>
          <v-col cols="6">
            <div>
              <v-img
                src="https://flipdish.imgix.net/zVxBbaYwF2MJjJ7v9r60kS12Q.jpg?w=1080&h=720"
              />
            </div>
          </v-col>
          <v-col class="align-self-center" cols="6">
            <div class="text-center text-subtitle-1 font-weight-medium">
              Krushi`s Indian Bistro Thunder Bay specializes in authentic Indian
              cuisines. Come over and knock yourself out on our mouth-watering
              varieties of cuisines and appetizers. Whether it is the lingering
              taste of our authentic curries or the finest of the tandooris or
              the world-famous Hyderabadi Dum Biryani.
            </div>
          </v-col>
        </v-row>
      </v-sheet>
    </v-container>
  </v-container>
</template>
<script>
// import axios from "axios"
export default {
  data: () => ({
    inset: false,
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
      },
    ],
  }),
  methods: {},
  computed: {},
};
</script>

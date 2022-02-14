<template>
  <v-app>
    <v-content>
      <v-card
        flat
      >
        <v-img
          class="white--text align-top"
          max-height="400px"
          :src="require('./assets/banner.jpg')"
        >
          <v-app-bar
            flat
            style="padding: 50px"
            color="rgba(0, 0, 0, 0)"
          >
            <v-toolbar-title>
              <v-btn
                :to="'Home'"
                plain
              >1
                <h2>Wayward Shades</h2>
              </v-btn>
            </v-toolbar-title>
            <v-row v-show="!$vuetify.breakpoint.mobile">
              <v-spacer />
              <v-btn-toggle
                group
                background-color="rgba(0, 0, 0, 0)"
              >
                <v-btn
                  :to="'Shop'"
                  plain
                >
                  Shop
                </v-btn>

                <v-btn plain>
                  About
                </v-btn>

                <v-btn plain>
                  Contact
                </v-btn>

                <v-btn
                  icon
                  plain
                >
                  <v-icon>mdi-cart-outline</v-icon>
                </v-btn>

                <v-btn
                  icon
                  plain
                >
                  <v-icon>mdi-share-variant</v-icon>
                </v-btn>
              </v-btn-toggle>
            </v-row>
          </v-app-bar>
        </v-img>
        <router-view />
      </v-card>
    </v-content>
    <v-bottom-navigation
      v-show="$vuetify.breakpoint.mobile"
      app
      hide-on-scroll
    >
      <v-btn :to="'Shop'">
        <span>Shop</span>
        <v-icon>mdi-shopping</v-icon>
      </v-btn>

      <v-btn>
        <span>About</span>
        <v-icon>mdi-information</v-icon>
      </v-btn>

      <v-btn>
        <span>Contact</span>
        <v-icon>mdi-email-open</v-icon>
      </v-btn>

      <v-btn icon>
        <span>Cart</span>
        <v-icon>mdi-cart-outline</v-icon>
      </v-btn>

      <v-btn icon>
        <span>Share</span>
        <v-icon>mdi-share-variant</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
  import HelloWorld from './components/HelloWorld'
  import Shop from './components/Shop'

  export default {
    name: 'App',
    components: {
      HelloWorld,
      Shop,
    },
    data () {
      return {
        //
      }
    },
  }

</script>

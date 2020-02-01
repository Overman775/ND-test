<template>
  <f7-app :params="f7params" :theme-dark="$store.state.settings.darkMode">
    <!-- Left panel with cover effect when hidden -->
    <f7-panel left cover :visible-breakpoint="960">
      <f7-view>
        <f7-page>
          <f7-navbar title="Настройки"></f7-navbar>
          <f7-list>
            <f7-list-item title="Темная тема">
              <f7-toggle slot="after" @toggle:change="changeTheme" :checked="$store.state.settings.darkMode"></f7-toggle>
            </f7-list-item>
          </f7-list>
        </f7-page>
      </f7-view>
    </f7-panel>

    <!-- Your main view, should have "view-main" class -->
    <f7-view main class="safe-areas" url="/"></f7-view>
  </f7-app>
</template>
<script>
import routes from "../js/routes.js";

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        name: "ND-test", // App name
        theme: "auto", // Automatic theme detection
        // App routes
        routes: routes,
        'theme-dark': true,
        view: {
          masterDetailBreakpoint: 800
        }
      },
    };
  },
  methods: {
    changeTheme(check) {
      console.log("TCL: changeTheme -> e", check)
      this.$store.commit('SET_SETTINGS', {prop: 'darkMode', val: check})      
    }
  },
  mounted() {
    this.$f7ready(f7 => {
      // Call F7 APIs here
    });
  }
};
</script>
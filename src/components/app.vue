<template>
  <f7-app :params="f7params">
    <!-- Left panel with cover effect when hidden -->
    <f7-panel left cover theme-dark :visible-breakpoint="960">
      <f7-view>
        <f7-page>
          <f7-navbar title="Left Panel"></f7-navbar>
          <f7-block-title>Left View Navigation</f7-block-title>
          <f7-list>
            <f7-list-item link="/left-page-1/" title="Left Page 1"></f7-list-item>
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
        view:{
          masterDetailBreakpoint: 800,
        }
      },
    };
  },
  methods: {
  },
  mounted() {
    this.$f7ready(f7 => {
      // Call F7 APIs here
    });
  }
};
</script>
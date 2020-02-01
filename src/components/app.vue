<template>
  <f7-app :params="f7params" :theme-dark="$store.state.settings.darkMode" :style="mainStyle">
    <!-- Left panel with cover effect when hidden -->
    <f7-panel left cover :visible-breakpoint="960">
      <f7-view>
        <f7-page>
          <f7-navbar title="Настройки"></f7-navbar>
          <f7-list>
            <f7-list-item title="Темная тема">
              <f7-toggle
                slot="after"
                @toggle:change="changeTheme"
                :checked="$store.state.settings.darkMode"
              ></f7-toggle>
            </f7-list-item>
            <f7-list-input
              type="colorpicker"
              label="Тема"
              inline-label
              placeholder="e.g. #ff0000"
              readonly
              :value="{hex: $store.state.settings.themeColor}"
              :color-picker-params="{targetEl: '#nd-color-theme-picker'}"
              @colorpicker:change="value => setColorTheme(value.hex)"
            >
              <div slot="inner-end" id="nd-color-theme-picker"></div>
            </f7-list-input>
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
import ColorUtils from "../mixins/color-utils.vue";

export default {
  data() {
    return {
      // Framework7 Parameters
      f7params: {
        name: "ND-test", // App name
        theme: "auto", // Automatic theme detection
        // App routes
        routes: routes,
        "theme-dark": true,
        view: {
          masterDetailBreakpoint: 800
        }
      }
    };
  },
  mixins: [ColorUtils],
  methods: {
    changeTheme(check) {
      console.log("TCL: changeTheme -> e", check);
      this.$store.commit("SET_SETTINGS", { prop: "darkMode", val: check });
    },
    setColorTheme(color) {
      if (this.$store.state.settings.themeColor === color) return;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.$store.commit("SET_SETTINGS", { prop: "themeColor", val: color });
      }, 300);
    }
  },
  computed: {
    mainStyle() {
      return {
        "--f7-theme-color": this.$store.state.settings.themeColor,
        "--f7-theme-color-rgb": this.colorHexToRgb(
          this.$store.state.settings.themeColor
        )
      };
    }
  },
  mounted() {
    this.$f7ready(f7 => {
      // Call F7 APIs here
      console.log(
        "TCL: mainStyle -> colorThemeProperties",
        this.$f7.utils.colorThemeCSSProperties
      );
    });
  }
};
</script>

<style>
#nd-color-theme-picker {
  width: 28px;
  height: 28px;
  border-radius: 4px;
  background: var(--f7-theme-color);
  flex-shrink: 0;
  margin-left: 16px;
}
</style>
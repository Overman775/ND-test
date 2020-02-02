<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-f7="gear_alt" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title>
        <img src="static/logo.png" />
        ND-test
      </f7-nav-title>
    </f7-navbar>
    <!-- Page content-->
    <images-button @nextInteration="nextInteration">Выбрать изображение</images-button>
    <f7-list media-list>
      <f7-list-item
        v-for="(item, index) in $store.getters.IMAGES_LIST"
        :key="'item'+index"
        :title="item.caption"
        @click="openImagePrewiew(index)"
        :subtitle="item.type"
      >
        <div slot="media" :style="{backgroundImage: 'url('+item.thumbnail+')'}" :class="['nd-thumbnail-item', $store.state.settings.thumbnailSize]">          
        </div>
      </f7-list-item>
    </f7-list>
    <f7-photo-browser
      :photos="$store.getters.IMAGES_LIST"
      type="page"
      ref="popupImagePrewiew"
      :theme="theme"
    ></f7-photo-browser>
  </f7-page>
</template>

<script>
import ImagesButton from "../components/images-button.vue";

export default {
  name: "HomePage",
  components: {
    ImagesButton
  },
  methods: {
    nextInteration() {
      this.file_interation++;
    },
    openImagePrewiew(index) {
      this.$refs.popupImagePrewiew.open();
    }
  },
  computed: {
    theme() {
      if (this.$store.state.settings.darkMode) return "dark";
      else return "light";
    }
  },
  data() {
    return {
      file_interation: 0
    };
  }
};
</script>

<style lang="sass">
  .nd-thumbnail-item{
    width: 120px;
    height: 120px;
    display: block;
    border: 1px solid var(--f7-theme-color);
    background-position: center center;
    background-repeat: no-repeat;
    &.conatain{
      background-size: conatain;
    }
    &.cover-vertical{
      background-size: auto 100% ;
    }
    &.cover-horizontal{
      background-size: 100% auto;
    } 
  }
</style>
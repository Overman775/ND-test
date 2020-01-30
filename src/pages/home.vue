<template>
  <f7-page name="home">
    <!-- Top Navbar -->
    <f7-navbar :sliding="false">
      <f7-nav-left>
        <f7-link icon-ios="f7:menu" icon-aurora="f7:menu" icon-md="material:menu" panel-open="left"></f7-link>
      </f7-nav-left>
      <f7-nav-title sliding>ND-test</f7-nav-title>
    </f7-navbar>
    <!-- Page content-->
    <images-button>Выбрать изображение</images-button>
    <f7-list media-list>
      <f7-list-item
        v-for="(item, index) in $store.getters.IMAGES_LIST"
        :key="'item'+index"
        :title="item.name"
        :link="'/image/'+index"
        :subtitle="item.type">
        <img slot="media" :src="item.thumbnail" width="120" />
      </f7-list-item>
    </f7-list>
  </f7-page>
</template>

<script>
import ImagesButton from "../components/images-button.vue";
export default {
  name: 'HomePage',
  components:{
    ImagesButton
  }
}
</script>
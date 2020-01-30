<template>
  <f7-page name="Image">
    <f7-navbar>
      <f7-nav-left>
        <f7-link icon-f7="chevron_left" back></f7-link>
      </f7-nav-left>
      <f7-nav-title>{{image.name}}</f7-nav-title>
    </f7-navbar>
  </f7-page>
</template>
<script>
export default {
    name: "ImageDetail",
    created(){
        this.image = this.$store.getters.IMAGE(this.$f7route.params.id);
    },
    data(){
        return{
            image: null
        }
    }
}
</script>

<style>

</style>
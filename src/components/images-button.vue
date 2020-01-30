<template>
  <div>
    <f7-button fill class="nd-get-image-button" @click="getImageClick">
      <slot></slot>
    </f7-button>
    <input
      type="file"
      :multiple="multiple"
      @change="onFileChange"
      accept="accept"
      v-show="false"
      ref="inputFile"
    />
  </div>
</template>

<script>
import ImageResize from "../mixins/resize-image.vue";

export default {
  name: "GetImages",
  mixins: [ImageResize],
  props: {
    multiple: {
      type: Boolean,
      default: true
    },
    accept: {
      type: String,
      default: "image/*"
    }
  },
  methods: {
    getImageClick() {
      this.$refs.inputFile.click();
    },
    onFileChange(e) {
      const files = e.target.files;
      if (!files.length) return;

      for (let i = 0; i < files.length; i += 1) {
        const file = files[i];

        const reader = new FileReader();
        reader.onload = () => {
          const file_obj = {
            name: file.name,
            type: file.type,
            data: reader.result
          };
          this.resizeImage({data: reader.result, type: file.type}, 120, 120).then(data => {
            file_obj.thumbnail = data;
            this.$store.commit("ADD_IMAGE", file_obj);
          });
        };
        reader.onerror = error => {
          console.error("Error load image");
        };
        reader.readAsArrayBuffer(file);
      }
    }
  }
};
</script>

<style lang="sass">
.nd-get-image-button{
  width: fit-content;
  margin: 16px;
}
</style>
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
      //Clean image state
      this.$emit("nextInteration");
      this.resetFiles();
      const urlCreator = window.URL || window.webkitURL;

      for (let i = 0; i < files.length; i += 1) {
        const file = files[i];

        const reader = new FileReader();
        reader.onload = () => {
          const blob_url = urlCreator.createObjectURL(
            new Blob([reader.result], {
              type: file.type
            })
          );
          const file_obj = {
            name: file.name,
            type: file.type,
            url: blob_url
          };
          this.resizeImage(blob_url, 120, 120).then(data => {
            file_obj.thumbnail = data;
            this.$store.commit("ADD_IMAGE", file_obj);
          });
        };
        reader.onerror = error => {
          console.error("Error load image");
        };
        reader.readAsArrayBuffer(file);
      }
    },
    resetFiles() {
      const urlCreator = window.URL || window.webkitURL;
      //delete old blob images
      this.$store.getters.IMAGES_LIST.forEach(e => {
        urlCreator.revokeObjectURL(e.url);
      });
      this.$store.commit("RESET_IMAGES_LIST");
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
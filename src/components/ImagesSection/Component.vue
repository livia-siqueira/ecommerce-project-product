<template>
  <div class="containet__product">
    <div class="container__product-image">
      <img src="../../assets/image-product-1.jpg" v-if="imageActive == 1" role="link" />
      <img
        src="../../assets/image-product-2.jpg"
        v-else-if="imageActive == 2"
        role="link"
        @click="openModal"
      />
      <img
        src="../../assets/image-product-3.jpg"
        v-else-if="imageActive === 3"
        role="link"
        @click="openModal"

      />
      <img
        src="../../assets/image-product-4.jpg"
        v-else-if="imageActive === 4"
        role="link"
        @click="openModal"
      />
    </div>

    <div class="container__product-images">
      <img
        :class="imageActive === 1 && 'active'"
        src="../../assets/image-product-1.jpg"
        role="link"
        @click="changeImageActive(1)"
      />
      <img
        :class="imageActive === 2 && 'active'"
        src="../../assets/image-product-2.jpg"
        role="link"
        @click="changeImageActive(2)"
      />
      <img
        :class="imageActive === 3 && 'active'"
        src="../../assets/image-product-3.jpg"
        role="link"
        @click="changeImageActive(3)"
      />
      <img
        :class="imageActive === 4 && 'active'"
        src="../../assets/image-product-4.jpg"
        role="link"
        @click="changeImageActive(4)"
      />
    </div>
  </div>
</template>
  
  
  <script>
  import { store } from '../../store';
export default {
  data() {
    return {
      imageActive: 1,
      store
    };
  },
  computed: {
    generateImages() {
      const images = [
        { src: "../../assets/image-product-1.jpg", key: 1 },
        { src: "../../assets/image-product-2.jpg", key: 2 },
        { src: "../../assets/image-product-3.jpg", key: 3 },
        { src: "../../assets/image-product-4.jpg", key: 4 },
      ];

      console.log(images);

      return images;
    },
  },
  methods: {
    changeImageActive(imagenumber) {
      this.imageActive = imagenumber;
    },
    openModal(){
      store.changeStateModal()
    }
  },
};
</script>
  
  <style lang="scss" scoped>
@import "./style.scss";
</style>
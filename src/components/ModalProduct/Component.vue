<template>
  <div class="modal__container" v-if="store.modalActive">
    <button class="modal__container__close" @click="closeModal">
      <img
        class="modal__container__close-icon"
        src="../../assets/icon-close.svg"
        alt="close"
      />
    </button>
    <div class="modal__container__product-image">
      <button
        class="modal__container-control left"
        @click="alterImagesPrevious"
      >
        <img src="../../assets/icon-previous.svg" />
      </button>
      <img
        src="../../assets/image-product-1.jpg"
        v-if="imageActive == 1"
        role="link"
      />
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
      <button class="modal__container-control rigth" @click="alterImagesNext">
        <img src="../../assets/icon-next.svg" />
      </button>
    </div>
    <div class="modal__container__product-images">
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
import { store } from "../../store";
export default {
  data() {
    return {
      imageActive: 1,
      store,
    };
  },
  methods: {
    changeImageActive(imagenumber) {
      this.imageActive = imagenumber;
    },
    closeModal() {
      store.changeStateModal();
    },
    alterImagesNext() {
      if (this.imageActive >= 4) {
        this.imageActive = 1;
      } else {
        this.imageActive++;
      }
    },
    alterImagesPrevious() {
      if (this.imageActive === 1) {
        this.imageActive = 4;
      } else {
        this.imageActive--;
      }
    },
  },
};
</script>

<style lang="scss">
@import "./style.scss";
</style>
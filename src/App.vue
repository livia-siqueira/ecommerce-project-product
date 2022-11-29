<script>
import Header from "./components/Header/Component.vue";
import ImagesSection from "./components/ImagesSection/Component.vue";
import ProductDescription from "./components/ProductDescription/Component.vue"
import Modal from "./components/ModalProduct/Component.vue"

export default {
  components: {
    Header,
    ImagesSection,
    ProductDescription,
    Modal
  },
};
</script>

<template>
  <div class="container">
    <Header />
    <main>
      <ImagesSection />
      <ProductDescription />
      <Modal />
    </main>
  </div>
</template>

<style lang="scss" scoped>
@import "./style/global.scss";
@import "./style/vars.scss";

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    display: flex;
    width: 80%;
    margin-top: 80px;
  }
}
</style>

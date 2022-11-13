<template>
    <div class="product__description">
        <h6 class="product__description-title">SNEAKER COMPANY</h6>
        <h2 class="product__description-subtitle">
          Fall Limited Edition Sneakers
        </h2>
        <p class="product__description-text">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer s ole, they'll withstand everything
          the weather can offer.
        </p>
        <div class="product__description-values">
          <span class="product__description-values-price"
            >$125.00 <span class="discounts">50%</span></span
          >
          <span class="product__description-values-price old"
            >$250.00</span
          >
        </div>
        <div class="product__actions">
          <div class="product__actions-counter">
            <img src="../../assets/icon-minus.svg" />
            <span>0</span>
            <img src="../../assets/icon-plus.svg" />
          </div>
          <button class="product__actions-button">
            <span><img src="../../assets/icon-cart.svg" /></span>
            <span>Add to cart</span>
          </button>
        </div>
      </div>
</template>


<script>
</script>

<style lang="scss" scoped>
@import "./style.scss";
</style>
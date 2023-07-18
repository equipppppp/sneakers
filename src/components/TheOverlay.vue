<template>
  <div class="back">
    <div class="overlay" @click="closeBasket"></div>
    <TheBasket />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import TheBasket from "./TheBasket.vue";
export default {
  components: {
    TheBasket,
  },
  methods: {
    ...mapMutations({
      toggleBasket: "basket/toggleBasket",
      setIsOrderCompleteToFalse: "orders/setIsOrderCompleteToFalse",
    }),
    closeBasket() {
      this.toggleBasket();
      this.setIsOrderCompleteToFalse();
    },
  },
};
</script>

<style lang="scss" scoped>
.back {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 400px;
  z-index: 3;
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
  .overlay {
    background: rgba(0, 0, 0, 0.5);
    @media (max-width: 576px) {
      display: none;
    }
  }
}
</style>

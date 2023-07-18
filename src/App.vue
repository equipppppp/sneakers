<template>
  <div class="wrapper">
    <TheHeader />
    <div class="devider"></div>
    <router-view> </router-view>
    <TheOverlay v-if="isBasketOpened" />
  </div>
</template>

<script>
import TheOverlay from "@/components/TheOverlay.vue";
import { mapState, mapActions } from "vuex";
import TheHeader from "@/components/TheHeader.vue";

export default {
  components: { TheOverlay, TheHeader },
  computed: {
    ...mapState({
      isBasketOpened: (state) => state.basket.isBasketOpened,
    }),
  },
  methods: {
    ...mapActions({
      fetchSneakers: "sneakers/fetchSneakers",
    }),
  },
  mounted() {
    this.fetchSneakers();
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  background-color: #e7f6ff;
  padding: 50px;
  @media (max-width: 991px) {
    padding: 30px;
  }
  @media (max-width: 575px) {
    padding: 15px;
  }
}
a {
  color: currentColor;
  text-decoration: none;
}
.wrapper {
  width: 100%;
  min-height: calc(100vh - 100px);
  max-width: 1140px;
  margin: 0 auto;
  padding: 45px 60px;
  background: #ffffff;
  box-shadow: 0px 10px 20px rgb(0 0 0 / 4%);
  border-radius: 20px;
  @media (max-width: 991px) {
    padding: 35px;
    min-height: calc(100vh - 60px);
  }
  @media (max-width: 767px) {
    padding: 25px;
  }
  @media (max-width: 575px) {
    min-height: calc(100vh - 30px);
    padding: 15px;
  }
}
.devider {
  height: 1px;
  border-bottom: 1px solid rgb(199, 194, 194);
  margin-top: 45px;
  margin-bottom: 30px;
}
</style>

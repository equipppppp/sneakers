<template>
  <div class="sneakers">
    <SneakerCard
      v-for="sneaker in items"
      :key="sneaker.id"
      :sneaker="sneaker"
      :inOrders="inOrders"
    />
  </div>
</template>

<script>
import SneakerCard from "./SneakerCard.vue";

export default {
  components: {
    SneakerCard,
  },
  props: {
    items: {
      type: Array,
      required: true,
    },

    inOrders: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.sneakers {
  display: flex;
  flex-wrap: wrap;
  gap: 40px 60px;
  margin-top: 40px;
  @media (max-width: 991px) {
    gap: 25px;
  }
  @media (max-width: 575px) {
    justify-content: center;
  }
}
</style>

<template>
  <div class="sneakersInBasket">
    <SneakerInBasket
      v-for="sneaker in sneakersInBasket"
      :key="sneaker.id"
      :sneaker="sneaker"
    />
  </div>
  <div class="basket__price">
    <span>Итого:</span>
    <div class="basket__dashed"></div>
    <b> {{ totalPrice }} руб.</b>
  </div>
  <TheButton @click="confirmOrder(totalPrice, sneakersInBasket)"
    >Оформить заказ</TheButton
  >
</template>

<script>
import { mapState, mapGetters, mapMutations } from "vuex";
import SneakerInBasket from "./SneakerInBasket.vue";

export default {
  components: {
    SneakerInBasket,
  },
  computed: {
    ...mapState({
      sneakersInBasket: (state) => state.basket.sneakersInBasket,
    }),
    ...mapGetters({
      totalPrice: "basket/getTotalPrice",
    }),
  },
  methods: {
    ...mapMutations({
      makeOrder: "orders/makeOrder",
      clearBasket: "basket/clearBasket",
    }),
    confirmOrder(totalPrice, order) {
      const date = new Date();
      const year = date.getFullYear();
      const month = date.getMonth() + 1;
      const day = date.getDate();
      function convertDate(day, month, year) {
        day = day < 10 ? `0${day}` : day;
        month = month < 10 ? `0${month}` : month;
        return `${day}.${month}.${year}`;
      }
      const orderDate = convertDate(day, month, year);
      this.makeOrder({ orderDate, totalPrice, order });
      this.clearBasket();
    },
  },
};
</script>

<style lang="scss" scoped>
.sneakersInBasket {
  display: flex;
  flex-direction: column;
  gap: 15px;
  flex-grow: 1;

  margin-top: 20px;

  overflow-y: auto;
}
</style>

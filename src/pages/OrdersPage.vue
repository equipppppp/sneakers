<template>
  <h2>Мои заказы</h2>
  <template v-if="orders.length > 0">
    <div class="clear" @click="toggleAcceptionVisibility">
      Очистить историю заказов
    </div>
    <div
      v-for="(order, index) in orders"
      :key="index + order.orderDate"
      class="order"
    >
      <div>
        Заказ №{{ index + 1 }}. Дата заказа - {{ order.orderDate }}. Сумма
        заказа -
        {{ order.totalPrice }}
      </div>
      <TheSneakers :items="order.order" :count="4" :inOrders="true" />
    </div>
    <ClearOrdersAcception />
  </template>
  <EmptyOrders v-else />
</template>

<script>
import { mapState, mapMutations } from "vuex";
import TheSneakers from "@/components/TheSneakers.vue";
import EmptyOrders from "@/components/EmptyOrders.vue";
import ClearOrdersAcception from "@/components/ClearOrdersAcception.vue";

export default {
  components: {
    TheSneakers,
    ClearOrdersAcception,
    EmptyOrders,
  },
  computed: {
    ...mapState({
      orders: (state) => state.orders.orders,
    }),
  },
  methods: {
    ...mapMutations({
      toggleAcceptionVisibility: "orders/toggleAcceptionVisibility",
    }),
  },
};
</script>

<style lang="scss" scoped>
.order {
  margin-top: 20px;
}
.clear {
  color: grey;
  text-align: right;
  cursor: pointer;
  &:hover {
    color: black;
  }
}
</style>

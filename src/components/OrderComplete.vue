<template>
  <InfoBlock
    header="Заказ оформлен!"
    description="Ваш заказ успешно оформлен и скоро будет передан курьеру для доставки"
    buttonText="Перейти к заказам"
    :url="imageURL"
    :onClick="closeAndPushOrders"
  />
</template>

<script>
import { mapMutations } from "vuex";
import { complete } from "@/assets";
export default {
  data() {
    return {
      imageURL: complete,
    };
  },
  methods: {
    ...mapMutations({
      toggleBasket: "basket/toggleBasket",
      setIsOrderCompleteToFalse: "orders/setIsOrderCompleteToFalse",
    }),
    closeAndPushOrders() {
      this.toggleBasket();
      this.setIsOrderCompleteToFalse();
      this.$router.push("/orders");
    },
  },
};
</script>

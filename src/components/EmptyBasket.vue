<template>
  <InfoBlock
    header="Корзина пуста"
    description="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
    buttonText="Перейти к каталогу"
    :url="imageURL"
    :onClick="closeAndPushHome"
  />
</template>

<script>
import { empty } from "@/assets";
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      imageURL: empty,
    };
  },

  methods: {
    ...mapMutations({
      toggleBasket: "basket/toggleBasket",
    }),
    closeAndPushHome() {
      this.toggleBasket();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped></style>

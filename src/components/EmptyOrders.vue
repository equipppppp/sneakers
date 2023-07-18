<template>
  <InfoBlock
    header="История заказов пуста"
    description="Вы еще не совершали покупок"
    :url="imageURL"
    :onClick="goHome"
  />
</template>

<script>
import { sad } from "@/assets";
export default {
  data() {
    return {
      imageURL: sad,
    };
  },
  methods: {
    goHome() {
      this.$router.push("/");
    },
  },
};
</script>

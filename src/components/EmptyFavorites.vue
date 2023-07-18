<template>
  <InfoBlock
    header="Избранных товаров нет"
    description="Вы ничего не добавляли в избранное"
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

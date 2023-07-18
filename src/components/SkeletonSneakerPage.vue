<template>
  <div class="container">
    <div class="container__img">
      <AnimatedPlaceholder width="100%" height="300px" />
    </div>
    <div class="container__info">
      <div class="centered">
        <AnimatedPlaceholder width="50%" height="30px" />
      </div>
      <AnimatedPlaceholder width="100%" height="100px" />
    </div>
  </div>
</template>

<script>
import AnimatedPlaceholder from "./AnimatedPlaceholder.vue";

export default {
  components: {
    AnimatedPlaceholder,
  },
};
</script>
<style scoped>
.centered {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
</style>

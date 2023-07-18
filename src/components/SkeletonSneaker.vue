<template>
  <div class="sneakerCard">
    <div class="sneakerCard__image">
      <AnimatedPlaceholder width="100%" height="100%" />
    </div>

    <div class="sneakerCard__name">
      <AnimatedPlaceholder width="100%" height="35px" />
    </div>

    <div class="sneakerCard__price">
      <AnimatedPlaceholder width="40%" height="35px" />
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

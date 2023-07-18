<template>
  <h2>Избранное</h2>
  <template v-if="favoriteSneakers.length > 0">
    <TheSneakers :items="favoriteSneakers" :count="4" />
  </template>

  <EmptyFavorites v-else />
</template>

<script>
import TheSneakers from "@/components/TheSneakers.vue";

import EmptyFavorites from "@/components/EmptyFavorites.vue";

import { mapState } from "vuex";
export default {
  components: {
    EmptyFavorites,
    TheSneakers,
  },
  computed: {
    ...mapState({
      favoriteSneakers: (state) => state.basket.favoriteSneakers,
      isLoading: (state) => state.sneakers.isLoading,
    }),
  },
};
</script>

<style lang="scss" scoped></style>

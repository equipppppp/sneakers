<template>
  <TheSearch />
  <div class="sneakers" v-if="isLoading">
    <SkeletonSneaker v-for="id in 8" :key="id" />
  </div>
  <TheSneakers v-else :items="filteredSneakers" />
</template>

<script>
import TheSearch from "@/components/TheSearch.vue";
import TheSneakers from "@/components/TheSneakers.vue";
import SkeletonSneaker from "@/components/SkeletonSneaker.vue";
import { mapState } from "vuex";

export default {
  components: {
    TheSearch,
    TheSneakers,
    SkeletonSneaker,
  },
  computed: {
    ...mapState({
      sneakers: (state) => state.sneakers.sneakers,
      searchValue: (state) => state.search.searchValue,
      isLoading: (state) => state.sneakers.isLoading,
    }),
    filteredSneakers() {
      return this.sneakers.filter((sneaker) =>
        sneaker.title
          .toLowerCase()
          .replace(/\s/g, "")
          .includes(this.searchValue.toLowerCase().replace(/\s/g, ""))
      );
    },
  },
};
</script>

<style lang="scss" scoped></style>

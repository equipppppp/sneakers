<template>
  <SkeletonSneakerPage v-if="isLoading" />

  <div v-else class="container">
    <div class="container__img">
      <img :src="sneaker.imageURL" alt="krosovok" />
    </div>
    <div class="container__info">
      <h2>{{ sneaker.title }}</h2>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga ullam ab
        delectus cupiditate esse alias? Eos minima vel dolor, voluptates error
        eveniet quia aut optio atque dolorum, porro, ad quaerat illum sed est.
        Rem fugiat soluta, culpa saepe fuga officiis. Velit, temporibus!
        Eligendi aperiam fugiat similique. Quam beatae dolorem doloribus.
      </div>
      <div class="buttons">
        <button
          @click="toggleSneaker({ sneaker, array: 'favoriteSneakers' })"
          class="button"
        >
          <span>{{
            isInArray(favoriteSneakers)
              ? "Удалить из избранного"
              : "Добавить в избранное"
          }}</span>
          <img
            :src="isInArray(favoriteSneakers) ? likechecked : like"
            alt="like"
          />
        </button>
        <button
          @click="toggleSneaker({ sneaker, array: 'sneakersInBasket' })"
          class="button"
        >
          <span>{{
            isInArray(sneakersInBasket)
              ? "Удалить из корзины"
              : "Добавить в корзину"
          }}</span
          ><img
            :src="isInArray(sneakersInBasket) ? pluschecked : plus"
            alt="plus"
          />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { like, likechecked, plus, pluschecked } from "@/assets";
import { mapState, mapMutations } from "vuex";
import SkeletonSneakerPage from "@/components/SkeletonSneakerPage.vue";

export default {
  components: {
    SkeletonSneakerPage,
  },
  data() {
    return {
      like,
      likechecked,
      plus,
      pluschecked,
    };
  },

  computed: {
    ...mapState({
      sneakers: (state) => state.sneakers.sneakers,
      isLoading: (state) => state.sneakers.isLoading,
      sneakersInBasket: (state) => state.basket.sneakersInBasket,
      favoriteSneakers: (state) => state.basket.favoriteSneakers,
    }),
    isInArray() {
      return function (array) {
        return array.some((el) => el.id === this.sneaker.id);
      };
    },
    sneaker() {
      return this.sneakers.find(
        (sneaker) => sneaker.id === Number(this.$route.params.id)
      );
    },
  },
  methods: {
    ...mapMutations({
      toggleSneaker: "basket/toggleSneaker",
    }),
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  gap: 20px;
  &__img {
    width: 300px;
    flex-shrink: 0;
    img {
      width: 100%;
    }
  }
  &__info {
    width: 100%;
    h2 {
      text-align: center;
      margin-bottom: 30px;
    }
  }
}
.buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
.button {
  display: flex;
  gap: 15px;
  font-size: 16px;
  width: 200px;
  border-radius: 20px;
  padding: 15px;
  background-color: transparent;
  cursor: pointer;
  border: 1px solid #e1e0e0;
}
</style>

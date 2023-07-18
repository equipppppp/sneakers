<template>
  <div class="sneakerCard">
    <div class="sneakerCard__image">
      <img :src="sneaker.imageURL" alt="Sneaker" />

      <img
        v-if="!inOrders"
        class="sneakerCard__favorite"
        :src="isInArray(favoriteSneakers) ? likechecked : like"
        alt="Like"
        @click="toggleSneaker({ sneaker, array: 'favoriteSneakers' })"
      />
    </div>
    <router-link :to="`/${sneaker.id}`">
      <div class="sneakerCard__name">{{ sneaker.title }}</div>
    </router-link>
    <div class="sneakerCard__price">
      <div>
        <span>ЦЕНА</span>
        <b>{{ sneaker.price }} руб.</b>
      </div>
      <img
        v-if="!inOrders"
        class="plus"
        :src="isInArray(sneakersInBasket) ? pluschecked : plus"
        alt="Plus"
        @click="toggleSneaker({ sneaker, array: 'sneakersInBasket' })"
      />
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import { plus, pluschecked, like, likechecked } from "@/assets";
export default {
  data() {
    return {
      plus,
      pluschecked,
      like,
      likechecked,
    };
  },
  props: {
    sneaker: {
      type: Object,
      required: true,
    },
    inOrders: Boolean,
  },
  computed: {
    ...mapState({
      sneakersInBasket: (state) => state.basket.sneakersInBasket,
      favoriteSneakers: (state) => state.basket.favoriteSneakers,
    }),
    isInArray() {
      return function (array) {
        return array.some((el) => el.id === this.sneaker.id);
      };
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
.sneakerCard {
  width: 210px;
  padding: 20px 30px;

  border: 1px solid #e1e0e0;
  border-radius: 40px;

  transition: all 0.2s ease-in-out;

  &:hover {
    box-shadow: 0px 14px 30px rgba(0, 0, 0, 0.05);
    transform: translateY(-5px);
  }

  &__image {
    position: relative;

    display: grid;
    place-items: center;

    width: 130px;
    height: 110px;
    object-fit: contain;

    img {
      max-width: 100%;
    }
  }
  &__favorite {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;

    cursor: pointer;
  }

  &__name {
    font-size: 14px;
    margin-top: 15px;
  }

  &__price {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 15px;

    span {
      font-size: 11px;

      display: block;

      color: #bdbdbd;
    }

    img {
      cursor: pointer;
    }
  }
}
.plus:hover {
  color: black;
}
</style>

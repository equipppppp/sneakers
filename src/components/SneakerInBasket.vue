<template>
  <div class="sneakerInBasket">
    <div class="sneakerInBasket__image">
      <img :src="sneaker.imageURL" alt="sneaker" />
    </div>

    <div class="sneakerInBasket__information">
      {{ sneaker.title }}
      <b>{{ sneaker.price }} руб.</b>
    </div>
    <svg
      @click="deleteSneaker({ sneaker, array: 'sneakersInBasket' })"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.5"
        y="0.5"
        width="31"
        height="31"
        rx="7.5"
        fill="white"
        stroke="#DBDBDB"
      />
      <path
        d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z"
        fill="#B5B5B5"
      />
    </svg>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  props: {
    sneaker: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapMutations({
      deleteSneaker: "basket/toggleSneaker",
    }),
  },
};
</script>

<style lang="scss" scoped>
.sneakerInBasket {
  display: flex;
  align-items: center;
  gap: 10px;

  padding: 10px 15px;

  border: 1px solid #f3f3f3;
  border-radius: 20px;
  &__image {
    display: grid;
    place-items: center;
    flex-shrink: 0;
    width: 80px;
    height: 70px;
    object-fit: contain;

    img {
      max-width: 100%;
    }
  }

  &__information {
    flex-grow: 1;
    b {
      display: block;
    }
  }
  svg {
    flex-shrink: 0;
    cursor: pointer;
  }
}
</style>

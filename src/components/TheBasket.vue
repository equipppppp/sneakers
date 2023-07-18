<template>
  <div class="basket">
    <div class="basket__header">
      <h3>Корзина</h3>
      <svg
        @click="closeBasket"
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
    <div></div>
    <SneakersInBasket v-if="sneakersInBasket.length > 0" />
    <EmptyBasket v-else-if="!isOrderComplete" />
    <OrderComplete v-else />
  </div>
</template>

<script>
import SneakersInBasket from "./SneakersInBasket.vue";
import OrderComplete from "./OrderComplete.vue";
import EmptyBasket from "./EmptyBasket.vue";
import { mapMutations, mapState } from "vuex";
export default {
  components: {
    SneakersInBasket,
    EmptyBasket,
    OrderComplete,
  },

  computed: {
    ...mapState({
      sneakersInBasket: (state) => state.basket.sneakersInBasket,
      isOrderComplete: (state) => state.orders.isOrderComplete,
    }),
  },
  methods: {
    ...mapMutations({
      toggleBasket: "basket/toggleBasket",
      setIsOrderCompleteToFalse: "orders/setIsOrderCompleteToFalse",
    }),
    closeBasket() {
      this.toggleBasket();
      this.setIsOrderCompleteToFalse;
    },
  },
};
</script>

<style lang="scss">
.basket {
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  padding: 30px;

  background-color: #ffffff;
  @media (max-width: 576px) {
    padding: 20px;
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    svg {
      cursor: pointer;
    }
  }

  &__price {
    display: flex;
    align-items: flex-end;

    margin: 20px 0;

    b {
      font-size: 18px;
    }
  }
  &__dashed {
    flex-grow: 1;

    margin: 0 10px;

    border-bottom: 1px dashed #dfdfdf;
  }
}
</style>

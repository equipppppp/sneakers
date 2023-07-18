<template>
  <div class="wrapperr" v-if="isAcceptionVisible">
    <div class="accept">
      <div>Вы действительно хотите очистить историю заказов?</div>
      <div class="accept__buttons">
        <button @click="accept" class="accept__button accept__button_green">
          ДА</button
        ><button
          @click="toggleAcceptionVisibility"
          class="accept__button accept__button_pink"
        >
          НЕТ
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      isAcceptionVisible: (state) => state.orders.isAcceptionVisible,
    }),
  },
  methods: {
    ...mapMutations({
      toggleAcceptionVisibility: "orders/toggleAcceptionVisibility",
      clearOrdersHistory: "orders/clearOrdersHistory",
    }),
    accept() {
      this.toggleAcceptionVisibility();
      this.clearOrdersHistory();
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapperr {
  position: fixed;
  inset: 0;
  z-index: 10;
}

.accept {
  padding: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #e7f6ff;
  border-radius: 15px;
  font-weight: 700;
  &__buttons {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    gap: 100px;
  }
  &__button {
    padding: 10px 20px;
    border-radius: 10px;
    cursor: pointer;
    background-color: transparent;
    &_green:hover {
      background-color: lightgreen;
    }
    &_pink:hover {
      background-color: pink;
    }
  }
}
</style>

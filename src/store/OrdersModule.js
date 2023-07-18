let orders = localStorage.getItem("orders")
  ? JSON.parse(localStorage.getItem("orders"))
  : [];

export default {
  state: {
    orders,
    isAcceptionVisible: false,
    isOrderComplete: false,
  },

  mutations: {
    makeOrder(state, payload) {
      state.orders = [...state.orders, payload];
      state.isOrderComplete = true;
      localStorage.setItem("orders", JSON.stringify(state.orders));
    },
    clearOrdersHistory(state) {
      state.orders = [];
      localStorage.removeItem("orders");
    },
    toggleAcceptionVisibility(state) {
      state.isAcceptionVisible = !state.isAcceptionVisible;
    },
    setIsOrderCompleteToFalse(state) {
      state.isOrderComplete = false;
    },
  },

  namespaced: true,
};

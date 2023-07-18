let sneakersInBasket = localStorage.getItem("sneakersInBasket")
  ? JSON.parse(localStorage.getItem("sneakersInBasket"))
  : [];
let favoriteSneakers = localStorage.getItem("favoriteSneakers")
  ? JSON.parse(localStorage.getItem("favoriteSneakers"))
  : [];

export default {
  state: {
    isBasketOpened: false,
    sneakersInBasket,
    favoriteSneakers,
    totalPrice: 0,
  },
  getters: {
    getTotalPrice(state) {
      return (state.totalPrice = state.sneakersInBasket.reduce(
        (acc, sneaker) => acc + sneaker.price,
        0
      ));
    },
  },
  mutations: {
    toggleBasket(state) {
      state.isBasketOpened = !state.isBasketOpened;
    },
    clearBasket(state) {
      state.sneakersInBasket = [];
      localStorage.removeItem("sneakersInbasket");
    },
    toggleSneaker(state, payload) {
      if (
        !state[payload.array].find((item) => item.id === payload.sneaker.id)
      ) {
        state[payload.array] = [...state[payload.array], payload.sneaker];
        localStorage.setItem(
          payload.array,
          JSON.stringify(state[payload.array])
        );
      } else {
        state[payload.array] = state[payload.array].filter(
          (item) => item.id !== payload.sneaker.id
        );
        localStorage.setItem(
          payload.array,
          JSON.stringify(state[payload.array])
        );
      }
    },
  },

  namespaced: true,
};

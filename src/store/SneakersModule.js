import axios from "axios";

export default {
  state: {
    sneakers: [],
    sneaker: {},
    isLoading: true,
  },

  actions: {
    async fetchSneakers({ state }) {
      try {
        state.isLoading = true;
        const { data } = await axios.get(
          "https://63629b1266f75177ea33fe5e.mockapi.io/favorites"
        );
        state.sneakers = data;
      } catch (error) {
        console.log(error);
      } finally {
        state.isLoading = false;
      }
    },
    async fetchSneakerByID({ state }, payload) {
      try {
        state.isLoading = true;
        const { data } = await axios.get(
          "https://63629b1266f75177ea33fe5e.mockapi.io/favorites"
        );
        state.sneaker = data.find((sneaker) => sneaker.id === Number(payload));
      } catch (error) {
        console.log(error);
      } finally {
        state.isLoading = false;
      }
    },
  },
  namespaced: true,
};

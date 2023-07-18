export default {
  state: {
    searchValue: "",
  },
  mutations: {
    setSearchValue(state, payload) {
      state.searchValue = payload;
    },
    clearSearchValue(state) {
      state.searchValue = "";
    },
  },
  namespaced: true,
};

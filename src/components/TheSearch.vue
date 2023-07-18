<template>
  <div class="searchBlock">
    <h2>Все кроссовки</h2>
    <form class="searchForm">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.25 15.25L11.8855 11.8795L15.25 15.25ZM13.75 7.375C13.75 9.06576 13.0784 10.6873 11.8828 11.8828C10.6873 13.0784 9.06576 13.75 7.375 13.75C5.68424 13.75 4.06274 13.0784 2.86719 11.8828C1.67165 10.6873 1 9.06576 1 7.375C1 5.68424 1.67165 4.06274 2.86719 2.86719C4.06274 1.67165 5.68424 1 7.375 1C9.06576 1 10.6873 1.67165 11.8828 2.86719C13.0784 4.06274 13.75 5.68424 13.75 7.375V7.375Z"
          stroke="#E4E4E4"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>

      <input
        :value="searchValue"
        @input="updateMessage"
        type="text"
        placeholder="Поиск..."
      />

      <svg
        v-if="searchValue"
        @click="clearSearchValue"
        class="clearSearch"
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
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  computed: {
    ...mapState({
      searchValue: (state) => state.search.searchValue,
    }),
  },
  methods: {
    ...mapMutations({
      setSearchValue: "search/setSearchValue",
      clearSearchValue: "search/clearSearchValue",
    }),
    updateMessage(event) {
      this.setSearchValue(event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
.searchBlock {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 30px;

  @media (max-width: 575px) {
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    margin-top: 15px;
  }

  .searchForm {
    position: relative;

    display: flex;
    align-items: center;
    gap: 15px;

    width: 250px;
    height: 45px;
    padding: 15px;

    border: 1px solid #f3f3f3;
    border-radius: 10px;

    input {
      border: none;
      outline: none;
    }

    .clearSearch {
      position: absolute;
      right: 15px;
      top: 12px;

      width: 21px;
      height: 21px;

      cursor: pointer;
    }
  }
}
</style>

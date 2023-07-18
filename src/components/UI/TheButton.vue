<template>
  <button class="mainButton">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "TheButton",
};
</script>

<style lang="scss" scoped>
.mainButton {
  font-size: 16px;

  display: block;
  width: 300px;
  height: 55px;
  margin: 0 auto;

  background-color: #9dd558;
  color: white;
  border: none;
  border-radius: 18px;

  cursor: pointer;

  @media (max-width: 576px) {
    width: 250px;
  }

  &:hover {
    background: lighten($color: #9dd558, $amount: 5%);
  }

  &:active {
    background: darken($color: #9dd558, $amount: 10%);
  }
}
</style>

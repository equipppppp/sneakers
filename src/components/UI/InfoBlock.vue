<template>
  <div class="infoBlock">
    <img :src="url" alt="img" />
    <h2>{{ header }}</h2>
    <span>{{ description }}</span>
    <TheButton @click="onClick">{{ buttonText }}</TheButton>
  </div>
</template>

<script>
export default {
  props: {
    onClick: Function,
    header: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Вернуться на главную",
    },
    url: {
      type: String,
      required: true,
    },
  },
  name: "InfoBlock",
};
</script>

<style lang="scss" scoped>
.infoBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;

  width: 300px;

  margin: auto;

  text-align: center;
}
</style>

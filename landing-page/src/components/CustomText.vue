<template>
  <div class="text">
    <p>
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: "CustomText",
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.text {
  color: white;
  font-size: 1.5rem;
  text-align: justify;
}
</style>
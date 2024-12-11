<template>
  <div class="title">
    <h3>{{ msg }}</h3>
  </div>
</template>

<script>
export default {
  name: "CustomTitle",
  props: {
    msg: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.title {
  background-color: #FD8700;
  color: white;
  width: 30%;
  height: 10vh;
  text-align: center;
  border-radius: 5px;
  box-shadow: 4px 4px 20px rgba(251, 251, 251, 0.208);
  margin: 3.5% 0 1% 0; 
  font-size: 1.2rem;

  display: flex;
  justify-content: center;
  align-items: center; 
}

@media (max-width: 1024px) {
  .title {
    width: 50%;
  }
}
</style>

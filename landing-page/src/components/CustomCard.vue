<template>
  <div class="custom-card">
    <div class="card">
      <img :src="iconPath" alt="Ícone" class="icon" />
      <div class="text">
        <h4>{{ subtitle }}</h4>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomCard",
  props: {
    iconPath: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
  }
};
</script>

<style scoped>
.custom-card {
  display: flex;
  justify-content: space-around;
  gap: 30px;
  margin-top: 50px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 250px;
}

.icon {
  width: 110px;
  height: 50px;
  margin-bottom: 0%;
}

.text h4 {
  font-size: 18px;
  color: #fff;
}

.text p {
  font-size: 14px;
  color: #fff;
  margin-top: 0%;
}

.text {
  width: 150%;
}
</style>

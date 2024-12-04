<template>
  <div class="icon-container">
    <img :src="iconPath" :alt="altText" class="icon" />
    <div class="text-container">
      <span class="primary-text">{{ primaryText }}</span>
      <span class="secondary-text">{{ secondaryText }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomIcon",
  props: {
    iconPath: {
      type: String,
      required: true,
    },
    primaryText: {
      type: String,
      required: true,
    },
    secondaryText: {
      type: String,
      required: true,
    },
    altText: {
      type: String,
      default: "Ícone",
    },
  },
};
</script>

<style scoped>
.icon-container {
  display: flex;
  align-items: center; 
  gap: 10px; 
}

.icon {
  width: 40px;
  height: 40px;
}

.text-container {
  display: flex;
  flex-direction: column; 
}

.primary-text {
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
  text-align: left;
}

.secondary-text {
  font-size: 14px;
  color: #ffffff;
}
</style>

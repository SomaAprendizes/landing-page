<template>
  <div :class="uniqueClass">
    <div class="cards-container">
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="index"
      >
        <img :src="card.imageSrc" :alt="card.title" class="card-image" />
        <div class="card-overlay">
          <div class="card-title">{{ card.title }}</div>
          <div class="card-info">
            <p>{{ card.info }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainWorks",
  props: {
    cards: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    const uniqueId = `mainworks-${Math.random().toString(36).substr(2, 9)}`;
    return {
      uniqueClass: uniqueId,
    };
  },
};
</script>

<style scoped>
.cards-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.card {
  width: 300px;
  height: 300px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  position: relative;
  background: #f9f9f9;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.card-image {
  width: 110%;
  height: 110%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.4));
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow: hidden;
  padding: 10px;
  transition: all 0.3s ease;
}

.card-overlay:hover {
  background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.63));
  transition: opacity 0.5s ease-in-out, transform 0.3s ease-in-out;  
}

.card-title {
  color: #fff;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  transform: translateY(200px);
  transition: transform 0.3s ease;
}

.card-info {
  color: #fff;
  font-size: 1rem;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  margin-top: auto;
}

.card:hover .card-title {
  transform: translateY(10px);
}

.card:hover .card-info {
  opacity: 1;
  transform: translateY(0);
}

.card:hover .card-image {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .cards-container {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .card {
    width: 100%;
    height: 200px;
  }

  .card-title {
    font-size: 1rem;
    transform: translateY(150px);
  }

  .card-info {
    font-size: 0.9rem;
  }
}
</style>

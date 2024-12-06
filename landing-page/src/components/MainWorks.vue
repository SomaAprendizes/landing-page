<template>
  <div :class="uniqueClass">
    <div class="cards-container">
      <div
        class="card"
        v-for="(card, index) in cards"
        :key="index"
      >
        <img :src="card.imageSrc" :alt="card.title" class="card-image" />
        <div
          class="card-overlay"
          :class="{ expanded: infoIndex === index }"
        >
          <div
            class="arrow-container"
            @click="toggleInfo(index)"
            :class="{ expanded: infoIndex === index }"
          >
            <div class="arrow"></div>
            <div class="line"></div>
          </div>
          <div class="card-name">{{ card.title }}</div>
          <div v-if="infoIndex === index" class="card-info">
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
    imageSrc: String,
    title: String,
    info: String,
  },
  data() {
    const uniqueId = `mainworks-${Math.random().toString(36).substr(2, 9)}`;
    
    return {
      cards: [
        {
          imageSrc: this.imageSrc,
          title: this.title,
          info: this.info,
        },
      ],
      infoIndex: null,
      uniqueClass: uniqueId,
    };
  },
  methods: {
    toggleInfo(index) {
      this.infoIndex = this.infoIndex === index ? null : index;
    },
  },
};
</script>

<style scoped>

.cards-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.card {
  width: 350px;
  height: 450px;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
  background: #f9f9f9;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transition: 0.3s ease-in-out;
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(255, 255, 255, 0.289);
}

.card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.8));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  transition: transform 0.5s ease, height 0.5s ease;
  overflow: hidden;
}

.arrow-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 5px;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.arrow {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-bottom: 10px solid black;
}

.arrow-container.expanded .arrow {
  transform: rotate(180deg);
}

.line {
  width: 30px;
  height: 2px;
  background-color: black;
  margin-top: 5px;
}

.card-name {
  color: #000;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: center;
  margin-top: 5px;
}

.card-info {
  background: rgba(255, 255, 255, 0.9);
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  font-size: 1rem;
  color: #333;
  margin-top: 10px;
  animation: fadeInAndSlideUp 0.5s ease forwards;
  transform: translateY(50px);
  opacity: 0;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.card-overlay.expanded .card-info {
  transform: translateY(0);
  opacity: 1;
}

@keyframes fadeInAndSlideUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>

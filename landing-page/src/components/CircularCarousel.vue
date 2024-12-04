<template>
  <div class="carousel">
    <button class="prev" @click="prevSlide" :disabled="isAtStart">❮</button>
    <div class="carousel-track-container">
      <div class="carousel-track" :style="carouselStyle">
        <div
          class="carousel-item"
          v-for="(image, index) in images"
          :key="index"
          :class="{ active: index === currentIndex }"
        >
          <div class="image-container">
            <img :src="image" :alt="'Imagem ' + (index + 1)" />
          </div>
        </div>
      </div>
    </div>
    <button class="next" @click="nextSlide" :disabled="isAtEnd">❯</button>

    <!-- Botões para aumentar ou diminuir a escala -->
    <div class="scale-controls">
      <button @click="scaleCarousel(0.1)">Aumentar escala</button>
      <button @click="scaleCarousel(-0.1)">Diminuir escala</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        "https://www.acoplano.com.br/assets/images/blog_antigo/2021/10/os-perfis-estruturais-na-construcao-civil-acoplano.jpg",
        "https://hlg.negociossc.com.br/wp-content/uploads/2024/09/Captura-de-tela-2024-09-24-131703.jpg",
        "https://agenciadenoticias.ibge.gov.br/images/agenciadenoticias/estatisticas_economicas/2023_01/SINAPI_HOME_SimoneMello.jpg",
        "https://www.mapadaobra.com.br/wp-content/uploads/2018/02/construcao-civil1.jpg",
        "https://www.gng.com.br/wp-content/uploads/2022/11/qualidade-na-construcao.jpg",
        "https://www.krona.com.br/wp-content/uploads/2021/07/obra-01.png",
      ],
      currentIndex: 0,
      scaleFactor: 1,
    };
  },
  computed: {
    carouselStyle() {
      const offset = (this.currentIndex - 1) * -250;
      return {
        transform: `translateX(${offset}px) scale(${this.scaleFactor})`,
      };
    },
    isAtStart() {
      return this.currentIndex === 0;
    },
    isAtEnd() {
      return this.currentIndex === this.images.length - 1;
    },
  },
  methods: {
    nextSlide() {
      if (!this.isAtEnd) {
        this.currentIndex++;
      }
    },
    prevSlide() {
      if (!this.isAtStart) {
        this.currentIndex--;
      }
    },
    scaleCarousel(amount) {
      this.scaleFactor = Math.max(0.8, Math.min(3, this.scaleFactor + amount));
    },
  },
};
</script>

<style scoped>
.carousel {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 750px;
  height: 350px;
  margin: 0 auto;
}

.carousel-track-container {
  overflow: hidden;
  width: 750px;
  height: 350px;
  display: flex;
  align-items: center;
}

.carousel-track {
  display: flex;
  transition: transform 0.5s ease-in-out;
  align-items: center;
}

.carousel-item {
  width: 250px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.5s ease, opacity 0.5s ease, filter 0.5s ease;
  filter: grayscale(100%);
  opacity: 0.6;
}

.carousel-item.active {
  transform: scale(1.4);
  filter: none;
  opacity: 1;
  z-index: 10;
}

.image-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  z-index: 20;
  border-radius: 50%;
  padding: 5px;
}

button.prev {
  left: 10px;
}

button.next {
  right: 10px;
}

button:disabled {
  color: gray;
  cursor: not-allowed;
}

.scale-controls {
  margin-top: 20px;
  text-align: center;
}

.scale-controls button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 1rem;
  background-color: #333;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}

.scale-controls button:hover {
  background-color: #555;
}
</style>

<template>
  <div class="carousel-container" :style="{ transform: `scale(${scale})` }">
    <button
      class="carousel-button prev"
      @click="prevSlide"
      :disabled="isAtStart"
    >
      ❮
    </button>

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

    <button
      class="carousel-button next"
      @click="nextSlide"
      :disabled="isAtEnd"
    >
      ❯
    </button>
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
      scale: 1,
    };
  },

  computed: {
    carouselStyle() {
      const offset = (this.currentIndex - 1) * -250;
      return {
        transform: `translateX(${offset}px)`,
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

    adjustCarouselScale(newScale) {
      if (newScale >= 0.5 && newScale <= 2) {
        this.scale = newScale;
      }
    },
  },

  mounted() {
    this.adjustCarouselScale(0.8);
  },
};
</script>

<style scoped>
.carousel-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 750px;
  height: 350px;
  margin: 0 auto;
  transition: transform 0.5s ease-in-out;
}

.carousel-track-container {
  overflow: hidden;
  width: 100%;
  height: 100%;
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

.carousel-button {
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

.carousel-button.prev {
  left: 10px;
}

.carousel-button.next {
  right: 10px;
}

.carousel-button:disabled {
  color: gray;
  cursor: not-allowed;
}
</style>

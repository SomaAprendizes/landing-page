<template>
  <div class="carousel-container" :style="{ transform: `scale(${scale})` }">
    <button
      class="carousel-button prev"
      @click="prevSlide"
      :disabled="isAtStart"
    >
      ❮
    </button>

    <div
      class="carousel-track-container"
      @touchstart="handleTouchStart"
      @touchmove="handleTouchMove"
      @touchend="handleTouchEnd"
    >
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
        "/images/img1.jpg",
        "/images/img2.jpg",
        "/images/img3.jpg",
        "/images/img4.jpg",
        "/images/img6.jpg",
      ],
      currentIndex: 0,
      scale: 1,
      intervalId: null,
      touchStartX: 0,
      touchEndX: 0,
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
      if (this.currentIndex < this.images.length - 1) {
        this.currentIndex++;
      } else {
        this.currentIndex = 0;
      }
    },
    prevSlide() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
      } else {
        this.currentIndex = this.images.length - 1;
      }
    },
    startAutoSlide() {
      this.stopAutoSlide(); // Certifique-se de que não há intervalos ativos
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000);
    },
    stopAutoSlide() {
      if (this.intervalId) {
        clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    resetAutoSlide() {
      this.startAutoSlide(); 
    },
    adjustCarouselScale(newScale) {
      if (newScale >= 0.5 && newScale <= 2) {
        this.scale = newScale;
      }
    },
    updateScaleBasedOnScreenWidth() {
      const screenWidth = window.innerWidth;

      if (screenWidth <= 480) {
        this.adjustCarouselScale(0.6);
      } else if (screenWidth <= 768) {
        this.adjustCarouselScale(0.8);
      } else if (screenWidth >= 481 & screenWidth <= 767) {
        this.adjustCarouselScale(0.6);
      } else {
        this.adjustCarouselScale(1);
      }
    },
    handleTouchStart(event) {
      this.touchStartX = event.touches[0].clientX;
    },
    handleTouchMove(event) {
      this.touchEndX = event.touches[0].clientX;
    },
    handleTouchEnd() {
      const distance = this.touchEndX - this.touchStartX;
      if (distance > 50) {
        this.prevSlide();
      } else if (distance < -50) {
        this.nextSlide();
      }
      this.touchStartX = 0;
      this.touchEndX = 0;

      this.resetAutoSlide();
    },
  },
  mounted() {
    this.updateScaleBasedOnScreenWidth();
    window.addEventListener("resize", this.updateScaleBasedOnScreenWidth);

    this.startAutoSlide();
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.updateScaleBasedOnScreenWidth);

    this.stopAutoSlide();
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

@media (max-width: 480px) {
  .carousel-container {
    margin-top: -5%;
    margin-bottom: -5%;
  }
}

@media (min-width: 768px) {
  .carousel-container {
    margin-top: 2%;
    margin-bottom: 5%;
  }
}
</style>

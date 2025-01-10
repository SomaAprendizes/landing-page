<template>
  <div class="home">
    <h2 class="textHome">
      Construímos com propósito, <br> crescemos com responsabilidade.
    </h2>
    <div class="logoContainer">
      <img src="../../public/logosoma.svg" alt="Logo Soma" class="logo" />
      <img src="../../public/image.svg" alt="Logo Adicional" class="logo" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      imageSrc: "../../public/logosoma.svg", 
    };
  },
  mounted() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize();
    window.addEventListener('scroll', this.handleScroll);
    this.resetTransform();
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollY = window.scrollY;
      const textHome = this.$el.querySelector('.textHome');
      const logos = this.$el.querySelectorAll('.logo');
      
      if (scrollY < 300) {
        const scale = 1 - scrollY / 1000;
        const translateY = scrollY / 10;

        textHome.style.transform = `translateY(-50%) scale(${scale}) translateY(${translateY}px)`;
        logos.forEach((logo) => {
          logo.style.transform = `scale(${scale}) translateY(${translateY}px)`;
        });
      } else {
        textHome.style.transform = 'translateY(-50%) scale(0) translateY(150px)';
        logos.forEach((logo) => {
          logo.style.transform = 'scale(0) translateY(150px)';
        });
      }

      if (scrollY === 0) {
        this.resetTransform();
      }
    },
    resetTransform() {
      const textHome = this.$el.querySelector('.textHome');
      const logos = this.$el.querySelectorAll('.logo');

      textHome.style.transform = 'translateY(-50%) scale(1) translateY(0)';
      logos.forEach((logo) => {
        logo.style.transform = 'scale(1) translateY(0)';
      });
    },
    checkScreenSize() {
      if (window.innerWidth <= 768) {
        this.imageSrc = "../../public/image.svg";
      } else {
        this.imageSrc = "../../public/logosoma.svg";
      }
    },
  },
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}

.home .textHome {
  margin-top: 0;
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  transition: transform 0.2s ease-out;
  margin-bottom: -50px;
}

.logoContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
}

.logo {
  width: 400px;
  height: auto;
  transition: transform 0.2s ease-out;
}

@media (max-width: 768px) {
  .logoContainer {
    flex-direction: column;
    gap: 10px;
  }

  .logo {
    max-width: 100%;
    width: 200px;
  }
  
  .home .textHome {
    font-size: 1rem;
    margin-bottom: 0;
  }
}

@media (min-width: 769px) and (max-width: 1200px) {
  .home {
    height: 100vh;
  }

  .home .textHome {
    font-size: 2.5rem;
  }

  .logo {
    max-width: 100%;
    width: 350px;
  }
}
</style>

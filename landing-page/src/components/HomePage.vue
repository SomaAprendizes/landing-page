<template>
  <div class="home">
    <h2 class="textHome">
      Ideias que viram conquistas
    </h2>
    <img src="../../public/images/ImgFundo.svg" alt="Logo-inicial"  class="imgHome">
  </div>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      imageSrc: "../../public/images/ImgFundo.svg", 
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
      const imgHome = this.$el.querySelector('.imgHome');
      
      if (scrollY < 300) {
        const scale = 1 - scrollY / 1000;
        const translateY = scrollY / 10;

        textHome.style.transform = `translateY(-50%) scale(${scale}) translateY(${translateY}px)`;
        imgHome.style.transform = `scale(${scale}) translateY(${translateY}px)`;
      } 
      else {
        textHome.style.transform = 'translateY(-50%) scale(0) translateY(150px)';
        imgHome.style.transform = 'scale(0) translateY(150px)';
      }

      if (scrollY === 0) {
        this.resetTransform();
      }
    },
    resetTransform() {
      const textHome = this.$el.querySelector('.textHome');
      const imgHome = this.$el.querySelector('.imgHome');

      textHome.style.transform = 'translateY(-50%) scale(1) translateY(0)';
      imgHome.style.transform = 'scale(1) translateY(0)';
    },
    checkScreenSize() {
      if (window.innerWidth <= 768) {
        this.imageSrc = "../../public/images/ImageMobile.png";
      } else {
        this.imageSrc = "../../public/images/ImgFundo.svg";
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
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
  text-transform: uppercase;
  transition: transform 0.2s ease-out;
}

.home .imgHome {
  margin-top: 0;
  height: auto;
  max-width: 100%;
  transition: transform 0.2s ease-out; 
}

.home .textHome {
  margin-bottom: 5px;
}

.home .imgHome {
  margin-top: 5px;
}

@media (max-width: 768px) {
  .home {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .home .textHome {
    font-size: 1.3rem;
    display: flex;
    text-align: center; 
    margin-bottom: 10px;
  }
  
  .home .imgHome {
    max-width: 40%;
    margin: 0 auto; 
  }
}
@media (min-width: 769px) and (max-width: 1200px) {
  .home {
    height: 100vh;
  }
  
  .home .textHome {
    font-size: 2.5rem;
  }
  
  .home .imgHome {
    max-width: 100%;
  }
}
</style>

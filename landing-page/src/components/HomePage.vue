<template>
  <div class="home">
    <div class="contentWrapper">
      <div class="contentContainer">
        <h2 class="textHome">
          Construímos com propósito, <br /> crescemos com responsabilidade.
        </h2>
        <div class="logoContainer">
          <img loading="lazy" :src="imageSrc" alt="Logo Adicional" class="logo" />
        </div>
      </div>

      <div class="videoContainer">
        <iframe 
          src="https://www.youtube.com/embed/JvXzxdRNqQM" 
          title="SOMA Institucional" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
          width="914"
          height="314">
        </iframe>
      </div>
    </div>
  </div>
</template>

<script>
import imageDesktop from "@/assets/images/image.svg";
import imageMobile from "@/assets/images/image.svg";

export default {
  name: "HomePage",
  data() {
    return {
      imageSrc: window.innerWidth <= 768 ? imageMobile : imageDesktop,
    };
  },
  mounted() {
    window.addEventListener("resize", this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      if (window.innerWidth <= 768) {
        this.imageSrc = imageMobile;
      } else {
        this.imageSrc = imageDesktop;
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
  min-height: 100vh;
  padding: 0 10px;
  background-size: cover;
  background-position: center;
}

.contentWrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  margin-top: -100px;
}

.contentContainer {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.textHome {
  color: white;
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 20px;
  font-family: 'CustomFont', Arial, sans-serif;
  text-align: center;
}

.logoContainer {
  display: flex;
  justify-content: center;
}

.logo {
  width: 300px;
  height: auto;
}

.videoContainer {
  flex: 1;
  max-width: 1200px;
  width: 70%;
}

.videoContainer iframe {
  width: 100%;
  height: auto;
  aspect-ratio: 16/6;
  border: none;
}

@media (max-width: 768px) {
  .contentWrapper {
    flex-direction: column;
    gap: 20px;
  }

  .textHome {
    font-size: 1.5rem;
  }

  .logo {
    width: 200px;
  }

  .videoContainer {
    max-width: 100%;
  }
}
</style>

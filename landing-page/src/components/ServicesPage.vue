<template>
  <div class="services-page">

    <nav class="services-tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: activeTab === tab.name }]"
        @click="activeTab = tab.name"
      >
        {{ tab.title }}
      </button>
    </nav>

    <section class="services-content">
      <div
        v-for="(tab, index) in tabs"
        :key="index"
        class="tab-content"
        :class="{ active: activeTab === tab.name }"
      >
        <img :src="tab.image" :alt="tab.alt" />
        <div class="description">
          <p class="text">{{ tab.description }}</p>
        </div>
      </div>
    </section>
    
  </div>
</template>


<script>
export default {
  name: "ServicesPage",
  data() {
    return {
      activeTab: "pavimentacao",
      tabs: [
        {
          name: "pavimentacao",
          title: "Pavimentação",
          image: require("../../public/images/pavimentacao.svg"),
          alt: "Imagem representando pavimentação",
          description:
            "Oferecemos serviços de pavimentação utilizando materiais de alta durabilidade e técnicas avançadas, proporcionando superfícies lisas, seguras e de longa vida útil para estradas e calçadas.",
        },
        {
          name: "habitacional",
          title: "Construção Habitacional",
          image: require("../../public/images/pavimentacao.svg"),
          alt: "Imagem representando construção habitacional",
          description:
            "Transformamos sonhos em realidade por meio de projetos personalizados, construindo residências seguras, confortáveis e duradouras com materiais de alta qualidade.",
        },
        {
          name: "adutora",
          title: "Adutora",
          image: require("../../public/images/pavimentacao.svg"),
          alt: "Imagem representando adutora",
          description:
            "Realizamos a instalação de adutoras com excelência, assegurando o transporte eficiente e seguro de água, em total conformidade com as normas técnicas e ambientais.",
        },
      ],
    };
  },
};
</script>


<style scoped>
.services-page {
  color: #ffffff;
  max-width: 1090px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto;
  font-family: 'Arial', sans-serif;

}

.services-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  padding: 1rem 0;
  gap: 10px;
}

.tab-button {
  background: none;
  border: none;
  color: #999999;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  transition: color 0.3s ease, font-weight 0.3s ease;
}

.tab-button.active {
  color: #ffffff;
  font-weight: bold;
}

.tab-button.active::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  right: 0;
  height: 3px;
  background-color: #ffa500;
  border-radius: 2px;
}

.tab-button:hover {
  color: #ffa500;
}

.services-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 100%;
}

.tab-content {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  height: 248px;
  width: 100%;
  padding: 0;
  opacity: 0;
  transform: translateX(-10px);
  transition: opacity 0.7s ease, transform 0.7s ease;
  position: absolute;
  top: 0;
  left: 0;
}

.tab-content.active {
  opacity: 1;
  transform: translateX(0);
  position: relative;
}

.tab-content img {
  width: auto;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.description {
  flex: 1;
}

.text {
  color: white;
  font-size: 1.2rem;
  text-align: justify;
  margin: 0;
}

@media (max-width: 1300px) {
  .services-page {
    width: 90%;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px; 
  }

  .services-tabs {
    display: flex;
    justify-content: space-evenly; 
    width: 80%;
    margin-bottom: 1rem;
  }

  .tab-button {
    font-size: 1.2rem;
    padding: 0.4rem 1rem;
    border-radius: 8px;
  }

  .tab-button.active::after {
    height: 3px;
    background-color: #ffa500;
  }

  .services-content {
    width: 100%;
    padding: 1rem;
  }

  .tab-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 1rem;
  }

  .tab-content img {
    width: 45%;
    height: auto;
  }

  .text {
    font-size: 1rem;
    line-height: 1.6;
    text-align: left; 
  }

  .description {
    width: 60%;
  }
}

@media (max-width: 480px) {
  .services-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 1rem;
    overflow: hidden;
  }

  .services-tabs {
    flex-wrap: wrap;
    justify-content: center;
    width: 40%;
  }

  .tab-content {
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 100%;
    padding: 0;
  }

  .tab-content img {
    width: 40%;
    height: auto;
  }

  .text {
    font-size: 0.9rem;
    text-align: center;
  }

  .description {
    width: 50%;
  }
}

</style>

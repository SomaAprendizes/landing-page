<template>
  <div class="services-page">

    <!-- Abas de navegação -->
    <nav class="services-tabs">
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        :class="['tab-button', { active: activeTab === tab.name }]"
        @click="activeTab = tab.name"
      >
        {{ tab.label }}
      </button>
    </nav>

    <!-- Conteúdo da aba -->
    <section class="services-content">
      <div v-if="activeTab === 'pavimentacao'" class="tab-content">
          <img src="../../public/images/pavimentacao.svg" alt="Pavimentação" />

          <div class="description"><p class="text">Realizamos pavimentação com materiais duráveis e técnicas avançadas, garantindo superfícies lisas e seguras para estradas e calçadas.</p></div>
      </div>
      <div v-if="activeTab === 'habitacional'" class="tab-content">
          <img src="../../public/images/pavimentacao.svg" alt="Construção Habitacional" />

          <div class="description"><p class="text">Transformamos sonhos em realidade com projetos personalizados, construindo residências confortáveis e seguras com materiais de alta qualidade.</p></div>
      </div>
      <div v-if="activeTab === 'adutora'" class="tab-content">
          <img src="../../public/images/pavimentacao.svg" alt="Adutora" />

          <div class="description"><p class="text">Instalamos adutoras para garantir o transporte eficiente e seguro de água, atendendo às normas técnicas e ambientais.</p></div>
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
        { name: "pavimentacao", label: "Pavimentação" },
        { name: "habitacional", label: "Construção habitacional" },
        { name: "adutora", label: "Adutora" },
      ],
    };
  },
};
</script>

<style scoped> 
/* Estilo geral da página */
.services-page {
  color: #ffffff;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: auto; /* Evita corte do conteúdo */
  font-family: 'Arial', sans-serif; /* Fonte padrão */
}


/* Estilo das abas de navegação */
.services-tabs {
  display: flex;
  justify-content: center;
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
}

.tab-button {
  background: none;
  border: none;
  color: #999999;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  cursor: pointer;
  font-weight: normal;
  position: relative;
  transition: color 0.3s ease, font-weight 0.3s ease;
  font-weight: bold;

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

/* Estilo do conteúdo das abas */
.services-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: left;
  width: 100%;
  padding: 0;
}

.tab-content {
  display: flex;
  align-items: between;
  height: 248px;
  width: 100%;
  gap: 20px;
  padding: 0;
}

.tab-content img {
  width: auto;
  height: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  margin: 0;
  padding: 0;
}

.text {
  color: white;
  font-size: 1.2rem;
  text-align: justify;
  margin: 0;
}

/* Estilo geral para telas menores */
@media (max-width: 768px) {
  .services-page {
    width: 95%; /* Reduz a largura em telas pequenas */
    padding: 1rem; /* Adiciona espaçamento interno */
  }

  .services-tabs {
    align-items: center;
  }

  .tab-button {
    font-size: 1rem; 
    text-align: center;
  }

  .tab-button.active::after {
    height: 2px; /* Ajusta a espessura da linha ativa */
  }

  .services-content {
    width: 100%; /* Garante que o conteúdo ocupe a largura da tela */
    padding: 0;
  }

  .tab-content {
    flex-direction: column; /* Empilha o conteúdo */
    height: auto; /* Remove a altura fixa */
    gap: 10px;
  }

  .tab-content img {
    width: 100%; /* Imagem ocupa toda a largura */
    height: 248px; /* Mantém proporção */
  }

  .text {
    font-size: 1rem; 
  }
}

/* Estilo para telas muito pequenas (mobile) */
@media (max-width: 480px) {
  .tab-button {
    font-size: 0.9rem; /* Texto menor para caber na tela */
    padding: 0.2rem 0.4rem;
  }

  .tab-content {
    gap: 5px;
  }

  .text {
    font-size: 0.9rem; /* Texto ainda menor */
  }
}

</style>

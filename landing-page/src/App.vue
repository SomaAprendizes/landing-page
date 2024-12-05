<template>
  <div id="app">
    <div class="content">
      <AppHeader />

      <!-- Home Section -->
      <section class="home">
        <HomePage />
      </section>

      <!-- About Section -->
      <section class="about">
        <CustomTitle msg="Um pouco sobre nós" class="title" />
        <CustomText
          id="CustomText"
          text="A Construtora e Incorporadora Soma Ltda, atuante no Piauí desde 2000, destaca-se pelo atendimento personalizado e compromisso com a qualidade na construção civil. Focada em superar expectativas, investe em excelência e na sua equipe, garantindo soluções sob medida e satisfação em cada projeto."
        />
        <CircularCarousel />
      </section>

      <!-- Strategy Section -->
      <section class="strategy">
        <div class="icons-container">
          <CustomIcon
            iconPath="/Vector.svg"
            primaryText="+10"
            secondaryText="Clientes atendidos"
            altText="Ícone de Cliente"
          />
          <CustomIcon
            iconPath="/Vector(1).svg"
            primaryText="+100"
            secondaryText="Construções feitas"
            altText="Ícone de Construções"
          />
        </div>
        <CustomTitle msg="Identidade estratégica" />
        <div class="cards-section">
          <CustomCard
            iconPath="/Vector(2).svg"
            subtitle="Missão"
            text="“Fornecer soluções de engenharia com qualidade, compromisso socioambiental e segurança.”"
          />
          <CustomCard
            iconPath="/Vector(3).svg"
            subtitle="Visão"
            text="“Inovar na área de infraestrutura de transportes com alto desempenho e melhoria contínua.”"
          />
          <CustomCard
            iconPath="/Vector(4).svg"
            subtitle="Valores"
            text="“Compromisso com resultados eficientes, segurança, respeito socioambiental, confiança e valorização profissional.”"
          />
        </div>
      </section>

      <!-- Services Section -->
      <section class="services">
        <CustomTitle msg="Serviços" />
        <ServicesPage />
      </section>

      <!-- Main Works Section -->
      <section class="mainworks">
        <CustomTitle msg="Principais obras" id="title" />
        <div class="container">
          <div class="cards-services">
            <MainWorks
              imageSrc="/images/manatí.png"
              title="Manatí"
              info="Informações sobre a obra Manatí."
            />
            <MainWorks
              imageSrc="/images/rutra.png"
              title="Rutra Snitram"
              info="Detalhes sobre a obra Rutra Snitram."
            />
            <MainWorks
              imageSrc="/images/shopping.png"
              title="Piauí Shopping"
              info="Dados do projeto Piauí Shopping."
            />
          </div>
        </div>
      </section>

      <AppFooter />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/HomePage.vue';
import CustomTitle from './components/CustomTitle.vue';
import CustomText from './components/CustomText.vue';
import CircularCarousel from './components/CircularCarousel.vue';
import CustomIcon from './components/CustomIcon.vue';
import CustomCard from './components/CustomCard.vue';
import ServicesPage from './components/ServicesPage.vue';
import AppFooter from './components/AppFooter.vue';
import MainWorks from './components/MainWorks.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    HomePage,
    CustomTitle,
    CustomText,
    CircularCarousel,
    CustomIcon,
    CustomCard,
    ServicesPage,
    AppFooter,
    MainWorks,
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding-top: 100px;
}

.home {
  background-image: url('../public/images/background.png');
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: calc(100vh - 100px);
  background-position: center;
}

.about, .services, .mainworks {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.about #CustomText {
  margin: 0 10%;
}

.strategy {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: 3% 0;
}

.icons-container {
  display: flex;
  gap: 50px;
}

.cards-section {
  display: flex;
  gap: 200px;
}

.mainworks .container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.cards-services {
  display: flex;
  gap: 20px;
}

@media (max-width: 768px) {
  .cards-section {
    flex-direction: column;
    align-items: center;
  }

  .icons-container {
    flex-direction: column;
    align-items: center;
  }

  .cards-services {
    flex-direction: column;
    align-items: center;
  }
}
</style>

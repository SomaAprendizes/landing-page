<template>
  <div id="app">
    <div class="content">
      <AppHeader />

      <section class="home" id="home">
        <HomePage />
      </section>

      <section class="about" id="about">
        <CustomTitle msg="Um pouco sobre nós" class="title" />
        <p>
          A Construtora e Incorporadora Soma Ltda, atuante no Piauí desde 2000,
          destaca-se pelo atendimento personalizado e compromisso com a qualidade na
          construção civil. Focada em superar expectativas, investe em excelência e na
          sua equipe, garantindo soluções sob medida e satisfação em cada projeto.
        </p>
        <CircularCarousel />
      </section>

      <section class="strategy" id="strategy">
        <div class="icons-container">
          <CustomIcon iconPath="/Vector.svg" primaryText="+10" secondaryText="Clientes atendidos"
            altText="Ícone de Cliente" />
          <CustomIcon iconPath="/Vector(1).svg" primaryText="+100" secondaryText="Construções feitas"
            altText="Ícone de Construções" />
        </div>
        <CustomTitle msg="Identidade estratégica" />
        <div class="cards-section">
          <CustomCard iconPath="/Vector(2).svg" subtitle="Missão"
            text="Fornecer soluções de engenharia com qualidade, compromisso socioambiental e segurança." />
          <CustomCard iconPath="/Vector(3).svg" subtitle="Visão"
            text="Inovar na área de infraestrutura de transportes com alto desempenho e melhoria contínua." />
          <CustomCard iconPath="/Vector(4).svg" subtitle="Valores"
            text="Compromisso com resultados eficientes, segurança, respeito socioambiental, confiança e valorização profissional." />
        </div>
      </section>

      <section class="services" id="services">
        <CustomTitle msg="Serviços" />
        <ServicesPage />
      </section>

      <section class="mainworks" id="mainworks">
        <CustomTitle msg="Principais obras" id="title" />
        <div class="cards-services">
          <MainWorks
            :cards="[
              { imageSrc: require('@/assets/images/manatí.webp'), 
                title: 'Pousada Manatí', 
                info: 'Execução de edifício em concreto armado e alvenaria de vedação'
              },
              { imageSrc: require('@/assets/images/constrhab.webp'), 
                title: 'Construção habitacional', 
                info: 'Construção de 384 (trezentos e oitenta e quatro) apartamentos habitacionais - Residencial Antonieta Araújo'
              },
              { imageSrc: require('@/assets/images/shopping.webp'), 
                title: 'Piauí Shopping', 
                info: 'Construção de shopping center' }
            ]"
          />
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
  background-image: url('@/assets/images/background.webp');
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: calc(100vh - 100px);
  background-position: center;
}

.about,
.services,
.mainworks,
.strategy {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
}

.about p {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: justify;
  max-width: 90vw;
  color: white;
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  line-height: 1.5;
  word-wrap: break-word; 
  overflow-wrap: break-word;
  margin: 0 auto;
  padding: 0 10px;
}

.icons-container {
  display: flex;
  gap: 50px;
}

.cards-section {
  display: flex;
  gap: 200px;
}

@media (max-width: 1024px) {
  .cards-section {
    flex-direction: column;
    align-items: center;
    gap: 0px;
    margin: 20px 0;
  }

  .icons-container {
    flex-direction: row;
    align-items: center;
    gap: 20px;
    margin: 10px auto;
  }

  .cards-services {
    flex-direction: column;
    align-items: center;
  }
}

@media (max-width: 1280px) {
  .home {
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('@/assets/images/ImageMobile.webp');
    background-size: cover;
    height: 100vh;
    height: calc(100vh - 100px);
    width: 100%;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
  }
}
</style>
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

      <section class="services" id="services">
        <CustomTitle msg="Serviços" />
        <ServicesPage />
      </section>

      <section class="mainworks" id="mainworks">
        <CustomTitle msg="Principais obras" id="title" />
        <div class="container">
          <div class="cards-services">
            <MainWorks
              :cards="[
                { imageSrc: '/images/manatí.png', title: 'Manatí', info: 'Informações sobre a obra Manatí.' },
                { imageSrc: '/images/rutra.png', title: 'Rutra Snitram', info: 'Detalhdsadsadasdwsdsaes sobre a obra Rutra Snitram.' },
                { imageSrc: '/images/shopping.png', title: 'Piauí Shopping', info: 'Dados do projeto Piauí Shopping.' }
              ]"
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
  background-image: url('../public/images/background.png');
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: calc(100vh - 100px);
  background-position: center;
}

.about, .services, .mainworks, .strategy {
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
  text-align: center;
  width: 80%;
  color: white;

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

@media (max-width: 1024px) {
  .cards-section {
    flex-direction: column;
    align-items: center;
    gap: 0px;
  }

  .icons-container {
    flex-direction: row;
    align-items: center;
    width: 45%;
  }

  .cards-services {
    flex-direction: column;
    align-items: center;
  }

  .about p {
    padding: 0 10%;
  }
}

</style>

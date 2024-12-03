<template>
  <div id="app">
    <div class="content">
      <AppHeader />
      <section class="home">
        <HomePage />
      </section>

      <section class="about">
        <CustomTitle msg="Um pouco sobre nós" class="title" />
        <CustomText id="CustomText" text="A Construtora e Incorporadora Soma Ltda, atuante no Piauí desde 2000, destaca-se pelo atendimento personalizado e compromisso com a qualidade na construção civil. Focada em superar expectativas, investe em excelência e na sua equipe, garantindo soluções sob medida e satisfação em cada projeto." />
        <CircularCarousel />
      </section>
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
        <CustomTitle msg="identidade estrategica" />
        <!-- Usando o componente CustomCard -->
        <div class="cards-section">
          <CustomCard
            iconPath="/Vector(2).svg"
            subtitle="Missão"
            text="“Fornecer soluções de engenharia com qualidade, compromisso socioambiental e segurança.”"
          />
          <CustomCard
            iconPath="/Vector(3).svg"
            subtitle="Visão"
            text="“Inovar na área de infraestrutura de transportes com alto desemprenho e melhoria contínua.”"
          />
          <CustomCard
            iconPath="/Vector(4).svg"
            subtitle="Valores"
            text="“Compromisso com resultados eficientes, segurança, respeito socioambiental, iniciativa, confiança 
e valorização profissional.”"
          />
        </div>
      </section>

      <section class="services">
        <CustomTitle msg="Serviços" />
        <ServicesPage />
      </section>

      <section class="mainworks"></section>

      <!-- <AppFooter /> Aqui deve estar o footer, quando feito -->
      <FooterPage/>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/HomePage.vue';
import CustomTitle from './components/CustomTitle.vue'
import CustomText from './components/CustomText.vue';
import CircularCarousel from './components/CircularCarousel.vue';
import CustomIcon from './components/CustomIcon.vue';
import CustomCard from './components/CustomCard.vue';
import ServicesPage from './components/ServicesPage.vue';
import FooterPage from './components/FooterPage.vue';

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
    FooterPage
  }
}
</script>

<style scoped>
.home {
  background-image: url('../public/images/background.png');
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: calc(100vh - 100px);
}

.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  margin: 0 0 2% 0;
}

#CustomText {
  margin: 0px 10%;
}

.about {
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center; 
}

.strategy {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center;
}

.icons-container {
  display: flex; 
  justify-content: center; 
  align-items: center; 
  gap: 50px; 
  margin-top: 50px;
}

.cards-section {
  display: flex;
  justify-content: space-around;
  gap: 200px;
  margin-top: 35px;
}

.services {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  padding-top: 5%;
}
</style>

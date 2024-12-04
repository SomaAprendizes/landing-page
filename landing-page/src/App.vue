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

      <section class="mainworks">
        <div class="container">
          <CustomTitle msg="Principais obras" id="title" />
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

      <!-- <AppFooter /> Aqui deve estar o footer, quando feito -->
      <FooterPage />
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
    FooterPage,
    MainWorks,
  },
};
</script>

<style scoped>
#app .home {
  background-image: url('../public/images/background.png');
  background-attachment: fixed;
  background-size: cover;
  width: 100vw;
  height: calc(100vh - 100px);
  background-position: center;
}

#app .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  margin: 0 0 2% 0;
}

#app .about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#app .about #CustomText {
  margin: 0px 10%;
}

#app .strategy {
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}

#app .icons-container {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
}

#app .cards-section {
  display: flex;
  justify-content: space-around;
  gap: 200px;
  margin-top: 35px;
}

#app .services {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 5%;
}

#app .mainworks {
  width: 100%;
}

#app .mainworks .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app .mainworks .container #title {
  text-align: center;
  margin-bottom: 20px;
}

#app .mainworks .container .cards-services {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

</style>

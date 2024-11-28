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
        <CustomTitle msg="identidade estrategica" />
      </section>
      <section class="services"></section>
      <section class="mainworks"></section>

      <!-- <AppFooter /> Aqui deve estar o footer, quando feito -->
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import HomePage from './components/HomePage.vue';
import CustomTitle from './components/CustomTitle.vue'
import CustomText from './components/CustomText.vue';
import CircularCarousel from './components/CircularCarousel.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    HomePage,
    CustomTitle,
    CustomText,
    CircularCarousel
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
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center; 
  text-align: center; 
}
</style>

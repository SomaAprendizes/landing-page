<template>
  <div id="app">
    <div class="content">
      <AppHeader />
      <CustomTitle msg="Um pouco sobre nós" />
      <CustomText id="CustomText" text="A Construtora e Incorporadora Soma Ltda, atuante no Piauí desde 2000, destaca-se pelo atendimento personalizado e compromisso com a qualidade na construção civil. Focada em superar expectativas, investe em excelência e na sua equipe, garantindo soluções sob medida e satisfação em cada projeto." />
      <CircularCarousel />
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import CustomTitle from './components/CustomTitle.vue'
import CustomText from './components/CustomText.vue';
import CircularCarousel from './components/CircularCarousel.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    CustomTitle,
    CustomText,
    CircularCarousel
  }
}
</script>

<style scoped>
#app {
  background-color: #1f1f1f;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  font-family: Poppins, sans-serif;
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
</style>

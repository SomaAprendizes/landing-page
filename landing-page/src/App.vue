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
          Desde 2000, a Soma transforma vidas e conecta pessoas, construindo com excelência e responsabilidade. Valorizamos o progresso sustentável, conservando o meio ambiente e deixando um legado positivo em cada projeto.
          Soma. Construímos juntos. Crescemos juntos. Conservamos juntos.
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
            text="Construir obras que transformam vidas, conectam pessoas e impulsionam o desenvolvimento com excelência, compromisso e respeito ao meio ambiente.
" />
          <CustomCard iconPath="/Vector(3).svg" subtitle="Visão"
            text="Ser referência nacional em infraestrutura de qualidade, promovendo progresso sustentável e deixando um legado positivo.
" />
          <CustomCard iconPath="/Vector(4).svg" subtitle="Valores"
            text="Qualidade: excelência duradoura; Valorização: apoio aos colaboradores; Sustentabilidade: respeito ambiental; Inovação: soluções eficientes; Ética: transparência e integridade; Impacto: transformação social e ambiental." />
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
              { imageSrc: '/images/manati.jpg', title: 'Pousada Manatí', info: 'Execução de edifício em concreto armado e alvenaria de vedação'},
              { imageSrc: '/images/constrhab.jpg', title: 'Construção habitacional', info: 'Construção de 384 (trezentos e oitenta e quatro) apartamentos habitacionais - Residencial Antonieta Araújo' },
              { imageSrc: '/images/shopping.jpg', title: 'Piauí Shopping', info: 'Construção de shopping center' }
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
  background-image: url('../public/images/background.png');
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
  text-align: center;
  max-width: 75%;
  color: white;
  font-size: 1.2rem;
  line-height: 1.5;
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
}

@media (max-width: 768px) {
  .about p {
    max-width: 90%;
    font-size: 1rem;
    padding: 0 10px;
  }

  .home {
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('../public/images/ImageMobile.png');
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
@media (min-width: 769px) and (max-width: 1280px) {
  .home{
    background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.3)), url('../public/images/ImageMobile.png');
  }
}

@media (max-width: 425px) {
  .about p {
    font-size: 0.9rem;
    padding: 0 10px;
    line-height: 1.4;
    width: 45%;
    text-align: justify;
  }
}

@media (min-width: 425px) and (max-width: 445px) {
  .about p {
    font-size: 0.9rem;
    padding: 0 10px;
    line-height: 1.4;
    width: 50%;
    text-align: justify;
  }
}

@media (max-width: 545px) and (min-width: 500px) {
  .about p {
    font-size: 0.9rem;
    padding: 0 10px;
    line-height: 1.4;
    width: 60%;
    text-align: justify;
  }
}
</style>
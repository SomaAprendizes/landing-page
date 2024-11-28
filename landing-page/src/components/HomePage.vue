<template>
    <div class="backgraund">
      <h2 class="textHome">
        IDEIAS QUE VIRAM CONQUISTAS
      </h2>
      <img src="/ImgFundo.svg" alt="Logo-inicial" class="imgHome">
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
  };
  </script>
  
  <style scoped>
  .backgraund {
    background-image: url("../../public/Rectangle.png");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  
  .textHome {
    margin-top: 0;
    color: white;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
  }
  
  .imgHome {
  margin-top: 0; 
  height: auto;
  max-width: 100%;
}

.textHome {
  margin-bottom: 5px; /* Ajuste a distância abaixo do título */
}

.imgHome {
  margin-top: 5px; /* Ajuste a distância acima da imagem */
}

  </style>

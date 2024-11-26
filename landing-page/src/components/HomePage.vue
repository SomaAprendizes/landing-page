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
    color: white;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
  }
  
  .imgHome {
    margin-top: 10px;
    height: auto;
    max-width: 200px;
  }
  </style>
  
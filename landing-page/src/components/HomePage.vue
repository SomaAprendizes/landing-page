<template>
  <div class="home">
    <h2 class="textHome">
      IDEIAS QUE VIRAM CONQUISTAS
    </h2>
    <img src="../../public//images/ImgFundo.svg" alt="Logo-inicial" class="imgHome">
  </div>
</template>

<script>
export default {
  name: "HomePage",
};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.home .textHome {
  margin-top: 0;
  color: white;
  font-size: 3rem;
  font-weight: bold;
  text-align: center;
}
  
.home .imgHome {
  margin-top: 0; 
  height: auto;
  max-width: 100%;
}

.home .textHome {
  margin-bottom: 5px;
}

.home .imgHome {
  margin-top: 5px;
}
</style>

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
  margin-bottom: 5px;
}

.imgHome {
  margin-top: 5px;
}
</style>

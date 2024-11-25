<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="/Logotipo.svg" alt="Logo-soma">
      </div>
      <nav class="nav">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#principais-obras">Principais Obras</a></li>
          <li class="highlight"><a href="#trabalhe-conosco">Trabalhe Conosco</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style>
* {
  margin: 0 !important;
  padding: 0 !important;
  box-sizing: border-box;
}

html,
body {
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background-color: #333333;
  color: white;
  width: 100%;
  height: 100px;
  min-height: 80px;
  z-index: 1000;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
}

.logo img {
  height: 75px;
  color: white;
  margin-left: 120px !important;
  width: auto;
}

.nav ul {
  display: flex;
  gap: 1.5rem;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav ul li {
  position: relative;
}

.nav ul li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s;
}

.nav ul li a:hover {
  color: #FD8700;
}

.nav ul li.highlight a {
  padding: 0.7rem 0.7rem !important;
  border: 2px solid #FD8700;
  border-radius: 5px;
  font-weight: bold;
  color: #FD8700;
}

.nav ul li.highlight a:hover {
  background-color: #FD8700;
  color: white;
}
</style>
<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />

  <footer class="footer">
    <!-- Linha separada -->
    <div class="footer-line"></div>
    <!-- Footer Top -->
    <div class="footer-top">
      <!-- Logo no início (esquerda) -->
      <div class="footer-logo">
        <img src="../../public//images/ImgFundo.svg" alt="Logo" class="logo" />
      </div>
      <!-- Seções alinhadas horizontalmente -->
      <div class="footer-content">
        <!-- Contato -->
        <div class="footer-section">
          <h4>Contato</h4>
          <!-- Linhas Horizontais Fixas -->
          <div class="horizontal-line"></div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <span>recursos.humanos@somapiaui.com.br</span>
          </div>
          <div class="horizontal-line"></div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <span>+55 (89) 93422-1862</span>
          </div>
          <div class="horizontal-line"></div>
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Av. Senador Helvídeo Nunes, 2788, Junco, Picos, Piauí</span>
          </div>
        </div>

        <!-- Redes Sociais -->
        <div class="footer-section">
          <h4>Redes Sociais</h4>
          <div class="horizontal-line"></div>
          <ul class="social-links">
            <li>
              <a href="#"><i class="fab fa-instagram"></i></a>
            </li>
            <li>
              <a href="#"><i class="fab fa-linkedin"></i></a>
            </li>
          </ul>
          <div class="horizontal-line"></div> <!-- Linha adicional -->
        </div>

        <!-- Explore -->
        <div class="footer-section">
          <h4>Explore as Oportunidades de Carreira Conosco</h4>
          <div class="horizontal-line"></div>
          <div class="link-container">
            <a href="https://www.bancodetalentossoma.com.br">
              https://www.bancodetalentossoma.com.br
            </a>
          </div>
          <div class="horizontal-line link-line"></div> <!-- Linha abaixo do link -->
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterPage",
};
</script>

<style scoped>
/* Footer */
.footer {
  color: white;
  padding: 40px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-line {
  width: 100%;
  max-width: 1200px;
  height: 2px;
  background-color: white;
  margin-bottom: 20px;
}

.footer-top {
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1200px;
}

.footer-logo {
  display: flex;
  justify-content: flex-start;
  margin-bottom: 20px;
}

.footer-logo img {
  max-width: 120px;
  height: auto;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  gap: 20px;
}

.footer-section {
  flex: 1;
  padding: 0 10px;
  text-align: left;
}

.footer-section h4 {
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.horizontal-line {
  width: 100%;
  height: 1px;
  background-color: white;
  margin: 10px 0; /* Espaçamento entre linhas */
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px; /* Espaçamento entre ícone e texto */
  padding: 5px 0; /* Padding entre linhas horizontais */
  font-size: 0.8rem;
}

.contact-item i {
  margin-right: 15px;
  font-size: 1rem;
}

.social-links {
  display: flex;
  justify-content: flex-start; /* Alinha os ícones à esquerda */
  gap: 20px; /* Espaço entre os ícones */
  margin: 0; /* Remove margem padrão do ul */
  padding: 0; /* Remove padding padrão do ul */
}

.social-links li {
  display: inline-block;
}

.social-links li a {
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
}

.social-links li a:hover {
  color: #f39c12;
  transition: 0.6s;
}

/* Estilo para o link na seção "Explore" */
.link-container {
  display: flex;
  justify-content: flex-start; /* Move o link para a direita */
  margin-top: 17px;
}

.link-container a {
  color: white;
  text-decoration: none; /* Remove a linha embaixo do link */
  font-size: 0.8rem;
}

.link-container a:hover {
  color: #f39c12;
  transition: 0.6s;
}

/* Linha abaixo do link */
.link-line {
  width: 100%;
  height: 1px;
  background-color: white;
  margin-top: 15px; /* Ajuste para alinhar com as outras linhas */
}
</style>

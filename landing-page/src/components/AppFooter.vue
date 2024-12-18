<template>
  <link
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
    rel="stylesheet"
  />

  <footer class="footer">
    <div class="footer-line"></div>

    <div class="footer-top">
      <div class="footer-logo">
        <img src="../../public/image.svg" alt="Logo" class="logo" />
      </div>

      <div class="footer-content">
        <div class="footer-section">
          <h4>Contato</h4>
          <div class="horizontal-line"></div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <a id="link" target="_blank" href="mailto:contato@somapiaui.com.br">
              contato@somapiaui.com.br
            </a>
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

        <div class="footer-section">
          <h4>Redes Sociais</h4>
          <div class="horizontal-line"></div>
          <ul class="social-links">
            <li>
              <a
                href="https://instagram.com/construtorasomapiaui/"
                target="_blank"
              >
                <i class="fab fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="fab fa-linkedin"></i>
              </a>
            </li>
          </ul>
          <div class="horizontal-line"></div>
        </div>

        <div class="footer-section">
          <h4>Explore as Oportunidades de Carreira Conosco</h4>
          <div class="horizontal-line"></div>
          <div class="link-container">
            <a href="https:/www.talentosoma.com" target="_blank">
              www.talentosoma.com
            </a>
          </div>
          <div class="horizontal-line link-line"></div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "AppFooter",
};
</script>

<style scoped>
.footer {
  color: white;
  padding: 30px 20px;
  margin: 1% 0 0 0;
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
  margin: 10px 0;
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
  margin: 10px 0;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 5px 0;
  font-size: 0.8rem;
}

.contact-item i {
  margin-right: 15px;
  font-size: 1rem;
}

.social-links {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.social-links li {
  display: inline-block;
}

.social-links li a {
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
  transition: color 0.6s;
}

.social-links li a:hover {
  color: #f39c12;
}

.link-container {
  display: flex;
  justify-content: flex-start;
  margin-top: 17px;
}

.link-container a {
  color: white;
  text-decoration: none;
  font-size: 0.8rem;
}

.link-container a:hover {
  color: #f39c12;
  transition: 0.6s;
}

.link-line {
  width: 100%;
  height: 1px;
  background-color: white;
  margin-top: 15px;
}

#link {
  color: white;
  text-decoration: none;
}

@media (max-width: 768px) {
  .footer-line {
    width: 50%;
    margin: 0 auto 20px auto;
  }
  .footer-logo {
    justify-content: flex-start;
    margin-left: 180px;
  }
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .footer-section {
    width: 50%;
    text-align: start;
  }

  .footer-section h4::after {
    width: 90%;
    height: 2px;
    background-color: white;
    margin: 10px auto;
  }

  .contact-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 10px 0;
    font-size: 0.9rem;
  }

  .contact-item i {
    margin: 0;
    font-size: 1.2rem;
  }

  .social-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
}
@media (min-width: 820px) and (max-width: 1190px) {
  .footer-line {
    width: 100%;
    max-width: 700px;
    margin: 0 auto 20px auto;
  }
  .footer-logo {
    justify-content: flex-start;
    margin-left: 150px;
  }
  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .footer-section {
    width: 100%;
    max-width: 600px;
    text-align: start;
  }

  .footer-section h4::after {
    width: 90%;
    height: 2px;
    background-color: white;
    margin: 10px auto;
  }

  .contact-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    margin: 10px 0;
    font-size: 0.9rem;
  }

  .contact-item i {
    margin: 0;
    font-size: 1.2rem;
  }

  .social-links {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
}
</style>

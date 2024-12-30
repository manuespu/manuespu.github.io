document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const navbarLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("main section");
  
    // Form handling
    form.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;
  
      if (name && email && message) {
        alert(`Gracias, ${name}. Hemos recibido su mensaje y nos pondremos en contacto pronto.`);
        form.reset();
      } else {
        alert("Por favor, complete todos los campos antes de enviar.");
      }
    });
  
    // Navigation handling
    navbarLinks.forEach(link => {
      link.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetSection = document.getElementById(targetId);
  
        sections.forEach(section => {
          section.style.display = "none";
        });
  
        targetSection.style.display = "block";
      });
    });
  
    // Show only the first section by default
    sections.forEach((section, index) => {
      section.style.display = index === 0 ? "block" : "none";
    });
  
    // Simulate map loading
    const map = document.getElementById("map");
    map.innerHTML = `<a href="https://www.google.com/maps/place/Carrer+de+Ganduxer,+107,+Bajos+1a,+08022+Barcelona" target="_blank">Ver en Google Maps</a>`;
  });
  
document.addEventListener('DOMContentLoaded', () => {
  // Back to top: mostrar sólo al hacer scroll y volver arriba suave
  const backBtn = document.getElementById('backToTop');
  if (backBtn) {
    const onScroll = () => {
      if (window.scrollY > 300) backBtn.classList.add('show');
      else backBtn.classList.remove('show');
    };
    window.addEventListener('scroll', onScroll);
    onScroll();

    backBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Formulario: enviar sin ir al inicio y mostrar mensaje al finalizar
  const form = document.getElementById('contactForm');
  const message = document.getElementById('formMessage');
  if (form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const originalText = submitBtn ? submitBtn.textContent : '';
      if (submitBtn) { submitBtn.disabled = true; submitBtn.textContent = 'Enviando...'; }
      if (message) message.style.display = 'none';

      // Simulación de envío asíncrono (reemplazá por tu fetch real)
      await new Promise(r => setTimeout(r, 1200));

      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = originalText || 'Enviar'; }
      form.reset();
      if (message) message.style.display = 'block';
      // No hacemos scroll al inicio
    });
  }
});
document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('menu-desplegable');
  const menu = document.getElementById('menu');

  if (boton && menu) {
    boton.addEventListener('click', () => {
      menu.classList.toggle('activo');
    });

    // Cerrar menú al hacer clic en un enlace
    menu.querySelectorAll('a').forEach(enlace => {
      enlace.addEventListener('click', () => {
        menu.classList.remove('activo');
      });
    });
  }
});
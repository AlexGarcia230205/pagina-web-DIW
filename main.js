document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('menu-desplegable');
  const menu = document.getElementById('menu');
  const body = document.body;

  if (boton && menu) {
    boton.addEventListener('click', () => {
      const abierto = menu.classList.contains('activo');
      if (abierto) {
        menu.classList.remove('activo');
        body.classList.remove('menu-abierto');
      } else {
        menu.classList.add('activo');
        body.classList.add('menu-abierto');
      }
    });

    // Cerrar al hacer clic en un enlace
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.remove('activo');
        body.classList.remove('menu-abierto');
      });
    });
  }
});
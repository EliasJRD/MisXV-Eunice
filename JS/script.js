
// Seleccionamos los elementos de tu HTML
const contenedor = document.querySelector('.contenedor');
const botonAbrir = document.querySelector('.abrir-inv');
const invitacionAbierta = document.querySelector('.abierto');
const musica = document.getElementById('musica-fondo');

// Agregamos el evento de clic
botonAbrir.addEventListener('click', () => {
    // Ocultamos la vista de "abrir"
    botonAbrir.style.display = 'none';

    // Mostramos la invitación
    invitacionAbierta.style.display = 'block';

    // Ajustamos la altura del contenedor
    contenedor.style.height = 'auto';

    contenedor.style.cursor = 'default';

    musica.play();
});

// Configura la fecha de los XV años (Mes, Día, Año, Hora)
const fechaEvento = new Date("2026-11-07T21:00:00-09:00").getTime();

const cuentaRegresiva = setInterval(function () {
    const ahora = new Date().getTime();
    const distancia = fechaEvento - ahora;

    // Cálculos matemáticos para días, horas, minutos y segundos
    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    // Imprimir los resultados en los elementos del HTML
    document.getElementById("dias").innerText = dias;
    document.getElementById("horas").innerText = horas;
    document.getElementById("minutos").innerText = minutos;
    document.getElementById("segundos").innerText = segundos;

    // Si la cuenta regresiva termina
    if (distancia < 0) {
        clearInterval(cuentaRegresiva);
        document.querySelector(".cajas-tiempo").innerHTML = "¡El gran día ha llegado!";
    }
}, 1000); // Se actualiza cada 1000 milisegundos (1 segundo)


document.addEventListener("DOMContentLoaded", () => {
  // Seleccionamos todos los elementos con la clase
  const elementos = document.querySelectorAll('.fade-in-scroll');

  // Configuración del observador
  const opciones = {
    root: null, // Usa el viewport de la pantalla
    rootMargin: "0px",
    threshold: 0.15 // El efecto se activa cuando el 15% del elemento es visible
  };

  const observador = new IntersectionObserver((entradas, observador) => {
    entradas.forEach(entrada => {
      // Si el elemento entra en la pantalla
      if (entrada.isIntersecting) {
        entrada.target.classList.add('visible');
        // Dejamos de observar el elemento para que la animación solo ocurra una vez
        observador.unobserve(entrada.target);
      }
    });
  }, opciones);

  // Decimos al observador que vigile cada uno de los elementos
  elementos.forEach(elemento => {
    observador.observe(elemento);
  });
});
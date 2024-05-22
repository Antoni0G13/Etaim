const modoNocturnoBtn = document.getElementById('modo-nocturno-btn');

modoNocturnoBtn.addEventListener('click', () => {
    document.body.classList.toggle('modo-nocturno');
    
    // Agrega condición para cambiar el texto del botón según el modo activo
    if (document.body.classList.contains('modo-nocturno')) {
        modoNocturnoBtn.textContent = 'Day Mode'; // Cambia el texto a "Modo Día" si se activa el modo nocturno
    } else {
        modoNocturnoBtn.textContent = 'Night Mode'; // Cambia el texto a "Modo Nocturno" si se desactiva el modo nocturno
    }
});

// Seleccionar todas las imágenes en la sección de portafolio
const portfolioItems = document.querySelectorAll('.portfolio-item');

// Iterar sobre cada imagen y agregar el evento mouseover
portfolioItems.forEach(item => {
    const overlay = item.querySelector('.overlay');
    item.addEventListener('mouseover', function() {
        overlay.style.display = 'block'; // Mostrar el div transparente
    });
    
    item.addEventListener('mouseleave', function() {
        overlay.style.display = 'none'; // Ocultar el div transparente cuando se retira el mouse
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar todos los elementos con la clase "skill"
    const skills = document.querySelectorAll('.skill');

    // Iterar sobre cada elemento "skill" y agregar un evento de clic
    skills.forEach(skill => {
        skill.addEventListener('click', () => {
            // Obtener el popup asociado a la habilidad actual
            const popup = skill.querySelector('.popup');
            
            // Alternar la clase "open" para mostrar u ocultar el popup
            popup.classList.toggle('open');
        });
    });

    // Cierra el popup al hacer clic en el botón de cierre
    document.querySelectorAll('.close').forEach(closeBtn => {
        closeBtn.addEventListener('click', function() {
            const popup = closeBtn.closest('.popup');
            popup.classList.remove('open');
        });
    });

    // Cierra el popup al hacer clic fuera de él
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.skill')) {
            document.querySelectorAll('.popup').forEach(popup => {
                popup.classList.remove('open');
            });
        }
    });
});


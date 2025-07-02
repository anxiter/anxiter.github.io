document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.querySelector('main');
    mainContent.classList.add('entrada-brillo');

    const anniversaryDate = new Date('July 1, 2025 23:49:30').getTime();

    const countdownElement = document.getElementById('countdown');
    const aniversarioMensaje = document.getElementById('aniversario-mensaje');
    const cuentaRegresivaSection = document.getElementById('cuenta-regresiva-section');
    const lucesMensaje = document.querySelectorAll('#aniversario-mensaje .luz');

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = anniversaryDate - now;

        if (distance < 0) {
            clearInterval(countdownFunction);
            countdownElement.style.display = 'none';
            aniversarioMensaje.classList.remove('hidden');
            
            lucesMensaje.forEach(function(luz, index) {
                luz.style.animation = `brillo 1.5s infinite alternate ${index * 0.1}s`;
                luz.style.opacity = 0.5;
            });

            cuentaRegresivaSection.style.minHeight = '300px';
            cuentaRegresivaSection.style.justifyContent = 'center';
            cuentaRegresivaSection.style.alignItems = 'center';
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        countdownElement.innerHTML = `${days} días ${hours} horas ${minutes} minutos ${seconds} segundos`;
    }

    updateCountdown();

    const countdownFunction = setInterval(updateCountdown, 1000);
});

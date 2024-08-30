// Definir la fecha de inicio y finalización de la cuenta regresiva
const startDate = new Date("2024-03-16T21:00:00").getTime();
const endDate = new Date("2024-11-11T00:00:00").getTime();

// Actualizar el contador cada segundo
const countdown = setInterval(function() {

    // Obtener la fecha y hora actual
    const now = new Date().getTime();

    // Calcular la diferencia entre la fecha final y la fecha actual
    const difference = endDate - now;

    // Calcular días, horas, minutos y segundos restantes
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    // Mostrar el tiempo restante en el elemento con id "timer"
    document.getElementById("timer").innerHTML = `Días: ${days.toString().padStart(2, '0')} Horas: ${hours.toString().padStart(2, '0')} Minutos: ${minutes.toString().padStart(2, '0')} Segundos: ${seconds.toString().padStart(2, '0')}`;

    // Si la fecha actual supera la fecha final, detener la cuenta regresiva
    if (now > endDate) {
        clearInterval(countdown);
        document.getElementById("timer").innerHTML = "¡Tiempo Expirado!";
    }
}, 1000);
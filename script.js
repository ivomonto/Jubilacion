// Set the date we're counting down to (1 de febrero de 2036)
var countDownDate = new Date(2036, 1, 1, 0, 0, 0).getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for years, days, hours, minutes and seconds
  var years = Math.floor(distance / (1000 * 60 * 60 * 24 * 365));
  var totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));
  var days = totalDays - (years * 365); // Restar los días de los años completos
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in elements with the appropriate IDs
  document.getElementById("years").innerText = years;
  document.getElementById("days").innerText = days;
  document.getElementById("hours").innerText = hours;
  document.getElementById("minutes").innerText = minutes;
  document.getElementById("seconds").innerText = seconds;

  // If the count down is over, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("headline").innerText = "¡Cuenta regresiva terminada!";
    document.getElementById("timer").style.display = "none";
  }
}, 1000);

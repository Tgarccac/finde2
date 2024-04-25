// Secret number: el número secreto que el usuario debe adivinar
const secretNumber = 55;

// Variable global para contar los intentos
let tryCounter = 0;

// Seleccionar el input
const guessInput = document.getElementById('guess-input');

// Seleccionar el botón y agregar el event listener para el evento "click"
const guessBtn = document.getElementById('guess-btn');
guessBtn.addEventListener('click', checkGuess);

function checkGuess(e) {
  e.preventDefault(); // Prevenir la acción predeterminada del formulario

  // Desactivar el botón después del primer intento
  guessBtn.disabled = true;

  // Aumentar el contador de intentos en uno por cada intento
  tryCounter++;
  
  // Convertir el valor de entrada a un número
  const userGuess = Number(guessInput.value);
  
  // Comparar el intento con el número secreto y proporcionar retroalimentación
  if(userGuess === secretNumber) {
    // Cambiar el fondo a azul cielo
    document.body.style.backgroundColor = 'skyblue';
    // Mostrar un GIF de alguien aplaudiendo
    const applauseGif = document.createElement('img');
    applauseGif.src = 'https://media.tenor.com/3yPBPC_dwe8AAAAM/leonardo-dicaprio-clapping.gif'; 
    document.body.appendChild(applauseGif);
    // Mostrar un mensaje de felicitación
    alert(`¡Enhorabuena! Has adivinado el número secreto. El número era: ${secretNumber}. ¡Ganaste con ${tryCounter} intentos! 🎉`);
    tryCounter = 0; // Reiniciar el contador de intentos después de adivinar correctamente
  } else if(userGuess < secretNumber) {
    alert(`Muy bajo, prueba un valor más alto. Número de intentos: ${tryCounter} 😂`);
  } else {
    alert(`Muy alto, prueba un valor más bajo. Número de intentos: ${tryCounter} 😂`);
  }

  // Limpiar el campo de entrada para una nueva adivinanza
  guessInput.value = '';
}

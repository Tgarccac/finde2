// Agrega un event listener al botón de guardar
document.getElementById('saveButton').addEventListener('click', function() {
    // Obtiene el texto ingresado por el usuario
    const inputText = document.getElementById('textInput').value;
    // Verifica si el texto no está vacío
    if (inputText.trim() !== '') {
        // Obtiene el contenedor donde se mostrará el texto guardado
        const savedTextContainer = document.getElementById('savedTextContainer');
        // Crea un nuevo div para mostrar el texto guardado
        const savedTextDiv = document.createElement('div');
        // Agrega una clase al nuevo div
        savedTextDiv.classList.add('savedText');
        // Establece el texto del nuevo div como el texto ingresado por el usuario
        savedTextDiv.textContent = inputText;
        // Agrega el nuevo div al contenedor de texto guardado
        savedTextContainer.appendChild(savedTextDiv);
        // Guarda el texto en el almacenamiento local del navegador
        saveToLocalStorage(inputText);
        // Limpia el campo de texto después de guardar
        document.getElementById('textInput').value = '';
    } else {
        // Muestra una alerta si el usuario intenta guardar texto vacío
        alert('Por favor, escribe algo antes de guardar.');
    }
});

// Obtiene todas las estrellas y agrega un event listener a cada una
const stars = document.querySelectorAll('.star');
stars.forEach(star => {
    star.addEventListener('click', function() {
        // Obtiene el valor de la estrella seleccionada
        const value = parseInt(this.getAttribute('data-value'));
        // Crea un nuevo div para mostrar la puntuación
        const rating = document.createElement('div');
        // Establece el texto del nuevo div como la puntuación seleccionada
        rating.textContent = `Puntuación: ${value}/5`;
        // Agrega una clase al nuevo div
        rating.classList.add('savedText');
        // Agrega el nuevo div al contenedor de texto guardado
        document.getElementById('savedTextContainer').appendChild(rating);
        // Guarda la puntuación en el almacenamiento local del navegador
        saveToLocalStorage(`Puntuación: ${value}/5`);
    });
});

// Función para guardar datos en el almacenamiento local del navegador
function saveToLocalStorage(data) {
    let savedData = JSON.parse(localStorage.getItem('savedData')) || [];
    savedData.push(data);
    localStorage.setItem('savedData', JSON.stringify(savedData));
}

// Función para cargar datos guardados desde el almacenamiento local al cargar la página
window.addEventListener('DOMContentLoaded', function() {
    const savedData = JSON.parse(localStorage.getItem('savedData'));
    if (savedData) {
        const savedTextContainer = document.getElementById('savedTextContainer');
        savedData.forEach(item => {
            const savedTextDiv = document.createElement('div');
            savedTextDiv.classList.add('savedText');
            savedTextDiv.textContent = item;
            savedTextContainer.appendChild(savedTextDiv);
        });
    }
});




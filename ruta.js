function mostrarRuta(idRuta) {
    // Oculta todas las rutas
    var rutas = document.getElementsByClassName('ruta');
    for (var i = 0; i < rutas.length; i++) {
        rutas[i].classList.remove('activa');
    }
    // Muestra la ruta seleccionada
    var ruta = document.getElementById(idRuta);
    if (ruta) {
        ruta.classList.add('activa');
    }
}



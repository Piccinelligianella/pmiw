//funciones de los estados
//me gusta tener esto a parte


function cambiarEstado(nuevoEstado) {
  if (nuevoEstado >= 0 && nuevoEstado < animaciones.length) {
    estadoActual = nuevoEstado;
    frameActual = 1;
    tiempoUltimoFrame = millis();
  }
}

function reiniciarSistema() {
  estadoActual = 0;
  frameActual = 1;
  tiempoUltimoFrame = millis();
}

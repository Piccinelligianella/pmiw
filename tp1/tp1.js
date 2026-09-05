//Gianella Naomi Piccinelli (Daniel)
//legajo 90907/4
//comision 3

//Sprites y fondo hechos por @Sombritaarts o sea yo :D

let animaciones = []; 
let estadoActual = 0;
let frameActual = 0;

let tiempoUltimoFrame = 0;
let mfps = 1000 / 8;

let imagenFondo;

function preload() {
  
  imagenFondo = loadImage("data/fondo.png");
  
  let carpetas = [
    { nombre: "descanso", total: 12 },
    { nombre: "saludando", total: 14 },
    { nombre: "salto", total: 13 }
  ];

  for (let c = 0; c < carpetas.length; c++) {
    
    animaciones[c] = {
      nombre: carpetas[c].nombre,
      totalFrames: carpetas[c].total,
      imagenes: [] 
    };

    for (let i = 1; i < carpetas[c].total; i++) {
      let numeroFormateado = nf(i, 4);
      let ruta = "data/sprite" + c + "/" + carpetas[c].nombre + "." + numeroFormateado + ".png";
      
      animaciones[c].imagenes[i] = loadImage(ruta);
    }
  }
}

function setup() {
  createCanvas(800, 600);
  tiempoUltimoFrame = millis();
}

function draw() {
  background(220);
  
  if (imagenFondo) {
    imageMode(CORNER);
    image(imagenFondo,0,0,800,600);
  }

  if (animaciones[estadoActual] && animaciones[estadoActual].imagenes[frameActual]) {
    imageMode(CENTER);
    image(animaciones[estadoActual].imagenes[frameActual], 400, 300, 400, 400);
  }

  if (millis() - tiempoUltimoFrame >= mfps) {
    frameActual++;
    let maxFrames = animaciones[estadoActual].totalFrames; 

    if (frameActual >= maxFrames) {
      if (estadoActual === 0) {
        frameActual = 1;
      } else {
        cambiarEstado(0); 
      }
    }
    tiempoUltimoFrame = millis();
  }

  //el texto que da los reglas de inetraccin porque soy masoquista
  imageMode(CORNER);
  fill(255);
  textSize(14);
  text("Si presionas la tecla 1, 2 o R pasara algo :D", 20, 40);
  text("Estado: " + estadoActual + " | frame: " + frameActual + " de " + animaciones[estadoActual].totalFrames, 20, 60);
}


//la funcion de las teclas para la interaccion 
function keyPressed() {
  if (key === '1') cambiarEstado(1);
  else if (key === '2') cambiarEstado(2);
  else if (key === 'r' || key === 'R') reiniciarSistema();
}

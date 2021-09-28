//Codigo del cuadrado
console.group('Cuadrados');

function perimetroCuadrado(lado){
  return lado * 4;
};

function areaCuadrado(lado){
  return lado * lado;
};

console.groupEnd();

//Codigo del triangulo

console.group('Triangulos');

function perimetroTriangulo(lado1,lado2,base){
  return lado1 + lado2 + base;
};

function areaTriangulo(base,altura){
  return (base * altura) / 2;
};

console.groupEnd();

//Codigo del circulo

console.group('Circulos');

// Diametro
function diametroCirculo(radio){
  return radio * 2;
};

// PI
const PI = Math.PI;

// Circunferencia
function perimetroCirculo(radio){
  const diametro = diametroCirculo(radio);
  return diametro * PI;
};

// Area
function areaCirculo(radio){
  return (radio * radio) * PI;
};

console.groupEnd();

// Aqui interactuamos con el html

function calcularPerimetroCuadrado() {

}

function calcularAreaCuadrado() {

}

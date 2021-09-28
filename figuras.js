//Codigo del cuadrado
console.group('Cuadrados');

const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

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

// Radio
// const radioCirculo = 4;
// console.log('El radio del circulo es ' + radioCirculo + ' cm');

// Diametro
function diametroCirculo(radio){
  return radio * 2;
};

// PI
const PI = Math.PI;
console.log('PI es ' + PI + ' cm');

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

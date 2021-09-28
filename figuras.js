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
  const input = document.getElementById('InputCuadrado');
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
};

function calcularAreaCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
};

function calcularPerimetroTriangulo(){
  const inputLado1 = document.getElementById('InputTrianguloLado1');
  const inputLado2 = document.getElementById('InputTrianguloLado2');
  const inputBase = document.getElementById('InputTrianguloBase');

  const valueLado1 = inputLado1.value;
  const valueLado2 = inputLado2.value;
  const valueBase = inputBase.value;

  const perimetro = perimetroTriangulo(valueLado1, valueLado2, valueBase);
  alert(perimetro);
};

function calcularAreaTriangulo(){
  const inputBase = document.getElementById('InputTrianguloBase');
  const inputAltura = document.getElementById('inputTrianguloAltura');

  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value;

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
};

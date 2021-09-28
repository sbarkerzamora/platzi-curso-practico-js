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

function alturaTrianguloIsoceles(lado1,lado2,base){
  if (lado1 === lado2) {
    return (Math.sqrt( (lado1 * lado1) - ((base * base) / 2)));
  } else {
    alert('Los lados tienen que ser iguales, favor intentar de nuevo');
  }
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
  const inputBase = document.getElementById('InputTrianguloBaseArea');
  const inputAltura = document.getElementById('InputTrianguloAltura');

  const valueBase = inputBase.value;
  const valueAltura = inputAltura.value;

  const area = areaTriangulo(valueBase, valueAltura);
  alert(area);
};

function calcularDiametroCirculo(){
  const inputRadio = document.getElementById('InputCirculoRadio');
  const radio = inputRadio.value;

  const diametro = diametroCirculo(radio);
  alert(diametro);
};

function calcularCircunferenciaCirculo(){
  const inputRadio = document.getElementById('InputCirculoRadio');
  const radio = inputRadio.value;

  const circunferencia = perimetroCirculo(radio);
  alert(circunferencia);
};

function calcularAreaCirculo(){
  const inputRadio = document.getElementById('InputCirculoRadio');
  const radio = inputRadio.value;

  const area = areaCirculo(radio);
  alert(area);
};

function calcularAlturaTrianguloIsoceles(){
  const inputLado1 = document.getElementById('InputTrianguloLado1Altura');
  const inputLado2 = document.getElementById('InputTrianguloLado2Altura');
  const inputBase = document.getElementById('InputTrianguloBaseAltura');

  const lado1 = inputLado1.value;
  const lado2 = inputLado2.value;
  const base = inputBase.value;

  const alturaIsoceles = alturaTrianguloIsoceles(lado1,lado2,base);
  alert(alturaIsoceles)
};

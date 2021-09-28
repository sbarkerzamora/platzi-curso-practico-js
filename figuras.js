//Codigo del cuadrado
console.group('Cuadrados');

const ladoCuadrado = 5;
console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

const perimetroCuadrado = ladoCuadrado * 4;
console.log('El perimetro del cuadrado es ' + perimetroCuadrado + ' cm');

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log('El el area del cuadrado es ' + areaCuadrado + ' cm^2');

console.groupEnd();

//Codigo del triangulo

console.group('Triangulos');

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;

console.log('Los lados del triangulo miden: '
  + ladoTriangulo1
  + ' cm,'
  + ladoTriangulo2
  + ' cm,'
  + baseTriangulo
  + ' cm'
);

console.groupEnd();

function calcularDescuento(precio,descuento){
  const porcentajePrecioConDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;
  return precioConDescuento;
};

function onClickPriceDiscount() {
  const inputPrice = document.getElementById('InputPrice');
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById('InputDiscount');
  const discountValue = inputDiscount.value;

  const calcPrecioConDescuento = calcularDescuento(priceValue, discountValue);

  const resultPrice = document.getElementById('resultPrice');
  resultPrice.innerText = 'El precio con descuento es $' + calcPrecioConDescuento;
}

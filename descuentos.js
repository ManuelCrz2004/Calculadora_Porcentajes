function CalcularDescuento(precio, descuento) {
    const PorcentajeTotal = 100 - descuento;
    const PrecioTotal = (precio * PorcentajeTotal)/ 100;

    return PrecioTotal;
}
function MainAction() {
    const Price = document.getElementById("TotalPrice").value;
    const Discount = document.getElementById("Percent").value;

    const FinalPrice = CalcularDescuento(Price, Discount);
    
    const PriceResult = document.getElementById("FinalResult");
    PriceResult.innerText = "El Precio final a pagar es: $" + FinalPrice;
}
function Converter() {
    var valorElemento = parseFloat(document.getElementById("valor").value)
    var valorEmDolarNumerico = parseFloat(valorElemento)

    var valorEmReal = valorEmDolarNumerico * 5

    var elementoValorConvertido = document.getElementById("valorConvertido")
    var valorConvertido = "O resultado em real é R$" + valorEmReal
    elementoValorConvertido.innerHTML = valorConvertido
}
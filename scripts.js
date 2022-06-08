function calcularDolar() {
    
    let real = document.getElementById("input-real").value
    let dolar = document.getElementById("input-dolar").value

    let resultado = real / dolar

    dolares.innerHTML = (`$ ${resultado.toFixed(2)} dólares!!!`)

    //alert(`O resultado é ${resultado.toFixed(2)} dólares.`)
}

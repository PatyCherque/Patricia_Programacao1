val.onchange = voltarValor;
valor2.onchange = voltarValor;

function voltarValor(){
    resultado.innerHTML = "resultado";
}

botao.onclick = function(){
    voltarValor();
    let valor = parseInt(document.getElementById("val").value);
    let valor2 = parseInt(document.querySelector("#valor2").value);
    resultado.innerHTML = valor * valor2;
}


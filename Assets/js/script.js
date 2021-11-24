// ENTRADA --:--

// let pessoas = ["Igor", "José", "Marcos", "Pamela", "Joana"]

// function sortear(){
//     let np = pessoas.length;
//     let ns = Math.round(Math.random() * np);

//     document.getElementById("d").innerHTML = pessoas[ns]
// }


//  Taking Values Number Draw

let numberD;

// Taking the draw values ​​and storing the value in variable rv;

let rv;
let raffle_value = document.getElementById("raffle_value");
raffle_value.addEventListener("input", raffleF);

function raffleF(){
    rv = parseInt(raffle_value.value);

    if(isNaN(rv)){
        rv = 0;
    }
}

// Starting the draw

let submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", buttonClick);
submitBtn.addEventListener("click", resultClick)

function buttonClick(){
    if(rv <= 0 || rv == undefined || rv > 1000){
        alert("Regras do Jogo:" + "\n" + "\n" + "1 - Não digite números menores que 1." + "\n" + "2 - Não digite valores indefinidos (caracteres especiais)." + "\n" + "3 - O Número máximo de rifas é 1000." + "\n" + "\n" + "Criado por: Felipe R.")
    }
    else {
        function NumberDraw(){
            let nb = Math.round(Math.random() * rv);
            numberD = nb;
            console.log(numberD);

            let div = document.getElementById("result_container");
            div.style.display = "block";
        }
        NumberDraw()
    }
}
function resultClick(){
    let result = document.getElementsByClassName("final_result")[0];
    result.innerHTML = numberD;;
    console.log(result);
}

// onload body

onload = function(){
    alert("Criado por: Felipe R.")
}


let turno = 1,
    casilla, cuadricula;


function xo(id) {

    //Si esta pintada, no la pintamos.

    casilla = document.querySelector(id);
    casilla.style.color = "black";
    casilla.style.fontFamily = "arial";

    if (casilla.value == "O" || casilla.value == "X") {
        alert("Esta casilla está ocupada");

    } else {

        if (turno % 2 == 0) {

            //Pintamos un 0 en la casilla
            casilla.value = "O";

        } else {

            //Pintamos una X en la casilla
            casilla.value = "X";
        }

        //Terminando el juego 
        cuadricula = document.querySelectorAll("input");

        if (

            //HORIZONTAL
            
            (cuadricula[0].value == cuadricula[1].value && cuadricula[1].value == cuadricula[2].value && cuadricula[2].value != "") ||

            (cuadricula[3].value == cuadricula[4].value && cuadricula[4].value == cuadricula[5].value && cuadricula[5].value != "") ||

            (cuadricula[6].value == cuadricula[7].value && cuadricula[7].value == cuadricula[8].value && cuadricula[8].value != "") ||


            //VERTICAL
            
            (cuadricula[0].value == cuadricula[3].value && cuadricula[3].value == cuadricula[6].value && cuadricula[6].value != "") ||

            (cuadricula[1].value == cuadricula[4].value && cuadricula[4].value == cuadricula[7].value && cuadricula[7].value != "") ||

            (cuadricula[2].value == cuadricula[5].value && cuadricula[1].value == cuadricula[2].value && cuadricula[2].value != "") ||


            //DIAGONAL
            
            (cuadricula[0].value == cuadricula[4].value && cuadricula[4].value == cuadricula[8].value && cuadricula[8].value != "") ||

            (cuadricula[2].value == cuadricula[4].value && cuadricula[4].value == cuadricula[6].value && cuadricula[6].value != "")
            
            )
            
            {
            alert("Gana el jugador:  " + casilla.value);
        }

        turno++;

    }


}


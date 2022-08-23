persona1=[]
persona2=[]
persona3=[]
persona4=[]
persona5=[]
persona6=[]

function datos() {
    nombre = prompt("ingrese el nombre");
    identificacion  = prompt("ingrese su numero de identidad");
    nacimiento = prompt("ingrese la fecha de nacimiento");
    correo = prompt("ingrese su correo electronico");
    residencia = prompt("ingrese su lugar de residencia");
    origen = prompt("ingrese su ciudad de origen");
    artista = prompt("cual es su artista favorito");
    canciones= prompt("ponga 3 canciones favoritas, separelas con comas");
    
    return {nombre, identificacion, nacimiento, correo, residencia, origen, artista, canciones};
}

operacion = prompt("1.agregar una persona \n 2.ver informacion");

if(operacion == "1"){
    persona1.push(datos())
    operacion2 = prompt("1.desea agregar otra persona\n 2.desea ver la informacion de la anterior persona");

    if(operacion2 == "1"){
        persona2.push(datos())
        operacion3 = prompt("1.desea agregar otra persona\n 2.desea ver la informacion de la anterior persona");

        if(operacion3 == "1"){
            persona3.push(datos())
            operacion4 = prompt("1.desea agregar otra persona\n 2.desea ver la informacion de la anterior persona");
            if(operacion4 == "1"){
                persona4.push(datos())
                operacion5 = prompt("1.desea agregar otra persona\n 2.desea ver la informacion de la anterior persona");
                if(operacion5 == "1"){
                    persona5.push(datos())
                    operacion6 = prompt("1.desea agregar otra persona\n 2.desea ver la informacion de la anterior persona");
                    if(operacion6 == "1"){
                        persona6.push(datos())
                        operacion7 = prompt("no se pueden agregar mas personas, ingrese 1 si quieres ver la informacion de todos o 2 para salir");
                        if(operacion7 == "1"){
                            console.log(persona1, persona2, persona3, persona4, persona5, persona6);
                        }
                        else if(operacion7 =="2"){
                            console.log("hasta luego");
                        }
                    }else if(operacion6 =="2"){
                        console.log(persona1, persona2, persona3, persona4, persona5);
                    }
                }else if(operacion5 =="2"){
                    console.log(persona1, persona2, persona3, persona4);
                }
            }else if(operacion4 =="2"){
                console.log(persona1, persona2, persona3);
            }
    
        }else if(operacion3 =="2"){
            console.log(persona1, persona2);
        }

    }else if(operacion2 =="2"){
        console.log(persona1);
    }
}


else if(operacion =="2"){
    console.log(persona1);
}
else{
    console.log("error");
}



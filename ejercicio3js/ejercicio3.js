lista1 = [

]
lista2 = [

]

listaFinal= [

]
lista = Number(prompt("ingrese los numeros de la primera lista deforma ascendente"));
lista1.push(lista)


for(let i=0; i<=3; i++){
    lista = Number(prompt("ingrese los numeros de la primera lista deforma ascendente"));
    if(lista > lista1[lista1.length - 1]){
        lista1.push(lista)
    }
    else{
        console.log("No es mayor");
    }
}

console.log(lista1);




lista4 = Number(prompt("ingrese los numeros de la primera lista deforma ascendente"));
lista2.push(lista4)

for(let i=0; i<=3; i++){
    lista4 = Number(prompt("ingrese los numeros de la primera lista deforma ascendente"));
    if(lista4 > lista2[lista2.length - 1]){
        lista2.push(lista4)
    }
    else{
        console.log("No es mayor");
    }
}

console.log(lista2);


const listafi = lista1.concat(lista2);
listafi.sort();
console.log(listafi);
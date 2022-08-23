var edades = [

]

for (let i = 0; i<=9; i++){
    edad = prompt("ingrese la edad");
    if (edad => 1 && edad < 120){
        edades.push(edad)
    }
    else {
        console.log("la edad es incorrecta");
    }
}

console.log(edades);

const mayores = edades.filter(numero => numero >= 18);
console.log("las personas mayores de edad son ", mayores.length);

const menores = edades.filter(numero => numero < 18);
console.log("las personas menores de edad son ",menores.length);

const adultosMayores = edades.filter(numero => numero >= 60);
console.log("los adultos mayores son ",adultosMayores.length);

//edad minima
var min = edades[0];
for(i=1; i<edades.length; i++){
    if(edades[i]<= min){
        (min=edades[i])
    }
}
console.log("la edad minima es: ", min);

//edad mas alta
var max = edades[0];
for(i=1; i<edades.length; i++){
    if(edades[i]>=max){
        (max=edades[i])
    }
}
console.log("la edad mas alta es: ", max);

//promedio
suma = 0;
for(var i = 0; i <= edades.length -1; i++){
    j = Number(edades[i]);
    suma += j;
    suma /= 10;
}

console.log("el promedio de las edades es", suma);
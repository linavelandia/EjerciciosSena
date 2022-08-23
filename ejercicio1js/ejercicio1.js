

var operacion;
var figura;
var base;
var altura;
var resultado;


operacion = prompt("ingrese la operacion que desea realizar en minuscula: area o perimetro");

if (operacion == "area"){
    figura = prompt("ingrese el numero que corresponda, respecto a la figura que desee: \n 1:triangulo: \n 2:rectangulo: \n 3:cuadrado \n 4:circulo");
    area(figura);
    document.write("el area es:", resultado);
    function area(figura){
        switch (figura){
            case '1':
            base = prompt("ingrese la base del triangulo");
            altura = prompt("ingrese la altura del triangulo");
            resultado = ((base * altura)/2);
            return resultado;
            break;
    
            case '2':
            base = prompt("ingrese la base del rectangulo");
            altura = prompt("ingrese la altura del rectangulo");
            resultado = (base * altura);
            return resultado;
            break;

            case '3':
            altura = prompt("ingrese la altura del cuadrado");
            resultado = (altura ** 2);
            return resultado;
            break;

            case '4':
            base = prompt("ingrese el radio del circulo");
            resultado = (Math.PI * (base ** 2));
            return resultado;
            break;
        }    
    };
    
}
else if(operacion == "perimetro"){
    figura = prompt("ingrese el numero que corresponda, respecto a la figura que desee: \n 1:triangulo: \n 2:rectangulo: \n 3:cuadrado \n 4:circulo");
    perimetro(figura);
    document.write("el perimetro es:", resultado);

    function perimetro(figura){
        switch (figura){
            case '1':
            base = Number(prompt("ingrese la medida del lado del triangulo"));
            resultado = (base + base + base);
            return resultado;
            break;
    
            case '2':
            base = Number(prompt("ingrese la base del rectangulo"));
            altura = Number(prompt("ingrese la altura del rectangulo"));
            resultado = (2 * (base + altura));
            return resultado;
            break;

            case '3':
            altura = prompt("ingrese la medida del lado del cuadrado");
            resultado = (4 * altura);
            return resultado;
            break;

            case '4':
            base = prompt("ingrese el radio del circulo");
            resultado = (2*(Math.PI * (base ** 2)));
            return resultado;
            break;
        }    
    };
} 
else{
    console.log("operacion no valida");
}




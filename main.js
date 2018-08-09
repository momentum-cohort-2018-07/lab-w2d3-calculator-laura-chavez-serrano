//variables
var operandoa;
var operandob;
var operacion;

function init(){
    
    var resultado = document.getElementById('resultado');
    var reset = document.getElementById('reset');
    var add = document.getElementById('add');
    var resta = document.getElementById('resta');
    var times = document.getElementById('times');
    var divide = document.getElementById('divide');
    var igual = document.getElementById('igual');
    var one = document.getElementById('one');
    var two = document.getElementById('two');
    var three = document.getElementById('three');
    var four = document.getElementById('four');
    var five = document.getElementById('five');
    var seis = document.getElementById('six');
    var siete = document.getElementById('seven');
    var ocho = document.getElementById('eight');
    var nueve = document.getElementById('nine');
    var cero = document.getElementById('cero');
}

//click
one.onclick = function(){
    resultado.textContent = resultado.textContent  + "1";
}
two.onclick = function(){
    resultado.textContent = resultado.textContent  + "2";
}
three.onclick = function(){
    resultado.textContent = resultado.textContent  + "3";
}
four.onclick = function(){
    resultado.textContent = resultado.textContent  + "4";
}
five.onclick = function(){
    resultado.textContent = resultado.textContent  + "5";
}
six.onclick = function(){
    resultado.textContent = resultado.textContent  + "6";
}
seven.onclick = function(){
    resultado.textContent = resultado.textContent  + "7";
}
eight.onclick = function(){
    resultado.textContent = resultado.textContent  + "8";
}
nine.onclick = function(){
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(){
    resultado.textContent = resultado.textContent  + "0";
}
reset.onclick = function(){
    resetear();
}
add.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "+";
    limpiar();
}
resta.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "-";
    limpiar();
}
times.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "*";
    limpiar();
}
divide.onclick = function(){
    operandoa = resultado.textContent;
    operacion = "/";
    limpiar();
}
igual.onclick = function(){
    operandob = resultado.textContent;
    resolver();
}
//////////////////////////

function limpiar(){
    resultado.textContent = "";
  }
  function resetear(){
    resultado.textContent = "";
    operandoa = 0;
    operandob = 0;
    operacion = "";
  }
  function resolver(){
    var res = 0;
    switch(operacion){
      case "+":
        res = parseFloat(operandoa) + parseFloat(operandob);
        break;
      case "-":
          res = parseFloat(operandoa) - parseFloat(operandob);
          break;
      case "*":
        res = parseFloat(operandoa) * parseFloat(operandob);
        break;
      case "/":
        res = parseFloat(operandoa) / parseFloat(operandob);
        break;
    }
    
    resultado.textContent = res;
  }
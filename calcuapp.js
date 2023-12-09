//calculater practice
var input = document.getElementById("input")

function setData(Text){
    input.value +=Text
}


function calculate(){
    input.value = eval(input.value)
}

function clearfun(){
    input.value =""
}


function square(){
    input.value = eval( input.value*input.value)
}


function squareroot(){
    input.value = Math.sqrt(input.value)
}
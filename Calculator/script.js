const displayV = document.getElementById("display");

function displayValue(input){
    displayV.value += input;
}

function calculate(){
    displayV.value = eval(displayV.value);
}

function Clear(){
    displayV.value = "";
}

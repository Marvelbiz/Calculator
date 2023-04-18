var ScreenInput = document.getElementById('screen');


function One(){
    ScreenInput.value += "1";
}

function Two(){
    ScreenInput.value += "2";
}

function Three(){
    ScreenInput.value += "3";
}

function Four(){
    ScreenInput.value += "4";
}

function Five(){
    ScreenInput.value += "5";
}

function Six(){
    ScreenInput.value += "6";
}

function Seven(){
    ScreenInput.value += "7";
}

function Eight(){
    ScreenInput.value += "8";
}

function Nine(){
    ScreenInput.value += "9";
}

function Zero(){
    ScreenInput.value += "0";
}

function Dot(){
    ScreenInput.value += ".";
}

function Add(){
    ScreenInput.value += "+";
}

function Sub(){
    ScreenInput.value += "-";
}

function Div(){
    ScreenInput.value += "/";
}

function Mul(){
    ScreenInput.value += "*";
}

function Equal(){
    ScreenInput.value = eval(ScreenInput.value);
}

function ClearAll(){
    ScreenInput.value = "";
}

function Clear(){
    ScreenInput.value = String(ScreenInput.value).slice(0, -1)
}
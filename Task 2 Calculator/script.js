
const display=document.getElementById("display");

function show(input){
display.value += input;

}

function  cd(){
display.value="";
}
function calc(){
    try{
     display.value=eval(display.value);
    } 
    catch(error){
     display.value="Error";
    }
}

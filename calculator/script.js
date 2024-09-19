var display=document.getElementById("display")
var equal =document.getElementById("equal")
function calcul(){
    try{ 
        display.value=eval(display.value)
    }
    catch(error){
        display.value="Error"
    }
}
equal.onclick=calcul
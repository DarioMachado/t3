// 


var modo = leerModoActual();

function leerModoActual(){
    //devolverá modo día s no hay modo guardado
    let modo=window.localStorage.getItem("modoGuardado");
    if(!modo){
        return "dia";
    }
    return modo;


}

if(modo== "dia"){
    ponerModoDia();
}
else{
    ponerModoNoche();
}




function ponerModoDia(){
    let todo = document.getElementById("todo");
    todo.style.backgroundColor="white";
    todo.style.color="black";
    window.localStorage.setItem("modoGuardado", "modoDia");
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="none";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="block";

}

function ponerModoNoche(){
    let todo = document.getElementById("todo");
    todo.style.backgroundColor="black";
    todo.style.color="white";
    window.localStorage.setItem("modoGuardado", "modoNoche");
    let iconoDia = document.getElementById("dia");
    iconoDia.style.display="block";
    let iconoNoche = document.getElementById("noche");
    iconoNoche.style.display="none";


}


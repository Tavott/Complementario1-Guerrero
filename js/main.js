for(let i=1;i<7;i++){
    let nombre = prompt("Ingrese Nombre");
    let DNI = prompt("Ingrese DNI");
    if(i== 6){
        alert("No quedan mas numeros, Gracias por su visita.")
    }
    else{
        alert("Bienvenido " + nombre +" DNI:" +DNI + " su turno es el numero: "+ i + " .Por favor espere ser llamado.");

    }


}
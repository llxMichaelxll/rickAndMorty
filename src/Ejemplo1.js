import React from "react";

export function Saludo() {
    const m = false;


    return <h1>{ m ? 'esde dia': "es de noche"} </h1>
}

export function Summa(){
    function Suma(a,b){
        return <h1>{a+b}</h1>
    }
    return Suma(10,20)
}
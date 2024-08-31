import React from "react";


import {ButtonConteiner} from "./styles";

function Button({onClick}){
    return(
        <ButtonConteiner onClick={onClick}>
        buscar
        </ButtonConteiner>
    )
}

export default Button

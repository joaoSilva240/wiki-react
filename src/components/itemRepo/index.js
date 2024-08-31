import React from "react";

import {ItemConteiner} from './styles.js'

function ItemRepo({repo,handleRemove}){
    const {id,name, full_name,html_url}=repo
    const handleRemoveRepo=()=>{
        handleRemove(id)
    }
    return(
        <ItemConteiner onClick={handleRemoveRepo}>
            <h3>{name}</h3>
            <p>{full_name}</p>
            <a href={html_url} target="_blank">ver repositório</a><br/>
            <a href="a">remover</a>
            <hr/>
        </ItemConteiner>
    )
}

export default ItemRepo
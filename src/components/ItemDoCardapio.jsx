import React from "react";

function ItemDoCardapio(props){
    return( 
        <div className="container-item-cardapio">
            <img src={props.imagem} className="img-item-cardapio" />
            <div className="informacoes-do-cardapio">
                <h2>{props.nome}</h2>
                <p>{props.preco}</p>
                <p>Descrição:</p>
                <p>{props.descricao}</p>
            </div>
        </div>
    )
}

export default ItemDoCardapio;

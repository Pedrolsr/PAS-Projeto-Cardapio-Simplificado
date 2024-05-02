import React from "react";

function Navegacao(props){

    return( 
        <>
            <div className="navegacao">
                <input type="radio" name="categorias" id="id-todos" value="todos" defaultChecked onClick={() => props.setCategoriaSelecionada(0)} />
                <label htmlFor="id-todos">Todos</label>

                <input type="radio" name="categorias" id="id-bebidas" value="bebidas" onClick={() => props.setCategoriaSelecionada(1)} />
                <label htmlFor="id-bebidas">Bebidas</label>

                <input type="radio" name="categorias" id="id-salgados" value="salgados" onClick={() => props.setCategoriaSelecionada(2)} />
                <label htmlFor="id-salgados">Salgados</label>

                <input type="radio" name="categorias" id="id-sanduiches" value="sanduiches" onClick={() => props.setCategoriaSelecionada(3)} />
                <label htmlFor="id-sanduiches">Sanduíches</label>

                <input type="radio" name="categorias" id="id-sobremesas" value="sobremesas" onClick={() => props.setCategoriaSelecionada(4)} />
                <label htmlFor="id-sobremesas">Sobremesas</label>
            </div>
    
        </>
    )
}

export default Navegacao;

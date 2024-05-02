import React, {useContext} from "react";
import { TemaContext } from "../context/TemaContext";

function Configuracao( {menuConfig} ){

    const {tema, alterarTema} = useContext(TemaContext);

    return( 
        <div className={`container-config ${menuConfig ? 'show' : ''}`}>
            <p>Personalização:</p>
            <p>Selecione o Tema:</p>
            <input 
                type="radio" name="opcao" id="claro" value="claro" checked={tema === "claro"} 
                onChange={() => alterarTema("claro")} />
            <label htmlFor="claro">Claro</label>

            <input type="radio" name="opcao" id="escuro" value="escuro" checked={tema === "escuro"}
                onChange={() => alterarTema("escuro")} />
            <label htmlFor="escuro">Escuro</label>
        </div>
    )
}

export default Configuracao;

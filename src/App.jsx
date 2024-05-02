import React, { useContext, useState } from 'react'
import LogoFicticia from "./assets/logo/img-logo_ficticia_projeto.png"
import Navegacao from "./components/Navegacao"
import ItemDoCardapio from "./components/ItemDoCardapio"
import Configuracao from "./components/Configuracao"
import {todos, bebidas, salgados, sanduiches, sobremesas} from "./components/Cardapio"
import { TemaContext } from "./context/TemaContext"
import './App.css'

function App() {

  const [categoriaSelecionada, setCategoriaSelecionada] = useState(0);
  const navegacaoMenu = [todos, bebidas, salgados, sanduiches, sobremesas];

  // Novo estado para controlar a exibição do menu
  const [menuConfig, setShowMenuConfig] = useState(false); 

  const infoBotaoClick = () => {
    // Alternar entre mostrar e esconder o menu quando o botão for clicado
    setShowMenuConfig(!menuConfig); 
  };

  const {tema} = useContext(TemaContext);
  
  return (
    <div className={`App ${tema === "escuro" ? "tema-escuro" : ""}`}>
    
      <div className="container-cabecalho">

        <div className="container-logo">
          <img src={LogoFicticia} alt="Logo da Lanchonete Hora do Lanche" className="logo-1" />
        </div>

        <div className="container-titulo">
          <h1 className="titulo-cardapio">Cardápio</h1>
          <h1 className="titulo-local">Hora do Lanche</h1>
        </div>

        <div className="container-botao">
          <button className="botao-configuracao" onClick={infoBotaoClick}></button>
          <Configuracao menuConfig={menuConfig} />
        </div>

      </div>

      <div className="container-navegacao">
        <Navegacao setCategoriaSelecionada={setCategoriaSelecionada}/>
      </div>

      <div className="menu">
        {navegacaoMenu[categoriaSelecionada].map(item => <ItemDoCardapio key={item.id} imagem={item.imagem} nome={item.nome} preco={item.preco} descricao={item.descricao} />)}
      </div>
    
    </div>
  )
}

export default App;

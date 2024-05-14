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

  // Aplicar classe de tema escuro ao corpo do documento
  document.body.className = tema === "escuro" ? "tema-escuro" : "";
  
  return (
    // Verificar se a classe é do tema-escuro
    <div className="App">
    
      <div className="container-cabecalho">

        <div className="container-logo">
          <img src={LogoFicticia} alt="Logo da Lanchonete Hora do Lanche" className="logo-1" />
        </div>

        <div className="container-titulo">
          <h1 className="titulo-cardapio">Cardápio</h1>
          <h1 className="titulo-local">Hora do Lanche</h1>
        </div>

        <div className="container-botao">
          <button className={`botao-configuracao ${tema === "escuro" ? "tema-escuro" : ""}`} onClick={infoBotaoClick}></button>
          <Configuracao menuConfig={menuConfig} />
        </div>

      </div>

      <div className="container-navegacao">
        <Navegacao setCategoriaSelecionada={setCategoriaSelecionada}/>
      </div>

      <div className="menu">
        {navegacaoMenu[categoriaSelecionada].map(item => <ItemDoCardapio key={item.id} imagem={item.imagem} nome={item.nome} preco={item.preco} descricao={item.descricao} />)}
      </div>

      <div className="info-de-desenvolvimento">
        <h2 className="dev">Desenvolvedor:</h2>
        <h6 className="nome">Pedro Lucas</h6>
        <p className="git">
          Github: 
          <a href="https://github.com/Pedrolsr"> github.com/Pedrolsr </a>
        </p>
        <p className="direitos">Todos os direitos reservados.</p>
      </div>
    
    </div>
  )
}

export default App;

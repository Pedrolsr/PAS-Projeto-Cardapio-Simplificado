// Import Bebidas
import aguaSemGasImg from "../assets/img/Bebidas/img-agua-mineral.png";
import aguaComGasImg from "../assets/img/Bebidas/img-agua-mineral.png";
import cafeImg from "../assets/img/Bebidas/img-cafe.png";
import cocaColaLitroImg from "../assets/img/Bebidas/img-coke-garrafa-litro.png";
import cocaColaGarrafaImg from "../assets/img/Bebidas/img-coke-plastic-cola.png";
import refriLaranjaLataImg from "../assets/img/Bebidas/img-refri-laranja.png";
import sucosImg from "../assets/img/Bebidas/img-sucos.png";
import vitaminasImg from "../assets/img/Bebidas/img-vitamina.png";

// Import Salgados
import coxinhaImg from "../assets/img/Salgados/img-coxinha.png";
import empadaImg from "../assets/img/Salgados/img-empadas.png";
import pastelImg from "../assets/img/Salgados/img-pastel.png";
import fraldinhaImg from "../assets/img/Salgados/img-fraldinha.png";

// Import Sanduiches
import bauruImg from "../assets/img/Sanduiches/img-bauru.png";
import hamburguerImg from "../assets/img/Sanduiches/img-hamburger.png";
import xBaconImg from "../assets/img/Sanduiches/img-xbacon.png";
import xFrangoImg from "../assets/img/Sanduiches/img-xfrango.png";
import mistoImg from "../assets/img/Sanduiches/img-misto.png";

// Import Sobremesas
import acaiImg from "../assets/img/Sobremesas/img-açai.png";
import boloRecheadoImg from "../assets/img/Sobremesas/img-bolo_recheado.png";
import boloSimplesImg from "../assets/img/Sobremesas/img-bolo_simples.png";
import empadaDoceImg from "../assets/img/Sobremesas/img-empada-doce.png";
import pudimImg from "../assets/img/Sobremesas/img-pudim.png";

// Bebidas
const aguaSemGas = {
    imagem: aguaSemGasImg,
    id: 1,
    nome: "Água sem Gás",
    preco: "R$ 2,00",
    descricao: "Garrafa de Água sem Gás 500ml",
};
const aguaComGas = {
    imagem: aguaComGasImg,
    id: 2,
    nome: "Água com Gás",
    preco: "R$ 3,00",
    descricao: "Garrafa de Água com Gás 500ml",
};
const cafe = {
    imagem: cafeImg,
    id: 3,
    nome: "Café",
    preco: 'R$ 2,00',
    descricao: "Xicara de Café",
  };
const cocaColaLitro = {
    imagem: cocaColaLitroImg,
    id: 4,
    nome: "Coca-Cola 1 Litro",
    preco: "R$ 7,00",
    descricao: "Refrigerante Garrafa de Vidro 1L",
};
const cocaColaGarrafa = {
    imagem: cocaColaGarrafaImg,
    id: 5,
    nome: "Coca-Cola Pet",
    preco: "R$ 2,00",
    descricao: "Refrigerante Garrafa de 250ml",
};
const refriLaranjaLata = {
    imagem: refriLaranjaLataImg,
    id: 6,
    nome: "Fanta Laranja Lata",
    preco: "R$ 4,50",
    descricao: "Refrigerante Lata 350ml",
};
const suco = {
    imagem: sucosImg,
    id: 7,
    nome: "Sucos",
    preco: "R$ 4,00",
    descricao: "Sucos de 300ml: Laranja, Uva, Maracuja, Acerola e Cajá",
};
const vitamina = {
    imagem: vitaminasImg,
    id: 8,
    nome: "Vitaminas",
    preco: "R$ 5,00",
    descricao: "Vitaminas de 400ml: Banana, Abacate e Mamão",
};

// Salgados
const coxinha = {
    imagem: coxinhaImg,
    id: 9,
    nome: "Coxinha",
    preco: "R$ 2,50",
    descricao: "Coxinha de Frango",
};
const empada = {
    imagem: empadaImg,
    id: 10,
    nome: "Empada",
    preco: "R$ 3,00",
    descricao: "Empada de Frango",
};
const pastel = {
    imagem: pastelImg,
    id: 11,
    nome: "Pasteis",
    preco: "R$ 2,50",
    descricao: "Pastel Sabores: Queijo, Carne, Frango e Queijo c/ Presunto",
};
const fraldinha = {
    imagem: fraldinhaImg,
    id: 12,
    nome: "Fraldinha",
    preco: "R$ 2,50", 
    descricao: "Fraldinha de Frango e Queijo",
};

// Sanduiches
const bauru = {
    imagem: bauruImg,
    id: 13,
    nome: "Bauru",
    preco: "R$ 6,00",
    descricao: "Contém: Pão, Hamburguer de Carne, Queijo, Presunto, Ovo e Salada",
};
const hamburguer = {
    imagem: hamburguerImg,
    id: 14,
    nome: "Hamburguer",
    preco: "R$ 4,00",
    descricao: "Contém: Pão, Hamburguer de Carne, Queijo, Presunto",
};
const xbacon= {
    imagem: xBaconImg,
    id: 15,
    nome: "X-Bacon",
    preco: "R$ 10,00",
    descricao: "Contém: Pão, Hamburguer de Carne, Queijo Cheddar, Presunto, Ovo, Bacon e Salada ",
};
const xfrango = {
    imagem: xFrangoImg,
    id: 16,
    nome: "X-Frango",
    preco: "R$ 8,00",
    descricao: "Contém: Pão, Cortes de Peito de Frango, Queijo, Presunto, Ovo e Salada",
};
const misto = {
    imagem: mistoImg,
    id: 17,
    nome: "Misto",
    preco: "R$ 3,50",
    descricao: "Contém: Pão de Forma, Queijo e Presunto",
};

// Sobremesas
const acai = {
    imagem: acaiImg,
    id: 18,
    nome: "Açaí",
    preco: "R$ 8,00",
    descricao: "Copo de Açaí 400ml / Acompanhamento: Banana ou Morango, Leite em Pó, Leite Condensado, Chocolate e Granola",
};
const boloRecheado = {
    imagem: boloRecheadoImg,
    id: 19,
    nome: "Fatia de Bolo Recheado",
    preco: "R$ 8,00",
    descricao: "Bolo de Chocolate Recheado com Brigadeiro e Raspas de Chocolate",
};
const boloSimples = {
    imagem: boloSimplesImg,
    id: 20,
    nome: "Fatia de Bolo Tradicional",
    preco: "R$ 4,00",
    descricao: "Bolo de Fubá Tradicional",
};
const empadaDoce = {
    imagem: empadaDoceImg,
    id: 21,
    nome: "Empada Doce",
    preco: "R$ 3,00",
    descricao: "Empada Doce de Leite Condensado",
};
const pudim = {
    imagem: pudimImg,
    id: 22,
    nome: "Pudim",
    preco: "R$ 3,00",
    descricao: "Pudim de Leite Condensado",
};

// Listas dos itens
export const todos = [aguaSemGas, aguaComGas, cafe, cocaColaLitro, 
    cocaColaGarrafa, refriLaranjaLata, suco, vitamina, coxinha, 
    empada, fraldinha, pastel, bauru, hamburguer, xbacon, xfrango, 
    misto, acai, boloRecheado, boloSimples, empadaDoce, pudim];

export const bebidas = [aguaSemGas, aguaComGas, cafe, cocaColaLitro, cocaColaGarrafa, refriLaranjaLata, suco, vitamina];

export const salgados = [coxinha, empada, fraldinha, pastel];

export const sanduiches = [bauru, hamburguer, xbacon, xfrango, misto];

export const sobremesas = [acai, boloRecheado, boloSimples, empadaDoce, pudim];

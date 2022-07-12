// Crie uma class component

// Guarde em um state as seguintes propriedades: nome, idade, comida favorita, e uma array com pelo menos 3 músicas.

// Renderize na tela:
// Seu nome em um h1
// Sua idade em um h2
// Sua comida favorita em um h3
// Suas músicas favoritas em uma lista (ul / ol)

//**Bônus
// Adicione uma imagem da sua fruta favorita via import

import React, { Component } from "react";
import fruta from "./img/maca.jpg";

export default class App extends Component {
  state = {
    nome: "Aline",
    idade: 30,
    comidaFavorita: "Pizza",
    musicas: [
      "Garganta - Ana Carolina",
      "Até que Durou - Péricles",
      "Dona da Voz - Malta"
    ]
  };

  render() {
    return (
      <div>
        <h1>Meu nome é {this.state.nome}</h1>
        <h2>Minha idade é {this.state.idade} anos</h2>
        <h3>Minha comida favorita é {this.state.comidaFavorita}</h3>
        <p>Minha lista de Músicas é:</p>
        <ul>
          <ol>{this.state.musicas[0]}</ol>
          <ol>{this.state.musicas[1]}</ol>
          <ol>{this.state.musicas[2]}</ol>
        </ul>
        <p>Minha fruta favorita é:</p>
        <img src={fruta} alt="Maça" />
      </div>
    );
  }
}

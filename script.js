// Declaração das cartas
var cartas = [
    {
      Nome: "Mônica",
      Atributos: { Força: 10, Inteligência: 50, Agilidade: 12, Sagacidade: 20 },
      img: "https://i.ibb.co/KjXYHzj/Monica.png",
      moldura: "vermelho"
    },
    {
      Nome: "Cebolinha",
      Atributos: { Força: 4, Inteligência: 80, Agilidade: 15, Sagacidade: 35 },
      img: "https://i.ibb.co/Rg6hnWZ/Cebolinha.png",
      moldura: "verde"
    },
    {
      Nome: "Cascão",
      Atributos: { Força: 5, Inteligência: 50, Agilidade: 20, Sagacidade: 30 },
      img: "https://i.ibb.co/b5jTdr2/Cascao.png",
      moldura: "azul"
    },
    {
      Nome: "Magali",
      Atributos: { Força: 3, Inteligência: 65, Agilidade: 12, Sagacidade: 45 },
      img: "https://i.ibb.co/MSVSS6q/Magali.png",
      moldura: "amarelo"
    },
    {
      Nome: "Franjinha",
      Atributos: { Força: 5, Inteligência: 90, Agilidade: 11, Sagacidade: 30 },
      img: "https://i.ibb.co/w4hmM76/Franjinha.png",
      moldura: "amarelo"
    },
    {
      Nome: "Xaveco",
      Atributos: { Força: 5, Inteligência: 50, Agilidade: 10, Sagacidade: 25 },
      img: "https://i.ibb.co/3sBXyVj/Xaveco.png",
      moldura: "verde"
    },
    {
      Nome: "Denise",
      Atributos: { Força: 4, Inteligência: 60, Agilidade: 12, Sagacidade: 40 },
      img: "https://i.ibb.co/9tkGFkL/Denise.png",
      moldura: "amarelo"
    },
    {
      Nome: "Chico Bento",
      Atributos: { Força: 8, Inteligência: 50, Agilidade: 16, Sagacidade: 35 },
      img: "https://i.ibb.co/Qr5RSPf/Chicobento.png",
      moldura: "azul"
    },
    {
      Nome: "Zé Lele",
      Atributos: { Força: 8, Inteligência: 45, Agilidade: 21, Sagacidade: 30 },
      img: "https://i.ibb.co/YNgWVk8/Zelele.png",
      moldura: "amarelo"
    },
    {
      Nome: "Bidu",
      Atributos: { Força: 4, Inteligência: 50, Agilidade: 18, Sagacidade: 35 },
      img: "https://i.ibb.co/GpF2tZq/Bidu.png",
      moldura: "azul"
    },
    {
      Nome: "Bugu",
      Atributos: { Força: 3, Inteligência: 40, Agilidade: 16, Sagacidade: 45 },
      img: "https://i.ibb.co/d6dNSsb/Bugu.png",
      moldura: "azul"
    },
    {
      Nome: "Horácio",
      Atributos: { Força: 2, Inteligência: 90, Agilidade: 8, Sagacidade: 40 },
      img: "https://i.ibb.co/4mNCg9w/Horacio.png",
      moldura: "verde"
    },
    {
      Nome: "Mingau",
      Atributos: { Força: 4, Inteligência: 50, Agilidade: 16, Sagacidade: 30 },
      img: "https://i.ibb.co/8bMr16G/Mingau.png",
      moldura: "amarelo"
    },
    {
      Nome: "Monicão",
      Atributos: { Força: 9, Inteligência: 35, Agilidade: 15, Sagacidade: 25 },
      img: "https://i.ibb.co/yX7Ht8V/Monicao.png",
      moldura: "vermelho"
    },
    {
      Nome: "Louco",
      Atributos: { Força: 10, Inteligência: 60, Agilidade: 15, Sagacidade: 45 },
      img: "https://i.ibb.co/25VvScN/Louco.png",
      moldura: "vermelho"
    }
  ];
  
  var corMolduras = {
    vermelho: "https://i.ibb.co/DQbY88p/moldura-vermelho.png",
    verde: "https://i.ibb.co/5x6rMzw/moldura-verde.png",
    azul: "https://i.ibb.co/hH1XCBx/moldura-azul.png",
    amarelo: "https://i.ibb.co/5jb2mYS/moldura-amarelo.png"
  };
  //
  ////////////////////////////////////////////////////////////
  // ------------ DECLARAÇÃO DAS CARTAS - FIM ------------- //
  ////////////////////////////////////////////////////////////
  //
  
  var cartaJogador;
  var cartaPC;
  var cartasJogo;
  // Onde vão entra as cartas sorteadas
  
  var placar = [0, 0, 0]; // Placar: índice 0 = jogador ; índice 1 = PC; índice 2 = empates
  exibePlacar();
  
  var tagID = ["Jogador", "PC"];
  var cartaID = ["carta-jogador", "carta-maquina"]; // ids no HTML da posição do texto
  zerarCarta(cartaID[0]);
  zerarCarta(cartaID[1]);
  // Zera as cartas (na tela) (mostra o verso da carta)
  
  botaoJogar(); // Coloca o botão 'Jogar' na tela
  
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  // ----------------------- FUNÇÕES ---------------------- //
  ////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////
  
  // Coloca o botão 'Jogar' na tela
  function botaoJogar() {
    var botao = document.getElementById("botao-jogar");
    var botaoHTML =
      '<button class="button-jogar" type="button" id="btnJogar" onclick="jogar()" disabled="false">Jogar</button>';
    botao.innerHTML = botaoHTML;
  }
  
  // Zerar cartas na tela inicial
  function zerarCarta(id) {
    var opcoes = document.getElementById(id);
    // Mostra o verso da carta
    var opcoesTexto =
      '<img src="https://i.ibb.co/wsPTMsK/carta-verso.png" style=" width: inherit; height: inherit; position: absolute;">';
    opcoes.innerHTML = opcoesTexto;
  }
  
  // Exibe placar na tela
  function exibePlacar() {
    var exibePlacar0 = document.getElementById("placar0");
    exibePlacar0.innerHTML = placar[0];
    var exibePlacar1 = document.getElementById("placar1");
    exibePlacar1.innerHTML = placar[1];
  }
  
  // Sortear cartas
  //   Limpa exibição das cartas (mostra o verso), limpa o campo de resultados
  //   Coloca o botão 'Jogar' na tela
  //   Sorteia números aleatórios p/ Jogador e p/ PC (impede número repetido)
  //   Pega cartas correspondentes aos números, desabilita botão 'Sortear'
  //   Exibe carta do Jogador com atributos e botões p/ seleção
  function sortearCarta() {
    // Criar cópia do array de cartas
    // var copia = cartas.slice();
  
    // Zera carta do PC
    zerarCarta(cartaID[1]);
  
    botaoJogar(); // Coloca o botão 'Jogar' na tela
  
    // Limpa campo de resultados
    var elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = "";
  
    // Numero aleatório p/ selecionar sua carta
    var numeroJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroJogador];
    //console.log(cartaJogador);
  
    // Número aleatório p/ selecionar carta PC
    var numeroPC = parseInt(Math.random() * cartas.length);
  
    // Fazer verificação p/ que não haja repetido
    while (numeroPC == numeroJogador) {
      var numeroPC = parseInt(Math.random() * cartas.length);
    }
    //(criar cópia do array e ir retirando as cartas? <- ver depois)
    cartaPC = cartas[numeroPC];
    //console.log(cartaPC);
  
    cartasJogo = [cartaJogador, cartaPC];
  
    // Desabilitar botão 'sortear cartas' e habilitar o botão 'jogar'
    document.getElementById("btnSortear").disabled = true;
  
    // (botão de jogar permanece desabilitado até um atributo ser selecionado)
  
    exibirCarta(tagID[0], cartaID[0], 0, 0, 0);
    // Mostra carta jogador com botões p/ selecionar
  }
  
  // Função geral p/ exibir carta
  //  Puxa imagem e moldura correspondente do personagem
  //  Lista os atributos da carta (com ou sem botões -> dependente da variável 'jogo')
  
  // tagID   -> tagID[0]="Jogador" (p/ jogador) ou tagID[1]="PC" (p/ PC)
  // cartaID -> "carta-jogador" (cartaID[0]) ou "carta-PC" (cartaID[1])
  // ID      -> ID=0 (p/ jogador) ou ID=1 (p/ PC)
  // jogo    -> jogo=0 (opções c/ botões) ou jogo=1 (opções s/ botões)
  // atributoSelect -> atributo selecionado (atributoSelect=0 caso ainda não tenha sido selecionado)
  function exibirCarta(tagID, cartaID, ID, jogo, atributoSelect) {
    var divCarta = document.getElementById(cartaID);
    divCarta.style.backgroundImage = `url(${cartasJogo[ID].img})`;
  
    var moldura = `<img src="${
      corMolduras[cartasJogo[ID].moldura]
    }" style=" width: inherit; height: inherit; position: absolute;">`;
  
    var tagHTML = "<div id='" + tagID + "' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartasJogo[ID].Atributos) {
      if (jogo == 0) {
        opcoesTexto +=
          "<input type='radio' onclick='habilitarJogar()' name='atributo' id='" +
          atributo +
          "' value='" +
          atributo +
          "'>";
        opcoesTexto += "<label for='" + atributo + "'>";
        opcoesTexto +=
          atributo + ": " + cartasJogo[ID].Atributos[atributo] + "</label><br>";
      } else {
        if (atributo == atributoSelect) {
          opcoesTexto +=
            "<p style='color: red;'><strong>" +
            atributo +
            ": " +
            cartasJogo[ID].Atributos[atributo] +
            "</strong></p>";
        } else {
          opcoesTexto +=
            "<p>" + atributo + ": " + cartasJogo[ID].Atributos[atributo] + "</p>";
        }
      }
    }
  
    var nome = `<p class="carta-subtitle">${cartasJogo[ID].Nome}</p>`;
  
    divCarta.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  // Habilita botão 'jogar' ao selecionar um atributo da lista
  function habilitarJogar() {
    document.getElementById("btnJogar").disabled = false;
  }
  
  // Obter atributo selecionado
  function obterAtributo() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  // Botão de jogar
  //   Pega atributo selecionado e compara com o da carta do PC
  //   Imprime resultado na tela e adiciona pontuação no placar
  //   Mostra carta do PC, re-exibe carta do Jogador e desabilita/reabilita botões
  function jogar() {
    // Obtem o atributo selecionado
    var atributoSelect = obterAtributo();
    //console.log(cartaJogador.Atributos[atributoSelect]);
  
    var valorCartaJogador = cartaJogador.Atributos[atributoSelect];
    var valorCartaPC = cartaPC.Atributos[atributoSelect];
  
    // Faz comparação e dá resultado (computar em um placar)
    var divResultado = document.getElementById("resultado");
    var elementoResultado;
  
    if (valorCartaJogador > valorCartaPC) {
      elementoResultado = "<p class='resultado-final'>Você venceu</p>";
      placar[0]++; // Adiciona um ponto para jogador [índice 0] no placar
    } else if (valorCartaJogador < valorCartaPC) {
      elementoResultado = "<p class='resultado-final'>Você perdeu</p>";
      placar[1]++; // Adiciona um ponto para o PC [índice 1] no placar
    } else {
      elementoResultado =
        "<p class='resultado-final'>Empatou, escolha outro atributo</p>";
      divResultado.innerHTML = elementoResultado;
      return;
    }
  
    // Escrevendo o placar
    elementoResultado += "<p class='placar_peq'>| Placar: (Você) " + placar[0];
    elementoResultado += " x ";
    elementoResultado += placar[1] + " (PC) |</p>";
  
    divResultado.innerHTML = elementoResultado;
    exibePlacar();
  
    // Mostra a carta do PC
    exibirCarta(tagID[1], cartaID[1], 1, 1, atributoSelect);
    // Mostra a carta do jogador s/ botões p/ selecionar
    exibirCarta(tagID[0], cartaID[0], 0, 1, atributoSelect);
  
    // Substitui o botão 'Jogar' por um de sortear
    var botao = document.getElementById("botao-jogar");
    var botaoHTML =
      '<button class="button-jogar" type="button" id="btnSortear" onclick="sortearCarta()">Sortear outra carta</button>';
    botao.innerHTML = botaoHTML;
  
    // Botão sortear cartas reabilitado, botão jogar desabilitado
    document.getElementById("btnSortear").disabled = false;
    // document.getElementById("btnJogar").disabled = true;
    // (depois refazer com um número estabelecido de rodadas, usar botão 'próxima carta')
  }
  
  // Função para reiniciar jogo (volta para o início, zera o placar)
  //   Reabilita botão 'Sortear', desabilita botão 'Jogar'
  //   Limpa campo de resultados e vira as cartas para baixo (zerar cartas)
  //   Zera o placar
  function zerarJogo() {
    // Botão sortear cartas reabilitado, botão jogar desabilitado
    document.getElementById("btnSortear").disabled = false;
    botaoJogar();
  
    // Limpa campo de resultados
    var elementoResultado = document.getElementById("resultado");
    elementoResultado.innerHTML = "";
  
    // Coloca as cartas viradas para baixo
    zerarCarta(cartaID[0]);
    zerarCarta(cartaID[1]);
  
    // Zera o placar
    placar = [0, 0, 0]; // Placar: índice 0 = jogador ; índice 1 = PC ; índice 2 = empates
    exibePlacar();
  }
  
  ////// Funções do POPUPS
  // Exibe o popup com o Codepen Embed
  function showPopup(id) {
    document.getElementById(id).style.display = "block";
  }
  
  // Esconde o popup com o Codepen Embed
  function hidePopup(id) {
    document.getElementById(id).style.display = "none";
  }
  
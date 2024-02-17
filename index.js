console.log("Digita o Nome do Seu Jogador")

// Declara uma Variável
let nickname = "Renaldo Petlim"

// Concantenando uma Mensagem Fixa + uma Variável
console.log("Bem vindo(a) " + nickname)
console.log(nickname + " entrou no servidor")

//-----------------------------------------------//
console.log("----------")
//-----------------------------------------------//

const notificacao = "Pokemon Go diz: "

// Saida
console.log(notificacao + "Tem um Novo Pokemon na Região")
console.log(notificacao + "Você Foi Derrotado por um Líder")

//-----------------------------------------------//
console.log("----------")
//-----------------------------------------------//

let poteCafe = "Café Pilão"
let poteAcucar = "Açucar Cristal"
let poteBiscoito = "Biscoito Maizena"
const messagemDaVovo = "Na Cozinha da Vovó Tem: "

console.log(messagemDaVovo + poteCafe + ", " + poteAcucar + " e " + poteBiscoito)

poteCafe = "Café 3 Corações"
poteBiscoito = "Bolacha Maria"

console.log(messagemDaVovo + poteCafe + ", " +poteAcucar + " e " +poteBiscoito)

//-----------------------------------------------//
console.log("----------")
//-----------------------------------------------//

// Variáveis:
let nomePokemon = "Pikachu"
let pokemonType = "Eletrico"

let pontosDeVidaPokemon = 35
let pontosAtaque = 55
let pontosDefesa = 40

let selecionavel = false

console.log("O Pokemon " + nomePokemon + " é do tipo " + pokemonType + " e possui " + pontosDeVidaPokemon + " de HP. Tem " + pontosAtaque + " pontos de ataque e " + pontosDefesa + " pontos de defesa")

console.log("---")

// Vetores e Matrizes:
let nomesPokemon = ["Pikachu", "Charmander", "Bulbassaur"]
let timePokemon = [
  ["Pikachu", "Eletrico", 35],
  ["Charmander", "Fogo", 39],
  ["Bulbassaur", "Grama", 45],
  ["Squirtle", "Agua", 44],
  ["Pidgeotto", "Voador", 63]
]
console.log("O Pokemon " + timePokemon[0][0] + " é do tipo " +  timePokemon[0][1] + " e possui " + timePokemon[0][2] + " de HP")
console.log("O Pokemon " + timePokemon[1][0] + " é do tipo " +  timePokemon[1][1] + " e possui " + timePokemon[1][2] + " de HP")
console.log("O Pokemon " + timePokemon[2][0] + " é do tipo " +  timePokemon[2][1] + " e possui " + timePokemon[2][2] + " de HP")
console.log("O Pokemon " + timePokemon[3][0] + " é do tipo " +  timePokemon[3][1] + " e possui " + timePokemon[3][2] + " de HP")
console.log("O Pokemon " + timePokemon[4][0] + " é do tipo " +  timePokemon[4][1] + " e possui " + timePokemon[4][2] + " de HP")

//-----------------------------------------------//
console.log("----------")
console.log("-- ARITIMÉTICOS --")
//-----------------------------------------------//

// Operadores e Expressões:
    // Operadores Aritiméticos:
        // Adição (+):
            let resultSoma = 60 + 30;
            console.log(resultSoma)

                let numero1 = 45
                let numero2 = 20
                console.log("O Resultado da Soma é: " + [numero1 + numero2])
        // Subtração (-):
            let resultSubtracao = 60 - 20;
            console.log(resultSubtracao)

                let numero3 = 45
                let numero4 = 20
                console.log("O Resultado da Subtração é: " + [numero3 - numero4])
        // Multiplicação (*):
            let resultMultiplicacao = 9 * 9;
            console.log(resultMultiplicacao)

                let numero5 = 25
                let numero6 = 8
                console.log("O Resultado da Multiplicação é: " + [numero5 * numero6])
        // Divisão (/):
            let resultDivisao = 100 / 4;
            console.log(resultDivisao)

                let numero7 = 900
                let numero8 = 75
                console.log("O Resultado da Divisão é: " + [numero7 / numero8])
        // Módulo (% - Resto da Divisão):
            let resultModulo = 20 % 3;
            console.log(resultModulo)

                let numero9 = 47
                let numero10 = 4
                console.log("O que Resta da Divisão entre " + numero9 + " e " + numero10 + " é o Valor " + [numero9 % numero10])

console.log("-- RELACIONAIS --")

    // Operadores Relacionais:
        // Igual a (== - Compara Valor):
//          let isEqual = (x == y);
                let marca = "Apple"
                console.log("Is " + [marca == "Motorola"])
        // Igual a (=== - Compara Valor e Formato):
//            let isEquals = (x === y);

                console.log("Is " + [marca === "LG"])
                
                let cpfBloqueado = "022.851.052-07"
                let cpfUsuario = "443.536.002-06"
                let blockCPF = cpfUsuario === cpfBloqueado

                console.log("O usuário está bloqueado? " + blockCPF)
        // Diferente de (!==):
//          let isNotEqual = (x !== y);
                
                console.log("Is " + [marca !== "Samsung"])

                let cpfPermitido = "443.536.002-06"
                let bloqueado = cpfUsuario !== cpfPermitido

                console.log("É um usuário válido? " + bloqueado)
        // Maior Que (>):
//          let isGreater = (x > y);
                let num16 = 25
                let num17 = 22

                console.log("Is " + [num16 > num17])
        // Menor Que (<):
//          let isLess = (x < y);
                let num18 = 25
                let num19 = 22

                console.log("Is " + [num18 < num19])                
        // Maior ou Igual a (>=):
//            let isGreaterOrEqual = (x >= y);
                let idadeMinima = 18
                let idadeUsuario = 18
                let idadePermitidaValida = idadeUsuario >= idadeMinima

                console.log("Is " + idadePermitidaValida)
        // Menor ou Igual a (<=):
//            let isLessOrEqual = (x <= y);
                let idadeDeCorte = 50
                let idadeUser = 50
                let resultadoTerceiraIdade = idadeDeCorte <= idadeUser

                console.log("Is " + resultadoTerceiraIdade)

console.log("-- LÓGICOS --")

    // Operadores Lógicos:
        // AND lógico (&&):
//          if (condition1 && condition2);
                let idade = 18
                let vistoVerificado = false
                let resultado = (idade >= 18) && (vistoVerificado === true)

                console.log(resultado)
//
//
                let moedasColetadas = 99
                let item = "Estrela"
                let resultadoLog = (moedasColetadas >= 100) && (item === "Estrela")

                console.log(resultadoLog)
        // OR lógico (||):
//          if (condition1 || condition2);
                let tempo = "Chuva"
                let itemInventario = "Guarda-Chuva"
                let podeSair = (tempo !== "Chuva") || (itemInventario === "Guarda-Chuva")

                console.log("Nosso personagem pode sair? " + podeSair)
        // NOT lógico (!):
//          if (!condition);
                let clima = "Neve"
                let horario = 9
                let resultadoNot = clima === "Neve"

                console.log(!!resultado)
//
//
                let resultadoNotLog = !((tempo !== "Neve") && (horario > 6))
                
                console.log(resultadoNotLog)

console.log("-- ATRIBUIÇÃO --")

    // Operadores de Atribuição:
        // Atribuição (=):
            let x = 5;
            console.log(x)

        // Adição e Atribuição (+=):
            let num11 = 20; num11 += 12;
            console.log(num11)

        // Subtração e Atribuição (-=):
            let num12 = 30; num12 -= 15;
            console.log(num12)

                let preco = 200
                preco += 100
                preco -= 25
                console.log("O Preço é de " + preco + " R$")

        // Multiplicação e Atribuição (*=):
            let num13 = 12; num13 *= 8;
            console.log(num13)

        // Divisão e Atribuição (/=):
            let num14 = 90; num14 /= 5;
            console.log(num14)

        // Módulo e Atribuição (%=):
            let num15 = 20; num15 %= 3;
            console.log(num15)

console.log("-- INCREMENTO e DECREMENTO --")

    // Operadores de Incremento e Decremento:
        // Incremento (++):
        let counterInc = 0; counterInc++;
        console.log(counterInc)

            let contadorInc = 1;
            contadorInc++
            contadorInc++
            contadorInc++
            contadorInc++

            console.log("O Valor Final é de: " + contadorInc)
        // Decremento (--):
        let counterDec = 5; counterDec--;
        console.log(counterDec)

            let contadorDec = 6;
            contadorDec--
            contadorDec--
            contadorDec--

            console.log("O Valor Final é de: " + contadorDec)

//-----------------------------------------------//
    console.log("-- If, Else If e Else --")
// If, Else If e Else

let possuiOvos = true
let itensComprados = ""

if(possuiOvos){
    itensComprados = "Leite"
} else{
    console.log("Passou na Seção de Congelados")
    itensComprados = "Lasanha Congelada"
}

console.log("Item Comprado: " + itensComprados)

    console.log("---")

let nivelDeFome = "3"

if(nivelDeFome >= "7"){
    console.log("Você Está Satisfeito")
} else if(nivelDeFome >= "4"){
    console.log("Você Precisa se Alimentar")
} else{
    console.log("Você Desmaiará se não Comer")
}

    console.log("---")
// Switch Case

let dia = "Terça";

switch (dia){
    case "Segunda":
        console.log("Dia de Começar a Semana com Muita Energia !!!");
        break;
    case "Terça":
        console.log("Hora de Aprender Coisas Novas !!!");
        break;
    case "Quarta":
        console.log("Metade da Semana, Continue Firme !!!");
        break;
    case "Quinta":
        console.log("Quase Lá, Um Pouco Mais de Esforço !!!");
        break;
    case "Sexta":
        console.log("Dia de Comemorar, o Fim de Semana Está Chegando !!!");
        break
    default:
        console.log("Fim de Semana !!! Descanse e Divirta-Se !!!");
}

//-----------------------------------------------//
    console.log("-- For, While e Do While --")
// For, While e Do-While
    console.log("-- For --")
        const numeros = [1, 2, 3, 4, 5];

        for(let i = 0; i < numeros.length; i++) {
            console.log(numeros[i]);
        }

            console.log("--")

        for (let contador = 1; contador <= 5; contador++){
            console.log(contador);
        }

    console.log("-- While --")    
        let jogadas = 0;
        let cara = false;

        while(!cara){
            jogadas++;
            cara = Math.random() < 0.5;
        }

        console.log(`A Moeda Caiu Cara Após ${jogadas} Jogada(s)`);

            console.log("--")

        let = dado = 0;

        while (dado <= 4){
            dado = Math.floor(Math.random() * 6) + 1;
            console.log("Você Tirou Um", dado)
        }
   
    console.log("-- Do While --")
        let numero;

        do{
            numero = prompt(`Digite Um Número Entre 1 e 100:`);
        } while(numero < 1 || numero > 100);

        console.log(`Você Digitou o Número ${numero}.`);

            console.log("--")

        let bolinhosComidos = 0;
        do{
            bolinhosComidos++;
            console.log("Você Comeu", bolinhosComidos, "Bolinhos !!!");
        } while (bolinhosComidos < 5);

    //-----------------------------------------------//
        console.log("----------")
    //-----------------------------------------------//

// Funções
    torrar()

    function torrar(){
        console.log("Torrando Pão")
        injetarPao()
    }
    function injetarPao(){
        console.log("Preparando para Injetar o Pão")
            console.log("Finalizado")
    }

    console.log("--")

    function fazerMagica(){
        console.log("Abracadabra !!! Coisas Mágicas Aconteceram")
    }

    console.log("--")

    function saudar(nome){
        console.log("Olá, " + nome + "! Como você está ?")
    }

    saudar("Renaldo");
    saudar("Thalita");

    function calcularIdade(nome, anoNascimento){
        let idade = 2024 - anoNascimento;
        console.log(nome + " tem " + idade + " anos !")
    }

    calcularIdade("Renaldo", 1996);
    calcularIdade("Thalita", 1995);

//-----------------------------------------------//
console.log("----------")
//-----------------------------------------------//

let userName = getFirstName("Carlos-Almeida-Juanito-Gargalo", "-")
    console.log("Seja Bem Vindo " + userName)

    userName = getFirstName("Felipe Silva Han Solo", " ")
        console.log("Seja Bem Vindo " + userName)

        function getFirstName(name, splitChar){
            let firstName = name.split(splitChar)[0]
                return firstName
        }

    console.log("--")

    function somar(numero1, numero2){
        return numero1 + numero2;
    }

    let result = somar(5, 3);
        console.log("A Soma é: " + result);

//-----------------------------------------------//
console.log("----------")
//-----------------------------------------------//

let invoice = {
    name: "Felipe",
        age: 28,
        products: {
            0: ["Mouse Fortrek Semi-Mecanico", 79,90],
            1: ["Teclado Fortrek Semi-Mecanico", 129,90],
            2: ["Monitor Zinnia 27 Pol.", 749,90],
            3: ["Monitor Zinnia 27 Pol.", 749,90],
            4: ["Placa de Vídeo PCYes RX570 4GB", 550,90],
            5: ["Memoria-RAM Crucial Balistic 8 GB DDR4", 255,50]
        },
        taxes: "75,90"
}

generateInvoice(invoice)

    function generateInvoice(invoice){
        console.log(`O Comprador é ${invoice.name}`)
            console.log(`A Idade Dele é ${invoice.age}`)

        for(let index in invoice.products){
            let [productName, productPrice] = invoice.products[index]
                console.log(`- ${productName}: R$ ${productPrice}`)
        }
    }

console.log("--")

    let bichinhos = [
        { "nome": "Gordinha", "tipo": "Siamês", "idade": 6 },
        { "nome": "Salsicha", "tipo": "Rajado", "idade": 5 },
        { "nome": "Maria", "tipo": "Frajola", "idade": 2 },
    ];

    let bichinhoEscolhido = bichinhos[0];
        console.log("A " + bichinhoEscolhido.nome + " é do tipo " + bichinhoEscolhido.tipo + ". Ela tem " + bichinhoEscolhido.idade + " anos de idade");

    let listaParaAmigo = JSON.stringify(bichinhos);
        console.log(listaParaAmigo);

console.log("--")

    let convidado = {
        nome: "Renaldo",
        idade: 10,
        presente: "Carrinho de Controle Remoto"
    };
        console.log(convidado.nome + " tem " + convidado.idade + " anos e trouxe um " + convidado.presente + " de presente !!!");

console.log("--")

    convidado.localizacao = "Sala de Estar";
        console.log(convidado.nome + " está na " + convidado.localizacao + ".")
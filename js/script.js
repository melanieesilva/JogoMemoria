
/*
    Para compreender a lógica do jogo da memória, é preciso entender esses principais
    "momentos" do jogo:

    1 - Selecionar carta:
        O jogador seleciona uma carta e algo deve acontecer após isso,
        tanto no aspecto visual do elemento (a carta) quanto na estrutura lógica do jogo. 
        Primeiro, a carta deve virar. Depois, outra carta precisa ser selecionada e 
        virar da mesma forma. Mas o jogador só pode selecionar uma carta por vez, então
        é preciso que as outras cartas sejam bloqueadas. Por último, é preciso verificar
        se foi formado um par de cartas (se as cartas são iguais ou não);

    2 - Formar pares:
        Ao formar um par, as cartas não podem virar e precisam ser bloqueadas na sua posição
        atual. O restante do tabuleiro, logo, deve estar livre para novas seleções.

*/

/*
    Aqui começamos a definir as variáveis necessárias para o script. 
    É válido se atentar para o tipo da variável também. const e let são utilizadas para escopo
    de bloco (bloco pode ser entendido como "tudo aquilo" que está contido entre chaves {}), 
    enquanto var atende um escopo global ou de função.
    Atualmente, é mais comumente utilizado const e let por suas características de definição e
    atualização serem mais "seguras" do que as de var.
*/ 

// Declarando variável que acessa uma carta do HTML
const cartas = document.querySelectorAll('.carta_jogo');

let cartaVirou = false;
let bloquearTabuleiro = false;
let primeiraCarta, segundaCarta;
let numeroPares = 0;

function virarCarta(){ /*Função que vira uma carta*/

    if (bloquearTabuleiro) return; //Impede que outra carta seja selecionada até que as outras desvirem
    if(this === primeiraCarta) return;
    this.classList.add('flip');

    if(!cartaVirou){
        cartaVirou = true;
        primeiraCarta = this;
        return;
    }
    
    segundaCarta = this;
    verificarPar();
}

function verificarPar(){
    let parCarta = primeiraCarta.dataset.imagem === segundaCarta.dataset.imagem
    
    parCarta ? (desativarCarta(),numeroPares++) : desvirarCarta();
    document.getElementById("contador").textContent = numeroPares;

    if(numeroPares > 9){
        document.getElementById("vitoria").textContent = "Parabéns! Você encontrou todos os pares."
    }else{
        document.getElementById("vitoria").textContent = ""
    }
}

function desativarCarta(){
    primeiraCarta.removeEventListener('click',virarCarta);
    segundaCarta.removeEventListener('click',virarCarta);

    reiniciarTabuleiro();
}

function desvirarCarta(){
    bloquearTabuleiro = true;
    setTimeout(()=>{
        primeiraCarta.classList.remove('flip');
        segundaCarta.classList.remove('flip');

        reiniciarTabuleiro();
    },1400)
}

function reiniciarTabuleiro(){
    [cartaVirou,bloquearTabuleiro] = [false,false];
    [primeiraCarta, segundaCarta] = [null,null];
}

(function embaralhar(){
    cartas.forEach(carta => {
        let posicaoAleatoria = Math.floor(Math.random()*20);
        carta.style.order = posicaoAleatoria;
    });
})();

cartas.forEach(carta => carta.addEventListener('click',virarCarta));
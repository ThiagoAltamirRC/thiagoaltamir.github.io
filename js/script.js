// inicializa o tempo
let tempo = 0;
// inicializa o temporizador
let timer = setInterval(updateTime, 1000);

// função para atualizar o tempo na página
function updateTime() {
  const tempoElement = document.getElementById("tempo");
  tempoElement.innerText = tempo.toString();
  tempo += 1;
}

// função para parar o temporizador
function stopTimer() {
  clearInterval(timer);
  // armazena o valor do tempo antes de parar o temporizador
  const tempoFinal = tempo;
  console.log("Tempo final: ", tempoFinal);
}


const btnAtualizarw = document.getElementById("btnAtualizarw");
btnAtualizarw.addEventListener("click", function() {
    location.reload();
});

const btnAtualizarl = document.getElementById("btnAtualizarl");
btnAtualizarl.addEventListener("click", function() {
    location.reload();
});

const btnAtualizar = document.getElementById("btnAtualizar");
btnAtualizar.addEventListener("click", function() {
    location.reload();
});

const correndo = document.querySelector('.correndo');
const obstaculo = document.querySelector('.obstaculo');
const vitoria = document.querySelector('.vitoria');
const ama = document.querySelector('.ama');
const beats = document.querySelector('.beats');
const becks = document.querySelector('.becks');
const brahma = document.querySelector('.brahma');
const dobem = document.querySelector('.dobem');
const fusion = document.querySelector('.fusion');
const gatorade = document.querySelector('.gatorade');
const guarana = document.querySelector('.guarana');
const h2o = document.querySelector('.h2o');
const mikes = document.querySelector('.mikes');
const pepsi = document.querySelector('.pepsi');
const stella = document.querySelector('.stella');
const caminhaoguarana = document.querySelector('.caminhaoguarana');
const caminhaobrahma = document.querySelector('.caminhaobrahma');
const back = document.querySelector('.back');
const back2 = document.querySelector('.back2');
const back3 = document.querySelector('.back3');
const back4 = document.querySelector('.back4');
const win = document.querySelector('.win');
const lost = document.querySelector('.lost');
const gameover = document.querySelector('.gameover');
const caminhaoantarctica = document.querySelector('.caminhaoantarctica');
const caminhaoskol = document.querySelector('.caminhaoskol');
const podio = document.querySelector('.podio');
const campeao = document.querySelector('.campeao');
const fim = document.querySelector('.fim');


const pulo = () => {
    correndo.classList.add('pulo');

    setTimeout(() => {       

        correndo.classList.remove('pulo');
    }, 500);
}

function stopitem() {
    const amaPosition = ama.offsetLeft;
    const beatsPosition = beats.offsetLeft;
    const becksPosition = becks.offsetLeft;
    const brahmaPosition = brahma.offsetLeft;
    const dobemPosition = dobem.offsetLeft;
    const fusionPosition = fusion.offsetLeft;
    const gatoradePosition = gatorade.offsetLeft;
    const guaranaPosition = guarana.offsetLeft;
    const h2oPosition = h2o.offsetLeft;
    const mikesPosition = mikes.offsetLeft;
    const pepsiPosition = pepsi.offsetLeft;
    const stellaPosition = stella.offsetLeft;
    const caminhaoguaranaPosition = caminhaoguarana.offsetLeft;
    const caminhaobrahmaPosition = caminhaobrahma.offsetLeft;
    const backPosition = back.offsetLeft;
    const back2Position = back2.offsetLeft;
    const back3Position = back3.offsetLeft;
    const back4Position = back4.offsetLeft;
    const caminhaoantarcticaPosition = caminhaoantarctica.offsetLeft;
    const caminhaoskolPosition = caminhaoskol.offsetLeft;

        ama.style.animation = 'none';
        ama.style.left = `${amaPosition}px`;

        beats.style.animation = 'none';
        beats.style.left = `${beatsPosition}px`;

        becks.style.animation = 'none';
        becks.style.left = `${becksPosition}px`;

        brahma.style.animation = 'none';
        brahma.style.left = `${brahmaPosition}px`;

        dobem.style.animation = 'none';
        dobem.style.left = `${dobemPosition}px`;

        fusion.style.animation = 'none';
        fusion.style.left = `${fusionPosition}px`;

        gatorade.style.animation = 'none';
        gatorade.style.left = `${gatoradePosition}px`;

        guarana.style.animation = 'none';
        guarana.style.left = `${guaranaPosition}px`;

        h2o.style.animation = 'none';
        h2o.style.left = `${h2oPosition}px`;

        mikes.style.animation = 'none';
        mikes.style.left = `${mikesPosition}px`;

        pepsi.style.animation = 'none';
        pepsi.style.left = `${pepsiPosition}px`;

        stella.style.animation = 'none';
        stella.style.left = `${stellaPosition}px`;

        caminhaoguarana.style.animation = 'none';
        caminhaoguarana.style.left = `${caminhaoguaranaPosition}px`;

        caminhaobrahma.style.animation = 'none';
        caminhaobrahma.style.left = `${caminhaobrahmaPosition}px`;

        back.style.animation = 'none';
        back.style.left = `${backPosition}px`;

        back2.style.animation = 'none';
        back2.style.left = `${back2Position}px`;

        back3.style.animation = 'none';
        back3.style.left = `${back3Position}px`;

        back4.style.animation = 'none';
        back4.style.left = `${back4Position}px`;

        caminhaoantarctica.style.animation = 'none';
        caminhaoantarctica.style.left = `${caminhaoantarcticaPosition}px`;

        caminhaoskol.style.animation = 'none';
        caminhaoskol.style.left = `${caminhaoskolPosition}px`;
    
}

const loop = setInterval(() => {

    const obstaculoPosition = obstaculo.offsetLeft;
    const correndoPosition = +window.getComputedStyle(correndo).bottom.replace('px', '');
    const amaPosition = ama.offsetLeft;
    const beatsPosition = beats.offsetLeft;
    const becksPosition = becks.offsetLeft;
    const brahmaPosition = brahma.offsetLeft;
    const dobemPosition = dobem.offsetLeft;
    const fusionPosition = fusion.offsetLeft;
    const gatoradePosition = gatorade.offsetLeft;
    const guaranaPosition = guarana.offsetLeft;
    const h2oPosition = h2o.offsetLeft;
    const mikesPosition = mikes.offsetLeft;
    const pepsiPosition = pepsi.offsetLeft;
    const stellaPosition = stella.offsetLeft;
    const caminhaoguaranaPosition = caminhaoguarana.offsetLeft;
    const caminhaobrahmaPosition = caminhaobrahma.offsetLeft;
    const backPosition = back.offsetLeft;
    const back2Position = back2.offsetLeft;
    const back3Position = back3.offsetLeft;
    const back4Position = back4.offsetLeft;
    const caminhaoantarcticaPosition = caminhaoantarctica.offsetLeft;
    const caminhaoskolPosition = caminhaoskol.offsetLeft;
    const scoreElement = document.getElementById("score");
    scoreElement.innerText = score.toString();
    
   if (obstaculoPosition <= 60 && obstaculoPosition > 0 && correndoPosition < 55 ) {
        
        obstaculo.style.animation = 'none';
        obstaculo.style.left = `${obstaculoPosition}px`;

        correndo.style.animation = 'none';
        correndo.style.bottom = `${correndoPosition}px`;

        ama.style.animation = 'none';
        ama.style.left = `${amaPosition}px`;

        beats.style.animation = 'none';
        beats.style.left = `${beatsPosition}px`;

        becks.style.animation = 'none';
        becks.style.left = `${becksPosition}px`;

        brahma.style.animation = 'none';
        brahma.style.left = `${brahmaPosition}px`;

        dobem.style.animation = 'none';
        dobem.style.left = `${dobemPosition}px`;

        fusion.style.animation = 'none';
        fusion.style.left = `${fusionPosition}px`;

        gatorade.style.animation = 'none';
        gatorade.style.left = `${gatoradePosition}px`;

        guarana.style.animation = 'none';
        guarana.style.left = `${guaranaPosition}px`;

        h2o.style.animation = 'none';
        h2o.style.left = `${h2oPosition}px`;

        mikes.style.animation = 'none';
        mikes.style.left = `${mikesPosition}px`;

        pepsi.style.animation = 'none';
        pepsi.style.left = `${pepsiPosition}px`;

        stella.style.animation = 'none';
        stella.style.left = `${stellaPosition}px`;

        caminhaoguarana.style.animation = 'none';
        caminhaoguarana.style.left = `${caminhaoguaranaPosition}px`;

        caminhaobrahma.style.animation = 'none';
        caminhaobrahma.style.left = `${caminhaobrahmaPosition}px`;

        back.style.animation = 'none';
        back.style.left = `${backPosition}px`;

        back2.style.animation = 'none';
        back2.style.left = `${back2Position}px`;

        back3.style.animation = 'none';
        back3.style.left = `${back3Position}px`;

        back4.style.animation = 'none';
        back4.style.left = `${back4Position}px`;

        caminhaoantarctica.style.animation = 'none';
        caminhaoantarctica.style.left = `${caminhaoantarcticaPosition}px`;

        caminhaoskol.style.animation = 'none';
        caminhaoskol.style.left = `${caminhaoskolPosition}px`;

        correndo.src = './imagens/gameover.png'; 
        correndo.style.width = '60px';
        correndo.style.marginLeft = '15px';
        correndo.style.marginBottom = '-10px';

        clearInterval(loop);
        gameover.style.display = 'block';
        stopTimer();
   }
}, 10) // 10 milisegundos;

document.addEventListener('keydown', pulo);

let score = 0;

function animateElement(element) {
  const elementPosition = element.offsetLeft;
  const correndoPosition = +window.getComputedStyle(correndo).bottom.replace('px', '');

  if (elementPosition <= 50 && elementPosition > 0 && correndoPosition > 80) {
    // Desativa a animação
    element.style.animation = 'none';
    element.style.left = `${elementPosition}px`;
    
    // Altera o visual do elemento
    element.src = './imagens/fogos.gif'; 
    element.style.width = '100px';
    element.style.marginLeft = '-50px';
    element.style.marginBottom = '-15px';

    // Incrementa a pontuação e remove o elemento após 1 segundo
    score += 1;
    
    setTimeout(() => {
      element.style.display = 'none';
    }, 1000);}

  if (score == 1 && tempo >= 11){
    setInterval(() => {
    
    obstaculo.style.animation = 'none';
    obstaculo.style.left = -1000 + 'px';

    correndo.style.animation = 'none';
    correndo.style.bottom = -1000 + 'px';;

    clearInterval();
    correndo.classList.remove('pulo');
    stopitem();
    win.style.display = 'block';
    stopTimer();

    setTimeout(() => {
    fim.style.display = 'block';
    }, 3000);

    }, 10);
  }

  if (score < 12 && tempo >= 115){
    setInterval(() => {
    
    obstaculo.style.animation = 'none';
    obstaculo.style.left = -1000 + 'px';
    correndo.style.animation = 'none';
    correndo.src = './imagens/gameover.png';
    correndo.style.width = '60px';
    correndo.style.marginLeft = '15px';
    correndo.style.marginBottom = '-10px';

    clearInterval();
    correndo.classList.remove('pulo');
    stopitem();
    lost.style.display = 'block';
    stopTimer();

    }, 10);
  }
}

// Define um intervalo que verifica a posição dos elementos a cada 10 milissegundos
const loop2 = setInterval(() => {
  animateElement(ama);
  animateElement(beats);
  animateElement(becks);
  animateElement(brahma);
  animateElement(dobem);
  animateElement(fusion);
  animateElement(gatorade);
  animateElement(guarana);
  animateElement(h2o);
  animateElement(mikes);
  animateElement(pepsi);
  animateElement(stella);
}, 10);

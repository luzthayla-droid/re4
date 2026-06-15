// Array com falas icônicas do Mercador do jogo
const falasMercador = [
    "Welcome! Got a selection of good things on sale, stranger!",
    "Whatya buyin'?",
    "Whatya sellin'?",
    "Ah, choice of an avid gunsmith! Premium choice!",
    "Heh heh heh... Thank you."
];

// Selecionando o botão através do ID
const botao = document.getElementById('btnMercador');

// Adicionando interatividade através do evento de clique (click)
botao.addEventListener('click', () => {
    // Sorteia uma frase aleatória do Mercador com base no tamanho do Array
    const fraseAleatoria = falasMercador[Math.floor(Math.random() * falasMercador.length)];
    
    // Exibe o diálogo na tela utilizando um alerta do navegador
    alert(`🛒 O Mercador diz:\n\n"${fraseAleatoria}"`);
});

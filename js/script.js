// Exibir o menu mobile ao clicar no ícone de menu (hambúrguer)
document.querySelector('.nav-bars').addEventListener('click', () => {
    document.querySelector('.mobile').classList.add('show');
});

// Ocultar o menu mobile ao clicar no ícone de fechar (X)
document.querySelector('.nav-xmark').addEventListener('click', () => {
    document.querySelector('.mobile').classList.remove('show');
});


/* Mover banner */
let currentBanner = 0; // Índice do banner atual
const banners = document.querySelectorAll('.banner'); // Seleciona todos os banners

// Exibe o banner atual
function showBanner(index) {
    banners.forEach((banner, i) => {
        if (i === index) {
            banner.style.display = 'block';
        } else {
            banner.style.display = 'none';
        }
    });
}

// Mover para o próximo ou anterior
function moveBanner(direction) {
    if (direction === 'next') {
        currentBanner = (currentBanner + 1) % banners.length; // Avança para o próximo
    } else if (direction === 'prev') {
        currentBanner = (currentBanner - 1 + banners.length) % banners.length; // Volta para o anterior
    }
    showBanner(currentBanner);
}

// Inicializa o carrossel
showBanner(currentBanner);

// Avança ou retrocede a cada 5 segundos (opcional)
setInterval(() => {
    moveBanner('next');
}, 7000);

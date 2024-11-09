// Exibir o menu mobile ao clicar no ícone de menu (hambúrguer)
document.querySelector('.nav-bars').addEventListener('click', () => {
    document.querySelector('.mobile').classList.add('show');
});

// Ocultar o menu mobile ao clicar no ícone de fechar (X)
document.querySelector('.nav-xmark').addEventListener('click', () => {
    document.querySelector('.mobile').classList.remove('show');
});

const swiper = new Swiper('.swiper', {
    // Loop infinito ligado
    loop: true,
    
    // Velocidade da transição em milissegundos
    speed: 600,

    // Efeito de deslize simples (sem transparências de 'cards')
    effect: 'slide',

    // Navegação
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // Pontinhos na parte de baixo
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Opcional: passar sozinho a cada 3 segundos
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

const btnEntrar = document.getElementById('btnEntrar');
const overlay = document.getElementById('overlay');
const audio = document.getElementById('meuAudio');

btnEntrar.addEventListener('click', () => {
    // Toca a música
    audio.play();
    
    // Esconde a tela de entrada com efeito de sumiço
    overlay.style.opacity = '0';
    
    // Remove do HTML após a animação para não atrapalhar o carrossel
    setTimeout(() => {
        overlay.style.display = 'none';
    }, 1000);
});
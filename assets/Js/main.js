window.onload = function () {
    document.querySelector(".menu-opener").addEventListener("click", function () {
        if (document.querySelector(".menu nav").style.display == 'flex') {
            document.querySelector(".menu nav").style.display = "none";
        } else {
            document.querySelector(".menu nav").style.display = 'flex';
        }
    });
};

function aparecerHeader() {
    if (window.scrollY <= 20) {
        document.querySelector('header').style.backgroundColor = 'transparent';
        document.querySelector('header').style.transition = 'opacity 1s';
    } else {
        document.querySelector('header').style.backgroundColor = 'black';
        document.querySelector('header').style.transition = 'opacity 500ms ease-in';
    }
}

window.addEventListener('scroll', aparecerHeader);


const subirTop = document.querySelector('.seta');
subirTop.addEventListener('click', subirSeta);

function subirSeta() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth',
    });
}

function sumir() {
    const seta = document.querySelector('.seta');
    if (window.scrollY === 0) {
        seta.style.display = 'none';
    } else {
        seta.style.display = 'block';
    }
}

window.addEventListener('scroll', sumir)
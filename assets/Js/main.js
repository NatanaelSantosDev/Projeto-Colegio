window.onload = function () {
    const menuOpener = document.querySelector(".menu-opener");
    const menuNav = document.querySelector(".menu-nav");

    menuOpener.addEventListener("click", function () {
        if (window.innerWidth <= 991) {
            menuNav.classList.toggle('open');
        }
    });

    const menuItems = menuNav.querySelectorAll("a");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {
            menuItems.forEach(item => item.parentElement.classList.remove("active"));
            this.parentElement.classList.add("active");

            if (window.innerWidth <= 991) {
                menuNav.classList.remove('open');
            }
        });
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

document.addEventListener("DOMContentLoaded", () => {
    const banner = document.querySelector(".banner");
    const pointers = document.querySelectorAll(".pointer");
    const images = [
        "midia/alunos1.jpg",
        "midia/alunos2.jpg",
        "midia/alunos3.jpg"
    ];
    let currentImageIndex = 0;

    function changeBackgroundImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        banner.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        updatePointers();
    }

    function updatePointers() {
        pointers.forEach((pointer, index) => {
            if (index === currentImageIndex) {
                pointer.classList.add("active");
            } else {
                pointer.classList.remove("active");
            }
        });
    }

    setInterval(changeBackgroundImage, 7000);

    banner.style.backgroundImage = `url('${images[currentImageIndex]}')`;
    updatePointers();
});



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
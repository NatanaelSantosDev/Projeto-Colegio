window.onload = function () {
    const menuOpener = document.querySelector(".menu-opener");
    const menuNav = document.querySelector(".menu nav");

    menuOpener.addEventListener("click", function () {
        if (menuNav.style.display === 'flex') {
            menuNav.style.display = "none";
        } else {
            menuNav.style.display = 'flex';
        }
    });

    const menuItems = menuNav.querySelectorAll("a");
    menuItems.forEach(item => {
        item.addEventListener("click", function () {

            menuItems.forEach(item => item.parentElement.classList.remove("active"));

            this.parentElement.classList.add("active");

            menuNav.style.display = 'none';
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
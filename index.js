document.addEventListener('DOMContentLoaded', (event) => {
    //html loaded, set event listeners
    document.querySelector('.menu-button').addEventListener("click", collapseNav);

    let style = localStorage.getItem('style');
    if (style != null) {
        document.querySelector('.navbar-select').value = style;
    }

    document.querySelector('.navbar-select').addEventListener("change", selectChanged);
    setStylesheet();
});

function selectChanged(){
    setStylesheet();
    alert('Stilpreferens sparad.');
}

function setStylesheet() {
    let style = document.querySelector('.navbar-select').value;
    if (localStorage.getItem('style') != style) {
        localStorage.setItem('style', style);
    }

    document.querySelector('.css-link').setAttribute('href', 'style.' + style + '.css');
}

function collapseNav() {
    let navbar = document.querySelector('.navbar');

    if (navbar.classList.contains('collapsed')) {
        navbar.classList.remove('collapsed');
    } else {
        navbar.classList.add('collapsed');
    }
}
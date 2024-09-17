class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <link rel="stylesheet" href="styles/navbar.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <a id="index" href="./">
                <img src="static/space-invader.png">
                <span class="samgjl">samgjl</span> 
                <a href="javascript:void(0);" class="hamburger" onclick="hamburger()">
                    <i class="fa fa-bars"></i>
                </a>
            <div class="links collapsed">
                <a id="projects" class='nav-item' href="./projects">Projects</a>
                <a id="github" class='nav-item' href="https://github.com/samgjl" target="_blank">
                    Github <i class="fa fa-external-link"></i>
                </a>
            </div>
        </nav>`;
    }
}
customElements.define('nav-bar', NavBar);

function hamburger() {
    let links = document.querySelector(".links");
    let hamburger = document.querySelector(".hamburger").children[0];
    links.classList.toggle("collapsed");
    links.classList.toggle("expanded");
    hamburger.classList.toggle("fa-bars");
    hamburger.classList.toggle("fa-times");
}
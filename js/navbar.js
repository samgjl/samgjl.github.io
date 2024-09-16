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
            <div class="links">
                <a id="projects" class='nav-item' href="./projects">Projects</a>
            </div>
        </nav>`;
    }
}

function hamburger() {
    let links = document.querySelector(".links");
    if (links.style.display === "block") {
        links.style.display = "none";
    } else {
        links.style.display = "block";
    }
}

customElements.define('nav-bar', NavBar);
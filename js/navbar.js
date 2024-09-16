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

function hamburger() {
    let links = document.querySelector(".links");
    if (links.classList.contains("expanded")) {
        links.classList.remove("expanded");
        links.classList.add("collapsed");
    } else {
        links.classList.remove("collapsed");
        links.classList.add("expanded");
    }
    // if (links.style.display === "block") {
    //     links.style.display = "none";
    // } else {
    //     links.style.display = "block";
    // }
}

customElements.define('nav-bar', NavBar);
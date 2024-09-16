class NavBar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <nav class="navbar">
            <link rel="stylesheet" href="styles/navbar.css">
            <a id="index" href="./"> <img src="static/space-invader.png"><span>samgjl</span> </a>
            <a id="projects" class='nav-item' href="./projects">Projects</a>
        </nav>`;
    }
}

customElements.define('nav-bar', NavBar);
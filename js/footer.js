class CustomFooter extends HTMLElement {
    constructor() {
        super();
        // Add any initialization code here
    }

    connectedCallback() {
        this.innerHTML = `
        <footer> 
            <link rel="stylesheet" href="styles/footer.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
            <div class="column">
                <ul> 
                    <li><a class='left' href="./">Home</a></li>
                    <li><a class='left' href="./projects">Projects</a></li>
                    <li><a class='left' href="./about">About/Contact</a></li>
                </ul>
            </div>
            <div class="column">
                <ul>
                    <li><a class='left' href="./resume">Resume</a></li>
                    <li><a class="left" href="https://github.com/samgjl">Github <i class="fa fa-external-link"></i></a></li>
                </ul>
            </div>
        </footer>
        `;
    }
}

// Define the custom element
customElements.define('custom-footer', CustomFooter);
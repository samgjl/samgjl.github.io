const DEAD = 0;
const ALIVE = 1;

class Universe {
    width;
    height;
    cells;
    gridHTML;

    constructor(height, width) {
        this.height = height;
        this.width = width;
        this.cells = new Uint8Array(width * height).fill(DEAD);
        this.randomize();
    }

    initGrid() {
        let grid = document.querySelector("#game-of-life");
        grid.style.gridTemplateRows = `repeat(${this.height}, 1fr)`;
        grid.style.gridTemplateColumns = `repeat(${this.width}, 1fr)`;
        grid.style.width = `${this.width * 10}px`;

        for (let i = 0; i < this.width * this.height; i++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            grid.appendChild(cell);
        }
        this.gridHTML = grid;
    }

    randomize(deterministic = false) {
        if (!deterministic) {
            for (let i = 0; i < this.cells.length; i++) {
                this.cells[i] = Math.random() < 0.5 ? DEAD : ALIVE;
            }
        } else {
            for (let i = 0; i < this.width * this.height; i++) {
                if (i % 2 === 0 || i % 7 === 0) {
                    this.cells[i] = ALIVE;
                } else {
                    this.cells[i] = DEAD;
                }
            }
        }
    }
    // Get the flat index from x,y coordinates
    index(row, col) {
        return row * this.height + col;
    }
    // Ge the cell at x,y coordinates
    get(row, col) {
        return this.cells[row * this.height + col];
    }

    // Count the number of alive neighbors
    countNeighbors(row, col) {
        let count = 0;
        for (let d_row = -1; d_row <= 1; d_row++) {
            for (let d_col = -1; d_col <=1; d_col++) {
                if (d_row === 0 && d_col === 0) continue;

                let n_row = (row + d_row) % this.height;
                let n_col = (col + d_col) % this.width;
                n_row = (n_row < 0) ? this.height + n_row : n_row;
                n_col = (n_col < 0) ? this.width + n_col : n_col;

                count += this.get(n_row, n_col);
            }
        }
        return count;
    }

    // Update the universe state
    tick() {
        let next_cells = new Uint8Array(this.cells.length);

        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                let new_cell = this.get(row, col);
                let neighbors = this.countNeighbors(row, col);

                switch (neighbors) {
                    case 2: // 2: Stay alive/dead
                        break;
                    case 3: // 3: Become/Stay alive
                        new_cell = ALIVE;
                        break;
                    default: // <2 or >3: Become/Stay dead
                        new_cell = DEAD;
                        break;
                }
                next_cells[this.index(row, col)] = new_cell; 
            }
        }
        this.cells = next_cells;
    }


    // Render a string representation of the universe
    toString() {
        let output = "";
        for (let row = 0; row < this.height; row++) {
            for (let col = 0; col < this.width; col++) {
                output += this.get(row, col) === ALIVE ? "◼" : "◻";
            }
            output += "\n";
        }
        return output;
    }

    clearHTML() {
        for (let i = 0; i < this.cells.length; i++) {
            this.gridHTML.children[i].classList.remove("alive");
        }
    }

    // Render the universe to the grid
    render() {
        let cell;
        for (let i = 0; i < this.cells.length; i++) {
            cell = this.gridHTML.children[i];
            switch (this.cells[i]) {
                case ALIVE:
                    cell.classList.add("alive");
                    break;
                default:
                    cell.classList.remove("alive");
                    break;
            }
        }
    }

    renderLoop() {
        this.tick();
        this.render();
    }
}
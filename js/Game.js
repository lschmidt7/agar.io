//*************************
// author: Leonardo Schmidt
//*************************

// class that manage the game
function Game(canvasName, cellGrid){
    
    // configure canvas to fit window
    this.canvas = document.getElementById(canvasName);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    // get canvas 2d context
    this.ctx = this.canvas.getContext('2d');

    // mouse position on screen
    this.mousePos = new Vec2(0,0);

    // array of dots
    this.dots = []

    this.grid = {
        cell: cellGrid,
        cols: Math.ceil(window.innerWidth / cellGrid.x),
        rows: Math.ceil(window.innerHeight / cellGrid.y)
    }

    // clear screen to redraw
    this.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // set mousePos each frame
    this.setMousePos = function (event)
    {
        this.mousePos.x = event.clientX, 
        this.mousePos.y = event.clientY;
    }

    // spawn dots
    this.init = function (countDots) {
        for (let i = 0; i < this.grid.rows; i++) {
            this.dots.push([]);
            for (let j = 0; j < this.grid.cols; j++) {
                this.dots[i].push([]);
            }
        }
        for (let i in [...Array(countDots).keys()]) {
            let x = Math.floor(Math.random() * this.canvas.width);
            let y = Math.floor(Math.random() * this.canvas.height);
            let cell = this.indexCell(new Vec2(x,y));
            this.dots[cell.y][cell.x].push(new Dot(x,y,this.ctx));
        }
        
    }

    // render spawned dots
    this.render = function () {
        for (let i = 0; i < this.grid.rows; i++) {
            for (let j = 0; j < this.grid.cols; j++) {
                for (let k = 0; k < this.dots[i][j].length; k++) {
                    this.dots[i][j][k].draw();
                }
            }
        }
        
    }

    this.indexCell = function (pos) {
        let i = Math.floor(pos.x / this.grid.cell.x);
        let j = Math.floor(pos.y / this.grid.cell.y);
        return new Vec2(i,j);
    }

    this.update = function (i,j,player) {
        let current_dots = this.dots[j][i];
        for (let k = 0; k < current_dots.length; k++) {
            let d = current_dots[k];
            if(d.pos.distance(player.pos) < player.size){
                this.dots[j][i].splice(k,1);
                player.grow(d.size);
            }
        }
    }
        
}
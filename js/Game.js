//*************************
// author: Leonardo Schmidt
//*************************

// class that manage the game
class Game{

    constructor(canvasName, cellGrid, f, time)
    {
        // configure canvas to fit window
        this.canvas = document.getElementById(canvasName);
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        // get canvas 2d context
        this.ctx = this.canvas.getContext('2d');

        this.interval = null;

        this.f = f;
        this.time = time;

        // array of dots
        this.dots = [];

        this.grid = {
            cell: cellGrid,
            cols: Math.ceil(window.innerWidth / cellGrid.x),
            rows: Math.ceil(window.innerHeight / cellGrid.y)
        }
    }

    // clear screen to redraw
    clear() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    // spawn dots
    init(countDots) {
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

        this.interval = setInterval(this.f,this.time);
        
    }

    // render spawned dots
    render() {
        for (let i = 0; i < this.grid.rows; i++) {
            for (let j = 0; j < this.grid.cols; j++) {
                for (let k = 0; k < this.dots[i][j].length; k++) {
                    this.dots[i][j][k].draw();
                }
            }
        }
    }

    indexCell (pos) {
        let i = Math.floor(pos.x / this.grid.cell.x);
        let j = Math.floor(pos.y / this.grid.cell.y);
        return new Vec2(i,j);
    }

    // update the dots
    // update the player size and velocity
    update (player) {

        for (let p = 0; p < player.blobs.length; p++) {

            let bounds = player.blobs[p].bounds();

            let tl = game.indexCell(bounds.top_left);
            let br = game.indexCell(bounds.bot_right);
            
            for (let i = tl.x; i <= br.x; i++) {
                for (let j = tl.y; j <= br.y; j++) {
                    let current_dots = this.dots[j][i];
                    for (let k = 0; k < current_dots.length; k++) {
                        let d = current_dots[k];
                        if(d.pos.distance(player.blobs[p].pos) < player.blobs[p].size.current){
                            this.dots[j][i].splice(k,1);
                            player.blobs[p].grow(d.size);
                        }
                    }
                }
            }
            
        }
    }

    // play and pause the game
    changeState () {
        States.change();
        if(States.current == States.PLAY)
            this.interval = setInterval(this.f,this.time);
        else
            clearInterval(this.interval);
    }

}


function Game(canvasName){
    
    this.canvas = document.getElementById(canvasName);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.ctx = this.canvas.getContext('2d');

    this.mousePos = new Vec2(0,0);

    this.dots = []

    this.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.setMousePos = function (event)
    {
        this.mousePos.x = event.clientX, 
        this.mousePos.y = event.clientY;
    }

    this.init = function () {
        for (let i in [...Array(100).keys()]) {
            let x = Math.floor(Math.random() * this.canvas.width);
            let y = Math.floor(Math.random() * this.canvas.height);
            this.dots.push(new Dot(x,y,this.ctx));
        }
        console.log(this.dots.length)
    }

    this.render = function () {
        for (let i in [...Array(100).keys()]) {
            this.dots[i].draw();
        }
        
    }
        
}
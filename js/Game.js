

function Game(canvasName){
    
    this.canvas = document.getElementById(canvasName);
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;

    this.ctx = this.canvas.getContext('2d');

    this.mousePos = new Vec2(0,0);

    this.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.setMousePos = function (event)
    {
        this.mousePos.x = event.clientX, 
        this.mousePos.y = event.clientY;
    }
        
}
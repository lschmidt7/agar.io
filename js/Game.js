function Game(canvasName){
    
    this.canvas = document.getElementById(canvasName);
    this.ctx = this.canvas.getContext('2d');

    this.mousePos = {x: 0, y: 0}

    this.clear = function () {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }

    this.mousePos = function (event)
    {
        this.mousePos.x = event.clientX, 
        this.mousePos.y = event.clientY;
        console.log(this.mousePos.x);
    }
        
}


function Helper(game){

    this.on = false;

    this.draw = function () {
        if(this.on){
            this.drawGrid();
        }
    }

    this.changeState = function ()
    {
        this.on = !this.on;
    }

    this.drawGrid = function () {
        // draw cols
        for (let i = 0; i < game.grid.cols; i++) {
            game.ctx.beginPath();
            game.ctx.moveTo(i * game.grid.cell.x, 0);
		    game.ctx.lineTo(i * game.grid.cell.x, game.canvas.height);
		    game.ctx.stroke();
        }
        // draw rows
        for (let i = 0; i < game.grid.rows; i++) {
            game.ctx.beginPath();
            game.ctx.moveTo(0,i * game.grid.cell.y);
		    game.ctx.lineTo(game.canvas.width, i * game.grid.cell.y);
		    game.ctx.stroke();
        }
    }

}
//*************************
// author: Leonardo Schmidt
//*************************

function Helper(game, player){

    this.draw = {
        'grid': false,
        'cell': false
    }

    this.draw = function () {
        if(this.draw.grid)
            this.drawGrid();
        if(this.draw.cell)
            this.drawCell();
    }

    this.changeDraw = function (field)
    {
        this.draw[field] = !this.draw[field];
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

    this.drawCell = function () {
        let pc = game.indexCell(player.pos);
        game.ctx.beginPath();
        game.ctx.lineWidth = "2";
        game.ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
        game.ctx.rect(pc.x * game.grid.cell.x,pc.y * game.grid.cell.y,game.grid.cell.x,game.grid.cell.y);
        game.ctx.fill();
    }

    this.drawPlayerForward = function () {

    }

}
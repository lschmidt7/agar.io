//*************************
// author: Leonardo Schmidt
//*************************

function Helper(game, player){

    this.draw = {
        'grid'  : false,
        'cell'  : false,
        'dir'   : false,
        'bounds': false
    }

    this.draw = function () {
        if(this.draw.grid)
            this.drawGrid();
        if(this.draw.cell)
            this.drawCell();
        if(this.draw.dir)
            this.drawPlayerForward();
        if(this.draw.bounds)
            this.drawPlayerBounds();
    }

    this.changeDraw = function (field)
    {
        this.draw[field] = !this.draw[field];
    }

    this.drawGrid = function () {
        // draw cols
        game.ctx.strokeStyle = 'black';
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
        let bounds = player.bounds()
        let cells = []
        
        cells.push( game.indexCell(bounds.top_left) );
        cells.push( game.indexCell(bounds.top_right) );
        cells.push( game.indexCell(bounds.bot_left) );
        cells.push( game.indexCell(bounds.bot_right) );

        for (let i = 0; i < cells.length; i++) {
            game.ctx.beginPath();
            game.ctx.lineWidth = "2";
            game.ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
            game.ctx.rect(cells[i].x * game.grid.cell.x, cells[i].y * game.grid.cell.y, game.grid.cell.x, game.grid.cell.y);
            game.ctx.fill();   
        }
    }

    this.drawPlayerForward = function () {
        game.ctx.beginPath();
        game.ctx.lineWidth = "2";
        game.ctx.strokeStyle = player.color;
        game.ctx.moveTo(player.pos.x, player.pos.y);
        let to = player.pos.add(player.dir.mul(player.size.current * 2));
        game.ctx.lineTo(to.x,to.y);
        game.ctx.stroke();
    }

    this.drawPlayerBounds = function (params) {
        let bounds = player.bounds();
        console.log(bounds);
        game.ctx.beginPath();
        game.ctx.lineWidth = "1";
        game.ctx.strokeStyle = "black";
        game.ctx.rect(bounds.top_left.x,bounds.top_left.y,player.size.current*2,player.size.current*2);
        game.ctx.stroke();
    }

}
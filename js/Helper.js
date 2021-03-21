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
        
        let c = game.grid.cell;

        let bounds = player.bounds()

        let tl = game.indexCell(bounds.top_left);
        let br = game.indexCell(bounds.bot_right).addScalar(1);

        let start = new Vec2(tl.x * c.x, tl.y * c.y);
        let end   = new Vec2( br.x * c.x - start.x, br.y * c.y - start.y );

        game.ctx.beginPath();
        game.ctx.lineWidth = "2";
        game.ctx.fillStyle = "rgba(0, 255, 0, 0.3)";
        game.ctx.rect( start.x, start.y, end.x, end.y );
        game.ctx.fill();
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
        game.ctx.beginPath();
        game.ctx.lineWidth = "1";
        game.ctx.strokeStyle = "black";
        game.ctx.rect(bounds.top_left.x,bounds.top_left.y,player.size.current*2,player.size.current*2);
        game.ctx.stroke();
    }

}
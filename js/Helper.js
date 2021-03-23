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

    this.update = function () {
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
        for (let i = 0; i < game.grid.cols; i++) {
            Drawer.line("1","black",new Vec2(i * game.grid.cell.x, 0), new Vec2(i * game.grid.cell.x, game.canvas.height))
        }
        // draw rows
        for (let i = 0; i < game.grid.rows; i++) {
            Drawer.line("1","black",new Vec2(0,i * game.grid.cell.y),new Vec2(game.canvas.width, i * game.grid.cell.y))
        }
    }

    this.drawCell = function () {
        
        let c = game.grid.cell;

        for (let i = 0; i < player.blobs.length; i++) {
            let p = player.blobs[i]
            let bounds = p.bounds()

            let tl = game.indexCell(bounds.top_left);
            let br = game.indexCell(bounds.bot_right).addScalar(1);

            let start = new Vec2(tl.x * c.x, tl.y * c.y);
            let end   = new Vec2( br.x * c.x - start.x, br.y * c.y - start.y );

            Drawer.rectFill("2","rgba(0, 255, 0, 0.3)",start,end)
        }
    }

    this.drawPlayerForward = function () {
        for (let i = 0; i < player.blobs.length; i++) {
            let p = player.blobs[i]
            Drawer.line("2",player.color,p.pos,p.pos.add(p.dir.mul(p.size.current * 2)))   
        }
    }

    this.drawPlayerBounds = function (params) {
        for (let i = 0; i < player.blobs.length; i++) {
            let p = player.blobs[i]
            let bounds = p.bounds();
            Drawer.rect("1","black",bounds.top_left,new Vec2(p.size.current,p.size.current).mul(2))
        }
    }

}
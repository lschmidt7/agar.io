//*************************
// author: Leonardo Schmidt
//*************************

class Helper {

    constructor (game, player)
    {
        this.game = game
        this.player = player
        this.draw = {
            'grid'  : false,
            'cell'  : false,
            'dir'   : false,
            'bounds': false
        }
    }

    update () 
    {
        if(this.draw.grid)
            this.drawGrid();
        if(this.draw.cell)
            this.drawCell();
        if(this.draw.dir)
            this.drawPlayerForward();
        if(this.draw.bounds)
            this.drawPlayerBounds();
    }

    changeDraw (field)
    {
        this.draw[field] = !this.draw[field];
    }

    drawGrid () 
    {
        // draw cols
        for (let i = 0; i < game.grid.cols; i++) {
            Drawer.line("1","black",new Vec2(i * Settings.grid_cell_size.x, 0), new Vec2(i * Settings.grid_cell_size.x, game.canvas.height))
        }
        // draw rows
        for (let i = 0; i < game.grid.rows; i++) {
            Drawer.line("1","black",new Vec2(0,i * Settings.grid_cell_size.y),new Vec2(game.canvas.width, i * Settings.grid_cell_size.y))
        }
    }

    drawCell () 
    {
        
        let c = Settings.grid_cell_size;

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

    drawPlayerForward () 
    {
        for (let i = 0; i < player.blobs.length; i++) {
            let p = player.blobs[i]
            Drawer.line("2",Settings.player_color,p.pos,p.pos.add(p.dir.mul(p.size.current * 2)))   
        }
    }

    drawPlayerBounds () 
    {
        for (let i = 0; i < player.blobs.length; i++) {
            let p = player.blobs[i]
            let bounds = p.bounds();
            Drawer.rect("1","black",bounds.top_left,new Vec2(p.size.current,p.size.current).mul(2))
        }
    }

}
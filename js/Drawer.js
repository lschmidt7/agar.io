//*************************
// author: Leonardo Schmidt
//*************************

class Drawer
{

    static ctx

    static circ(color,pos,size)
    {
        Drawer.ctx.beginPath();
        Drawer.ctx.fillStyle = color;
        Drawer.ctx.arc(pos.x,pos.y, size, 0, 2 * Math.PI, false);
        Drawer.ctx.fill();
    }

    static rect(width,color,tl,offset)
    {
        Drawer.ctx.beginPath();
        Drawer.ctx.lineWidth = width;
        Drawer.ctx.strokeStyle = color;
        Drawer.ctx.rect(tl.x,tl.y,offset.x,offset.y);
        Drawer.ctx.stroke();
    }

    static rectFill(width,color,tl,offset)
    {
        Drawer.ctx.beginPath();
        Drawer.ctx.lineWidth = width;
        Drawer.ctx.fillStyle = color;
        Drawer.ctx.rect(tl.x,tl.y,offset.x,offset.y);
        Drawer.ctx.fill();
    }

    static line(width,color,start,end)
    {
        Drawer.ctx.beginPath();
        Drawer.ctx.lineWidth = width;
        Drawer.ctx.strokeStyle = color;
        Drawer.ctx.moveTo(start.x, start.y);
        Drawer.ctx.lineTo(end.x,end.y);
        Drawer.ctx.stroke();   
    }

    static img(x,y,img)
    {
        Drawer.ctx.drawImage(img,x,y);
    }

}
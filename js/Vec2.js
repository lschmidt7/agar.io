
function Vec2(x,y) {
    this.x = x;
    this.y = y;

    this.add = function (v) {
        let x = this.x + v.x;
        let y = this.y + v.y;
        return new Vec2(x,y);
    }

    this.sub = function (v) {
        let x = this.x - v.x;
        let y = this.y - v.y;
        return new Vec2(x,y);
    }

    this.mul = function (h) {
        let x = this.x * h;
        let y = this.y * h;
        return new Vec2(x,y);
    }

    this.div = function (h) {
        let x = this.x / h;
        let y = this.y / h;
        return new Vec2(x,y);
    }

    this.mag = function () {
        return Math.sqrt(this.x*this.x + this.y*this.y);
    }

    this.normalize = function () {
        return this.div(this.mag());
    }

}
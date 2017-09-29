export default class Food {
    constructor (x, y){
        this.x = x;
        this.y = y;
    }
    update (position){
        if(position.x === this.x && position.y === this.y) {
            //Food has been eaten.
        }
    }
    render (context){
        context.save();
        context.fillStyle = "red";
        context.fillRect(this.x, this.y, 1, 1);
        context.restore();
    }
}
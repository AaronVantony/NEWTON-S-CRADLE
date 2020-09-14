class Bob{
    constructor(x, y, r) {
        var options = {
            'isStatic':true,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r,options);

        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipse(this.x,this.y,this.r);
        ellipseMode(RADIUS);
        pop();
      }
}
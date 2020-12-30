class Paper{
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density: 0.3
        } 
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);

        World.add(world, this.body);
      }
      display(){
        var paperpos = this.body.position;
        push()
        translate(paperpos.x,paperpos.y);
        rectMode(CENTER);
        strokeWeight(3);
        fill("pink");
        ellipse(0,0,this.radius,this.radius);
        pop();
      }
}
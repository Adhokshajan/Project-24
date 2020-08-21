class Ball {
constructor(x,y,width,height){
    var options = {
        isStatic : false,
        restitution:0.3,
        friction :1.0,
        density : 2.0,
    }
    this.body = Bodies.circle(x,y,2,1)
    World.add(world,this.body)
}




display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(4);
    stroke("green");
    fill(255);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
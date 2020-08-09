class Paper {
  constructor(x, y) {
    var options = {
         isStatic:false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
    }
    this.body = Bodies.circle(1000,380,100,20);
    this.width = 50;
    this.height = 50;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    //push();
    //translate(pos.x,pos.y);
    //rotate(angle); 
    rectMode(CENTER);
    strokeWeight(4);
    //stroke("green");
    fill("yellow");
    circle(200, 365, this.width, this.height);
    pop();
  }
};

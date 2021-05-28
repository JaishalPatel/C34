class   Ball{
    constructor(x,y,width,height,angle){
    var_options = {
    'frictionAir':1.0,
    'density':0.04
    }
 this.body = Bodies.rectangle(x,y,width,height,options);
this.width = width;
this.height = height;
World.add(world,this.body);

}
display(){
    var pos = this.body.position;
var angle = this.body.angle;
push();
translet(pos.x,pos.y)
rotate(angle)
rectMode(center)
strokeWeight(4)
stroke("green")
fill(255)
rect(0,0,this.width,this.height)
pop();
}
}
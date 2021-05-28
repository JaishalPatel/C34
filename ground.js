class Ground{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.width = width; 
      this.eight = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
    rect(pos.x, pos.y, this.w,this.h);
    }
  };
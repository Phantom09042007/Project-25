class Paper {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0,
            density:1.2
        }
        this.Image = loadImage("paper.png");
        this.x=x
        this.y=y
        this.r=r
        this.body = Bodies.circle(this.x,this.y,this.r,options);
        World.add(world,this.body);
        
    }

    display(){
        var paperPos = this.body.position;
        push();
        translate(paperPos.x,paperPos.y);
        imageMode(CENTER);
        image(this.Image,0,0,this.r*3,this.r*3);
        pop();   
    }
}
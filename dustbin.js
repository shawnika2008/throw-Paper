class Bin{
    constructor(){
        var option ={
            isStatic: true
        };

        this.bodyBottom = Bodies.rectangle(1000,380,100,20,option);
        this.width1 = 200;
        this.height1 = 20;

        this.bodyRight = Bodies.rectangle(900,340,200,50,option);
        this.width2 = 20;
        this.height2 = 100;

        this.bodyLeft = Bodies.rectangle(1090,340,200,50,option);
        this.width3 = 20;
        this.height3 = 100;

        this.color="red";

        //World.add(World, this.bodyBottom);
        //World.add(World, this.bodyRight);
        //World.add(World, this.bodyLeft);
    }

    display(){
        var bottom = this.bodyBottom.position;
        var boxLeft = this.bodyLeft.position;
        var boxRight = this.bodyRight.position;

        rectMode(CENTER);
        fill(this.color);
        rect(bottom.x,bottom.y,this.width1,this.height1);
        rect(boxLeft.x,boxLeft.y,this.width2,this.height2);
        rect(boxRight.x,boxRight.y,this.width3,this.height3);
    };
};
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;
var divisionHeight=300;
var divisions=[];
var particle=[];
var plinkos1=[];
var plinkos2=[];
var plinkos3=[];
var plinkos4=[];

function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(480,700);
  
  base1=new Ground(400,700,800,20)
 
 
}

function draw() {
 
  background("#000000"); 
  Engine.update(engine);

if(frameCount%20==0){
  particle.push(new Particle(random(width/2-10,width/2+10),10,10))
  
}

for(var a=40; a<=width; a=a+50)
  {
    plinkos1.push(new Plinko(a,75))
  }

  
  for(var b=15; b<width-10; b=b+50)
  {
    plinkos2.push(new Plinko(b,175));
  }


  for(var c=40; c<width; c=c+50)
  {
    plinkos3.push(new Plinko(c,275));
  }

  
  for(var d=15; d<width-10; d=d+50)
  {
    plinkos4.push(new Plinko(d,375));
  }

for(var k=0;k<=width;k=k+80){
  divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))

}

for (var k=0;k<divisions.length;k++) {
  divisions[k].display()
}

for (var j=0;j<particle.length;j++){
  particle[j].display()
}

for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos1[e].display();
  }

  for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos2[e].display();
  }

  for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos3[e].display();
  }

  for(var e=0; e<=plinkos1.length-1; e=e+1)
  {
    plinkos4[e].display();
  }

base1.display()





  //drawSprites();
text(mouseX+","+mouseY,mouseX,mouseY)
}


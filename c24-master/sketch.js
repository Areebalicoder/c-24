// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

var ball,cannonball,ground,tank;

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    tank = new Tanker(100,390,20,50,PI/2);
     
    ball = new Ball(300,350,10);

    cannonball = new CanonBall(100,390);

    ground = new Ground(200, 400,400,5);
}

function draw() {
// Remember to update the Matter Engine and set the background.
Engine.update(engine);

    tank.display();
    ball.display();
    cannonball.display();
    ground.display();

}


function keyReleased() {
    // Call the shoot method for the cannon.
    if(mousePressOver(canvas)){
        cannonball.velocityX=3;
        cannonball.velocityY=-2;
    }
}
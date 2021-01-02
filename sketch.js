

function setup(){

    var canvas = createCanvas(1200,400);


    ground = new Ground(600,500,1200,20);
    stand = new Ground(600,700,1200,20);
    
}

function draw(){
    background(black);

    ground.display();
    stand.display();
}

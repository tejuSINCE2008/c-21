    var fixedRect,movingRect;
    
    function setup()
     {
    createCanvas(1200,800);
    fixedRect = createSprite(400, 200, 90,40);
    fixedRect.shapeColor = "purple" 
     movingRect = createSprite(400,800,50,80);
     movingRect.shapeColor = "purple"
     gameObject1 = createSprite(100,100,50,50); 
     gameObject1.shapeColor = "white";
     gameObject2 = createSprite(200,100,50,50);
     gameObject2.shapeColor = "white";
     gameObject3 = createSprite(300,100,50,50);
     gameObject3.shapeColor = "white";
     gameObject4 = createSprite(400,100,50,50);
     gameObject4.shapeColor = "white";
     movingRect.velocityY=-5
     fixedRect.velocityY=5
    }
     
     function draw()
      {
     background(0);
    
     bounceOff(movingRect,fixedRect)
     
    console.log(movingRect.x);
      drawSprites(); }
      



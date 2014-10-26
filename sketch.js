var opacity1, opacity2;
	var radX; // X speed - determines X radius
	var radY; // Y speed - determines Y radius

function setup(){
  createCanvas(1440, 960)
  frameRate(20);
  smooth();
  opacity1 = 3;
  opacity2 = 1;
}

function draw(){
  background(0);
  fill(0);
  smooth();
  noStroke();
  textSize(14);
  radX = abs(pmouseX-mouseX);
  radY = abs(pmouseY-mouseY);
  strokeWeight(opacity2);
  stroke(random(255), random(255), random(255), 255);
  rectMode(CENTER);
  fill(random(255), random(255), random(255), opacity1*10);
  rect(mouseX, mouseY, 15, 65);
  rect(pmouseX,pmouseY,40,40);
  line(mouseX, mouseY, width, height);
  line(mouseX, mouseY, 0, 0);
  ellipse (mouseX, mouseY, radX*10, radY*10);
}

function keyPressed() {
  if ( key == CODED ) {
    if ( keyCode == UP ) {
      opacity2++;
    }
    else if ( keyCode == DOWN ) {
      opacity2--;
    }
    else if ( keyCode == LEFT )
    {
      opacity1--;
    }
    else if ( keyCode == RIGHT )
    {
      opacity1++;
    }
  }

  if (opacity2 < 0)
  {
    opacity2 = 0 ;
  }

  if (opacity1 < 0)
  {
    opacity1 = 0 ;
  }
}

function mouseReleased()
{
  background (random(255));
}

 

 

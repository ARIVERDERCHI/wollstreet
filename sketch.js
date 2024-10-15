var gridWidthSlider, gridHeightSlider, gridSpacingSlider;
var mouseCoord_bo = false; // init grid using sliders

var lockActive = false; // initially no lock
var numbersActiveToggle = true;  // initially only squares
var cnt = 0;

var rec_x_amnt = 10;
var rec_y_amnt = 10;
var spacing = 15;

var heatMap;


function setup() {

  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  textAlign(CENTER);
  textStyle(BOLD);
  // frameRate(1);

  gridWidthSlider = createSlider(0, windowWidth, windowWidth/2);
  gridWidthSlider.position(20, 40);
  gridHeightSlider = createSlider(0, windowHeight, windowHeight/2);
  gridHeightSlider.position(20, 60);
  gridSpacingSlider = createSlider(20, 100, 5);
  gridSpacingSlider.position(20, 80);

  genMapBtn  = createButton("Gen. Map");
  genMapBtn.position(70, 5);


  genMapBtn.mousePressed(function() {
    heatMap = new HeatMap(rec_x_amnt/spacing, rec_y_amnt/spacing);
  });


  // toggle mouse or sliders
  mouseCoordButton  = createButton("Mouse.XY");
  mouseCoordButton.position(175, 5);
  mouseCoordButton.hide();
  
  mouseCoordButton.mousePressed(function() {
    mouseCoordButton.hide();
    sliderGridBtn.show();
    mouseCoord_bo = false;
  });
  
  sliderGridBtn = createButton("Sliders");
  sliderGridBtn.position(190, 5);
  // sliderGridBtn.hide();
  
  sliderGridBtn.mousePressed(function() {
    sliderGridBtn.hide();
    mouseCoordButton.show();
    mouseCoord_bo = true;
  });

  // toggle number presentation or squares
  numbersBtn  = createButton("numbers");
  numbersBtn.position(260, 5);
  numbersBtn.hide();
  
  numbersBtn.mousePressed(function() {
    numbersBtn.hide();
    squaresBtn.show();
    numbersActiveToggle = true;
  });
  
  squaresBtn = createButton("squares");
  squaresBtn.position(260, 5);
  // sliderGridBtn.hide();
  
  squaresBtn.mousePressed(function() {
    squaresBtn.hide();
    numbersBtn.show();
    numbersActiveToggle = false;
  });




}

function draw() {
  background(57, 50, 50);
  fill(255);
  stroke(255);
  strokeWeight(0.9);

  text("cnt: " + cnt, 100, 40);
  text("Width: " + gridWidthSlider.value(), 190, 55);
  text("Height: " + gridHeightSlider.value(), 190, 75);
  text("spacing: " + gridSpacingSlider.value(), 190, 95);
  text("mouse y:" + mouseY, 30, 40);
  

  noFill();

  if(lockActive)
  {
    fill(0, 100, 100);
    stroke(0, 100, 100);

    strokeWeight(1);
    text("LOCKED ! ", 30, 15);

    fill(0);
    // stroke(200);
    // rect(100, 100, 500, 500);
    stroke(100, 100, 100);
  }
  else
  {

    spacing = gridSpacingSlider.value();

    if(mouseCoord_bo)
    {
      rec_x_amnt =  mouseX;
      rec_y_amnt =  mouseY;
    }
    else
    {
      rec_x_amnt = gridWidthSlider.value();
      rec_y_amnt = gridHeightSlider.value();
    }

    stroke(255);
  }


  // display tha grid
  for(var x = 100; x < 100 + rec_x_amnt; x += spacing)
  {
    for(var y = 100; y < 100 + rec_y_amnt; y += spacing)
    {
      if(numbersActiveToggle)
      {
        rect(x, y, 10, 10);
      }
      else
      {
        text(heatMap.temps[floor((x-100)*(1/floor(rec_x_amnt/spacing)))][floor((y-100)*(1/floor(rec_y_amnt/spacing)))], x + 5, y + 9);
        // text("hi", x + 5, y + 9);
      }
    }
  }

  for (let x = 0; x < rec_x_amnt; x++) {
    element = rec_x_amnt;
    
  }

}



function mousePressed()
{
  if(mouseY > 100)
  {
    cnt += 1;
    
    if(lockActive)
    {
      lockActive = false;
    }
    else
    {
      lockActive = true;
    }
  }
}



// heatmap constructor
var HeatMap = function(mapWidth, mapHeight) {
  this.width = mapWidth;
  this.height = mapHeight;
  this.temps = [];
  this.newTemps = [];

  // initialize the temp at each point in the grid
  for (var x = 0; x < this.width; x++) {
    this.temps[x] = [];
    this.newTemps[x] = [];
    for (var y = 0; y < this.height; y++)
      this.temps[x][y] = this.newTemps[x][y] = floor(random(0, 255));
  }
  console.log(this.temps);
}



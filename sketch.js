const lijnen = []
const canvasWidth = 480
const canvasHeight = 480
const strepen = 20
const borderSize = 4
const backgroundColor = "#070605"
const lineColor = "#fdfeef"

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  const blokWidth = width/2
  const blokHeight = height/2

  for (let i = 0; i <= strepen; i++) {
    // Vertical lines
    lijnen.push([
      {x: (blokWidth/strepen)*i - borderSize/2, y: 0},
      {x: (blokWidth/strepen)*i - borderSize/2, y: blokHeight},
    ])
    // Horizontal lines
    lijnen.push([
      {x: width/2, y: (blokWidth/strepen)*i - borderSize/2},
      {x: width, y: (blokWidth/strepen)*i - borderSize/2},
    ])

    // Diagonal lines left
    lijnen.push([
      { x: 0, y: (blokHeight / strepen) * i + blokHeight + borderSize/2 },
      { x: (blokWidth / strepen) * i, y: blokHeight  + borderSize/2 }
    ]);
    lijnen.push([
      { x: (blokHeight / strepen) * i, y: height  + borderSize/2  },
      { x: blokWidth, y:  (blokHeight / strepen) * i + blokHeight + borderSize/2  }
    ]);
    
    // Diagonal lines right
    lijnen.push([
      { x: width + borderSize/2 , y: (blokHeight / strepen) * i + blokHeight },
      { x: width + borderSize/2  - (blokWidth / strepen) * i, y: blokHeight }
    ]);
    lijnen.push([
      { x: blokWidth + borderSize/2 , y: (blokHeight / strepen) * i + blokHeight },
      { x:  width + borderSize/2  - (blokWidth / strepen) * i, y: height}
    ]); 
  }
}


function draw() {
  // Set background color & prevent shapes from being filled
  background(backgroundColor);
  noFill()

  // Teken alle lijnen
  stroke(lineColor);
  strokeWeight(borderSize);
  lijnen.forEach(posities => {
    line(posities[0].x, posities[0].y, posities[1].x, posities[1].y)
  })
    
  // Teken center +
  stroke(backgroundColor);
  strokeWeight(borderSize);
  line(width/2 + borderSize/2, 0, width/2 + borderSize/2, height)
  line(0, height/2 + borderSize/2, width, height/2 + borderSize/2)

  // Draw outer border
  strokeWeight(borderSize*2);
  rect(0,0, width, height)

  // Verwijder hoogte en breedte van canvas element zodat deze gemakkelijker kan worden gestyled via CSS
  const canvas = document.querySelector("canvas")
  canvas.style.height = ""
  canvas.style.width = ""
}


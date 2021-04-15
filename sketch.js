var quiz
var quiz2
function setup() {
  createCanvas(800,800);
  quiz=new Test(90)
  quiz.positive()
  quiz2=new Test(100)
  quiz2.positive()
  quiz2.even()
  quiz2.seven()
  quiz2.buzz()
  quiz2.digits()
}

function draw() {
  background("black");    
}
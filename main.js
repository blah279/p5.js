function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}
function draw(){
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(30,30,570,370);
    fill(255, 0, 0);
  stroke(255, 0, 0);
    circle(40,50,70);
    circle(600,50,70);
    circle(40,400,70);
    circle(600,400,70);

  image(video,240,160,150,150);

}
img="";
status="";
function preload(){
    img=loadImage('pexel.jpeg');
}
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function draw(){
image(img,0,0,640,420);
fill("#FF0000");
text("Bed",45,75);
noFill();
stroke("#FF0000");
rect(30,60,600,350);

fill("#FF0000");
text("Lamp",352,112);
noFill();
stroke("#FF0000");
rect(350,100,100,100);
}
function modelLoaded(){
    console.log("model Loaded!");
    status=true;
    objectDetector.detect(img,gotReslt);
}
function gotReslt(error,results){
if(error){
    console.log(error);
}
console.log(results);
}
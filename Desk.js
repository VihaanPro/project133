img="";
status="";
object=[];
function preload(){
    img=loadImage('desk.jpeg');
}
function setup(){
    canvas=createCanvas(380,380);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd',modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
}
function draw(){
image(img,0,0,380,380);

if(status!=""){
    
    objectDetector.detect(video,gotReslt);
for(i=0; i<object.length; i++){
    document.getElementById("status").innerHTML="Status : Objects Detected";
    document.getElementById("number_of_objects").innerHTML="Number of objects detected are :"+ object.length;
    fill("#FF0000");
    percent=floor(object[i].confidence*100);
    text(object[i].label + "  " + percent +"%", object[i].x+15, object[i].y+15);
    noFill();
stroke("#FF0000");
rect(object[i].x,object[i].y,object[i].width, object[i].height);
}
}
}
function modelLoaded(){
    console.log("model Loaded!");
    status=true;
    objectDetector.detect(video,gotReslt);
}
function gotReslt(error,results){
if(error){
    console.log(error);
}
console.log(results);
object=results;
}
function back(){
    window.location="index1.html";
}
var noseX=0
var noseY=0
function preload(){
image1=loadImage("https://i.postimg.cc/KYrsJjzZ/palha-o.png")
}
function setup(){
canvas=createCanvas(400,400)
canvas.center()
video=createCapture(VIDEO)
video.size(400,400)
video.hide()
poseNet=ml5.poseNet(video,modelLoad)
poseNet.on("pose",gotPose)
}
function draw(){
image(video,0,0,400,400)
fill(255,0,0)
stroke(255,0,0)
circle(noseX,noseY,30)
image(image1,noseX,noseY,30,30)
}
function takeSnapshot(){
  save("minha_foto.png")
}
function modelLoad(){
  console.log("modelLoad")
}
function gotPose(results){
console.log(results)
if(results.length>0){
  noseX=results[0].pose.nose.x
  
    noseY=results[0].pose.nose.y
  
}

}
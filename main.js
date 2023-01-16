


difference=0;
rightWristX=0;
leftWristX=0;

function setup () {
    video=createCapture(VIDEO);
    video.size(500,500);
    canvas=createCanvas(550,450);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded() {
    console.log("poseNet foi inicializado!");
}
function gotPoses(results) {
    if (results.length>0) {
        console.log(results);
        
        leftWristX=results[0].pose.leftWrist.x
        rightWristX=results[0].pose.rightWrist.x
        difference=floor(leftWristX-rightWristX)
        console.log("leftWristX= "+leftWristX +"rightWristX= "+rightWristX+"difference= "+difference)
    }
}
function draw() {
    background("#c2fcf2");
    document.getElementById("font_size").innerHTML="Tamanho da fonte: "+difference+"px"
    textSize(difference)
    fill("black")
    stroke("white")
    text("Ryan Marcus campos mesquita",50,300)
}

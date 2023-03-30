var xPos = 0;
var yPos = 0;
var score = 0;
var maxDiameter = 50;
var minDiameter = 5;
var dDelta = 1;
var diameter = 5;
var xShooter = 250;
var shooterDelta = 5;

//var gameTimer = setTimeout(gameOver, 10000);
var xDelta = Math.floor(Math.random()*10-5);
var yDelta = Math.floor(Math.random()*10-5);

var gameDiv = document.createElement("div");
gameDiv.style.width = "500px";
gameDiv.style.position = "absolute";
gameDiv.style.left = "0px";
gameDiv.style.backgroundColor = "black";
gameDiv.style.top = "0px";
gameDiv.style.height = "500px";
gameDiv.style.border = "black thin solid";
document.body.append(gameDiv)

function makeBall(){
    var ball = document.createElement("div");
    ball.style.borderRadius = "50%";
    ball.style.width = diameter+"px";
    ball.style.height = diameter +"px";
    var red = Math.floor(Math.random()*256), green = Math.floor(Math.random()*256), blue = Math.floor(Math.random()*256);
    var customColor = "RGB("+red+","+green+","+blue+")";
    ball.style.backgroundColor = customColor;
    ball.style.position = "absolute";
    xPos = Math.floor(Math.random()*500);
    yPos = Math.floor(Math.random()*500);
    ball.style.left = xPos + "px";
    ball.style.top = yPos + "px";
    ball.style.textAlign = "center";
    gameDiv.append(ball);
    ball.addEventListener("click", addPoint);
    ball.addEventListener("mouseover", changeMouse);
    return ball;
}
var ball = makeBall();
function changeMouse(){
    this.style.cursor='pointer';
}

function addPoint(){
    score++;

}

var timestamp = timestamp;
var start = timestamp;

function step(timestamp) {
    timestamp = timestamp - start;
    xPos += xDelta;
    yPos += yDelta;
    ball.style.left = xPos + "px";
    ball.style.top = yPos + "px";
    ball.innerHTML = score;
    if(xPos > 500-diameter || xPos < 0){
        xDelta *= -1;
    }
    if(yPos > 500-diameter || yPos < 0){
        yDelta *= -1;
    }

    diameter += dDelta;
    ball.style.width = diameter+"px";
    ball.style.height = diameter +"px";
    if(diameter > maxDiameter || diameter < minDiameter){
        dDelta *= -1;
    }
    window.requestAnimationFrame(step);
}

window.requestAnimationFrame(step);


function gameOver(){
    alert(score);
}

var shooter = document.createElement("div");
shooter.style.width = "10px";
shooter.style.height = "10px";
shooter.style.border = "RGB(255, 0, 0) thin solid";
shooter.style.backgroundColor = "RGB(255, 255, 0)";
shooter.style.borderRadius = "50%";
shooter.style.position = "absolute";
shooter.style.top = "490px";
shooter.style.left = "250px";
document.body.append(shooter);
document.body.addEventListener("click", shoot);

var shootDelta = 20;
var shooterY = 500;
function shoot(){
    var stop = false;
    shooterY -= shootDelta;
    shooter.style.top = shooterY + "px";
    if(shooterY < 0){
        shooter.style.top = "490px";
        shooterY = 490;
        cancelAnimationFrame(a); 
        checkCount = 0;
        stop = true;
    }
    if(!stop){
    var a = requestAnimationFrame(shoot);
    }
    checkCollision();
    console.log(score);
  
}
var checkCount = 0;
function checkCollision(){
    if((xPos >=xShooter-diameter && xPos <= (xShooter+diameter)) && (shooterY >= yPos && shooterY < yPos + diameter*2 )){
        checkCount++;
        if(checkCount == 1){
        return score+=1;
        }
    }
}

document.body.addEventListener("keydown", moveShooter);
function moveShooter(e){

    if(e.keyCode == 39){
        if(xShooter < 500){
        xShooter += shooterDelta;
        shooter.style.left = xShooter+"px";
        }
    }
    if(e.keyCode == 37){
        if(xShooter > 0){
            xShooter -= shooterDelta;
            shooter.style.left = xShooter+"px";
        }
    }
    
  
  }







 

function changeImage() {
    document.getElementById("imgClickAndChange").style.display = "none";
    document.getElementById("table").style.visibility = 'visible';
    var timeInSeconds = 4,
    display = document.querySelector('#time');
    startTimer(timeInSeconds, display);
    gameStarts();
    
}
	
var stat;
var star;
function gameStarts(){
	var myTable = document.getElementById('table');
	star=myTable.rows[randomGen()].cells[randomGen()];
	star.querySelector('img').src="Images/mole2.png";
	stat = 0;
	star.querySelector('img').setAttribute("onclick","myfun()");
}

function randomGen(){
	var x;
	x = Math.floor(Math.random() * 4);
	return x;
}

function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        seconds = parseInt(timer % 60, 10);
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent =seconds;

        if (--timer < 0) {
            document.getElementById("table").style.display = 'none';
            document.getElementById("gameover").innerHTML="GAME OVER GGWP";
            document.getElementById("timer").style.display="none";
        }
    }, 1000);
}
var score=0;
function myfun(){
    if(stat == 0){
        document.getElementById('counter').innerHTML=++score;     
        star.querySelector('img').src="Images/mole1.png";
        stat = 1;
        
    }         
};

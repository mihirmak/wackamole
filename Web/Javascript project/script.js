function changeImage() {
    document.getElementById("imgClickAndChange").style.display = "none";
    document.getElementById("table").style.visibility = 'visible';
    gameStarts();
    
}

var count=10;
function gameStarts(){
	while (count>0){
		var myTable = document.getElementById('table');
		var star = myTable.rows[randomGen()].cells[randomGen()];
		star.querySelector('img').src="Images/mole2.png";
		star.querySelector('img').setAttribute("onclick","myfun()");
		count--;
	}
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
            timer = duration;
        }
    }, 1000);
}
var score=0;
function myfun(){
    document.getElementById('counter').innerHTML=++score;
};

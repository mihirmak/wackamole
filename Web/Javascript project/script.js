function changeImage() {
    document.getElementById("imgClickAndChange").style.display = "none";
    document.getElementById("table").style.visibility = 'visible';
    gameStarts();
    
}


var star[];
function gameStarts(){
    var i = 0;
	while (i<count){
		var myTable = document.getElementById('table');
		star.push(myTable.rows[randomGen()].cells[randomGen()]);
		star[i].querySelector('img').src="Images/mole2.png";
		//star.querySelector('img').setAttribute("onclick","myfun()");
		i++;
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
   var i,j;
   var k;
   var myTable = document.getElementById('table');
   for(i=0;i<count;i++){
        for(j=0;j<count;j++){
            k=myTable.rows[i].cells[j];
                if (k.src === "file:///home/students/Hemal/wackamole/Web/Javascript%20project/Images/mole2.png"){
                    document.getElementById('counter').innerHTML=++score;//this.querySelector('img').src;     
            }
        }
   }
};

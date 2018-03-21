function randomimage()
{
    var x;
    x = Math.floor(Math.random()*17);
    return x;
}

function whackamole()
{
    var a = randomimage();
    var b = randomimage();   
    var x = document.getElementById("mole-table").rows[a].cells[b].innerHTML;
}

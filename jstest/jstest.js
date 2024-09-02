var i = 0;
function myFunction(){
    i++;
    document.getElementById("b1").innerHTML = i;
}

var testAudio = new Audio('/SaulGoodmanBwawh.mp3');
function playAudio()
{
    testAudio.play();
}


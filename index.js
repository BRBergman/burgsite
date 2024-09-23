var SaulGoodmanBwawh = new Audio('/indexassets/SaulGoodmanBwawh.mp3');
function SaulGoodmanBwawhAudio() {
    SaulGoodmanBwawh.volume = 0.2;
    SaulGoodmanBwawh.play();
}
function select_random_quote() {
    let file = ["test1", "test2", "test3"];
    let index = Math.floor(Math.random() * file.length);
    let quote = file[index];
    document.getElementById("qotd").innerHTML = quote;
    return quote;
}
let x = select_random_quote();
const SaulGoodmanBwawh = new Audio('/indexassets/SaulGoodmanBwawh.mp3');
function SaulGoodmanBwawhAudio() {
    SaulGoodmanBwawh.volume = 0.2;
    SaulGoodmanBwawh.play();
}

const file = ["bwaaa", "DO NOT THROW SOULS", "you're out of touch","haiii","let me super break you","stellemarch is t4t","amogus","HATSUNE FUCKIN MIKUUUU","It's Ikuyove", "It's Ryover"];
//todo: make read from seperate file that i can change without updating the website
function select_random_quote() {
    let index = Math.floor(Math.random() * file.length);
    let quote = file[index];
    document.getElementById("qotd").innerHTML = quote;
    return quote;
}
select_random_quote();
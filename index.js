const SaulGoodmanBwawh = new Audio('/indexassets/SaulGoodmanBwawh.mp3');
function SaulGoodmanBwawhAudio() {
    SaulGoodmanBwawh.volume = 0.2;
    SaulGoodmanBwawh.play();
}

const file = ["bwaaa", "DO NOT THROW SOULS", "You're out of touch", "haiii", "Let me super break you", "Stellemarch is t4t", "amogus", "HATSUNE FUCKIN MIKUUUU", "It's Ikuyover", "It's Ryover", "It's murder, the solution is murder"];
//todo: make read from seperate file that i can change without updating the website
function select_random_quote() {
    let index = Math.floor(Math.random() * file.length);
    let quote = file[index];
    document.getElementById("qotd").innerHTML = quote;
    return quote;
}
select_random_quote();
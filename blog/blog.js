//make the thing i have to have all my blogs thats done in rust but here and then get that in my main page so i dont have to go through rust
var blog = [
    //add on to end
    ["10/4/24", " why is everything so weawerewasrw "],
    ["10/5/2024", " i can only do so much reading before the words start to mesh together, maybe i need glasses "],
    ["10/29/2024", "<i>hacker voice</i> im in </br>(accepted to a college) "],
    ["10/31/2024", " halloween happened too fast i didn't have time to get a costume :( "],
    ["12/20/2024", "write it in rust"],
    ["12/20/2024", "i ended up getting glasses"],
    ["1/6/2025", "bangs are peak"],
    ["1/6/2025", "take this shitass"],
    ["2/4/2025", "im gonna stop trying to be oh so special and just use js for all of this..."],
    ["2/14/2025", "hrt soon (irls this is for super cis reasons i promise, never would i ever try to hide anything from any of you)"],
    ["2/14/2025", "valentines day is cool and all but have you tried koth_harvest"],
    ["3/1/2025", "im learning to play the guitar! (my hands hurt)"],
    ["3/2/2025", "<b>it's here</b>"],
    ["3/6/2025", "6:18 PM EST</br>i took it"],
    ["10/19/2025", "It's been a minute but im back to my site"],
    ["12/5/2025", "My first Estrogen Injection!! no more shitty pills."],
    ["12/6/2025", "Starting Spiro to go with my shots"]
].reverse();


function fullpage_blog() {
    let x = document.getElementById("blog_all");
    if (x == null) {
        return;
    }
    blog.forEach(arg => {
        let single_blog = "<div><h1>"
            + arg[0] + "</h1><p>" +
            arg[1] + "</p></div>";
        x.innerHTML += single_blog;
    });
    let temp = document.createElement("div");
    temp.innerHTML = x;
}
fullpage_blog();

function recent_blog() {
    let x = document.getElementById("blog_single");
    if (x == null) {
        return;
    }
    let first_blog = blog[0];
    let single_blog = "<h3> Latest Blog: "
        + first_blog[0] + "</h3><p>" +
        first_blog[1] + "</p>";
    x.innerHTML = single_blog;
}
recent_blog();
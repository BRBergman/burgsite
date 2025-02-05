//make the thing i have to have all my blogs thats done in rust but here and then get that in my main page so i dont have to go through rust
var blog = [
    //add on to end
    ["10/4/24", " why is everything so weawerewasrw "],
    ["10/5/2024", " i can only do so much reading before the words start to mesh together, maybe i need glasses "],
    ["10/29/2024", "*hacker voice* im in </br>(accepted to a collage) "],
    ["10/31/2024", " halloween happened too fast i didn't have time to get a costume :( "],
    ["12/20/2024", "write it in rust"],
    ["12/20/2024", "i ended up getting glasses"],
    ["1/6/2025", "bangs are peak"],
    ["1/6/2025", "take this shitass"],
    ["2/4/2025", "im gonna stop trying to be oh so special and just use js for all of this..."]
].reverse()

function fullpage_blog() {
    let x = document.getElementById("blog_all")
    if (x == null){
        return
    }
    blog.forEach(arg => {
        let single_blog = "<div class=\"innerboxes\"> <h1>"
            + arg[0] + "</h1><p>" +
            arg[1] + "</p></div><div class=\"inbetweenboxes\"> <br></div>"
            x.innerHTML+=single_blog
    })
    let temp = document.createElement("div")
    temp.innerHTML = x
}
fullpage_blog()

function recent_blog() {
    let x = document.getElementById("blog_single")
    if (x == null){
        return
    }
    console.log("saas")
    let first_blog = blog[0]
    let single_blog = "<h3> Latest Blog: "
            + first_blog[0] + "</h3><p>" +
            first_blog[1] + "</p></div><div class=\"inbetweenboxes\"> "
            x.innerHTML=single_blog
}
recent_blog()
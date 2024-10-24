
function displayRandom() {
    const planet = ["mercury.jpg", "venus.png","earth.jpg","mars.jpg","jupiter.jpg","saturn.jpg","uranus.jpg"]
    randomImg = "img/" + planet[Math.floor(Math.random() * planet.length)]

    let screen = document.getElementById('miniScreen')
    screen.setAttribute("src", randomImg)
    screen.setAttribute("alt","")
}
function displayScreen(Name) {
    console.log(Name)
    let screen = document.getElementById('semiScreen')
    screen.style.backgroundImage = "url(img/"+ Name +")"

    document.getElementById("textScreen").style.display = "none"
}


function mouseOver() {
    console.log("mouse Over")
    let screen = document.getElementById('semiScreen')
    screen.style.backgroundImage = ""
    document.getElementById("textScreen").style.display = "block"
}

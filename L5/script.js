// Cache the DOM
var button = document.getElementById("button")
var nume = document.getElementById("nume")
var prenume = document.getElementById("prenume")
var educatie = document.getElementById("educatie")
var asteptari = document.getElementById("asteptari")
var img = document.querySelector("img")
var body = document.querySelector("body")
var an = document.getElementById("anNastere")


//Add event listener
button.addEventListener("click", altaViata)
an.addEventListener("mouseover", displayAge)

const d = new Date()
var year = d.getFullYear()

//Define function
function displayAge()
{
	an.innerHTML = year - an.innerHTML
}

function altaViata()
{
	nume.innerHTML = "Lead Engineer"
	prenume.innerHTML = "RaceBox RO"
	
	educatie.innerHTML = "Experiente"
	asteptari.innerHTML = "<ul><li>
Workshops</li><li>Internship</li><ul>"
	
	img.src = "images/Poza LV.jpg"
	img.style.opacity = "90%"
	img.style.border = "3px solid black"

	body.style.fontFamily = "Montserrat"
	body.style.backgroundcolor = "darkgreen"
}

//Define the slideshow items (links, images, and captions)
const slides = [
	{link: "index.html", img "images/Masina Vintage.jpeg", caption: "Page 1"},
	{link: "index2.html", img: "images/"}
] 
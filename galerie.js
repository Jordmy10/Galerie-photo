const images = [
    {
        nom: "Big Ben",
        description: "Il s'agit de la tour de londres, une horloge vieille de plusieurs siècles",
        categorie: "Monument",
        url: "./images/bigben.jpg"
    },
    {
        nom: "tour eiffel",
        description: "La tour Eiffel est un monument parisien, symbole de la France",
        categorie: "Monument",
        url: "./images/eiffel.jpg"
    },
    {
        nom: "statue de la liberté",
        description: "La statue de la liberté est un monument américain, symbole de la liberté",
        categorie: "Monument",
        url: "./images/liberty.jpg"
    },
    {
        nom: "Colisée",
        description: "Le Colisée est un monument romain, symbole de l'Empire romain",
        categorie: "Monument",
        url: "./images/colise.jpg"
    },
    {
        nom: "Taj Mahal",
        description: "Le Taj Mahal est un monument indien, symbole de l'amour",
        categorie: "Monument",
        url: "./images/tajMahal.jpg"
    },
    {
        nom: "Anfield",
        description: "Clubs de Liverpool",
        categorie: "Clubs ",
        url: "./images/anfield.jpg"
    },
    {
        nom: "Bernabeu",
        description: "Clubs de Madrid",
        categorie: "Clubs ",
        url: "./images/bernabeu.jpg"
    },
    {
        nom: "Camp Nou",
        description: "Clubs de Barcelone",
        categorie: "Clubs ",
        url: "./images/barca.jpg"
    },
    {
        nom: "logo PSG",
        description: "logo du Paris Saint-Germain",
        categorie: "Clubs ",
        url: "./images/psg.jpg"
    },
    {
        nom: " Allianz Arena",
        description: "Clubs de Munich",
        categorie: "Clubs ",
        url: "./images/allianz.jpg"
    },
    {
        nom: "drapeau américain",
        description: "Drapeau américain",
        categorie: "Pays",
        url: "./images/usa.jpg"
    },
    {
        nom: "drapeau anglais",
        description: "Drapeau anglais",
        categorie: "Pays",
        url: "./images/eng.jpg"
    },
    {
        nom: "drapeau espagnol",
        description: "Drapeau espagnol",
        categorie: "Pays",
        url: "./images/spain.jpg"
    },
    {
        nom: "drapeau japonais",
        description: "Drapeau japonais",
        categorie: "Pays",
        url: "./images/japon.jpg"
    }
]

const conteneurImages = document.getElementById("images")

const vignette = document.createElement("article")
const zoneImage = document.createElement("div")
const img = document.createElement("img")

const caracteristiques = document.createElement("div")
const nomImg = document.createElement("p")
const valNom = document.createElement("em")
const descriptionImg = document.createElement("p")
const valDescription = document.createElement("em")
const categorieImg = document.createElement("p")
const valCategorie = document.createElement("em")

categorieImg.textContent = "catégorie: "
descriptionImg.textContent = "description: "
nomImg.textContent = "nom: "

categorieImg.append(valCategorie)
descriptionImg.append(valDescription)
nomImg.append(valNom)
caracteristiques.append(nomImg, descriptionImg, categorieImg)

zoneImage.append(img)

vignette.append(zoneImage, caracteristiques)

vignette.classList.add("vignette")
zoneImage.classList.add("zoneImage")
img.classList.add("img")

function creerVignettes(tableau) {
    for (let i = 0; i < tableau.length; i++) {
        const clone = vignette.cloneNode(true)
        clone.querySelector("img").src = tableau[i].url
        clone.querySelector("em").textContent = tableau[i].nom
        clone.querySelectorAll("em")[1].textContent = tableau[i].description
        clone.querySelectorAll("em")[2].textContent = tableau[i].categorie
        conteneurImages.append(clone)
    }
}
creerVignettes(images)

const Monuments = document.getElementById("article1")
const Clubs = document.getElementById("article2")
const Pays = document.getElementById("article3")

Monuments.addEventListener("click", function () {
    const imagesMonuments = images.filter(image => image.categorie === "Monument")
    conteneurImages.innerHTML = ""
    creerVignettes(imagesMonuments)
})

Clubs.addEventListener("click", function () {
    const imagesClubs = images.filter(image => image.categorie === "Clubs ")
    conteneurImages.innerHTML = ""
    creerVignettes(imagesClubs)
})

Pays.addEventListener("click", function () {
    const imagesPays = images.filter(image => image.categorie === "Pays")
    conteneurImages.innerHTML = ""
    creerVignettes(imagesPays)
})

const searchInput = document.getElementById("recherche")
searchInput.addEventListener("input", (event)=>{
    const value = event.target.value.toLowercase()
    
})
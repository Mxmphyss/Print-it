const image = document.querySelector("#banner img");
const tagline = document.querySelector(".tagline");
let flecheGauche = document.querySelector(".arrow_left");
let flecheDroite = document. querySelector(".arrow_right");
let count = 0;

image.src = 'assets/images/slideshow/'+slides[count].image;
image.innerHTML = image

tagline.innerHTML = slides[count].tagLine

console.log(tagline)

/* Fleche de droite */

function slideSuivante (){
    if (count < nbSentence - 1){
        count++;
    } else {
        count = 0;
    }

    image.src = 'assets/images/slideshow/'+slides[count].image;
    tagline.innerHTML = slides[count].tagLine;
}

flecheDroite.addEventListener("click", slideSuivante)

/* Fleche de Gauche */

function slidePrecedent (){
    if (count > 0){
        count--;
    } else {
        count = nbSentence - 1
    }

    image.src = 'assets/images/slideshow/'+slides[count].image;
    tagline.innerHTML = slides[count].tagLine;
}

flecheGauche.addEventListener("click", slidePrecedent)

/* Bullet point */

const bulletArray = document.querySelectorAll(".dot");
const bulletLength = bulletArray.length;
let count2 = 0

function bulletRight (){
    bulletArray[count2].classList.remove('active2');

    if (count2 < bulletLength - 1){
        count2++;
    } else {
        count2 = 0;
    }

    bulletArray[count2].classList.add('active2')
    console.log(count2)
}

flecheDroite.addEventListener("click", bulletRight)

/* Fleche de Gauche */

function slideLeft (){
    bulletArray[count2].classList.remove('active2');

    if (count2 > 0){
        count2--;
    } else {
        count2 = bulletLength - 1
    }

    bulletArray[count2].classList.add('active2')
}

flecheGauche.addEventListener("click", slideLeft)
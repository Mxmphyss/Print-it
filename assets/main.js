const imgArray = document.querySelectorAll(".banner-img");
const nbLength = imgArray.length;
let flecheGauche = document.querySelector(".arrow_left");
let flecheDroite = document. querySelector(".arrow_right");
let count = 0

/* Fleche de droite */

function slideSuivante (){
    imgArray[count].classList.remove('active');

    if (count < nbLength - 1){
        count++;
    } else {
        count = 0;
    }

    imgArray[count].classList.add('active')
}

flecheDroite.addEventListener("click", slideSuivante)

/* Fleche de Gauche */

function slidePrecedent (){
    imgArray[count].classList.remove('active');

    if (count > 0){
        count--;
    } else {
        count = nbLength - 1
    }

    imgArray[count].classList.add('active')
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
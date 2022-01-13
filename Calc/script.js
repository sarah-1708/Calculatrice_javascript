/*************************** */
/*  AFFICHER ET STOCKER      */
/*************************** */

/*DECLARATION VARIABLES ET AFFICHAGE NOMBRES*/

let a=0;
let b=0;
let resultHtml = document.getElementById("resultat");
let entreeActuelle="";
let operateur;
let pointUtilise=false;


function ajouterNb(nb) {
    entreeActuelle += nb;
    resultHtml.innerHTML=entreeActuelle;
}

function point(){
    if (pointUtilise==false){
        entreeActuelle+=".";
        pointUtilise=true;
        resultHtml.innerHTML=entreeActuelle;
    }
}

/*OPERATEURS*/

function ajouterOp(op) {
    if(entreeActuelle == "" && a==0){
        alert("Tu n'as pas renseigné de nombre")
    }else {
        a =Number(entreeActuelle);
        operateur = op;
        resultHtml.innerHTML=op;
        entreeActuelle ="";
        pointUtilise =false;
    }
}

/************************ */
/*  FONCTIONS DE CALCULS  */
/************************ */


function calcul() {
    
    b=Number(entreeActuelle);
    entreeActuelle="";
    pointUtilise=false;

    if (operateur== "+") {
        result = a + b;
    } else if (operateur== "-") {
        result = a - b;
    } else if (operateur== "*") {
        result = a * b;
    } else if (operateur == "/") {
        if (b == 0) {
            alert("On ne peut pas diviser par zéro !");
            entreeActuelle ="";
            resultHtml.innerHTML=entreeActuelle;
        }else{
            result = a / b;
        }
    }
    resultHtml.innerHTML = result;
    a = result;
    let op ="";
}

// /************************** */
// /*    FONCTIONS EFFACER     */
// /************************** */

/*touche C*/

function effacer() {
    document.getElementById('resultat').innerHTML = "";
}

/*touche <*/

function effacerDernierCaractere() {
    entreeActuelle = entreeActuelle.slice(0,-1);
    resultHtml.innerHTML=entreeActuelle;
}

/*    touche CE    */

function effacerDerniereChaineDeCaracteres(){
    entreeActuelle ="";
    resultHtml.innerHTML=entreeActuelle;
}

/************************* */
/* FONCTIONS SPECIFIQUES   */
/************************* */

/*    touche +/-   */

function addRemoveMinus(){

    if(Math.sign(entreeActuelle)==1){
        entreeActuelle= ("-"+entreeActuelle);
        resultHtml.innerHTML = entreeActuelle;
    }else if (Math.sign(entreeActuelle)==-1){
        entreeActuelle-=entreeActuelle*2;
        resultHtml.innerHTML = entreeActuelle;
    }
}


 /************************* */
// /* FONCTION RACINE CARREE */
// /************************* */
// function carre{
//     entreeActuelle = Math.sqrt(entreeActuelle);
// }


 /************************* */
// /*       FONCTION PI      */
// /************************* */
// const pi = 3.14;

// function pi(){
// entreeActuelle = Math.PI(entreeActuelle, pi)
// }

/************************* */
// /* FONCTION EXPOSANT */
// /************************* */
// let exposant=0;
// 
// FUNCTION exposant(exp){
// entreeActuelle = entreeActuelle.Math.pow(a,exp)
// }



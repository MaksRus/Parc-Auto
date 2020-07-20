"use strict"
/*
MISSION 1
Programme Statistiques (v0.9)
-Version dépourvue de cyber-sécurité-
Réalisé par Maxime MONTAGNE.
Dernières modifications le 16/07/2020
*/
/**@type {Array<number>} Tableau dans lequel seront conservées les valeurs données par l'utilisateur */
let tabSaisie = [];
/**@type {number} Saisie utilisateur qui sera systématiquement .push dans le tableau TabSaisie */
let saisie;

do 
{
    saisie =parseInt(prompt("Veuillez saisir la valeur numéro "+(tabSaisie.length+1)));
    if (saisie!==0) tabSaisie.push(saisie);
}
//On arrête la saisie une fois que l'utilisateur donne la valeur 0.
while (saisie !==0)

/**@type {number} Somme de toutes les valeurs de tabSaisie */
let somme = tabSaisie.reduce((a,b)=>a+b); //Méthode "reduce" pour faire la somme des valeurs.

/**@type {number} Moyenne des valeurs du tableau tabSaisie */
let moyenne = somme/tabSaisie.length; // On calcule la moyenne en utilisant la propriété length de l'array.

console.log(tabSaisie.length+" nombres saisis\n Compris entre "+ Math.min(...tabSaisie) +
        " et "+ Math.max(...tabSaisie) + "\n Pour une somme de "+ somme + "\n Et une moyenne de "+moyenne);

//-------------------------------------------
//Version 2 (avec controle des inputs utilisateur)

"use strict"
/*
MISSION 1
Programme Statistiques (v1.0)
-Version complète avec contrôle totale des saisies utilisateur.
Réalisé par Maxime MONTAGNE.
Dernières modifications le 16/07/2020
*/
let tabSaisie = [];
let saisie;
let vide = Array.isArray(tabSaisie); //Permet de vérifier si le tableau est vide.

do 
{
    do saisie =parseInt(prompt("Veuillez saisir la valeur numéro "+(tabSaisie.length+1)+
    "\n (Nombre entier uniquement)"));
    while (!Number.isInteger(saisie)) //Boucle de controle de la saisie utilisateur.
    if (saisie!==0)
    {
        console.log('Vous avez saisi le nombre : '+saisie);
        tabSaisie.push(saisie);
        vide = false; //On sait à présent que le tableau n'est pas vide.
    }
}
//On arrête la saisie une fois que l'utilisateur donne la valeur 0.
while (saisie !==0)

if (!vide)
{
    let somme = tabSaisie.reduce((a,b)=>a+b); //Méthode "reduce" pour faire la somme des valeurs.
    // On calcule la moyenne en utilisant la propriété length de l'array.
    let moyenne = tabSaisie.reduce((a,b)=>a+b)/tabSaisie.length; 

    //Affichage
    console.log("Nombre de valeurs saisies: "+ tabSaisie.length +"\n Compris entre "+ Math.min(...tabSaisie) +
    " et " + Math.max(...tabSaisie) + "\n Pour une somme de "+ somme +
    "\n et une moyenne de "+Math.round(moyenne*100)/100);
}
 // Si aucune valeur valide n'a été saisie, on retourne une erreur.
else alert("Aucune valeur détectée. Fin du programme.");
"use strict"
/*
MISSION 1
Programme Parc Auto (v1.1)
-Version permettant une instanciation intégrâle avec contrôle des saisies utilisateur-
Réalisé par Maxime MONTAGNE.
Dernières modifications le 16/07/2020
*/
class Voiture {
 /**
  * On instancie avec uniquement 5 paramètres fixes (non modifiables par la suite)
  * @param {string} initcarId - L'Immatriculation du véhicule au format "AA-000-AA"
  * @param {number} initweigth - Poids du véhicule en Kg (compris entre 500 et 3000kg)
  * @param {number} initpower - Puissance du véhicule en CV lors de l'instanciation (entre 2 et 12 CV)
  * @param {number} inittank - Capacité Maximale du réservoire (en litres) lors de l'instanciation (max 130)
  * @param {number} initseats - Nombre de sièges choisi parmi trois options : 2, 5 ou 8 sièges.
  */
    constructor(initcarId, initweigth, initpower, inittank, initseats) {
        /**@type {string} Paramètre "immatriculation" privé de la classe Voiture.  */
        let carId = initcarId;
        /**@type {string} Paramètre "couleur" privé de la classe Voiture  */
        let color;
        /**@type {number} Paramètre "poids" privé de la classe Voiture */
        let weigth = initweigth;
        /** Paramètre "puissance" privé de la classe Voiture */
        let power = initpower;
        /** Paramètre "réservoir" privé de la classe Voiture */
        let tank = inittank;
        /** Quantité d'essence actuelle dans le réservoir de l'instance. Initialisé à 5 litres */
        let fuel = 5;
        /** Paramètre "Nombre de Sièges" privé de la classe Voiture */
        let seats = initseats;
        /** @type {boolean} Détermine si la voiture est déjà assurée. False par défaut. */
        let insurance = false;
        /**@type {string} Message d'accueil customisable */
        let message = 'Bienvenue!';
        this.getCarId=()=>{
            return carId
        }
        this.getColor=()=>{
            return color;
        }
        /**
         * Setter appelé par la Méthode exposée -repeindre-: Change la couleur du véhicule.
         * @param {string} newColor - La nouvelle couleur à appliquer.
         */
        this.setColor=(newColor)=>{
            /**@type {Array<string>} Liste des couleurs disponibles applicables à une instance de Voiture. */
            let colorTab = ['bleue', 'rouge', 'jaune', 'blanche', 'noire', 'verte', 'grise'];
            if (!colorTab.includes(newColor))
            {
                return 'La couleur sélectionnée est indisponible !';
            }
            else if (newColor === this.getColor())
            {
                satisfait = true;
                return 'Couleur rafraichie avec succès !';
            }
            color = newColor;
            satisfait = true;
            return 'La nouvelle couleur a bien été appliquée avec succès !';
        }
        this.getWeigth=()=>{
            return weigth;
        }
        this.getPower=()=>{
            return power;
        }
        this.getTank=()=>{
            return tank;
        }
        this.getFuel=()=>{
            return fuel;
        }
        /**
         * Setter : modifie la quantité actuelle d'essence
         * On lui applique une valeur positive par la Méthode exposée -mettreEssence-
         * et une valeur négative avec la Méthode exposée -seDeplacer-
         * @param {number} newFuel - Apport (si positif) ou consommation (si négatif) d'essence
         * @returns {boolean} Retourne un booléen qui sera traité par les Méthodes -mettreEssence-/-seDeplacer
         */
        this.setFuel=(newFuel)=>{
            if ((fuel + newFuel) < 0 || fuel+ newFuel > this.getTank() || isNaN(newFuel)) return false;
            else
            {
                fuel+= newFuel;
                return true;
            }
        }
        this.getSeats=()=>{
            return seats;
        }
        this.getInsurance=()=>{
            if (insurance) return "Oui";
            else return "Non";
        }
        this.setInsurance=()=>{
            insurance = true;
            return 'Votre véhicule est maintenant assuré !';
        }
        this.getMessage=()=>{
            return message;
        }
        /**
         * Setter : modifie le message d'accueil du tableau de bord.
         * @param {string} msg Message rentré par l'utilisateur. Personalisable.
         * @returns {string} - Message comportant la nouvelle valeur de l'attribut privé "message".
         */
        this.setMessage=(msg)=>{
            if (msg == "") message = 'Bienvenue!';
            else message = msg;
            return 'Le nouveau message est "'+this.getMessage()+'".';
        }
    }
    /**
     * Méthode d'instance repeindre - permet de changer l'attribut "color" d'une instance de Voiture
     * @param {string} newColor - La couleur à appliquer
     */
    repeindre(newColor){
        alert(this.setColor(newColor));
    }
    /**
     * Méthode permettant de rajouter la quantité d'essence demandée (dans la limite du réservoir de l'instance)
     * @param {number} qteEssence - Quantité d'essence à ajouter en litre
     * @returns {string} - Message informant de l'execution (ou de la non-execution en cas d'erreur) de la fonction.
     */
    mettreEssence(qteEssence){
        if(!this.setFuel(qteEssence || qteEssence <=0)){
            return 'Apport en essence trop important ou erroné! Action impossible.';
        }
        satisfait = true;
        return 'Succès ! Votre réservoir contient à présent '+this.getFuel()+' litres d\'essence. (Max: '+this.getTank()+' litres)';
    }
    /**
     * Méthode de la classe Voiture
     * Permet de calculer la consommation d'essence du véhicule pour
     * un trajet (en km) et une vitesse moyenne (en km/h) donnée.
     * Si le trajet est possible, la quantité d'essence nécessaire est consommée immédiatement.
     * @param {number} distance - Distance à parcourir. Information donnée par l'utilisateur.
     * @param {number} vitesse - Vitesse moyenne à appliquer. Information donnée par l'utilisateur.
     * @returns {string} - Message informant de l'execution (ou de la non-execution en cas d'erreur) de la fonction.
     */
    seDeplacer(distance, vitesse){
        if (distance<=0 || vitesse <=0) return 'Données invalides.'
        let consommation = 0;
        if (vitesse <=50){
            consommation = (distance/100)*10;
        }
        else if (vitesse>50 && vitesse <90){
            consommation = (distance/100)*5;
        }
        else if (vitesse>90 && vitesse <=130){
            consommation = (distance/100)*8;
        }
        else if (vitesse > 130){
            consommation = (distance/100)*12;
        }
        if (!this.setFuel(-consommation)){
            satisfait = false;
            return 'Trajet impossible. Carburant insuffisant !';
        }
        this.setFuel(-consommation); //Conversion en valeur négative afin d'attribuer la nvll valeur.
        return 'Suite à ce trajet, il vous restera '+this.getFuel()+' litres d\'essence.\n\
        (Essence consommée : '+consommation+' litres)';
    }
    /**
     * Méthode de debug
     * @returns {string} - Message contenant un rappel de l'intégralité des paramètres de l'instance.
     */
    debug(){
        return 'Cette voiture est immatriculée '+this.getCarId()
        +'\nElle est de couleur '+this.getColor()
        +'\nSon poids est de '+this.getWeigth()+'kg \net sa puissance est de '+this.getPower()
        +' CV.\nSon réservoir contient actuellement '+this.getFuel()+' litres d\'essence sur une capacité maximale de '+this.getTank()
        +' litres\nNombre de places: '+this.getSeats()
        +'\nLe véhicule est assuré: '+this.getInsurance();
    }
    /**
     * Méthode d'information
     * @returns {string} - Message contenant l'immatriculation, la couleur et la puissance de l'instance.
     */
    toString(){
        return 'Cette voiture est immatriculée '+this.getCarId()
        +'.\nElle est de couleur '+this.getColor()
        +'.\nSa puissance est de '+this.getPower()+' chevaux.';
    }
}
/**
 * Expression régulière
 * @type {Object}  Restreint la variable immatriculation au format "AA-000-AA".
 */
let verif = new RegExp ('^[A-Z]{2}-[0-9]{3}-[A-Z]{2}$');
/**@type {string} Contrôlé par la RegExp verif. Utilisé lors de l'instanciation*/
let immatriculation ="";
/**@type {number} Variable déterminée par l'utilisateur qui contient le "poids" lors de l'instanciation de Voiture*/
let poids = 0;
/**@type {number} Variable déterminée par l'utilisateur qui contient la "puissance" lors de l'instanciation de Voiture*/
let puissance = 0;
/**@type {number} Variable déterminée par l'utilisateur qui contient la capacité du "reservoir" lors de l'instanciation de Voiture*/
let reservoir = 0;
/**@type {number} Variable déterminée par l'utilisateur qui contient le "nombre de sièges" lors de l'instanciation de Voiture*/
let nbSieges = 0;

/**@type {boolean} Booléen multi-fonctions permettant de gérer les sorties de boucles lors des saisies utilisateur. */
let satisfait = false;
/**@type {number} Variable contenant la distance (en km) donnée par l'utilisateur. Deviendra un paramètre de -seDeplacer- */
let trajet = 0;
/**@type {number} Variable contenant la vitesse (en km/h) donnée par l'utilisateur. Deviendra un paramètre de -seDeplacer- */
let vitesseMoy = 0;

alert('Bienvenue ! Le programme Parc Auto va vous permettre de créer la voiture de vos rêves.');
alert('Pour ce faire, veillez à suivre attentivement les instructions à l\'écran.');
alert('Nous allons commencer par définir l\'immatriculation de votre véhicule.');

//Immatriculation
while (!satisfait)
{
    do
    {
        immatriculation = prompt('Veuillez choisir une immatriculation valide.\nExemple : AA-111-BB');
        if (!verif.test(immatriculation)) alert('Attention à bien respecter le modèle (majuscules et tirets compris)!');
    }
    while (!verif.test(immatriculation))
    satisfait = confirm ('Votre nouvelle immatriculation est le: "'+immatriculation+'".\nCela vous convient-il ?');
}
satisfait = false;

//Poids
while (!satisfait)
{
    do
    {
        poids = Math.floor(parseInt(prompt(('Saisissez à présent le poids (en kg) désiré pour votre véhicule.\n \
        (Poids moyen d\'une voiture: environ 1500kg)'))));
        if (poids<500)
        {
            alert('Malheureusement, notre système ne permet pas de créer un véhicule si léger...')
        }
        else if (poids>3000)
        {
            alert('Malheureusement, notre système ne permet pas de créer un véhicule si lourd...')
        }
    }
    while (poids< 500 || poids >3000 || isNaN(poids))
    satisfait = confirm('Nous avons enregistré un poids de '+poids+'kg pour votre véhicule. Est-ce correct ?');
}
satisfait = false;

//Puissance
while (!satisfait)
{
    do
    {
        puissance = Math.floor(parseInt(prompt(('Saisissez à présent la puissance (en chevaux) désirée pour votre véhicule.\n \
            (Puissance moyenne d\'une voiture citadine: environ 6 CV'))));
        if (puissance<2)
        {
            alert('Votre véhicule doit être un peu plus puissant pour être opérationnel...')
        }
        else if (puissance>12)
        {
            alert('Malheureusement, notre système ne permet pas de créer un véhicule si puissant...')
        }
    }
    while (puissance< 2 || puissance >12 || isNaN(puissance))
    satisfait = confirm('Nous avons enregistré une puissance de '+puissance+'CV pour votre véhicule. Est-ce correct ?');
}
satisfait = false;
//NbSieges
while (!satisfait)
{
    nbSieges = Math.floor(parseInt(prompt(('Combien de sièges ?\n(Options possibles : 2, 5, 8)'))));
    
    switch (nbSieges)
    {
        case 2:
            satisfait = confirm('Petite voiture citadine (2 sièges) - Est-ce correct ?');
            break;
        case 5:
            satisfait = confirm('Voiture de taille moyenne (5 sièges) - Est-ce correct ?');
            break;
        case 8:
            satisfait = confirm('Voiture familliale (8 sièges) - Est-ce correct ?');
            break;
        default:
            alert('Merci de saisir un nombre de sièges dans la limite des options disponibles.');
    }
}
satisfait = false;

//Reservoir
while (!satisfait)
{
    do
    {
        reservoir = Math.floor(parseInt(prompt(('Saisissez la capacité (en litres) de votre réservoir de carburant.'))));
        if (reservoir<5)
        {
            alert('Avec une si faible capacité, votre véhicule sera inutilisable...')
        }
        else if (reservoir>130)
        {
            alert('Malheureusement, notre système ne permet pas de créer un réservoir si grand...')
        }
    }
    while (reservoir< 5 || reservoir >130 || isNaN(reservoir))
    satisfait = confirm('Nous avons enregistré une capacité maximale de '+reservoir+' litres pour votre réservoir de carburant. Est-ce correct ?');
}
satisfait = false;
alert('Voiture en cours de construction... Construction reussie !');

/**
 * On instancie la Voiture de l'utilisateur à l'aide des informations récoltées.
Ces paramètres n'ont pas de setters et ne pourront par conséquent jamais être modifiés.
@type {object} Instanciation de la classe Voiture.
 */
let voitureUser = new Voiture (immatriculation, poids, puissance, reservoir, nbSieges);

//Couleur
while (!satisfait)
{
    voitureUser.repeindre(prompt('Dernière étape, mais pas des moindres ! Choisissez à présent la couleur de votre véhicule.\n\
        Gamme disponible : Bleue - Rouge - Blanche - Jaune - Noire - Verte - Grise').toLowerCase());
}
satisfait = false;
alert(voitureUser.toString());

//Mettre de l'Essence
while (!satisfait)
{
    alert(voitureUser.mettreEssence(Math.floor(parseInt(prompt('Nous vous recommandons d\'approvisionner votre réservoir d\'essence\
 avant de définir un trajet.\nIndiquez la quantité (en litres) d\'essence que vous désirez.')))));
}
satisfait = false;
//Assurance
while (!satisfait)
{
    satisfait =confirm('Avant votre départ, nous vous rappellons qu\'il est obligatoire d\'assurer son véhicule. Procéder ?');
    if (satisfait) alert(voitureUser.setInsurance());
}

//Se Déplacer
alert('Félicitations ! Votre voiture est fin prête à l\'emploi !');
do
{
    trajet = Math.floor(parseInt(prompt('Indiquez dans un premier temps la distance que vous souhaitez parcourir (en km)')));
    vitesseMoy = Math.floor(parseInt(prompt('Indiquez cette fois ci la vitesse moyenne à laquelle vous souhaitez voyager')));
}
while( isNaN(trajet) || isNaN(vitesseMoy))
alert(voitureUser.seDeplacer(trajet, vitesseMoy));

//Message d'accueil
satisfait = confirm('Avant de partir, vous pouvez personaliser le message d\'accueil de votre véhicule \n\
(Par défaut : "Bienvenue"). Procéder au changement ?');
if (satisfait) alert(voitureUser.setMessage(prompt('Votre nouveau message d\'accueil:')));

//FIN
alert('Merci d\'avoir utilisé Parc Auto !\n\
Avant sa fermeture, le programme fera un récapitulatif des paramètres de votre véhicule.');

alert(voitureUser.debug());
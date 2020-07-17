"use strict"
/*
MISSION 1
Programme Parc Auto (v1.0)
-Version avec pré-instanciation de la classe Voiture-
Réalisé par Maxime MONTAGNE.
Dernières modifications le 16/07/2020
*/
class Voiture{
    /**
     * * On instancie avec uniquement 6 paramètres fixes (non modifiables par la suite)
    * @param {string} initcarId - L'Immatriculation du véhicule
    * @param {string} initcolor - La couleur de la Voiture au moment de l'instanciation.
    * @param {number} initweigth - Poids du véhicule en Kg
    * @param {number} initpower - Puissance du véhicule en CV lors de l'instanciation
    * @param {number} inittank - Capacité Maximale du réservoire (en litres) lors de l'instanciation
    * @param {number} initseats - Nombre de sièges lors de l'instanciation
    */  
    constructor(initcarId, initcolor, initweigth, initpower, inittank, initseats){
        /**@type {string} Paramètre "immatriculation" privé de la classe Voiture.  */
        let carId = initcarId;
        /**@type {string} Paramètre "couleur" privé de la classe Voiture  */
        let color = initcolor;
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
        /**@type {string} Message d'accueil customisable par l'utilisateur*/
        let message = 'Bienvenue!';
        this.getCarId=()=>{
            return carId
        }
        this.getColor=()=>{
            return color;
        }
        /**
         * Setter appelé par la méthode -repeindre-: Change la couleur du véhicule.
         * @param {string} newColor - La nouvelle couleur à appliquer.
         * @returns {string} Message informant de la bonne (ou non) application de la nouvelle couleur.
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
                return'Couleur rafraichie avec succès !';
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
         * On lui applique une valeur positive par la méthode -mettreEssence-
         * et une valeur négative avec la méthode -seDeplacer-
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
        if(!this.setFuel(qteEssence) || qteEssence <=0){
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
        if (distance<=0 || vitesse <=0) return 'Données invalides.' //Contrôle des saisies utilisateurs.
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
        +'\nLe véhicule est assuré: '+this.getInsurance()
        +'\nMessage d\'accueil du tableau de bord : '+this.getMessage();
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
/**@type {boolean} Booléen multi-fonctions permettant de gérer les sorties de boucles lors des saisies utilisateur. */
let satisfait = false;
/**@type {number} Variable contenant la distance (en km) donnée par l'utilisateur. Deviendra un paramètre de -seDeplacer- */
let trajet = 0;
/**@type {number} Variable contenant la vitesse (en km/h) donnée par l'utilisateur. Deviendra un paramètre de -seDeplacer- */
let vitesseMoy = 0;

alert('Bienvenue ! Le programme Parc Auto va vous permettre de créer la voiture de vos rêves.');
alert('Pour ce faire, veillez à suivre attentivement les instructions à l\'écran.');

/**
 * On instancie la Voiture de l'utilisateur.
 * Les paramètres du constructor n'ont pas de "setters" et ne pourront donc jamais être modifiés.
@type {object} Instanciation de la classe Voiture.
 */
let voitureUser = new Voiture ('MA-123-KS', 'grise', 1200, 5, 80, 5);

//Couleur
while (!satisfait)
{
    voitureUser.repeindre(prompt('Choisissez à présent la couleur de votre véhicule.\n\
    Gamme disponible : Bleue - Rouge - Blanche - Jaune - Noire - Verte - Grise').toLowerCase());
}
satisfait = false;
alert(voitureUser.toString());

//Mettre de l'Essence
while (!satisfait)
{
    alert(voitureUser.mettreEssence(Math.floor(parseInt(prompt('Nous vous recommendons d\'approvisionner votre réservoir\
 d\'essence avant de définir un trajet.\nIndiquez la quantité (en litres) d\'essence que vous désirez. (Niveau actuel : 5 / 80 litres')))));
}
satisfait = false;
//Assurance
while (!satisfait)
{
    satisfait =confirm('Avant votre départ, nous vous rappellons qu\'il est obligatoire d\'assurer son véhicule. Procéder ?');
    if (satisfait) alert(voitureUser.setInsurance());
    else satisfait = true;
}

//Se Déplacer
alert('Félicitations ! Votre voiture est fin prête à l\'emploi !');
do
{
    trajet = Math.floor(parseInt(prompt('Indiquez dans un premier temps la distance que vous souhaitez parcourir (en km).')));
    vitesseMoy = Math.floor(parseInt(prompt('Indiquez cette fois ci la vitesse moyenne à laquelle vous souhaitez voyager.')));
}
while( isNaN(trajet) || isNaN(vitesseMoy))
alert(voitureUser.seDeplacer(trajet, vitesseMoy));

//Message d'accueil
satisfait = confirm('Avant de partir, vous pouvez personaliser le message d\'accueil de votre véhicule\n\
(Par défaut : "Bienvenue!"). Procéder au changement ?');
if (satisfait) alert(voitureUser.setMessage(prompt('Votre nouveau message d\'accueil:')));

//FIN
alert('Merci d\'avoir utilisé Parc Auto !\n\
Avant sa fermeture, le programme fera un récapitulatif des paramètres de votre véhicule.');

alert(voitureUser.debug());
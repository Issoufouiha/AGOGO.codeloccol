const myTitre1 = document.getElementById('my-titre1');
const myTitre2 = document.getElementById('my-titre2');
const myTitre3 = document.getElementById('my-titre3');
const myTitre4 = document.getElementById('my-titre4');
const myTitre5 = document.getElementById('my-titre5');
const Meshours = document.getElementById("my-hours");
const maDiv = document.getElementsByClassName('displayNone');
let second = 0;
let minute = 0;
let heure = 0;
let Timeout;

myTitre1.addEventListener('click', function () {
    resetTimer();
    second = 20;
     // Mettre à jour l'affichage
        update();
    // Obtenir l'heure actuelle
   let now = new Date();
    
    // Régler le compte à rebours en fonction de l'heure actuelle
   let heurs = now.getHours();
   let minutes = now.getMinutes();
   let seconds = now.getSeconds() + 20; // Ajoutez 21 secondes



    // Mettre à jour l'élément affichant l'heure actuelle
    let Actuelle = heurs + ":" + minutes + ":" + seconds;
    updateActuelle.textContent = Actuelle;
});

myTitre2.addEventListener('click', function () {
    resetTimer();
    minute = 5;
    update();
    let now = new Date();
    
    // Régler le compte à rebours en fonction de l'heure actuelle
   let heurs = now.getHours();
   let minutes = now.getMinutes() + 5;
   let seconds = now.getSeconds(); // Ajoutez 21 secondes



    // Mettre à jour l'élément affichant l'heure actuelle
    let Actuelle = heurs + ":" + minutes + ":" + seconds;
    updateActuelle.textContent = Actuelle;
});

myTitre3.addEventListener('click', function () {
    resetTimer();
    minute = 15;
    update();
});

myTitre4.addEventListener('click', function () {
    resetTimer();
    minute = 20;
    update();
    let now = new Date();
    
    // Régler le compte à rebours en fonction de l'heure actuelle
   let heurs = now.getHours();
   let minutes = now.getMinutes() + 20;
   let seconds = now.getSeconds(); // Ajoutez 21 secondes



    // Mettre à jour l'élément affichant l'heure actuelle
    let Actuelle = heurs + ":" + minutes + ":" + seconds;
    updateActuelle.textContent = Actuelle;
});

myTitre5.addEventListener('click', function () {
    resetTimer();
    minute = 30;
    update();
    let now = new Date();
    
    // Régler le compte à rebours en fonction de l'heure actuelle
   let heurs = now.getHours();
   let minutes = now.getMinutes()  + 30;
   let seconds = now.getSeconds();



    // Mettre à jour l'élément affichant l'heure actuelle
    let Actuelle = heurs + ":" + minutes + ":" + seconds;
    updateActuelle.textContent = Actuelle;
});

function resetTimer() {
    // Réinitialiser les variables du premier timer
    clearTimeout(Timeout);
    second = 0;
    minute = 0;
}

const update = function () {
    if (second > 0 || minute > 0) {
        if (second === 0) {
            second = 60;
            minute--;
        }
        second--;
        Meshours.innerHTML = `00:${minute < 10 ? "0" : ""}${minute}:${second < 10 ? "0" : ""}${second}`;
        Timeout = setTimeout(update, 1000);
    } else {
        // Arrêter le compte à rebours lorsque les secondes atteignent 0
        clearTimeout(Timeout);
    }
};
////////////////////////////// Recupere le nombre entre dans une input/////////////////////////////
function handleKeyPress(event) {
    if (event.key === "Enter") {
        clearInterval(update);
        // Empêcher le rechargement de la page (comportement par défaut de la touche "Entrée" dans un formulaire)
        event.preventDefault();

        // Démarrer le compte à rebours lorsque la touche "Entrée" est pressée
        startCountdown();
    }
}



let countdownInterval;
////////////////////////////// foction qui verifier si il y eu clique sur la touche entre///////////////////////
function startCountdown() {
    clearInterval(countdownInterval);

    // Récupérer la valeur entrée par l'utilisateur (en minutes)
    const inputValue = document.getElementById('input-number').value;

    // Vérifier si l'entrée est un nombre valide et supérieur à zéro
    if (inputValue > 0) {
        let secondsRemaining = inputValue * 60; // Convertir les minutes en secondes
        const countdownElement = document.getElementById('my-hours');

        // Définir l'intervalle du compte à rebours
        countdownInterval = setInterval(function () {
            if (secondsRemaining === 0) {
                clearInterval(countdownInterval);
            } else if (secondsRemaining > 0) {
                let hours = Math.floor(secondsRemaining / 3600);
                let minutes = Math.floor((secondsRemaining % 3600) / 60);
                let seconds = secondsRemaining % 60;
                
                // Ajouter un zéro devant les chiffres si nécessaire
                if (seconds < 10) {
                    seconds = "0" + seconds;
                }
                if (minutes < 10) {
                    minutes = "0" + minutes;
                }
                if (hours < 10) {
                    hours = "0" + hours;
                }

                countdownElement.innerHTML = `${hours}:${minutes}:${seconds}`;
                secondsRemaining--;

                let updateActuelle = document.getElementById("Be Back At");
                    let d = new Date();
                    let minutese = d.getMinutes() + minutes
                    let Actuelle = d.getHours() + ":" + minutese + ":" + d.getSeconds();
                    updateActuelle.textContent = Actuelle ;
            }
        }, 1000); // Mettre à jour chaque seconde (1000 millisecondes)
    } else {
        clearTimeout(countdownInterval);
    }
}


////////////////// recupere l'heure actuelle /////////////////////////////////////




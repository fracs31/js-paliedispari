let exercise = parseInt(prompt("1: per parola palindroma 2: per pari o dispari")); //scelta dell'esericio

//Menu
switch (exercise) {
    //Parola palindroma
    case 1:
        let word = prompt("Inserire una parola palindroma: "); //parola inserita dall'utente
        console.log("Parola palindroma: " + isPalindrome(word)); //richiamo la funzione per capire se la parola è palindroma
        break; //chiudo
    //Pari o dispari
    case 2:
        let choise = ""; //scelta dell'utente
        let user = 0; //numero inserito dall'utente
        let pc = getRandomIntInclusive(1, 5); //numero random del pc tra 1 e 5

        //Fino a quando l'utente non sceglie bene
        while (choise != "Pari" && choise != "Dispari") {
            choise = prompt("Pari o Dispari?"); //continuo a chiedere la sua scelta 
        }

        //Fino a quando l'utente non inserisce un numero da 1 e 5
        while (!(user >= 1 && pc <= 5)) {
            user = parseInt(prompt("Inserisci un numero tra 1 e 5")); //continuo a chiedere di inserire un numero tra 1 e 5
        }

        console.log("Numero utente: " + user); //stampo il numero dell'utente
        console.log("Numero pc: " + pc); //stampo il numero del pc
        console.log("Somma dei numeri: " + (user + pc)); //stampo la somma dei numeri inseriti
        console.log("Scelta: " + choise); //stampo la scelta di gioco

        //Se l'utente vince
        if (gameEvenOrOdd(user, pc, choise) == true) {
            console.log("L'utente vince!"); //stampo un messaggio di vittoria per l'utente
        } else { //altrimenti se è il pc a vincere
            console.log("Il Pc vince!"); //stampo un messaggio di vittoria per il pc
        }
        break; //chiudo
}

//Funzione per capire se una parola è palindroma
function isPalindrome(word) {
    let letters = []; //array che contiene ogni singola lettera della parola inserita dall'utente
    let reverse = []; //array che contiene in ordine opposto ogni singola lettera della parola inserita dall'utente
    let result = false; //variabile che controlla se la parola inserita è palindroma
    //Ciclo
    for (let i = 0; i < word.length; i++) {
        letters.push(word.charAt(i)); //prendo ogni lettera della parola e la inserisco nell'array
    }
    //Ciclo
    for (let i = (letters.length - 1); i >= 0; i--) {
        reverse.push(letters[i]); //inserisco ogni lettera della parola in ordine opposto nell'array
    }
    //Ciclo
    for (let i = 0; i < letters.length; i++) {
        //Se le lettere coincidono in ogni posizione degli array
        if (letters[i] == reverse[i]) {
            result = true; //la parola è palindroma
        } else { //altrimenti
            result = false; //la parola non è palindroma
        }
    }
    return result; //restituisco il risultato
}

//Funzione per ottenere numeri random con un range tra due valori
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min); //arrotondo per eccesso
    max = Math.floor(max); //arrotondo per difetto
    return Math.floor(Math.random() * (max - min + 1) + min); //restituisco il numero random
}

//Funzione per il gioco "pari o dispari"
function gameEvenOrOdd(user, pc, choise) {
    let winnerUser = false; //vincitore
    let sum = isEven(user + pc); //controllo che la somma sia pari
    //Se l'utente ha scelto pari
    if (choise == "Pari") {
        //Se la somma dei due numeri è pari
        if (sum == true) {
            winnerUser = true; //vince l'utente
        }
    }
    //Se l'utente ha scelto dispari
    if (choise == "Dispari") {
        //Se la somma dei due numeri è dispari
        if (sum == false) {
            winnerUser = true; //perde l'utente
        }
    }
    return winnerUser; //restituisco il vincitore
}

//Funzione per verificare se un numero è pari
function isEven(number) {
    //Se il resto della divisone per 2 è zero
    if (number % 2 == 0) {
        return true; //il numero è pari
    } else { //altrimenti
        return false; //il numero non è pari
    }
}
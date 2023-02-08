let word = prompt("Inserire una parola palindroma: "); //parola inserita dall'utente
console.log("Parola palindroma: " + isPalindrome(word)); //richiamo la funzione per capire se la parola è palindroma

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
const status = document.querySelector("h2");
let jeuActif = true;
var joueurActif = 'X';
let etatJEu = ["", "", "", "", "", "", "", "", ""];

const gagne = () => 'Le joueur ' + joueurActif + ' a gagne';
const egalite = () => 'Egalite';
const tourJoueur = () => "C'est le tour de " + joueurActif + "!";
const conditionsvictoire = (
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
);

status.innerHTML = tourJoueur();




(function() {

    // Récupération des cases à clicker
    const items = document.querySelectorAll('.grid-item').forEach(cell => cell.addEventListener("click", choiseCase));
    
    function choiseCase(id) {  
        const index = parseInt(this.id)
        if(etatJEu[index] != "" || !jeuActif){ 
            return
        }

        etatJEu[index] = joueurActif
        console.log(etatJEu)

        if(this.innerHTML != "" || !jeuActif){
            return
        }
        else{

            this.innerHTML=joueurActif
        }
        if(joueurActif != 'X'){
            joueurActif = 'X'
        }
        else{
            joueurActif = 'O'
        }
                
    }

    function gagnant() {
        let joueurgagnant = false

        for(let conditionvictoire of conditionsvictoire){
            let val1=etatJEu[conditionvictoire[0]]
            let val2=etatJEu[conditionvictoire[1]]
            let val3=etatJEu[conditionvictoire[2]]
            if(val1==="" || val2==="" || val3===""){
                continue
            }
            
            if(val1===val2 && val2===val3){
                joueurgagnant = true 
                break
            }
        }
        if(joueurgagnant = true){
            status.innerHTML = gagne();
            jeuActif = false
            return
        }
    }


    // Vide le contenu de toute les cases
    function rest() {
        for (var i = 0; i < items.length; i++) {
            console.log(items[i]);
            items[i].textContent = ''
        }
    }


})();
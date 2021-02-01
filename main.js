// 1

let myDiv = document.querySelector('div#content');

let myEvent = (e) => {
    var text = e.target
    if (text.tagName == "H1") {
        text.style= " border-bottom: 1px solid black"
    } else if (text.tagName == "H2"){
        text.style = 'background-color:red'
    } else if (text.tagName == "DIV") {
        text.style = 'border: solid 1px black'
    } else if (text.tagName == "P") {
        text.style = "font-weight : bold ; color: red"
    }
}

myDiv.addEventListener('click', myEvent);

//2

let titreDiv = document.querySelectorAll('div')[1].children[0];
console.log(titreDiv);
let mySectionP = document.querySelector('section').children[0];
let monTexte = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement et nous verrons ça dans le prochain exercice "

titreDiv.addEventListener('mouseover', ()=> {
    mySectionP.innerText = monTexte
})

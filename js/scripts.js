
// esercizio di oggi: Our Team

// Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
// Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

// MILESTONE 0:
// Creare l'array di oggetti con le informazioni fornite.
// MILESTONE 1:
// Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
// MILESTONE 2:
// Stampare le stesse informazioni su DOM sottoforma di stringhe


function addNewElement(name,role,image){
    const element = {
        nome:name,
        ruolo:role,
        immagine:image
    };
    return element
};


let team = [];
let wayneBarnett = addNewElement(
  "Wayne Barnett",
  "Founder & CEO",
  "wayne-barnett-founder-ceo.jpg"
);
team.push(wayneBarnett);

let angelaCaroll = addNewElement(
  "Angela Caroll",
  "Chief Editor",
  "angela-caroll-chief-editor.jpg"
);
team.push(angelaCaroll);

let walterGordon = addNewElement(
  "Walter Gordon",
  "Office Manager",
  "walter-gordon-office-manager.jpg"
);
team.push(walterGordon);

let angelaLopez = addNewElement(
  "Angela Lopez",
  "Social Media Manager",
  "angela-lopez-social-media-manager.jpg"
);
team.push(angelaLopez);

let scottEstrada = addNewElement(
  "Scott Estrada",
  "Developer",
  "scott-estrada-developer.jpg"
);
team.push(scottEstrada);

let barbaraRamos = addNewElement(
  "Barbara Ramos",
  "Graphic Designer",
  "barbara-ramos-graphic-designer.jpg"
);
team.push(barbaraRamos);

// console.log('team' , team);

let stampa = document.getElementById('teams');

for (let i = 0; i < team.length; i++) {
    // console.log(team[i])
    for(let key in team[i]){
        console.log("-- " + key + ":", team[i][key]);
        stampa.innerHTML += `-- ${key} : ${team[i][key]}> <br>`;
    }
}


    
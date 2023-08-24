//MILESTONE 0
//oggetti da inserire
const firstMember = {
    name:'Wayne Barnett',
    role:'Founder & CEO',
    photo:'wayne-barnett-founder-ceo.jpg'
}
const secondMember = {
    name:'Angela Caroll',
    role:'Chief Editor',
    photo:'angela-caroll-chief-editor.jpg'
}
const thirdMember = {
    name:'Walter Gordon',
    role:'Office Manager',
    photo:'walter-gordon-office-manager.jpg'
}
const fourthMember = {
    name:'Angela Lopez',
    role:'Social Media Manager',
    photo:'angela-lopez-social-media-manager.jpg'
}
const fifthMember = {
    name:'Scott Estrada',
    role:'Developer',
    photo:'scott-estrada-developer.jpg'
}
const sixthMember = {
    name:'Barbara Ramos',
    role:'Graphic Designer',
    photo:'barbara-ramos-graphic-designer.jpg'
}
//contenitore 
const ourTeam = [firstMember,secondMember,thirdMember,fourthMember,fifthMember,sixthMember]

//MILESTONE 1
//stampa in console
//primo membro
console.log(ourTeam[0]);
console.log('nome:','',ourTeam[0].name);
console.log('ruolo:','',ourTeam[0].role);
console.log('foto:','',ourTeam[0].photo);
//secondo membro
console.log(ourTeam[1]);
console.log('nome:','',ourTeam[1].name);
console.log('ruolo:','',ourTeam[1].role);
console.log('foto:','',ourTeam[1].photo);
//terzo membro
console.log(ourTeam[2]);
console.log('nome:','',ourTeam[2].name);
console.log('ruolo:','',ourTeam[2].role);
console.log('foto:','',ourTeam[2].photo);
//quarto membro
console.log(ourTeam[3]);
console.log('nome:','',ourTeam[3].name);
console.log('ruolo:','',ourTeam[3].role);
console.log('foto:','',ourTeam[3].photo);
//quinto membro
console.log(ourTeam[4]);
console.log('nome:','',ourTeam[4].name);
console.log('ruolo:','',ourTeam[4].role);
console.log('foto:','',ourTeam[4].photo);
//sesto membro
console.log(ourTeam[5]);
console.log('nome:','',ourTeam[5].name);
console.log('ruolo:','',ourTeam[5].role);
console.log('foto:','',ourTeam[5].photo);

//MILESTONE 2
//prima persona
const firstName =document.getElementById('first-name')
firstName.innerText =ourTeam[0].name
const firstRole =document.getElementById('first-role')
firstRole.innerText =ourTeam[0].role
const firstPhoto =document.getElementById('first-photo')
firstPhoto.innerText =ourTeam[0].photo
//seconda persona
const secondName =document.getElementById('second-name')
secondName.innerText =ourTeam[1].name
const secondRole =document.getElementById('second-role')
secondRole.innerText =ourTeam[1].role
const secondPhoto =document.getElementById('second-photo')
secondPhoto.innerText =ourTeam[1].photo
//terza persona
const thirdName =document.getElementById('third-name')
thirdName.innerText =ourTeam[2].name
const thirdRole =document.getElementById('third-role')
thirdRole.innerText =ourTeam[2].role
const thirdPhoto =document.getElementById('third-photo')
thirdPhoto.innerText =ourTeam[2].photo
//quarta persona
const fourthName =document.getElementById('fourth-name')
fourthName.innerText =ourTeam[3].name
const fourthRole =document.getElementById('fourth-role')
fourthRole.innerText =ourTeam[3].role
const fourthPhoto =document.getElementById('fourth-photo')
fourthPhoto.innerText =ourTeam[3].photo
//quinta persona
const fifthName =document.getElementById('fifth-name')
fifthName.innerText =ourTeam[4].name
const fifthRole =document.getElementById('fifth-role')
fifthRole.innerText =ourTeam[4].role
const fifthPhoto =document.getElementById('fifth-photo')
fifthPhoto.innerText =ourTeam[4].photo
//sesta persona
const sixthName =document.getElementById('sixth-name')
sixthName.innerText =ourTeam[5].name
const sixthRole =document.getElementById('sixth-role')
sixthRole.innerText =ourTeam[5].role
const sixthPhoto =document.getElementById('sixth-photo')
sixthPhoto.innerText =ourTeam[5].photo








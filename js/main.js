const team = [
    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        image: 'angela-caroll-chief-editor.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        image: 'walter-gordon-office-manager.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        image: 'angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        image: 'scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        image: 'barbara-ramos-graphic-designer.jpg',
    },
];


// stampo in console le info per ogni membro

for (const member of team) {
    console.log(`Nome: ${member.name}, Ruolo: ${member.role}, Foto: ${member.image}`);
}

// modifico il DOM per stampare le info a schermo

const cardContainer = document.getElementById('card-container')

for (const member of team) {
    // creo un paragrafo dove inserire le info
    const info = document.createElement('p')
    info.innerHTML = `Nome: ${member.name}, Ruolo: ${member.role}, Foto: ${member.image}`

    // aggiungo le info al container
    cardContainer.appendChild(info)
}

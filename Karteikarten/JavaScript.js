const addCard = document.querySelector("#addCard");
const addKarteikarteSet = document.querySelector("#addKarteikarteSet");
let karteikarteSet = document.querySelector("#karteiKartenSet");
const karteikarte = document.querySelector(".Karteikarte");
const deleteAllCards = document.querySelector("#deleteAllCards");
const points = document.querySelector("#points");
const maxPoints = document.querySelector("#maxPoints");

let pointcounter = 0;
let cardcounter = 0;
let lastkarteiKarteBegriff = null
let lastkarteiKarteLoesung = null
let lastBegriffID = null;
let lastLoesungID = null;

localStorage.clear();

addCard.addEventListener('click', () => {
    const karteiKarteContainer = document.createElement('div');
    const karteiKarteBegriff = document.createElement('input');
    const karteiKarteLoesung = document.createElement('input');
    const deleteCard = document.createElement('button');
    const begriffID = `karteiKarteBegriff_${cardcounter}`;
    const loesungID = `karteiKarteLoesung_${cardcounter}`;


    karteiKarteContainer.className = "karteikarte";
    karteiKarteBegriff.placeholder = "Schreibe hier den Begriff";
    karteiKarteLoesung.placeholder = "Schreibe hier die Lösung";
    deleteCard.textContent = "Karte löschen";
    karteiKarteBegriff.type = "text";
    karteiKarteLoesung.type = "text"
    karteiKarteBegriff.id = begriffID;
    karteiKarteLoesung.id = loesungID;

    lastkarteiKarteBegriff = karteiKarteBegriff;
    lastkarteiKarteLoesung = karteiKarteLoesung;
    lastBegriffID = begriffID;
    lastLoesungID = loesungID;

    karteiKarteContainer.appendChild(karteiKarteBegriff);
    karteiKarteContainer.appendChild(karteiKarteLoesung);
    karteiKarteContainer.appendChild(deleteCard);
    karteikarteSet.appendChild(karteiKarteContainer);

    cardcounter++;
    maxPoints.textContent = `Max Punkte: ${cardcounter}`; 


    deleteCard.addEventListener('click', () => {
        karteiKarteContainer.remove();
        localStorage.removeItem(begriffID);
        localStorage.removeItem(loesungID);
        cardcounter--;
        maxPoints.textContent = `Max Punkte: ${cardcounter}`;
    })



    karteiKarteBegriff.addEventListener('change', (event) => {
        const karteiKarteBegriffResult = karteiKarteBegriff.value;
        localStorage.setItem(begriffID, karteiKarteBegriffResult);
    });

    karteiKarteLoesung.addEventListener('change', (event) => {
        const karteiKarteLoesungResult = karteiKarteLoesung.value;
        localStorage.setItem(loesungID, karteiKarteLoesungResult);
    });

});



deleteAllCards.addEventListener('click', () => {
    cardcounter = 0;
    karteikarteSet.innerHTML = null;
    localStorage.clear();
    maxPoints.textContent = `Max Punkte: 0`;
    points.textContent = `Erreichte Punkte: 0`;
})


addKarteikarteSet.addEventListener('click', () => {
    const begriffValue = lastkarteiKarteBegriff.value;
    const loesungValue = lastkarteiKarteLoesung.value;
    pointcounter = 0
    points.textContent = `Erreichte Punkte: ${pointcounter}`;

    if (loesungValue === "" && begriffValue === "") {
        alert("Bitte Schreibe eine Lösung und einen Begriff rein")
        return
    } else {
        if (loesungValue === "") {
            alert("Bitte Schreibe eine Lösung dazu")
            return
        }
        if (begriffValue === "") {
            alert("Bitte Schreibe einen Begriff dazu")
            return
        } else {
            karteikarteSet.innerHTML = null;
        }
    }

    Object.keys(localStorage)
        .filter(key => key.startsWith("karteiKarteBegriff_"))
        .forEach(key => {
            const begriff = localStorage.getItem(key);
            const loesung = localStorage.getItem(key.replace("Begriff", "Loesung"));

            const karteikarteSet = document.querySelector("#karteiKartenSet");
            const karteiKarteContainer = document.createElement('div');
            const karteiKarteBegriff = document.createElement('p');
            const karteiKarteLoesung = document.createElement('p');
            const loesungButton = document.createElement('button');
            const richtigButton = document.createElement('button');
            const falschButton = document.createElement('button');

            loesungButton.textContent = "Lösung";
            richtigButton.textContent = "✓"
            falschButton.textContent = "✖"
            karteiKarteContainer.className = "karteikarte";
            karteiKarteBegriff.textContent = `Begriff: ${begriff}`;
            karteiKarteLoesung.textContent = `Lösung: ${loesung}`;
            karteiKarteLoesung.style.display = "none";

            karteiKarteContainer.appendChild(karteiKarteBegriff);
            karteiKarteContainer.appendChild(karteiKarteLoesung);
            karteiKarteContainer.appendChild(loesungButton);
            karteiKarteContainer.appendChild(richtigButton);
            karteiKarteContainer.appendChild(falschButton);

            loesungButton.addEventListener('click', () => {
                karteiKarteLoesung.style.display = "block"; 
            });

            richtigButton.addEventListener('click', () => {
                pointcounter++;
                points.textContent = `Erreichte Punkte: ${pointcounter}`;
                karteiKarteContainer.remove();
            });

            falschButton.addEventListener('click', () => {
                karteikarteSet.appendChild(karteiKarteContainer);
                karteiKarteLoesung.style.display = "none"; 
            });

            if (loesungValue !== "" && begriffValue !== "") {
                karteikarteSet.appendChild(karteiKarteContainer);
            }
        });
});

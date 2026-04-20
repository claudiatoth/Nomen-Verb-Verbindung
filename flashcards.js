// ============================================
// FLASHCARDS - NOMEN-VERB-VERBINDUNGEN
// Claudia Toth · 25 colocații cu Text-to-Speech
// ============================================

const flashcardsData = [
    { de: 'eine Entscheidung treffen', ro: 'a lua o decizie' },
    { de: 'einen Entschluss fassen', ro: 'a lua o hotărâre' },
    { de: 'eine Vereinbarung treffen', ro: 'a încheia o înțelegere' },
    { de: 'einen Fehler begehen', ro: 'a face o greșeală' },
    { de: 'Aufmerksamkeit erregen', ro: 'a atrage atenția' },
    { de: 'Interesse finden', ro: 'a găsi interes' },
    { de: 'zur Kenntnis nehmen', ro: 'a lua la cunoștință' },
    { de: 'Eindrücke sammeln', ro: 'a aduna impresii' },
    { de: 'Beachtung finden', ro: 'a fi luat în seamă' },
    { de: 'Rücksicht nehmen', ro: 'a ține cont' },
    { de: 'eine Rolle spielen', ro: 'a juca un rol' },
    { de: 'in Anspruch nehmen', ro: 'a apela la / a folosi' },
    { de: 'zur Folge haben', ro: 'a avea ca urmare' },
    { de: 'sich in Acht nehmen', ro: 'a se feri' },
    { de: 'zur Verfügung stehen', ro: 'a sta la dispoziție' },
    { de: 'in Frage kommen', ro: 'a intra în discuție' },
    { de: 'in Kauf nehmen', ro: 'a accepta (un dezavantaj)' },
    { de: 'in Betracht ziehen', ro: 'a lua în considerare' },
    { de: 'aufs Spiel setzen', ro: 'a pune în joc / a risca' },
    { de: 'auf der Hand liegen', ro: 'a fi evident' },
    { de: 'Bilanz ziehen', ro: 'a face bilanțul' },
    { de: 'Verantwortung tragen', ro: 'a purta responsabilitatea' },
    { de: 'Erfahrungen sammeln', ro: 'a aduna experiențe' },
    { de: 'Kompetenzen erwerben', ro: 'a dobândi competențe' },
    { de: 'Wissen erwerben', ro: 'a dobândi cunoștințe' },
    { de: 'Bescheid wissen', ro: 'a fi la curent' },
    { de: 'Vorschriften beachten', ro: 'a respecta regulile' },
    { de: 'mit dem Gedanken spielen', ro: 'a se gândi la' },
    { de: 'in Aufregung versetzen', ro: 'a tulbura' },
    { de: 'in Unruhe versetzen', ro: 'a pune în neliniște' },
    { de: 'Mitgefühl zeigen', ro: 'a arăta compasiune' },
    { de: 'ein Geheimnis bewahren', ro: 'a păstra un secret' },
    { de: 'Fähigkeiten zeigen', ro: 'a demonstra abilități' },
    { de: 'den Arbeitsschutz beachten', ro: 'a respecta protecția muncii' }
];

let currentCardIndex = 0;

function buildFlashcards() {
    const container = document.getElementById('flashcards-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="exercise-instruction">
            <strong>📇 Învață prin repetiție.</strong><br>
            Click pe card pentru a vedea traducerea. Click pe 🔊 pentru pronunție automată în germană.
        </div>
        
        <div class="flashcard-counter" id="flashcard-counter">
            Card 1 / ${flashcardsData.length}
        </div>
        
        <div class="flashcard" id="flashcard" onclick="flipCard()">
            <button class="flashcard-audio-btn" onclick="playFlashcardAudio(event)" title="Ascultă pronunția">🔊</button>
            <div class="flashcard-content">
                <div class="de" id="flashcard-de">${flashcardsData[0].de}</div>
                <div class="ro" id="flashcard-ro">${flashcardsData[0].ro}</div>
            </div>
            <div class="flashcard-hint">👆 Click pentru traducere</div>
        </div>
        
        <div class="flashcard-controls">
            <button class="flashcard-btn" onclick="prevCard()" id="prev-btn">← Anterior</button>
            <button class="flashcard-btn" onclick="nextCard()" id="next-btn">Următor →</button>
        </div>
    `;
    
    updateFlashcard();
}

function updateFlashcard() {
    const card = document.getElementById('flashcard');
    const de = document.getElementById('flashcard-de');
    const ro = document.getElementById('flashcard-ro');
    const counter = document.getElementById('flashcard-counter');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    
    if (!card || !de || !ro || !counter) return;
    
    const currentCard = flashcardsData[currentCardIndex];
    de.textContent = currentCard.de;
    ro.textContent = currentCard.ro;
    card.classList.remove('flipped');
    counter.textContent = `Card ${currentCardIndex + 1} / ${flashcardsData.length}`;
    
    if (prevBtn) prevBtn.disabled = currentCardIndex === 0;
    if (nextBtn) nextBtn.disabled = currentCardIndex === flashcardsData.length - 1;
}

function flipCard() {
    const card = document.getElementById('flashcard');
    if (card) card.classList.toggle('flipped');
}

function nextCard() {
    if (currentCardIndex < flashcardsData.length - 1) {
        currentCardIndex++;
        updateFlashcard();
    }
}

function prevCard() {
    if (currentCardIndex > 0) {
        currentCardIndex--;
        updateFlashcard();
    }
}

// TEXT-TO-SPEECH pentru pronunție germană automată
function playFlashcardAudio(event) {
    event.stopPropagation();
    const card = flashcardsData[currentCardIndex];
    
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(card.de);
        utterance.lang = 'de-DE';
        utterance.rate = 0.85;
        window.speechSynthesis.speak(utterance);
    } else {
        alert('Browser-ul tău nu suportă Text-to-Speech. Te rog folosește Chrome, Edge sau Safari.');
    }
}

// Build flashcards on load
document.addEventListener('DOMContentLoaded', function() {
    buildFlashcards();
});

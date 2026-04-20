// ============================================
// EXERCIȚII - NOMEN-VERB-VERBINDUNGEN
// Claudia Toth · 5 exerciții interactive
// ============================================

// ============================================
// EXERCIȚIUL 1: Asociere Verb + Nomen
// (din materialul original)
// ============================================
const ex1Data = [
    { id: 'a', nomen: 'Interesse', correct: 'finden' },
    { id: 'b', nomen: 'Aufmerksamkeit', correct: 'erregen' },
    { id: 'c', nomen: 'zur Kenntnis', correct: 'nehmen' },
    { id: 'd', nomen: 'in Anspruch', correct: 'nehmen' },
    { id: 'e', nomen: 'zur Folge', correct: 'haben' },
    { id: 'f', nomen: 'zur Verfügung', correct: 'stehen' },
    { id: 'g', nomen: 'in Kauf', correct: 'nehmen' },
    { id: 'h', nomen: 'einen Fehler', correct: 'begehen' },
    { id: 'i', nomen: 'eine Rolle', correct: 'spielen' },
    { id: 'j', nomen: 'Rücksicht', correct: 'nehmen' },
    { id: 'k', nomen: 'Eindrücke', correct: 'sammeln' },
    { id: 'l', nomen: 'Beachtung', correct: 'finden' },
    { id: 'm', nomen: 'sich in Acht', correct: 'nehmen' },
    { id: 'n', nomen: 'in Frage', correct: 'kommen' },
    { id: 'o', nomen: 'in Betracht', correct: 'ziehen' }
];

const ex1Verbs = ['finden', 'treffen', 'nehmen', 'stehen', 'zeigen', 'erregen', 'spielen', 'haben', 'wissen', 'kommen', 'ziehen', 'fassen', 'setzen', 'tragen', 'sammeln', 'versetzen', 'begehen', 'bewahren', 'beachten', 'liegen', 'erwerben'];

function buildEx1() {
    const container = document.getElementById('ex1-container');
    if (!container) return;
    
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Suchen Sie das passende Verb zum Nomen.</strong><br>
            Alegeți verbul potrivit pentru fiecare substantiv din lista de mai jos.
        </div>
    `;
    
    ex1Data.forEach((item, index) => {
        let optionsHTML = '<option value="">-- alege verbul --</option>';
        ex1Verbs.forEach(v => {
            optionsHTML += `<option value="${v}">${v}</option>`;
        });
        
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>... <span class="nomen-highlight">${item.nomen}</span></label>
                    <select id="ex1-${item.id}">${optionsHTML}</select>
                </div>
                <div class="feedback" id="ex1-f${item.id}"></div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function checkEx1() {
    let correct = 0;
    const total = ex1Data.length;
    
    ex1Data.forEach(item => {
        const select = document.getElementById(`ex1-${item.id}`);
        const feedback = document.getElementById(`ex1-f${item.id}`);
        const userAnswer = select.value.trim().toLowerCase();
        const correctAnswer = item.correct.toLowerCase();
        
        if (userAnswer === correctAnswer) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.correct} ${item.nomen}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} ${item.nomen}`;
        }
    });
    
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 2: Lückentext (Completare propoziții)
// ============================================
const ex2Data = [
    { 
        id: 'a', 
        sentence: 'Der Politiker ___ eine wichtige <span class="nomen-highlight">Entscheidung</span> über die Reform.',
        correct: 'traf',
        accept: ['traf', 'trifft', 'getroffen'],
        translation: 'Politicianul a luat o decizie importantă despre reformă.'
    },
    { 
        id: 'b', 
        sentence: 'Die Studenten ___ während des Praktikums viele <span class="nomen-highlight">Erfahrungen</span>.',
        correct: 'sammelten',
        accept: ['sammeln', 'sammelten', 'gesammelt', 'haben gesammelt'],
        translation: 'Studenții au adunat multe experiențe în timpul stagiului.'
    },
    { 
        id: 'c', 
        sentence: 'Bitte ___ Sie <span class="nomen-highlight">Rücksicht</span> auf die anderen Gäste!',
        correct: 'nehmen',
        accept: ['nehmen', 'nimmst'],
        translation: 'Vă rugăm să țineți cont de ceilalți oaspeți!'
    },
    { 
        id: 'd', 
        sentence: 'Diese Aufgabe ___ alle deine <span class="nomen-highlight">Fähigkeiten</span> in Anspruch.',
        correct: 'nimmt',
        accept: ['nimmt', 'nehmen', 'wird nehmen'],
        translation: 'Această sarcină îți va solicita toate abilitățile.'
    },
    { 
        id: 'e', 
        sentence: 'Wir müssen die Konsequenzen <span class="nomen-highlight">in Kauf</span> ___.',
        correct: 'nehmen',
        accept: ['nehmen'],
        translation: 'Trebuie să acceptăm consecințele.'
    },
    { 
        id: 'f', 
        sentence: 'Sie ___ <span class="nomen-highlight">mit dem Gedanken</span>, ihre Arbeit zu kündigen.',
        correct: 'spielt',
        accept: ['spielt', 'spielen', 'trägt sich', 'trug sich'],
        translation: 'Se gândește să-și dea demisia.'
    },
    { 
        id: 'g', 
        sentence: 'Die Mitarbeiter müssen die <span class="nomen-highlight">Vorschriften</span> ___.',
        correct: 'beachten',
        accept: ['beachten'],
        translation: 'Angajații trebuie să respecte regulile.'
    },
    { 
        id: 'h', 
        sentence: 'Er ___ einen schweren <span class="nomen-highlight">Fehler</span> in seiner Karriere.',
        correct: 'beging',
        accept: ['beging', 'begeht', 'begangen', 'hat begangen'],
        translation: 'A făcut o greșeală gravă în cariera sa.'
    }
];

function buildEx2() {
    const container = document.getElementById('ex2-container');
    if (!container) return;
    
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Ergänzen Sie das passende Verb in der richtigen Form.</strong><br>
            Completați cu verbul potrivit la forma corectă (Präsens sau Präteritum).
        </div>
    `;
    
    ex2Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.sentence}</label>
                    <input type="text" id="ex2-${item.id}" placeholder="Scrie verbul...">
                    <small style="color: #6b7280; font-style: italic;">💬 ${item.translation}</small>
                </div>
                <div class="feedback" id="ex2-f${item.id}"></div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function checkEx2() {
    let correct = 0;
    const total = ex2Data.length;
    
    ex2Data.forEach(item => {
        const input = document.getElementById(`ex2-${item.id}`);
        const feedback = document.getElementById(`ex2-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase();
        
        const isCorrect = item.accept.some(a => a.toLowerCase() === userAnswer);
        
        if (isCorrect) {
            feedback.className = 'feedback correct';
            feedback.textContent = `Forme acceptate: ${item.accept.join(' / ')}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} (sau: ${item.accept.join(', ')})`;
        }
    });
    
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 3: Multiple Choice
// ============================================
const ex3Data = [
    {
        id: 'a',
        question: 'Welches Verb passt? "Die Lösung des Problems ___ auf der Hand."',
        options: ['steht', 'liegt', 'kommt', 'geht'],
        correct: 'liegt',
        explanation: '"auf der Hand liegen" = a fi evident'
    },
    {
        id: 'b',
        question: 'Welches Verb passt? "Sie ___ einen festen Entschluss."',
        options: ['traf', 'fasste', 'nahm', 'machte'],
        correct: 'fasste',
        explanation: '"einen Entschluss fassen" = a lua o hotărâre'
    },
    {
        id: 'c',
        question: 'Welches Verb passt? "Du sollst dein Leben nicht ___ Spiel setzen."',
        options: ['ans', 'ins', 'aufs', 'zum'],
        correct: 'aufs',
        explanation: '"aufs Spiel setzen" = a pune în joc / a risca'
    },
    {
        id: 'd',
        question: 'Welches Verb passt? "Der Direktor ___ Bilanz über das vergangene Jahr."',
        options: ['macht', 'zieht', 'nimmt', 'gibt'],
        correct: 'zieht',
        explanation: '"Bilanz ziehen" = a face bilanțul'
    },
    {
        id: 'e',
        question: 'Welches Verb passt? "___ Sie Bescheid über die neuen Regeln?"',
        options: ['Haben', 'Wissen', 'Kennen', 'Verstehen'],
        correct: 'Wissen',
        explanation: '"Bescheid wissen" = a fi la curent'
    },
    {
        id: 'f',
        question: 'Welches Verb passt? "Diese Nachricht ___ ihn in Aufregung."',
        options: ['brachte', 'versetzte', 'stellte', 'machte'],
        correct: 'versetzte',
        explanation: '"in Aufregung versetzen" = a tulbura, a agita'
    },
    {
        id: 'g',
        question: 'Welches Verb passt? "Er ___ ein Geheimnis seit vielen Jahren."',
        options: ['hält', 'bewahrt', 'behält', 'speichert'],
        correct: 'bewahrt',
        explanation: '"ein Geheimnis bewahren" = a păstra un secret'
    },
    {
        id: 'h',
        question: 'Welches Verb passt? "Wir müssen die Risiken ___ Betracht ___."',
        options: ['in / nehmen', 'in / ziehen', 'zur / haben', 'auf / setzen'],
        correct: 'in / ziehen',
        explanation: '"in Betracht ziehen" = a lua în considerare'
    }
];

function buildEx3() {
    const container = document.getElementById('ex3-container');
    if (!container) return;
    
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Wählen Sie die richtige Antwort.</strong><br>
            Alegeți răspunsul corect.
        </div>
    `;
    
    ex3Data.forEach((item, index) => {
        let optionsHTML = '';
        item.options.forEach((opt, i) => {
            optionsHTML += `
                <div class="mc-option">
                    <input type="radio" name="ex3-${item.id}" value="${opt}" id="ex3-${item.id}-${i}">
                    <label for="ex3-${item.id}-${i}">${opt}</label>
                </div>
            `;
        });
        
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.question}</label>
                    <div class="mc-options">${optionsHTML}</div>
                </div>
                <div class="feedback" id="ex3-f${item.id}"></div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function checkEx3() {
    let correct = 0;
    const total = ex3Data.length;
    
    ex3Data.forEach(item => {
        const selected = document.querySelector(`input[name="ex3-${item.id}"]:checked`);
        const feedback = document.getElementById(`ex3-f${item.id}`);
        const userAnswer = selected ? selected.value : '';
        
        if (userAnswer === item.correct) {
            feedback.className = 'feedback correct';
            feedback.textContent = `${item.correct} - ${item.explanation}`;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct} - ${item.explanation}`;
        }
    });
    
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 4: Verb simplu → NVV (sinonime)
// ============================================
const ex4Data = [
    { id: 'a', simple: 'helfen', correct: 'Hilfe leisten', accept: ['hilfe leisten'] },
    { id: 'b', simple: 'entscheiden', correct: 'eine Entscheidung treffen', accept: ['eine entscheidung treffen', 'entscheidung treffen'] },
    { id: 'c', simple: 'antworten', correct: 'eine Antwort geben', accept: ['eine antwort geben', 'antwort geben'] },
    { id: 'd', simple: 'kritisieren', correct: 'Kritik üben', accept: ['kritik üben', 'kritik uben'] },
    { id: 'e', simple: 'versprechen', correct: 'ein Versprechen geben', accept: ['ein versprechen geben', 'versprechen geben'] },
    { id: 'f', simple: 'beschließen', correct: 'einen Entschluss fassen', accept: ['einen entschluss fassen', 'entschluss fassen'] }
];

function buildEx4() {
    const container = document.getElementById('ex4-container');
    if (!container) return;
    
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Ersetzen Sie das einfache Verb durch eine Nomen-Verb-Verbindung.</strong><br>
            Înlocuiți verbul simplu cu o colocație substantiv-verb echivalentă (formală).
        </div>
    `;
    
    ex4Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>${item.simple} → ?</label>
                    <input type="text" id="ex4-${item.id}" placeholder="ex: eine Entscheidung treffen">
                </div>
                <div class="feedback" id="ex4-f${item.id}"></div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function checkEx4() {
    let correct = 0;
    const total = ex4Data.length;
    
    ex4Data.forEach(item => {
        const input = document.getElementById(`ex4-${item.id}`);
        const feedback = document.getElementById(`ex4-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase();
        
        const isCorrect = item.accept.some(a => a === userAnswer);
        
        if (isCorrect) {
            feedback.className = 'feedback correct';
            feedback.textContent = item.correct;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    
    return { correct, total };
}

// ============================================
// EXERCIȚIUL 5: Traducere Română → Germană
// ============================================
const ex5Data = [
    { 
        id: 'a', 
        ro: 'A lua o decizie importantă', 
        correct: 'eine wichtige Entscheidung treffen',
        accept: ['eine wichtige entscheidung treffen', 'eine entscheidung treffen']
    },
    { 
        id: 'b', 
        ro: 'A ține cont de cineva', 
        correct: 'Rücksicht auf jemanden nehmen',
        accept: ['rücksicht auf jemanden nehmen', 'rucksicht auf jemanden nehmen', 'rücksicht nehmen', 'rucksicht nehmen']
    },
    { 
        id: 'c', 
        ro: 'A păstra un secret', 
        correct: 'ein Geheimnis bewahren',
        accept: ['ein geheimnis bewahren', 'geheimnis bewahren']
    },
    { 
        id: 'd', 
        ro: 'A face bilanțul', 
        correct: 'Bilanz ziehen',
        accept: ['bilanz ziehen', 'eine bilanz ziehen']
    },
    { 
        id: 'e', 
        ro: 'A dobândi cunoștințe', 
        correct: 'Wissen erwerben',
        accept: ['wissen erwerben', 'kenntnisse erwerben']
    },
    { 
        id: 'f', 
        ro: 'A purta responsabilitatea', 
        correct: 'Verantwortung tragen',
        accept: ['verantwortung tragen', 'die verantwortung tragen']
    },
    { 
        id: 'g', 
        ro: 'A se feri de pericol', 
        correct: 'sich vor der Gefahr in Acht nehmen',
        accept: ['sich vor der gefahr in acht nehmen', 'sich in acht nehmen', 'sich vor gefahr in acht nehmen']
    },
    { 
        id: 'h', 
        ro: 'A atrage atenția', 
        correct: 'Aufmerksamkeit erregen',
        accept: ['aufmerksamkeit erregen', 'die aufmerksamkeit erregen']
    }
];

function buildEx5() {
    const container = document.getElementById('ex5-container');
    if (!container) return;
    
    let html = `
        <div class="exercise-instruction">
            <strong>📝 Übersetzen Sie ins Deutsche.</strong><br>
            Traduceți în germană folosind colocațiile învățate.
        </div>
    `;
    
    ex5Data.forEach((item, index) => {
        html += `
            <div class="exercise-item">
                <span class="exercise-number">${index + 1}</span>
                <div class="input-group">
                    <label>🇷🇴 ${item.ro}</label>
                    <input type="text" id="ex5-${item.id}" placeholder="Traducere în germană...">
                </div>
                <div class="feedback" id="ex5-f${item.id}"></div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

function checkEx5() {
    let correct = 0;
    const total = ex5Data.length;
    
    ex5Data.forEach(item => {
        const input = document.getElementById(`ex5-${item.id}`);
        const feedback = document.getElementById(`ex5-f${item.id}`);
        const userAnswer = input.value.trim().toLowerCase().replace(/\s+/g, ' ');
        
        const isCorrect = item.accept.some(a => a === userAnswer);
        
        if (isCorrect) {
            feedback.className = 'feedback correct';
            feedback.textContent = item.correct;
            correct++;
        } else {
            feedback.className = 'feedback incorrect';
            feedback.textContent = `Corect: ${item.correct}`;
        }
    });
    
    return { correct, total };
}

// ============================================
// BUILD ALL EXERCISES
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    buildEx1();
    buildEx2();
    buildEx3();
    buildEx4();
    buildEx5();
});

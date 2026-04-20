// ============================================
// TEST FINAL - Testează-ți cunoștințele!
// Claudia Toth · 15 întrebări mixte
// Format: wizard cu navigare next/previous
// ============================================

const finalTestData = [
    // ============================================
    // BLOC 1: MATCHING (Verb + Nomen)
    // ============================================
    {
        type: 'matching',
        category: '👁️ Atenție & Percepție',
        question: 'Care este verbul corect pentru această colocație?',
        nomen: 'Aufmerksamkeit',
        options: ['erregen', 'machen', 'haben', 'finden'],
        correct: 'erregen',
        explanation: '"Aufmerksamkeit erregen" = a atrage atenția'
    },
    {
        type: 'matching',
        category: '🎯 Decizii & Acțiuni',
        question: 'Care este verbul corect pentru această colocație?',
        nomen: 'einen Entschluss',
        options: ['nehmen', 'treffen', 'fassen', 'machen'],
        correct: 'fassen',
        explanation: '"einen Entschluss fassen" = a lua o hotărâre'
    },
    {
        type: 'matching',
        category: '⚠️ Risc & Precauție',
        question: 'Care este verbul corect pentru această colocație?',
        nomen: 'in Betracht',
        options: ['nehmen', 'ziehen', 'haben', 'bringen'],
        correct: 'ziehen',
        explanation: '"in Betracht ziehen" = a lua în considerare'
    },
    {
        type: 'matching',
        category: '🎓 Cunoaștere & Competențe',
        question: 'Care este verbul corect pentru această colocație?',
        nomen: 'Bescheid',
        options: ['haben', 'kennen', 'wissen', 'verstehen'],
        correct: 'wissen',
        explanation: '"Bescheid wissen" = a fi la curent'
    },
    
    // ============================================
    // BLOC 2: LÜCKENTEXT (Completare propoziții)
    // ============================================
    {
        type: 'luckentext',
        category: '📝 Lückentext',
        question: 'Completați cu verbul corect la forma potrivită:',
        sentence: 'Die Studenten ___ während des Praktikums viele wertvolle <strong>Erfahrungen</strong>.',
        translation: 'Studenții au adunat experiențe valoroase în timpul stagiului.',
        accept: ['sammelten', 'sammeln', 'gesammelt', 'haben gesammelt'],
        correct: 'sammelten',
        explanation: 'Erfahrungen sammeln = a aduna experiențe'
    },
    {
        type: 'luckentext',
        category: '📝 Lückentext',
        question: 'Completați cu verbul corect la forma potrivită:',
        sentence: 'Bitte ___ Sie <strong>Rücksicht</strong> auf die anderen Gäste!',
        translation: 'Vă rugăm să țineți cont de ceilalți oaspeți!',
        accept: ['nehmen', 'nimmst'],
        correct: 'nehmen',
        explanation: 'Rücksicht nehmen = a ține cont'
    },
    {
        type: 'luckentext',
        category: '📝 Lückentext',
        question: 'Completați cu verbul corect la forma potrivită:',
        sentence: 'Er ___ einen schweren <strong>Fehler</strong> in seiner Karriere.',
        translation: 'A făcut o greșeală gravă în cariera sa.',
        accept: ['beging', 'begeht', 'hat begangen', 'begangen'],
        correct: 'beging',
        explanation: 'einen Fehler begehen = a face o greșeală (formal)'
    },
    {
        type: 'luckentext',
        category: '📝 Lückentext',
        question: 'Completați cu verbul corect la forma potrivită:',
        sentence: 'Sie ___ <strong>mit dem Gedanken</strong>, ihre Arbeit zu kündigen.',
        translation: 'Se gândește să-și dea demisia.',
        accept: ['spielt', 'spielen', 'trägt sich', 'tragt sich'],
        correct: 'spielt',
        explanation: 'mit dem Gedanken spielen = a se gândi la / a cocheta cu ideea'
    },
    
    // ============================================
    // BLOC 3: MULTIPLE CHOICE
    // ============================================
    {
        type: 'multiple',
        category: '✅ Multiple Choice',
        question: 'Welche Antwort ist korrekt? "Du sollst dein Leben nicht ___ Spiel setzen."',
        options: ['ans', 'ins', 'aufs', 'zum'],
        correct: 'aufs',
        explanation: '"aufs Spiel setzen" = a pune în joc / a risca'
    },
    {
        type: 'multiple',
        category: '✅ Multiple Choice',
        question: 'Welche Antwort ist korrekt? "Die Lösung ___ auf der Hand."',
        options: ['steht', 'liegt', 'kommt', 'geht'],
        correct: 'liegt',
        explanation: '"auf der Hand liegen" = a fi evident'
    },
    {
        type: 'multiple',
        category: '✅ Multiple Choice',
        question: 'Welche Antwort ist korrekt? "Der Direktor ___ Bilanz über das Jahr."',
        options: ['macht', 'zieht', 'nimmt', 'gibt'],
        correct: 'zieht',
        explanation: '"Bilanz ziehen" = a face bilanțul'
    },
    {
        type: 'multiple',
        category: '✅ Multiple Choice',
        question: 'Welche Antwort ist korrekt? "Diese Nachricht ___ ihn in Aufregung."',
        options: ['brachte', 'versetzte', 'stellte', 'machte'],
        correct: 'versetzte',
        explanation: '"in Aufregung versetzen" = a tulbura, a agita'
    },
    
    // ============================================
    // BLOC 4: TRADUCERE Română → Germană
    // ============================================
    {
        type: 'translate',
        category: '🇷🇴 Traducere',
        question: 'Traduceți în germană:',
        ro: 'a păstra un secret',
        accept: ['ein geheimnis bewahren', 'geheimnis bewahren'],
        correct: 'ein Geheimnis bewahren',
        explanation: 'ein Geheimnis bewahren = a păstra un secret (NU "halten")'
    },
    {
        type: 'translate',
        category: '🇷🇴 Traducere',
        question: 'Traduceți în germană:',
        ro: 'a purta responsabilitatea',
        accept: ['verantwortung tragen', 'die verantwortung tragen'],
        correct: 'Verantwortung tragen',
        explanation: 'Verantwortung tragen = a purta responsabilitate'
    },
    {
        type: 'translate',
        category: '🇷🇴 Traducere',
        question: 'Traduceți în germană:',
        ro: 'a se feri de cineva/ceva',
        accept: ['sich in acht nehmen', 'sich vor jemandem in acht nehmen', 'sich vor etwas in acht nehmen'],
        correct: 'sich (vor + Dat.) in Acht nehmen',
        explanation: 'sich in Acht nehmen vor + Dativ = a se feri de'
    }
];

// ============================================
// STATE
// ============================================
let currentQuestionIndex = 0;
let userAnswers = {};
let testStarted = false;
let testCompleted = false;

// ============================================
// BUILD - Container principal pentru test
// ============================================
function buildFinalTest() {
    const container = document.getElementById('final-test-container');
    if (!container) return;
    
    container.innerHTML = `
        <div id="test-intro" class="test-intro">
            <h3>🎯 Testează-ți cunoștințele!</h3>
            <p>Acest test final conține <strong>15 întrebări mixte</strong> (matching, lückentext, multiple choice, traducere) din toate tipurile de colocații învățate.</p>
            <ul class="test-info-list">
                <li>📋 <strong>Format:</strong> o întrebare pe pagină, cu navigare Înapoi / Următor</li>
                <li>✅ <strong>Verificare:</strong> feedback instant la fiecare întrebare</li>
                <li>🎓 <strong>Prag de promovare:</strong> 70% (stil Goethe-Institut)</li>
                <li>⏱️ <strong>Timp estimat:</strong> 10-15 minute</li>
            </ul>
            <button class="btn btn-check btn-large" onclick="startFinalTest()">▶ Începe testul</button>
        </div>
        
        <div id="test-wizard" class="test-wizard" style="display:none;">
            <!-- Progress bar -->
            <div class="test-progress">
                <div class="test-progress-info">
                    <span id="progress-text">Întrebarea 1 / ${finalTestData.length}</span>
                    <span id="progress-category"></span>
                </div>
                <div class="test-progress-bar">
                    <div class="test-progress-fill" id="progress-fill"></div>
                </div>
            </div>
            
            <!-- Întrebarea curentă -->
            <div id="question-container"></div>
            
            <!-- Feedback -->
            <div class="feedback" id="test-feedback"></div>
            
            <!-- Butoane verificare + navigare -->
            <div class="test-controls">
                <button class="btn btn-secondary" onclick="prevQuestion()" id="test-prev-btn">← Înapoi</button>
                <button class="btn btn-check" onclick="checkCurrentQuestion()" id="test-check-btn">✓ Verifică</button>
                <button class="btn btn-check" onclick="nextQuestion()" id="test-next-btn">Următor →</button>
            </div>
        </div>
        
        <div id="test-results" class="test-results" style="display:none;"></div>
    `;
}

// ============================================
// START TEST
// ============================================
function startFinalTest() {
    testStarted = true;
    testCompleted = false;
    currentQuestionIndex = 0;
    userAnswers = {};
    
    document.getElementById('test-intro').style.display = 'none';
    document.getElementById('test-wizard').style.display = 'block';
    document.getElementById('test-results').style.display = 'none';
    
    showQuestion(0);
}

// ============================================
// AFIȘEAZĂ ÎNTREBAREA CURENTĂ
// ============================================
function showQuestion(index) {
    const q = finalTestData[index];
    const container = document.getElementById('question-container');
    const feedback = document.getElementById('test-feedback');
    const checkBtn = document.getElementById('test-check-btn');
    const nextBtn = document.getElementById('test-next-btn');
    const prevBtn = document.getElementById('test-prev-btn');
    
    // Update progress
    document.getElementById('progress-text').textContent = `Întrebarea ${index + 1} / ${finalTestData.length}`;
    document.getElementById('progress-category').textContent = q.category;
    document.getElementById('progress-fill').style.width = `${((index + 1) / finalTestData.length) * 100}%`;
    
    // Update buttons
    prevBtn.style.display = index === 0 ? 'none' : 'inline-block';
    nextBtn.textContent = index === finalTestData.length - 1 ? '🏁 Finalizează' : 'Următor →';
    
    // Resetează feedback
    feedback.className = 'feedback';
    feedback.textContent = '';
    
    // Construiește HTML-ul întrebării după tip
    let questionHTML = '';
    
    if (q.type === 'matching') {
        let optionsHTML = '<option value="">-- alege verbul --</option>';
        q.options.forEach(opt => {
            optionsHTML += `<option value="${opt}">${opt}</option>`;
        });
        questionHTML = `
            <div class="test-question">
                <div class="test-question-label">${q.question}</div>
                <div class="test-question-content">
                    <span class="test-blank">...</span> 
                    <span class="nomen-highlight">${q.nomen}</span>
                </div>
                <select id="test-answer" class="test-input">${optionsHTML}</select>
            </div>
        `;
    } else if (q.type === 'luckentext') {
        questionHTML = `
            <div class="test-question">
                <div class="test-question-label">${q.question}</div>
                <div class="test-question-content">${q.sentence}</div>
                <small class="test-translation">💬 ${q.translation}</small>
                <input type="text" id="test-answer" class="test-input" placeholder="Scrie verbul...">
            </div>
        `;
    } else if (q.type === 'multiple') {
        let optionsHTML = '';
        q.options.forEach((opt, i) => {
            optionsHTML += `
                <div class="mc-option">
                    <input type="radio" name="test-answer" value="${opt}" id="test-opt-${i}">
                    <label for="test-opt-${i}">${opt}</label>
                </div>
            `;
        });
        questionHTML = `
            <div class="test-question">
                <div class="test-question-label">${q.question}</div>
                <div class="mc-options test-mc">${optionsHTML}</div>
            </div>
        `;
    } else if (q.type === 'translate') {
        questionHTML = `
            <div class="test-question">
                <div class="test-question-label">${q.question}</div>
                <div class="test-question-content test-ro-text">🇷🇴 ${q.ro}</div>
                <input type="text" id="test-answer" class="test-input" placeholder="Traducere în germană...">
            </div>
        `;
    }
    
    container.innerHTML = questionHTML;
    
    // Restaurează răspunsul anterior dacă există
    if (userAnswers[index] !== undefined) {
        if (q.type === 'multiple') {
            const radio = document.querySelector(`input[name="test-answer"][value="${userAnswers[index].answer}"]`);
            if (radio) radio.checked = true;
        } else {
            const input = document.getElementById('test-answer');
            if (input) input.value = userAnswers[index].answer;
        }
        
        // Re-afișează feedback dacă a fost verificat
        if (userAnswers[index].checked) {
            displayFeedback(index);
            checkBtn.disabled = true;
            setAnswerDisabled(q.type, true);
        } else {
            checkBtn.disabled = false;
            setAnswerDisabled(q.type, false);
        }
    } else {
        checkBtn.disabled = false;
        setAnswerDisabled(q.type, false);
    }
}

// ============================================
// DEZACTIVEAZĂ / ACTIVEAZĂ INPUT-UL RĂSPUNSULUI
// ============================================
function setAnswerDisabled(type, disabled) {
    if (type === 'multiple') {
        document.querySelectorAll('input[name="test-answer"]').forEach(r => r.disabled = disabled);
    } else {
        const el = document.getElementById('test-answer');
        if (el) el.disabled = disabled;
    }
}

// ============================================
// VERIFICĂ ÎNTREBAREA CURENTĂ
// ============================================
function checkCurrentQuestion() {
    const q = finalTestData[currentQuestionIndex];
    let userAnswer = '';
    
    if (q.type === 'multiple') {
        const selected = document.querySelector('input[name="test-answer"]:checked');
        userAnswer = selected ? selected.value : '';
    } else {
        const input = document.getElementById('test-answer');
        userAnswer = input ? input.value.trim() : '';
    }
    
    if (!userAnswer) {
        const feedback = document.getElementById('test-feedback');
        feedback.className = 'feedback incorrect';
        feedback.textContent = 'Te rog să răspunzi înainte de verificare!';
        return;
    }
    
    // Verifică corectitudinea
    let isCorrect = false;
    
    if (q.type === 'multiple' || q.type === 'matching') {
        isCorrect = userAnswer.toLowerCase() === q.correct.toLowerCase();
    } else {
        // luckentext + translate (acceptă variante)
        const userAnswerNorm = userAnswer.toLowerCase().replace(/\s+/g, ' ');
        isCorrect = q.accept.some(a => a.toLowerCase() === userAnswerNorm);
    }
    
    // Salvează răspunsul
    userAnswers[currentQuestionIndex] = {
        answer: userAnswer,
        correct: isCorrect,
        checked: true
    };
    
    displayFeedback(currentQuestionIndex);
    document.getElementById('test-check-btn').disabled = true;
    setAnswerDisabled(q.type, true);
}

// ============================================
// AFIȘEAZĂ FEEDBACK
// ============================================
function displayFeedback(index) {
    const q = finalTestData[index];
    const ans = userAnswers[index];
    const feedback = document.getElementById('test-feedback');
    
    if (ans.correct) {
        feedback.className = 'feedback correct';
        feedback.innerHTML = `<strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    } else {
        feedback.className = 'feedback incorrect';
        feedback.innerHTML = `Răspuns corect: <strong>${q.correct}</strong> &mdash; ${q.explanation}`;
    }
}

// ============================================
// NAVIGARE
// ============================================
function nextQuestion() {
    if (currentQuestionIndex === finalTestData.length - 1) {
        finishTest();
    } else {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion(currentQuestionIndex);
        scrollToTest();
    }
}

function scrollToTest() {
    const wizard = document.getElementById('test-wizard');
    if (wizard) wizard.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================
// FINALIZARE TEST
// ============================================
function finishTest() {
    testCompleted = true;
    
    // Calculează scorul
    let correct = 0;
    let answered = 0;
    finalTestData.forEach((q, i) => {
        if (userAnswers[i]) {
            answered++;
            if (userAnswers[i].correct) correct++;
        }
    });
    
    const total = finalTestData.length;
    const percentage = Math.round((correct / total) * 100);
    const passed = percentage >= 70;
    
    // Mesaj de feedback
    let emoji, message, messageRo, badge;
    if (percentage === 100) {
        emoji = '🏆';
        badge = 'PERFEKT!';
        message = 'Ausgezeichnete Leistung! Du beherrschst die Nomen-Verb-Verbindungen perfekt.';
        messageRo = 'Performanță excelentă! Stăpânești perfect colocațiile substantiv-verb.';
    } else if (percentage >= 90) {
        emoji = '⭐';
        badge = 'AUSGEZEICHNET';
        message = 'Sehr gut! Du hast fast alles richtig gemacht.';
        messageRo = 'Foarte bine! Aproape totul corect.';
    } else if (percentage >= 80) {
        emoji = '🎓';
        badge = 'SEHR GUT';
        message = 'Sehr gute Leistung! Nur ein paar kleine Lücken.';
        messageRo = 'Performanță foarte bună! Doar mici lacune.';
    } else if (percentage >= 70) {
        emoji = '✅';
        badge = 'BESTANDEN';
        message = 'Bestanden! Du hast die Mindestpunktzahl erreicht. Übe noch ein wenig für Perfektion!';
        messageRo = 'Promovat! Ai atins pragul minim. Mai exersează puțin pentru perfecțiune!';
    } else if (percentage >= 50) {
        emoji = '📚';
        badge = 'NICHT BESTANDEN';
        message = 'Leider nicht bestanden. Du brauchst mindestens 70%. Wiederhole die Theorie und versuche es erneut!';
        messageRo = 'Din păcate, nepromovat. Ai nevoie de minim 70%. Repetă teoria și încearcă din nou!';
    } else {
        emoji = '💪';
        badge = 'WEITER ÜBEN';
        message = 'Mehr Übung ist nötig. Geh zurück zur Theorie und übe die einzelnen Übungen nochmal!';
        messageRo = 'E nevoie de mai multă exersare. Întoarce-te la teorie și exersează exercițiile individuale din nou!';
    }
    
    // Detalii pe categorii
    const categoryStats = {};
    finalTestData.forEach((q, i) => {
        const cat = q.category;
        if (!categoryStats[cat]) categoryStats[cat] = { correct: 0, total: 0 };
        categoryStats[cat].total++;
        if (userAnswers[i] && userAnswers[i].correct) categoryStats[cat].correct++;
    });
    
    let statsHTML = '<div class="test-stats"><h4>📊 Detalii pe categorii:</h4><ul>';
    for (const cat in categoryStats) {
        const s = categoryStats[cat];
        const catPct = Math.round((s.correct / s.total) * 100);
        statsHTML += `<li>${cat}: <strong>${s.correct}/${s.total}</strong> (${catPct}%)</li>`;
    }
    statsHTML += '</ul></div>';
    
    // Listă cu greșeli
    let mistakesHTML = '';
    const mistakes = [];
    finalTestData.forEach((q, i) => {
        if (userAnswers[i] && !userAnswers[i].correct) {
            mistakes.push({ q, i, userAns: userAnswers[i].answer });
        }
    });
    
    if (mistakes.length > 0) {
        mistakesHTML = '<div class="test-mistakes"><h4>📝 Întrebările greșite (revezi):</h4>';
        mistakes.forEach(m => {
            mistakesHTML += `
                <div class="mistake-item">
                    <strong>Întrebarea ${m.i + 1}</strong> - ${m.q.category}<br>
                    <span style="color: #991b1b;">Răspunsul tău: <em>${m.userAns}</em></span><br>
                    <span style="color: #065f46;">Corect: <strong>${m.q.correct}</strong></span><br>
                    <small style="color: #6b7280;">${m.q.explanation}</small>
                </div>
            `;
        });
        mistakesHTML += '</div>';
    }
    
    // Afișează rezultatele
    const wizard = document.getElementById('test-wizard');
    const results = document.getElementById('test-results');
    
    wizard.style.display = 'none';
    results.style.display = 'block';
    
    results.innerHTML = `
        <div class="test-back-top">
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
        
        <div class="test-result-card ${passed ? 'passed' : 'failed'}">
            <div class="test-result-emoji">${emoji}</div>
            <div class="test-result-badge">${badge}</div>
            <div class="test-result-score">${correct} / ${total}</div>
            <div class="test-result-percentage">${percentage}%</div>
            <div class="test-result-message">
                <p><strong>${message}</strong></p>
                <p style="margin-top: 8px;">${messageRo}</p>
            </div>
            ${passed ? '<div class="pass-mark">✓ Prag promovare: 70% atins!</div>' : '<div class="fail-mark">✗ Prag promovare: 70% (lipsesc ' + (Math.ceil(total * 0.7) - correct) + ' răspunsuri corecte)</div>'}
        </div>
        
        ${statsHTML}
        ${mistakesHTML}
        
        <div class="test-final-actions">
            <button class="btn btn-check" onclick="restartTest()">🔄 Reia testul</button>
            <button class="btn btn-back" onclick="goBackToTheory()">← Întoarcere la teorie</button>
        </div>
    `;
    
    results.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================
// REIA TESTUL
// ============================================
function restartTest() {
    if (confirm('Sigur vrei să reiei testul? Toate răspunsurile vor fi șterse.')) {
        currentQuestionIndex = 0;
        userAnswers = {};
        testCompleted = false;
        
        document.getElementById('test-results').style.display = 'none';
        document.getElementById('test-wizard').style.display = 'block';
        showQuestion(0);
        scrollToTest();
    }
}

// ============================================
// ÎNTOARCERE LA TEORIE
// ============================================
function goBackToTheory() {
    // Deschide secțiunea de teorie dacă e închisă
    const teorieContent = document.getElementById('main-section-0');
    const arrow = document.querySelectorAll('.arrow')[0];
    if (teorieContent && !teorieContent.classList.contains('active')) {
        teorieContent.classList.add('active');
        if (arrow) arrow.classList.add('rotated');
    }
    
    // Scroll la teorie
    const teorieSection = document.getElementById('teorie');
    if (teorieSection) {
        teorieSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Build pe load
document.addEventListener('DOMContentLoaded', function() {
    buildFinalTest();
});

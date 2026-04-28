// ============================================
// TEORIE - NOMEN-VERB-VERBINDUNGEN
// Claudia Toth · Nivel B2/C1
// Cu player audio la fiecare subtitlu
// ============================================

// LISTA MP3-URI DE ÎNREGISTRAT (puse în folder-ul audio/)
// 1. audio/01-introducere.mp3
// 2. audio/02-atentie-perceptie.mp3
// 3. audio/03-decizii-actiuni.mp3
// 4. audio/04-risc-precautie.mp3
// 5. audio/05-cunoastere-competente.mp3
// 6. audio/06-stari-emotionale.mp3
// 7. audio/07-strategii.mp3

const theoryHTML = `
    <!-- Sub-secțiune 0: Ce sunt? -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(0)">
            <span>📚 1. Ce sunt Nomen-Verb-Verbindungen?</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-0">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-0')" id="btn-audio-0">▶</button>
                    <audio id="audio-0" preload="none">
                        <source src="audio/01-introducere.mp3" type="audio/mpeg">
                    </audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă lecția</span>
            </div>
            <div class="theory-box">
                <h4>Definiție</h4>
                <p><strong>Nomen-Verb-Verbindungen</strong> (NVV) sunt combinații fixe între un substantiv și un verb, care formează o unitate semantică nouă. Sensul lor NU se poate deduce din sensul individual al cuvintelor.</p>
                <p style="margin-top: 10px;">În română le numim <strong>"colocații substantiv-verb"</strong> sau <strong>"locuțiuni verbale"</strong>.</p>
            </div>

            <div class="theory-box">
                <h4>⚠️ De ce sunt importante?</h4>
                <ul>
                    <li>Apar în <strong>toate examenele</strong> oficiale (Goethe B2/C1, telc, ÖSD, TestDaF)</li>
                    <li>Sunt obligatorii în <strong>limbajul formal/scris</strong> (presă, articole, rapoarte)</li>
                    <li>Cresc dramatic <strong>nivelul de exprimare</strong> - "Ich helfe" vs "Ich leiste Hilfe"</li>
                    <li>NU se traduc literal - trebuie <strong>memorate ca unități</strong></li>
                </ul>
            </div>

            <div class="example-box">
                <p class="de">eine Entscheidung <u>treffen</u> ≠ eine Entscheidung <s>finden</s></p>
                <p class="ro">a lua o decizie (literal: "a întâlni o decizie")</p>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 1: Atenție și percepție -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(1)">
            <span>👁️ 2. Atenție & Percepție (Aufmerksamkeit & Wahrnehmung)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-1">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-1')" id="btn-audio-1">▶</button>
                    <audio id="audio-1" preload="none">
                        <source src="audio/02-atentie-perceptie.mp3" type="audio/mpeg">
                    </audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă lecția</span>
            </div>
            <table class="theory-table">
                <thead>
                    <tr>
                        <th>Verb</th>
                        <th>Nomen</th>
                        <th>Traducere</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="verb">finden</td><td class="nomen">Interesse (an + Dat.)</td><td class="ro-text">a găsi interes (pentru ceva)</td></tr>
                    <tr><td class="verb">erregen</td><td class="nomen">Aufmerksamkeit</td><td class="ro-text">a atrage atenția</td></tr>
                    <tr><td class="verb">nehmen</td><td class="nomen">zur Kenntnis</td><td class="ro-text">a lua la cunoștință</td></tr>
                    <tr><td class="verb">sammeln</td><td class="nomen">Eindrücke</td><td class="ro-text">a aduna impresii</td></tr>
                    <tr><td class="verb">finden</td><td class="nomen">Beachtung</td><td class="ro-text">a găsi atenție / a fi luat în seamă</td></tr>
                    <tr><td class="verb">nehmen</td><td class="nomen">Rücksicht (auf + Akk.)</td><td class="ro-text">a ține cont (de cineva)</td></tr>
                    <tr><td class="verb">spielen</td><td class="nomen">eine Rolle</td><td class="ro-text">a juca un rol</td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de">Der neue Film <strong>erregt</strong> große <strong>Aufmerksamkeit</strong> in der Presse.</p>
                <p class="ro">Noul film atrage mare atenție în presă.</p>
            </div>
            <div class="example-box">
                <p class="de">Bitte <strong>nehmen</strong> Sie <strong>Rücksicht</strong> auf andere Reisende.</p>
                <p class="ro">Vă rugăm să țineți cont de ceilalți călători.</p>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 2: Decizii și acțiuni -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(2)">
            <span>🎯 3. Decizii & Acțiuni (Entscheidungen & Handlungen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-2">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-2')" id="btn-audio-2">▶</button>
                    <audio id="audio-2" preload="none">
                        <source src="audio/03-decizii-actiuni.mp3" type="audio/mpeg">
                    </audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă lecția</span>
            </div>
            <table class="theory-table">
                <thead>
                    <tr>
                        <th>Verb</th>
                        <th>Nomen</th>
                        <th>Traducere</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="verb">treffen</td><td class="nomen">eine Entscheidung</td><td class="ro-text">a lua o decizie</td></tr>
                    <tr><td class="verb">fassen</td><td class="nomen">einen Entschluss</td><td class="ro-text">a lua o hotărâre</td></tr>
                    <tr><td class="verb">treffen</td><td class="nomen">eine Vereinbarung</td><td class="ro-text">a încheia o înțelegere</td></tr>
                    <tr><td class="verb">begehen</td><td class="nomen">einen Fehler</td><td class="ro-text">a face o greșeală</td></tr>
                    <tr><td class="verb">ziehen</td><td class="nomen">Bilanz</td><td class="ro-text">a face bilanțul</td></tr>
                    <tr><td class="verb">tragen</td><td class="nomen">Verantwortung (für + Akk.)</td><td class="ro-text">a purta responsabilitate</td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de">Nach langem Überlegen <strong>fasste</strong> sie den <strong>Entschluss</strong>, das Studium abzubrechen.</p>
                <p class="ro">După lungi reflecții, ea a luat hotărârea să abandoneze studiile.</p>
            </div>
            <div class="example-box">
                <p class="de">Am Ende des Jahres <strong>ziehen</strong> wir <strong>Bilanz</strong>.</p>
                <p class="ro">La sfârșitul anului facem bilanțul.</p>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 3: Risc și precauție -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(3)">
            <span>⚠️ 4. Risc & Precauție (Risiko & Vorsicht)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-3">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-3')" id="btn-audio-3">▶</button>
                    <audio id="audio-3" preload="none">
                        <source src="audio/04-risc-precautie.mp3" type="audio/mpeg">
                    </audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă lecția</span>
            </div>
            <table class="theory-table">
                <thead>
                    <tr>
                        <th>Verb</th>
                        <th>Nomen</th>
                        <th>Traducere</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="verb">nehmen</td><td class="nomen">in Anspruch</td><td class="ro-text">a apela la / a face uz de</td></tr>
                    <tr><td class="verb">haben</td><td class="nomen">zur Folge</td><td class="ro-text">a avea ca urmare</td></tr>
                    <tr><td class="verb">nehmen / sich</td><td class="nomen">sich in Acht (vor + Dat.)</td><td class="ro-text">a se feri (de ceva)</td></tr>
                    <tr><td class="verb">stehen</td><td class="nomen">zur Verfügung</td><td class="ro-text">a sta la dispoziție</td></tr>
                    <tr><td class="verb">kommen</td><td class="nomen">in Frage</td><td class="ro-text">a intra în discuție</td></tr>
                    <tr><td class="verb">nehmen</td><td class="nomen">in Kauf</td><td class="ro-text">a accepta (un dezavantaj)</td></tr>
                    <tr><td class="verb">ziehen</td><td class="nomen">in Betracht</td><td class="ro-text">a lua în considerare</td></tr>
                    <tr><td class="verb">setzen</td><td class="nomen">aufs Spiel</td><td class="ro-text">a pune în joc / a risca</td></tr>
                    <tr><td class="verb">liegen</td><td class="nomen">auf der Hand</td><td class="ro-text">a fi evident</td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de">Du solltest deine Karriere nicht <strong>aufs Spiel setzen</strong>.</p>
                <p class="ro">Nu ar trebui să-ți pui cariera în joc.</p>
            </div>
            <div class="example-box">
                <p class="de">Die Lösung <strong>liegt auf der Hand</strong>.</p>
                <p class="ro">Soluția este evidentă.</p>
            </div>
            <div class="example-box">
                <p class="de"><strong>Nimm dich</strong> vor falschen Freunden <strong>in Acht</strong>!</p>
                <p class="ro">Ferește-te de prietenii falși!</p>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 4: Cunoaștere și competențe -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(4)">
            <span>🎓 5. Cunoaștere & Competențe (Wissen & Kompetenzen)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-4">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-4')" id="btn-audio-4">▶</button>
                    <audio id="audio-4" preload="none">
                        <source src="audio/05-cunoastere-competente.mp3" type="audio/mpeg">
                    </audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă lecția</span>
            </div>
            <table class="theory-table">
                <thead>
                    <tr>
                        <th>Verb</th>
                        <th>Nomen</th>
                        <th>Traducere</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="verb">sammeln</td><td class="nomen">Erfahrungen</td><td class="ro-text">a aduna experiențe</td></tr>
                    <tr><td class="verb">erwerben</td><td class="nomen">Kompetenzen</td><td class="ro-text">a dobândi competențe</td></tr>
                    <tr><td class="verb">zeigen</td><td class="nomen">Fähigkeiten</td><td class="ro-text">a demonstra abilități</td></tr>
                    <tr><td class="verb">erwerben</td><td class="nomen">Wissen</td><td class="ro-text">a dobândi cunoștințe</td></tr>
                    <tr><td class="verb">wissen</td><td class="nomen">Bescheid (über + Akk.)</td><td class="ro-text">a fi la curent (cu ceva)</td></tr>
                    <tr><td class="verb">beachten</td><td class="nomen">den Arbeitsschutz</td><td class="ro-text">a respecta protecția muncii</td></tr>
                    <tr><td class="verb">beachten</td><td class="nomen">Vorschriften</td><td class="ro-text">a respecta regulile/normele</td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de">Während des Praktikums hat er wertvolle <strong>Erfahrungen gesammelt</strong>.</p>
                <p class="ro">În timpul stagiului a adunat experiențe valoroase.</p>
            </div>
            <div class="example-box">
                <p class="de"><strong>Wissen Sie Bescheid</strong> über die neue Regelung?</p>
                <p class="ro">Sunteți la curent cu noua reglementare?</p>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 5: Stări emoționale -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(5)">
            <span>💭 6. Stări emoționale & gânduri (Gefühle & Gedanken)</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-5">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-5')" id="btn-audio-5">▶</button>
                    <audio id="audio-5" preload="none">
                        <source src="audio/06-stari-emotionale.mp3" type="audio/mpeg">
                    </audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă lecția</span>
            </div>
            <table class="theory-table">
                <thead>
                    <tr>
                        <th>Verb</th>
                        <th>Nomen</th>
                        <th>Traducere</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td class="verb">spielen / sich tragen</td><td class="nomen">mit dem Gedanken</td><td class="ro-text">a se gândi la / a cocheta cu ideea</td></tr>
                    <tr><td class="verb">versetzen</td><td class="nomen">in Aufregung</td><td class="ro-text">a pune în agitație / a tulbura</td></tr>
                    <tr><td class="verb">zeigen</td><td class="nomen">Mitgefühl</td><td class="ro-text">a arăta compasiune</td></tr>
                    <tr><td class="verb">versetzen</td><td class="nomen">in Unruhe</td><td class="ro-text">a pune în neliniște</td></tr>
                    <tr><td class="verb">bewahren</td><td class="nomen">ein Geheimnis</td><td class="ro-text">a păstra un secret</td></tr>
                </tbody>
            </table>

            <div class="example-box">
                <p class="de">Ich <strong>spiele mit dem Gedanken</strong>, nach Berlin zu ziehen.</p>
                <p class="ro">Mă gândesc să mă mut la Berlin.</p>
            </div>
            <div class="example-box">
                <p class="de">Die Nachricht <strong>versetzte</strong> die Familie <strong>in Unruhe</strong>.</p>
                <p class="ro">Vestea a pus familia în neliniște.</p>
            </div>
            <div class="example-box">
                <p class="de">Kannst du <strong>ein Geheimnis bewahren</strong>?</p>
                <p class="ro">Poți păstra un secret?</p>
            </div>
        </div>
    </div>

    <!-- Sub-secțiune 6: Reguli generale -->
    <div class="sub-section">
        <div class="sub-section-header" onclick="toggleSubSection(6)">
            <span>💡 7. Reguli & Strategii de învățare</span>
            <span class="sub-arrow">▼</span>
        </div>
        <div class="sub-section-content" id="sub-section-6">
            <div class="lesson-audio">
                <div class="audio-player">
                    <button class="audio-btn" onclick="toggleAudio(event, 'audio-6')" id="btn-audio-6">▶</button>
                    <audio id="audio-6" preload="none">
                        <source src="audio/07-strategii.mp3" type="audio/mpeg">
                    </audio>
                </div>
                <span class="lesson-audio-label">🔊 Ascultă lecția</span>
            </div>
            <div class="theory-box">
                <h4>🔑 Strategii de memorare</h4>
                <ul>
                    <li><strong>Învață în context</strong> - nu izolat. Asociază mereu colocația cu o propoziție.</li>
                    <li><strong>Grupează semantic</strong> - colocațiile despre "decizii" se rețin împreună.</li>
                    <li><strong>Atenție la prepoziții</strong> - "Rücksicht <u>auf</u>", "Bescheid <u>über</u>", "Acht <u>vor</u>".</li>
                    <li><strong>Atenție la cazul gramatical</strong> - Akkusativ sau Dativ după prepoziție.</li>
                    <li><strong>Folosește colocațiile activ</strong> - în compunerile tale, în vorbire.</li>
                </ul>
            </div>

            <div class="theory-box">
                <h4>🆚 Diferența: Verb simplu vs. NVV</h4>
                <table class="theory-table">
                    <thead>
                        <tr><th>Verb simplu (informal)</th><th>NVV (formal)</th></tr>
                    </thead>
                    <tbody>
                        <tr><td>helfen</td><td class="verb">Hilfe leisten</td></tr>
                        <tr><td>antworten</td><td class="verb">eine Antwort geben</td></tr>
                        <tr><td>entscheiden</td><td class="verb">eine Entscheidung treffen</td></tr>
                        <tr><td>kritisieren</td><td class="verb">Kritik üben</td></tr>
                        <tr><td>versprechen</td><td class="verb">ein Versprechen geben</td></tr>
                    </tbody>
                </table>
                <p style="margin-top: 10px; font-style: italic; color: #6b7280;">💼 În textele oficiale, articole de presă și examene scrise, varianta cu NVV sună mai elegant și mai profesional.</p>
            </div>

            <div class="theory-box" style="background: #fef3c7; border-color: #f59e0b;">
                <h4>⚠️ Capcane frecvente</h4>
                <ul>
                    <li><strong>NU</strong> "eine Entscheidung machen" → DA "eine Entscheidung <u>treffen</u>"</li>
                    <li><strong>NU</strong> "einen Fehler machen" e ok, dar formal: "<u>begehen</u>"</li>
                    <li><strong>NU</strong> "Aufmerksamkeit machen" → DA "Aufmerksamkeit <u>erregen</u>"</li>
                    <li><strong>NU</strong> "ein Geheimnis halten" → DA "ein Geheimnis <u>bewahren</u>"</li>
                </ul>
            </div>
        </div>
    </div>
`;

// Inserează teoria în pagină
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('theory-container');
    if (container) {
        container.innerHTML = theoryHTML;
    }
});

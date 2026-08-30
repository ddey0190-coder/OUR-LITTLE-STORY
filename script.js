let currentQuestion = 1;
let score = 0;

const questions = [
    {
        number: 1,
        icon: "💬",
        question: "Do you remember who sent the first message? 👀",
        options: [
            "You 😌",
            "Me ❤️",
            "Honestly... I don't remember 😂"
        ]
    },

    {
        number: 2,
        icon: "📚",
        question: "And what was our very first proper conversation about?",
        options: [
            "Movies 🎬",
            "Studies 📚",
            "Random nonsense 😂"
        ]
    },

    {
        number: 3,
        icon: "🫶",
        question: "What's one thing that makes our conversations so easy?",
        options: [
            "We both listen to each other 👂❤️",
            "We both talk too much 😂",
            "Neither of us listens 😭"
        ]
    },

    {
        number: 4,
        icon: "😂",
        question: "Who is funnier between us?",
        options: [
            "Obviously Me 😎",
            "Obviously You 😌",
            "Both of us... unfortunately 😂"
        ]
    },

    {
        number: 5,
        icon: "👀",
        question: "Be honest... do you think you are my type? ❤️",
        options: [
            "Maybe... 👀",
            "I think I am 😌",
            "I already know I am ❤️"
        ]
    }
];


/* =========================
   LEVEL 01
========================= */

function startMission() {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        currentQuestion = 1;
        score = 0;

        showQuestion(1);

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 500);
}


function showQuestion(questionNumber) {

    const card = document.querySelector(".mission-card");
    const question = questions[questionNumber - 1];

    const progress = (questionNumber / questions.length) * 100;

    card.innerHTML = `

        <div class="level-badge">
            LEVEL 01
        </div>

        <div class="game-icon">
            ${question.icon}
        </div>

        <p class="question-number">
            QUESTION ${question.number} / ${questions.length}
        </p>

        <div class="progress-container">

            <div class="progress-bar"
                 style="width: ${progress}%">
            </div>

        </div>

        <div class="question-box">

            <h2>
                ${question.question}
            </h2>

            <div class="options">

                ${question.options.map((option, index) => `

                    <button onclick="selectAnswer(${index})">
                        ${option}
                    </button>

                `).join("")}

            </div>

        </div>

        <p class="hint">
            Choose carefully... 👀
        </p>
    `;
}


function selectAnswer(answer) {

    score++;

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        if (currentQuestion < questions.length) {

            currentQuestion++;

            showQuestion(currentQuestion);

        } else {

            levelComplete();

        }

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 450);
}


function levelComplete() {

    const card = document.querySelector(".mission-card");

    card.innerHTML = `

        <div class="game-icon">
            ❤️
        </div>

        <div class="level-badge">
            LEVEL 01 COMPLETE
        </div>

        <h1>
            You Know Us Pretty Well...
        </h1>

        <p class="description">

            You remembered where it all started.

            <br><br>

            A simple conversation about studies...

            <br>

            turned into something much more special.

            <br><br>

            And honestly...

            <br>

            <strong>
                I think you're exactly my type. ❤️
            </strong>

        </p>

        <button onclick="startLevelTwo()">
            I WANT TO KNOW MORE →
        </button>

        <p class="hint">
            Level 02 is waiting... 🔐
        </p>
    `;
}


/* =========================
   LEVEL 02
========================= */

function startLevelTwo() {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        card.innerHTML = `

            <div class="game-icon">
                🔐
            </div>

            <div class="level-badge">
                LEVEL 02
            </div>

            <h1>
                A Little Mystery...
            </h1>

            <p class="description">

                Five questions were easy.

                <br><br>

                Now let's see if you can
                solve something a little harder.

                <br><br>

                <strong>
                    Are you ready?
                </strong>

            </p>

            <button onclick="startMystery()">
                I'M READY →
            </button>

        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 500);
}


function startMystery() {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        card.innerHTML = `

            <div class="case-file">

                <div class="case-icon">
                    🕵️
                </div>

                <p class="classified">
                    CLASSIFIED CASE FILE
                </p>

                <h1>
                    THE CASE OF US
                </h1>

                <div class="case-line"></div>

                <p class="description">

                    Two people.
                    <br>
                    One first message.
                    <br>
                    One conversation about studies.
                    <br><br>

                    And somehow...

                </p>

                <h2 class="mystery-text">
                    Something changed. 👀
                </h2>

                <button onclick="openClue(1)">
                    OPEN CASE FILE →
                </button>

            </div>

        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 500);
}


/* =========================
   CLUES
========================= */

function openClue(clueNumber) {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        /* CLUE 01 */

        if (clueNumber === 1) {

            card.innerHTML = `

                <div class="clue-card">

                    <div class="clue-number">
                        CLUE 01
                    </div>

                    <div class="game-icon">
                        💬
                    </div>

                    <h1>
                        The First Move
                    </h1>

                    <p class="description">

                        Every story has a beginning.

                        <br><br>

                        And in this one...

                        <br>

                        someone had to make the first move. 👀

                    </p>

                    <div class="question-box">

                        <h2>
                            If you could keep just one memory of us forever, which would you choose?
                        </h2>

                        <div class="options">

                            <button onclick="checkClueAnswer(this, 1, 0)">
                                Our first conversation
                            </button>

                            <button onclick="checkClueAnswer(this, 1, 1)">
                                The moment you first smiled at me
                            </button>

                            <button onclick="checkClueAnswer(this, 1, 2)">
                                A random day we spent together
                            </button>

                        </div>

                    </div>

                    <p class="hint">
                        Detective mode: ON 🔎
                    </p>

                </div>

            `;
        }


        /* CLUE 02 */

        else if (clueNumber === 2) {

            card.innerHTML = `

                <div class="clue-card">

                    <div class="clue-number">
                        CLUE 02
                    </div>

                    <div class="game-icon">
                        📚
                    </div>

                    <h1>
                        The Beginning Was Simple
                    </h1>

                    <p class="description">

                        No dramatic movie scene.

                        <br><br>

                        No perfectly planned conversation.

                        <br><br>

                        Just two people...

                        <br>
                        talking about something completely normal.

                    </p>

                    <div class="question-box">

                        <h2>
                            What would you choose if you had to describe what I mean to you?
                        </h2>

                        <div class="options">

                            <button onclick="checkClueAnswer(this, 2, 0)">
                                A beautiful coincidence
                            </button>

                            <button onclick="checkClueAnswer(this, 2, 1)">
                                I never want to lose you
                            </button>

                            <button onclick="checkClueAnswer(this, 2, 2)">
                                Just a sweet memory
                            </button>

                        </div>

                    </div>

                    <p class="hint">
                        Think about where our story really began... 🔎
                    </p>

                </div>

            `;
        }


        /* CLUE 03 */

        else if (clueNumber === 3) {

            card.innerHTML = `

                <div class="clue-card">

                    <div class="clue-number">
                        CLUE 03
                    </div>

                    <div class="game-icon">
                        🫶
                    </div>

                    <h1>
                        The Little Things
                    </h1>

                    <p class="description">

                        Maybe it's not about one big moment.

                        <br><br>

                        Maybe it's about the little things...

                        <br><br>

                        The random conversations.
                        <br>
                        The stupid jokes.
                        <br>
                        The moments when we actually listen to each other.

                        <br><br>

                        So here's the final question...

                    </p>

                    <div class="question-box">

                        <h2>
                            If life gave us a second chance to write our own little love story, what would you choose?
                        </h2>

                        <div class="options">

                            <button onclick="checkClueAnswer(this, 3, 0)">
                                Let it remain a beautiful dream
                            </button>

                            <button onclick="checkClueAnswer(this, 3, 1)">
                                Start the story and see where it takes us
                            </button>

                            <button onclick="checkClueAnswer(this, 3, 2)">
                                Forget everything & move on
                            </button>

                        </div>

                    </div>

                    <p class="hint">
                        There might be more to this than you think... 👀
                    </p>

                </div>

            `;

        }

    }, 450);

    setTimeout(() => {

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 500);
}


/* =========================
   CLUE ANSWER SYSTEM
========================= */

function checkClueAnswer(button, clueNumber, selectedOption) {

    /*
       Correct answers:
       Clue 01 -> Option 1
       Clue 02 -> Option 2
       Clue 03 -> Option 2
    */

    const correctAnswers = {
        1: 0,
        2: 1,
        3: 1
    };

    const correctAnswer = correctAnswers[clueNumber];

    if (selectedOption === correctAnswer) {

        button.classList.add("correct");

        setTimeout(() => {

            solveClue(clueNumber);

        }, 800);

    } else {

        button.classList.add("wrong");

        setTimeout(() => {

            button.classList.remove("wrong");

        }, 700);
    }
}


/* =========================
   SOLVE CLUE
========================= */

function solveClue(clueNumber) {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        /* CLUE 01 SOLVED */

        if (clueNumber === 1) {

            card.innerHTML = `

                <div class="game-icon">
                    🔎
                </div>

                <div class="clue-number">
                    CLUE SOLVED
                </div>

                <h1>
                    Correct! 😌
                </h1>

                <p class="description">

                    You remembered it.

                    <br><br>

                    <strong>
                        I was the one who started the conversation.
                    </strong>

                    <br><br>

                    And the funny thing is...

                    <br>

                    I had no idea where that first message
                    would eventually lead. ❤️

                </p>

                <button onclick="openClue(2)">
                    NEXT CLUE →
                </button>

            `;

        }


        /* CLUE 02 SOLVED */

        else if (clueNumber === 2) {

            card.innerHTML = `

                <div class="game-icon">
                    ❤️
                </div>

                <div class="clue-number">
                    CLUE SOLVED
                </div>

                <h1>
                    You Remembered. 🥹
                </h1>

                <p class="description">

                    It started with something as simple as
                    <strong>studies.</strong>

                    <br><br>

                    Nothing extraordinary...

                    <br>
                    nothing planned.

                    <br><br>

                    Just a conversation between
                    <br>
                    two people who didn't know
                    <br>
                    how important they might become
                    <br>
                    to each other.

                    <br><br>

                    Funny how life works, right? ❤️

                </p>

                <button onclick="openClue(3)">
                    ONE MORE CLUE → 🔎
                </button>

                <p class="hint">
                    One more clue remains... 🔎
                </p>

            `;

        }


        /* CLUE 03 SOLVED */

        else if (clueNumber === 3) {

            card.innerHTML = `

                <div class="game-icon">
                    ❤️
                </div>

                <div class="clue-number">
                    CLUE SOLVED
                </div>

                <h1>
                    You Understand Me. ❤️
                </h1>

                <p class="description">

                    Maybe that's what makes this story special.

                    <br><br>

                    It was never about one perfect moment...

                    <br><br>

                    It was about all those little moments
                    that slowly became something meaningful.

                    <br><br>

                    And maybe...

                    <strong>
                        this is where our little story really begins. ❤️
                    </strong>

                </p>

                <button onclick="startLevelThree()">
                    CONTINUE TO LEVEL 03 ❤️ →
                </button>

            `;

        }

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 450);
}


/* =========================
   OLD CHECK ANSWER FUNCTION
========================= */

function checkAnswer(button, isCorrect, nextFunction) {

    if (isCorrect) {

        button.classList.add("correct");

        setTimeout(() => {

            nextFunction();

        }, 1500);

    } else {

        button.classList.add("wrong");

        setTimeout(() => {

            button.classList.remove("wrong");

        }, 700);
    }
}


/* =========================
   LEVEL 03
========================= */

function startLevelThree() {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        card.innerHTML = `

            <div class="case-file">

                <div class="game-icon">
                    🔐
                </div>

                <div class="level-badge">
                    LEVEL 03
                </div>

                <h1>
                    Something I Never Said
                </h1>

                <div class="case-line"></div>

                <p class="description">

                    Okay...

                    <br><br>

                    No more clues.

                    <br>

                    No more detective work.

                    <br><br>

                    This part is just
                    <strong>me</strong>
                    being honest with you.

                    <br><br>

                    There are some things
                    <br>
                    that are easier to code...

                    <br>

                    than to say out loud. ❤️

                </p>

                <button onclick="revealFeelings()">
                    OPEN MY HEART ❤️
                </button>

            </div>

        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 500);
}


/* =========================
   FEELINGS
========================= */

function revealFeelings() {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        card.innerHTML = `

            <div class="heart-reveal">

                <div class="game-icon">
                    ❤️
                </div>

                <h1>
                    There's Something
                    I Want You To Know...
                </h1>

                <p class="description">

                    তুমি সত্যিই খুব সুন্দর দেখতে...

                    <br><br>

                    ঠিক আমার মনের পছন্দের মতো।

                    <br><br>

                    But it's not just about
                    how beautiful you look.

                    <br><br>

                    I love the way you listen.
                    <br>
                    I love the way you make me laugh.
                    <br>
                    I love how comfortable
                    our conversations feel.

                    <br><br>

                    And somewhere along the way...

                    <br><br>

                    <strong>
                        You became someone
                        I don't want to lose.
                    </strong>

                    </p>

                <button onclick="showProposal()">
                    ONE LAST THING... ❤️
                </button>

            </div>

        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 500);
}


/* =========================
   COMPLETE CLUE 03
========================= */

function completeClue3() {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        card.innerHTML = `

            <div class="game-icon">
                ❤️
            </div>

            <div class="clue-number">
                CLUE SOLVED
            </div>

            <h1>
                You Understand Me. ❤️
            </h1>

            <p class="description">

                Maybe that's what makes this story special.

                <br><br>

                It was never about one perfect moment...

                <br><br>

                It was about all those little moments
                that slowly became something meaningful.

                <br><br>

                And maybe...

                <strong>
                    this is where our little story really begins. ❤️
                </strong>

            </p>

            <button onclick="showProposal()">
                CONTINUE ❤️ →
            </button>

        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 450);
}


/* =========================
   PROPOSAL
========================= */

function showProposal() {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        card.innerHTML = `

            <div class="heart-reveal">

                <div class="game-icon">
                    ❤️
                </div>

                <h1>
                    One Last Thing...
                </h1>

                <div class="case-line"></div>

                <p class="description">

                    I've been trying to find
                    the right words...

                    <br><br>

                    But maybe the simplest thing
                    to say is...

                    <br><br>

                    <strong>
                        I really, really like you. ❤️
                    </strong>

                    <br><br>

                    And I don't want this to remain
                    unsaid anymore.

                    <br><br>

                    <strong>
                        Will you be mine?
                    </strong>

                </p>

                <button onclick="finalMessage()">
                    YES ❤️
                </button>

            </div>

        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 500);
}


/* =========================
   FINAL MESSAGE
========================= */

function finalMessage() {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        card.innerHTML = `

            <div class="heart-reveal">

                <div class="game-icon">
                    ❤️
                </div>

                <div class="clue-number">
                    MY ANSWER
                </div>

                <h1>
                    Will You Be Mine? ❤️
                </h1>

                <div class="case-line"></div>

                <p class="description" id="finalMessage">

                    I don't know where this story will go...

                    <br><br>

                    But I know I want to discover it with you.

                    <br><br>

                    <strong>
                        Will you be mine?
                    </strong>

                </p>

                <button onclick="finalYes()">
                    YES ❤️
                </button>

            </div>

        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

        typeFinalMessage();

    }, 500);
}


/* =========================
   FINAL YES
========================= */

function finalYes() {
    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        // OLD FINAL SLIDE — এটা থাকবে
        card.innerHTML = `
            <div class="final-slide">

                <div class="game-icon">❤️</div>

                <h1>And after everything...</h1>

                <h2>it's finally us. ❤️</h2>

                <div class="case-line"></div>

                <p class="description">
                    You just made my heart very happy.

                    <br><br>

                    I don't know what the future holds,
                    but I know I want to discover it with you.

                    <br><br>

                    <strong>Our little story starts here. ❤️</strong>
                </p>

                <button onclick="showThankYou()">
                    ONE LAST THING ❤️
                </button>

            </div>
        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 500);
}


// ======================================
// FINAL THANK YOU SLIDE
// ======================================

function showThankYou() {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        card.innerHTML = `
            <div class="thank-you-slide">

                <div class="thank-heart">♥️</div>

                <h1>Thank You ❤️</h1>

                <h2>My Would-Be Girlfriend</h2>

                <div class="thank-line"></div>

                <p>
                    Thank you for coming into my life. ❤️
                </p>

                <p>
                    Thank you for turning my
                    <strong>black & white life</strong>
                    into something so beautiful and colourful.
                </p>

                <p>
                    You brought colours into places
                    I didn't even know were grey.
                </p>

                <p>
                    You brought happiness, warmth,
                    smiles and a beautiful reason
                    to look forward to tomorrow.
                </p>

                <p>
                    I promise you...
                </p>

                <p>
                    I will always stand beside you.<br>
                    I will listen to you.<br>
                    I will understand you.<br>
                    I will respect you.<br>
                    And I will love you with all my heart. ❤️
                </p>

                <p>
                    I promise to give you my very best,
                    to protect our bond,
                    to support your dreams,
                    and to hold your hand through
                    every up and down.
                </p>

                <p class="promise">
                    I may not be perfect,
                    but I promise I will always try
                    to be the best version of myself for you.
                </p>

                <p class="promise">
                    I promise to give my everything
                    to keep this beautiful bond safe. ❤️
                </p>

                <p class="forever">
                    I promise to be yours,<br>
                    to stay yours,<br>
                    and to choose you<br>
                    again and again.
                </p>

                <div class="final-heart">♥️</div>

                <p class="signature">
                    With all my heart,<br><br>
                    <strong>Debargaha Dey ❤️</strong>
                </p>

            </div>
        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 500);
}


/* =========================
   FLOATING HEARTS
========================= */

function createFloatingHeart() {

    const container =
        document.querySelector(".floating-hearts");

    if (!container) return;

    const heart =
        document.createElement("div");

    heart.className =
        "floating-heart";

    const hearts = [
        "❤️",
        "💗",
        "💖",
        "💕",
        "💓",
        "💘"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (Math.random() * 18 + 12) + "px";

    const duration =
        Math.random() * 5 + 6;

    heart.style.animationDuration =
        duration + "s";

    container.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, duration * 1000);
}


/* Create hearts continuously */

setInterval(createFloatingHeart, 700);


/* =========================
   TYPE FINAL MESSAGE
========================= */

function typeFinalMessage() {

    const element =
        document.getElementById("finalMessage");

    if (!element) return;

    const message =
        "I don't know what the future holds... " +
        "but I know I want to discover it with you.";

    /*
       Keep the HTML message visible.
       This function is intentionally simple so
       it does not destroy the <br> and <strong>
       formatting inside the final slide.
    */

    return message;
}

function playLoveSong() {
    const song = document.getElementById("loveSong");

    if (song) {
        song.volume = 0.7;
        song.play().catch(error => {
            console.log("Music could not play:", error);
        });
    }
}
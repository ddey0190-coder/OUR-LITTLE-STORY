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


function startMission() {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

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

function openClue(clueNumber) {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

        // =========================
        // CLUE 01
        // =========================

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
                            Who sent the first message?
                        </h2>

                        <div class="options">

                            <button onclick="solveClue(1)">
                                Me 😌
                            </button>

                            <button onclick="solveClue(1)">
                                You ❤️
                            </button>

                            <button onclick="solveClue(1)">
                                The universe 😂
                            </button>

                        </div>

                    </div>

                    <p class="hint">
                        Detective mode: ON 🔎
                    </p>

                </div>

            `;

        }


        // =========================
        // CLUE 02
        // =========================

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
                            What was our first proper conversation about?
                        </h2>

                        <div class="options">

                            <button onclick="solveClue(2)">
                                Movies 🎬
                            </button>

                            <button onclick="solveClue(2)">
                                Studies 📚
                            </button>

                            <button onclick="solveClue(2)">
                                Random nonsense 😂
                            </button>

                        </div>

                    </div>

                    <p class="hint">
                        Think about where our story really began... 🔎
                    </p>

                </div>

            `;

        }

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
                    What makes our conversations feel so easy?
                </h2>

                <div class="options">

                    <button onclick="solveClue(3)">
                        We both listen 👂❤️
                    </button>

                    <button onclick="solveClue(3)">
                        We both are funny 😂
                    </button>

                    <button onclick="solveClue(3)">
                        Honestly... both 😌
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

function solveClue(clueNumber) {

    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {

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
            FIND THE NEXT CLUE →
        </button>

        <p class="hint">
            One more clue remains... 🔎
        </p>

    `;

}
    
    else if (clueNumber === 3) {

    card.innerHTML = `

        <div class="game-icon">
            💞
        </div>

        <div class="clue-number">
            CLUE 03
        </div>

        <h1>
            The Little Things
        </h1>

        <p class="description">

            Maybe it's not about one big moment.

            <br><br>

            Maybe it's about the little things...

            <br><br>

            The random conversations.<br>
            The stupid jokes.<br>
            The moments when we actually listen to each other.

            <br><br>

            So here's the final question...

        </p>

        <div class="question-box">

            <h3>
                What makes our conversations feel so easy?
            </h3>

            <button onclick="completeClue3()">
                We both listen 💛❤️
            </button>

            <button onclick="completeClue3()">
                We both are funny 😌
            </button>

            <button onclick="completeClue3()">
                Maybe... we just understand each other ❤️
            </button>

        </div>

    `;

}

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 450);
}

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

                <strong>this is where our little story really begins. ❤️</strong>

            </p>

            <button onclick="showProposal()">
                CONTINUE ❤️ →
            </button>

        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");

    }, 450);
}

function showProposal() {
    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {
        card.innerHTML = `
            <div class="heart-reveal">
                <div class="game-icon">❤️</div>

                <h1>One Last Thing...</h1>

                <div class="case-line"></div>

                <p class="description">
                    I've been trying to find the right words...

                    <br><br>

                    But maybe the simplest thing to say is...

                    <br><br>

                    <strong>
                        I really, really like you. ❤️
                    </strong>

                    <br><br>

                    And I don't want this to remain unsaid anymore.
                </p>

                <button onclick="finalMessage()">
                    ❤️ YES, I WANT TO KNOW
                </button>
            </div>
        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");
    }, 500);
}

function finalMessage() {
    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {
        card.innerHTML = `
            <div class="heart-reveal">
                <div class="game-icon">❤️</div>

                <div class="clue-number">MY ANSWER</div>

                <h1>Will You Be Mine? ❤️</h1>

                <div class="case-line"></div>

                <p class="description">
                    I don't know where this story will go...
                    <br><br>

                    But I know that I want to find out
                    with you. ❤️
                    <br><br>

                    So there's just one thing
                    left to ask...
                    <br><br>

                    <strong>Will you be mine?</strong> ❤️
                </p>

                <button onclick="finalYes()">
                    YES ❤️
                </button>
            </div>
        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");
    }, 500);
}

function finalYes() {
    const card = document.querySelector(".mission-card");

    card.classList.add("fade-out");

    setTimeout(() => {
        card.innerHTML = `
            <div class="heart-reveal">
                <div class="game-icon">❤️</div>

                <h1>Thank You ❤️</h1>

                <div class="case-line"></div>

                <p class="description">
                    You just made my heart very happy.
                    <br><br>
                    I don't know what the future holds,
                    but I know I want to discover it with you.
                    <br><br>
                    <strong>Our little story starts here. ❤️</strong>
                </p>

                <div class="game-icon">💗</div>
            </div>
        `;

        card.classList.remove("fade-out");
        card.classList.add("fade-in");
    }, 500);
}

/* =================================
   FLOATING HEARTS
================================= */

function createFloatingHeart() {

    const container = document.querySelector(".floating-hearts");

    if (!container) return;

    const heart = document.createElement("div");

    heart.className = "floating-heart";

    const hearts = ["❤️", "💗", "💕", "💖", "💓"];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left = Math.random() * 100 + "vw";

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

function typeFinalMessage() {

    const message =
        "I don't know what the future holds... " +
        "but I know I want to discover it with you. ❤️";

    const element = document.getElementById("finalMessage");

    let i = 0;

    function type() {

        if (i < message.length) {
            element.textContent += message.charAt(i);
            i++;

            setTimeout(type, 45);
        }
    }

    type();
}
let sentences = [
    "I can't do anything right.",
    "Nothing ever goes my way.",
    "I'm not good enough, and nothing will ever change that.",
    "Why even bother trying when failure is inevitable?",
    "Nobody cares about me, and I feel like a burden to everyone around me.",
    "Life is so unfair, and I'll never succeed no matter how hard I try.",
    "I'm useless, and everything I touch turns to dust.",
    "There’s no way out, and I’m stuck in this mess forever.",
    "Everyone is better than me, and I’ll always be left behind.",
    "I wish I could disappear because nothing makes sense anymore.",
    "Things will never get better, and I’ll never find happiness.",
    "Nobody notices my efforts, and people only pretend to care.",
    "I hate who I’ve become, and I’ll always be alone.",
    "Why am I even here? There’s no point in anything anymore.",
];

let customFont;
let activeSentences = [];
let fadeTime = 90;
let spawnRate = 10;
let timer = 0;
let q = 99;

function preload() {
    customFont = loadFont("AppleGaramond-LightItalic.ttf");
}

function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(30);
    textAlign(CENTER, CENTER);
    noStroke();
    textFont(customFont);
}

function draw() {
    background(0, 10);

    for (let i = activeSentences.length - 1; i >= 0; i--) {
        let s = activeSentences[i];

        fill(255, s.alpha);
        textSize(s.size);
        text(s.text, s.x, s.y);

        s.alpha -= 255 / fadeTime;

        if (s.alpha <= 0) {
            activeSentences.splice(i, 1);
        }
    }

    if (timer % spawnRate === 0) {
        spawnSentence();
    }

    timer++;
    fill(255, 200);
    textSize(30);
    text("press H to escape", width / 1.2, height - 50);
}

function spawnSentence() {
    let maxAttempts = 50;
    let textIndex = floor(random(sentences.length));
    let size = random(65, 90);
    let newSentence;

    for (let attempts = 0; attempts < maxAttempts; attempts++) {
        let x = random(size, width - size);
        let y = random(size, height - size);

        let overlapping = false;
        for (let s of activeSentences) {
            let distance = dist(x, y, s.x, s.y);
            if (distance < (size + s.size) * 2) {
                overlapping = true;
                break;
            }
        }

        if (!overlapping) {
            newSentence = {
                text: sentences[textIndex],
                x: x,
                y: y,
                size: size,
                alpha: 255,
            };
            break;
        }
    }

    if (newSentence) {
        activeSentences.push(newSentence);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
    if (key === "H" || key === "h") {
        window.location.href = "/puzzle1.html";
    }
}

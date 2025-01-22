// Nội dung các câu cần hiển thị
const messages = [
    "Don’t be afraid to take the first step—it’s always the hardest, but the most rewarding.",
    "Fear is just an illusion; you are stronger than you think.",
    "You’ve faced challenges before, and you’ll conquer this one too.",
    "Every great achievement begins with conquering fear, and courage sets you free.",
    "Remember, bravery isn’t the absence of fear, but moving forward despite it.",
    "Don’t stop now—you’re closer than you think. Every effort counts, no matter how small, and progress might be slow, but moving forward is what matters.",
    "Mistakes are just proof that you’re trying—keep going! Success is built on perseverance, and great things take time.",
    "You’re never alone; help is always around you.",
    "Lean on the people who care about you—they’re here for you.",
    "It’s okay to ask for help; you don’t have to do this alone.",
    "The right people will always be there to guide you, and you are surrounded by love and encouragement.",
    "Stay strong, keep going, and trust the process. You’re capable of far more than you can imagine, and the light at the end of the tunnel gets closer with every step.",
    "Even the darkest nights lead to the brightest mornings. Courage, effort, and support will always lead you to success.",
];

const textContent = document.querySelector(".text-content");
const moreButton = document.querySelector(".more");

let currentMessageIndex = 0;

function showNextMessage() {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;

    textContent.classList.add("fade-out");
    setTimeout(() => {
        textContent.textContent = messages[currentMessageIndex];
        textContent.classList.remove("fade-out");
        textContent.classList.add("fade-in");
        setTimeout(() => {
            textContent.classList.remove("fade-in");
        }, 1000);
    }, 1000);
}

moreButton.addEventListener("click", showNextMessage);

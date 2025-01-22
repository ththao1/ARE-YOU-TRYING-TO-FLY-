function randomTextEffect(element, originalText) {
    const textArray = originalText.split("");
    let interval;

    element.addEventListener("mouseenter", () => {
        interval = setInterval(() => {
            const randomText = textArray
                .map(
                    () =>
                        textArray[Math.floor(Math.random() * textArray.length)]
                )
                .join("");
            element.textContent = randomText;
        }, 50);
    });

    element.addEventListener("mouseleave", () => {
        clearInterval(interval);
        element.textContent = originalText;
    });
}

const hoverTextElements = document.querySelectorAll(".hover-text");
hoverTextElements.forEach((element) => {
    const originalText = element.textContent.trim();
    randomTextEffect(element, originalText);
});

function createStar() {
    const starOverlay = document.querySelector(".star-overlay");
    const star = document.createElement("div");
    star.classList.add("star");

    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    star.style.left = `${randomX}px`;
    star.style.top = `${randomY}px`;

    starOverlay.appendChild(star);

    setTimeout(() => {
        star.remove();
    }, 2000);
}

function generateStars() {
    setInterval(createStar, 100);
}
document.addEventListener("DOMContentLoaded", generateStars);

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("background-sound");

    const hiddenButton = document.createElement("button");
    hiddenButton.style.display = "none";
    document.body.appendChild(hiddenButton);

    hiddenButton.click();

    hiddenButton.addEventListener("click", () => {
        audio.play().catch((error) => {
            console.error("Failed to play audio:", error);
        });
    });
});

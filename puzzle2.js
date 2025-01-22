const container = document.querySelector(".puzzle-container");
const flipCard = document.querySelector(".flip-card");
const imageUrl = "./assets/puzzle2.png"; // Đường dẫn tới ảnh puzzle
const pieces = 9;
const pieceSize = 270;

const positions = [];
for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
        positions.push({ x, y });
    }
}

positions.forEach((pos) => {
    const piece = document.createElement("div");
    piece.classList.add("puzzle-piece");
    piece.style.backgroundImage = `url(${imageUrl})`;
    piece.style.backgroundPosition = `-${pos.x * pieceSize}px -${
        pos.y * pieceSize
    }px`;
    piece.style.transform = `rotate(${
        [0, 90, 180, 270][Math.floor(Math.random() * 4)]
    }deg)`;
    piece.dataset.correctRotation = "0";
    piece.dataset.currentRotation = piece.style.transform.match(/\d+/)[0];

    piece.addEventListener("click", () => {
        let currentRotation = parseInt(piece.dataset.currentRotation);
        currentRotation = (currentRotation + 90) % 360;
        piece.dataset.currentRotation = currentRotation;
        piece.style.transform = `rotate(${currentRotation}deg)`;

        checkIfSolved();
    });

    container.appendChild(piece);
});

// Kiểm tra khi ghép đúng
function checkIfSolved() {
    const allPieces = document.querySelectorAll(".puzzle-piece");
    const isSolved = Array.from(allPieces).every((piece) => {
        return piece.dataset.currentRotation === piece.dataset.correctRotation;
    });

    if (isSolved) {
        setTimeout(() => {
            fadeOutPuzzle();
        }, 500);
    }
}

function fadeOutPuzzle() {
    const allPieces = document.querySelectorAll(".puzzle-piece");
    allPieces.forEach((piece) => {
        piece.classList.add("fade-out");
    });

    setTimeout(() => {
        container.classList.add("hidden");
        createFlipCard();
    }, 1000);
}

function createFlipCard() {
    flipCard.style.display = "block";
    flipCard.style.position = "absolute";
    flipCard.style.width = "810px";
    flipCard.style.height = "810px";
    flipCard.classList.remove("hidden");

    const flipCardInner = document.querySelector(".flip-card-inner");
    flipCard.addEventListener("click", () => {
        flipCardInner.classList.toggle("flipped");
    });
}

const input = document.getElementById("input");
const content = document.getElementById("content");
const userText = document.getElementById("userText");
const finalText = document.getElementById("finalText");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const userInput = input.value.trim();
        if (userInput) {
            content.classList.add("fade-out");
            setTimeout(() => {
                content.classList.add("hidden");

                userText.textContent = `"${userInput}"`;
                userText.classList.add("fade-in");
                setTimeout(() => {
                    userText.style.opacity = 1;

                    setTimeout(() => {
                        userText.classList.add("fade-out");
                        setTimeout(() => {
                            userText.classList.add("hidden");
                            finalText.classList.add("fade-in");
                            setTimeout(() => {
                                finalText.style.opacity = 1;
                            }, 1000);
                        }, 1000);
                    }, 10000);
                }, 1000);
            }, 1000);
        }
    }
});

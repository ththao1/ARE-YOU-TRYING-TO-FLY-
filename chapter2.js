const input = document.getElementById("input");
const content = document.getElementById("content");
const userText = document.getElementById("userText");
const finalText = document.getElementById("finalText");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        const userInput = input.value.trim();
        if (userInput) {
            content.classList.add("hidden");
            userText.innerHTML = "";
            const fly = userInput.split("");
            let space = "";

            for (let i = 0; i < fly.length; i++) {
                if (fly[i] != " ") {
                    space +=
                        '<div class="character" style="position:relative;display:inline-block;">' +
                        fly[i] +
                        "</div>";
                } else {
                    space += fly[i];
                }
            }

            userText.innerHTML = space;

            const names = document.querySelectorAll(".user-text div");

            userText.classList.remove("hidden");
            const tl = gsap.timeline();

            tl.set(".user-text", { perspective: 500 });

            tl.from(names, {
                duration: 1,
                opacity: 0,
            });

            tl.to(names, {
                duration: 1,
                opacity: 0,
                x: gsap.utils.random(-300, 300, true),
                y: gsap.utils.random(-300, 300, true),
                z: gsap.utils.random(-300, 300, true),
                stagger: {
                    amount: 3,
                },
                delay: 5,
                onComplete: () => {
                    userText.classList.add("hidden");
                    finalText.classList.remove("hidden");
                    gsap.fromTo(
                        finalText,
                        { opacity: 0 },
                        { opacity: 1, duration: 2 }
                    );
                    document.addEventListener("click", function handleClick() {
                        window.location.href = "./chapter3.html";
                    });
                },
            });
        }
    }
});

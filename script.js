function copyIP() {
    const ip = "play.furypixel.net";

    navigator.clipboard.writeText(ip);

    alert("Server IP Copied!\n\n" + ip);
}

function discord() {
    window.open("https://discord.gg/furypixel", "_blank");
}

window.addEventListener("scroll", () => {
    const cards = document.querySelectorAll(".card");

    cards.forEach((card) => {
        const position = card.getBoundingClientRect().top;

        if (position < window.innerHeight - 100) {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }
    });
});

document.querySelectorAll(".card").forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
});

const title = document.querySelector(".hero h2");

let glow = true;

setInterval(() => {
    if (glow) {
        title.style.textShadow = "0 0 25px #7c5cff";
    } else {
        title.style.textShadow = "none";
    }

    glow = !glow;
}, 800);

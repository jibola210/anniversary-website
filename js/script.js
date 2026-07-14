// ==============================
// LOADER
// ==============================

window.addEventListener("load", () => {
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.visibility = "hidden";
    }, 2500);
});

// ==============================
// LIVE ANNIVERSARY COUNTER
// ==============================

const startDate = new Date("August 11, 2025 00:00:00").getTime();

function updateCounter() {

    const now = new Date().getTime();

    const distance = now - startDate;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;

}

updateCounter();

setInterval(updateCounter, 1000);

// ==============================
// OPEN FINAL LETTER
// ==============================

function openLetter() {

    const letter = document.getElementById("hiddenLetter");

    if (letter.style.display === "block") {

        letter.style.display = "none";

    } else {

        letter.style.display = "block";

        letter.scrollIntoView({
            behavior: "smooth"
        });

    }

}
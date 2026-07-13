window.addEventListener("load", () => {

    // Hide loader after 3 seconds
    const loader = document.querySelector(".loader");

    setTimeout(() => {
        loader.style.display = "none";
    }, 3000);

    // Anniversary Counter
    const startDate = new Date("August 11, 2025 00:00:00");

    function updateCounter(){

        const now = new Date();

        const difference = now - startDate;

        const days = Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours = Math.floor(
            (difference % (1000 * 60 * 60 * 24))
            / (1000 * 60 * 60)
        );

        const minutes = Math.floor(
            (difference % (1000 * 60 * 60))
            / (1000 * 60)
        );

        const seconds = Math.floor(
            (difference % (1000 * 60))
            / 1000
        );

        document.getElementById("days").textContent = days;
        document.getElementById("hours").textContent = hours;
        document.getElementById("minutes").textContent = minutes;
        document.getElementById("seconds").textContent = seconds;

    }

    updateCounter();

    setInterval(updateCounter,1000);

});function openLetter(){

    document.getElementById("hiddenLetter").style.display="block";

    document.getElementById("hiddenLetter").scrollIntoView({
        behavior:"smooth"
    });

}
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("dateInput");
    const defaultText = "Дата похода";

    dateInput.addEventListener("focus", function() {
        this.type = "date";
        if (this.value === defaultText) {
            this.value = "";
        }
    });

    dateInput.addEventListener("blur", function() {
        if (!this.value) {
            this.type = "text";
            this.value = defaultText;
        }
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const playLink = document.querySelector(".play_link");
    const playIcon = playLink.querySelector("i");

    playLink.addEventListener("mouseenter", () => {
        playLink.style.transform = "scale(1.2)";
        playIcon.style.transform = "scale(1.2)";
    });

    playLink.addEventListener("mouseleave", () => {
        playLink.style.transform = "scale(1)";
        playIcon.style.transform = "scale(1)"; 
    });
});
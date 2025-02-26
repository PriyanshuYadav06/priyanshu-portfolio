const intro = document.querySelector("#intro");
const cross = document.querySelector("#cross");
const btn = document.querySelector("#btn");

// Click button to show the intro section
btn.addEventListener("click", () => {
    console.log("hello");
    intro.classList.remove("scale-0");
    intro.classList.add("scale-100");  // Ensure scaling is applied properly
});

// Click cross to hide the intro section
cross.addEventListener("click", () => {
    intro.classList.remove("scale-100");
    intro.classList.add("scale-0");
});

// Click anywhere on the body to trigger a button action
document.body.addEventListener("click", (event) => {
    if (!intro.contains(event.target) && event.target !== btn) {
        console.log("Body Clicked!");
        intro.classList.remove("scale-100");
        intro.classList.add("scale-0");
    }
});

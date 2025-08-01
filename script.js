const intro = document.querySelector("#intro");
const cross = document.querySelector("#cross");
const btn = document.querySelector("#btn");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
let flag = localStorage.getItem("flag") || true;
flag = flag === null ? true : flag === "true";
if (flag) {
  handleSun();
} else {
  handleMoon();
}
function handleSun() {
  // switch to light mode(true)
  flag = true;
  document.body.style.backgroundColor = "rgba(122, 121, 121, 0.35)";
  intro.style.backgroundColor = "#7A7979E8";
  sun.classList.add("hidden");
  moon.classList.remove("hidden");
  localStorage.setItem("flag", flag);
}
function handleMoon() {
  flag = false; // switch to darkMode (true)
  localStorage.setItem("flag", flag);
  document.body.style.backgroundColor = "#111";
  intro.style.backgroundColor = "#191919";
  moon.classList.add("hidden");
  sun.classList.remove("hidden");
}
// Click button to show the intro section
btn.addEventListener("click", () => {
  console.log("hello");
  intro.classList.remove("scale-0");
  intro.classList.add("scale-100"); // Ensure scaling is applied properly
});

// Click cross to hide the intro section
cross.addEventListener("click", () => {
  intro.classList.remove("scale-100");
  intro.classList.add("scale-0");
});

// Switching the Theme
sun.addEventListener("click", () => {
  handleSun();
});
moon.addEventListener("click", () => {
  handleMoon();
});

// Click anywhere on the body to trigger a button action
document.body.addEventListener("click", (event) => {
  if (!intro.contains(event.target) && event.target !== btn) {
    console.log("Body Clicked!");
    intro.classList.remove("scale-100");
    intro.classList.add("scale-0");
  }
});

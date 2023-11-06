console.log("WITAJCIE!👋 Niech Kod będzie z wami 🔥🔥");

let button = document.querySelector(".js-Button");
let changeBackground = document.querySelector(".js-bodyStyle");

button.addEventListener("click", () => {
  changeBackground.classList.toggle("bodySecondary");

  button.innerText = changeBackground.classList.contains("bodySecondary")
    ? "Czas Na Oświecenie"
    : "Niech Nastanie Ciemność";
});

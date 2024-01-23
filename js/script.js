{
  const welcome = () => {
    console.log("WITAJCIE!👋 Niech Kod będzie z wami 🔥🔥");
  };

  const toggleBackground = () => {
    const changeBackground = document.querySelector(".js-bodyStyle");
    const changeText = document.querySelector(".js-changeText");
    changeBackground.classList.toggle("bodySecondary");
    changeText.innerText = changeBackground.classList.contains("bodySecondary")
      ? "Czas Na Oświecenie"
      : "Niech Nastanie Ciemność";
  };

  const init = () => {
    const button = document.querySelector(".js-Button");
    button.addEventListener("click", toggleBackground);

    welcome();
  };

  init();
}

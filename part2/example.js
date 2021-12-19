const changeClassGreenBackground = function () {
    const bodyElement = document.body;
    bodyElement.classList.add("purple-background");
  };
  const attachEventToChangeColorButton = function () {
    const changeColorButton = document.getElementById("change-background-button");
    changeColorButton.addEventListener("click", function () {
      changeClassGreenBackground();
    });
  };
  const attachEventToAlertButton = function () {
    const alertButton = document.getElementById("mybutton");
    alertButton.addEventListener("click", function () {
      alert("button geklikt!");
    });
  };
  
  attachEventToAlertButton();
  attachEventToChangeColorButton();
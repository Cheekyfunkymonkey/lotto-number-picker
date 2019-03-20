(() => {
  const message = document.getElementById("message");
  const numberContainer = document.getElementById("number-container");
  const pickNumberButton = document.getElementById("pick-number-button");

  function numberPicker(num) {
    const numbers = [];

    for (let i = 1; i <= num; i++) {
      numbers.push(i);
    }

    pickNumberButton.addEventListener("click", event => {
      removeNumbers();
      message.textContent = "Good luck!";
      pickNumberButton.textContent = "Pick numbers again!";
      const pickedNumbers = randomArray(numbers.length + 1);

      pickedNumbers.forEach((number, index) => {
        const numberElement = document.createElement("li");
        numberElement.textContent = number;
        numberContainer.appendChild(numberElement);
      });
    });
  }

  function removeNumbers() {
    while (numberContainer.firstChild) {
      numberContainer.removeChild(numberContainer.firstChild);
    }
  }

  function randomArray(max) {
    const pickedNumbers = [];

    for (let i = 0; i < 6; i++) {
      const randomNumber = Math.floor(Math.random() * Math.floor(max));
      if (randomNumber === 0 || pickedNumbers.indexOf(randomNumber) >= 0) {
        i--;
      } else {
        pickedNumbers.push(randomNumber);
      }
    }
    return pickedNumbers;
  }
  numberPicker(40);
})();

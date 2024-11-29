

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let animationInterval = null;

document.querySelector(".title-header").onmouseover = (event) => {
  let iteration = 0;

  clearInterval(animationInterval);

  animationInterval = setInterval(() => {
    event.target.innerText = event.target.dataset.text
      .split("")
      .map((char, index) => {
        if (index < iteration) {
          return event.target.dataset.text[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");

    if (iteration >= event.target.dataset.text.length) {
      clearInterval(animationInterval);
    }

    iteration += 1 / 3;
  }, 30);
};

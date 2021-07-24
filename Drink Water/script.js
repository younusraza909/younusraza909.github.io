const Total = document.querySelector(".total-water");
const percentage = document.querySelector(".percentage");
const glasses = document.querySelectorAll(".glass");
const remained = document.querySelector(".remained");
const remainedText = document.querySelector(".remained h5");

let increament = 100 / 8;

glasses.forEach((glass, i) => {
  glass.addEventListener("click", () => {
    removeClasses();
    glasses.forEach((glass, j) => {
      if (j <= i) {
        glass.classList.add("filled");
      }
    });
    updateUi();
  });
});

function updateUi() {
  let remainig = 2000;
  glasses.forEach((glass, i) => {
    if (glass.classList.contains("filled")) {
      if (percentage.style.height === "87.5%") {
        remained.classList.add("hide");
        percentage.style.height = `${increament * (i + 1)}%`;
        percentage.innerHTML = percentage.style.height;
        remainig -= 250;
        remainedText.innerHTML = `${remainig / 1000}L`;
      } else {
        percentage.style.height = `${increament * (i + 1)}%`;
        percentage.innerHTML = percentage.style.height;
        remained.classList.remove("hide");
        remainig -= 250;
        remainedText.innerHTML = `${remainig / 1000}L`;
      }
    }
  });
}

function removeClasses() {
  glasses.forEach((glass) => {
    glass.classList.remove("filled");
  });
}

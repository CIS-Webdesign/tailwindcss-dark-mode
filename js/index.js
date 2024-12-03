class PageHandler {
  constructor() {
    if (localStorage.getItem("theme") == "dark") {
      document.documentElement.classList.add("dark");
    }

    this.setThemeIcon();

    document.querySelector("#colorSwitch").addEventListener("click", () => {
      document.documentElement.classList.toggle("dark");

      if (localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "");
      } else {
        localStorage.setItem("theme", "dark");
      }

      this.setThemeIcon();
    });
  }

  setThemeIcon() {
    let colorSwitch = document.querySelector("#colorSwitch");
    if (colorSwitch == null) return;

    if (localStorage.getItem("theme") == "dark") {
      colorSwitch.innerHTML = `
				<img src="./img/line-md--moon-to-sunny-outline-loop-transition.svg" alt="moon" class="" />
			`;
    } else {
      colorSwitch.innerHTML = `
				<img src="./img/line-md--sunny-outline-to-moon-loop-transition.svg" alt="sun" class="" />
			`;
    }
  }
}

const init = () => {
  new PageHandler();
};

document.addEventListener("DOMContentLoaded", () => init());

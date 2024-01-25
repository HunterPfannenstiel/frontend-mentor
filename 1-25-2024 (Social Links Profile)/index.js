const button = document.getElementById("button");
const links = document.getElementById("links");

let isLoading = true;

button.addEventListener("click", () => {
  if (isLoading) {
    links.classList.remove("loading");
  } else {
    links.classList.add("loading");
  }
  isLoading = !isLoading;
  button.textContent = isLoading ? "Stop Loading" : "Start Loading";
});

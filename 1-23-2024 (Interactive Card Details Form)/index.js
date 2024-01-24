const formBtn = document.getElementById("form-btn");
const continueBtn = document.getElementById("continue-btn");
const completeElement = document.getElementById("complete");
const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const cardInput = document.getElementById("number");
const monthInput = document.getElementById("month");
const yearInput = document.getElementById("year");
const cvcInput = document.getElementById("cvc");

const cardNumber = document.getElementById("card-number");
const cardName = document.getElementById("card-name");
const cardMonth = document.getElementById("card-month");
const cardYear = document.getElementById("card-year");
const cardCVC = document.getElementById("card-cvc");

const defaultCardNumber = "0000 0000 0000 0000";
const defaultCardHolder = "Jane Appleseed";
const defaultMonth = "00";
const defaultYear = "00";
const defaultCVC = "000";

formBtn.addEventListener("click", (e) => {
  e.preventDefault();
  form.classList.add("hide");
  completeElement.classList.remove("hide");
});

continueBtn.addEventListener("click", () => {
  form.classList.remove("hide");
  completeElement.classList.add("hide");
});

nameInput.addEventListener("change", (e) => {
  cardName.textContent = e.target.value || defaultCardHolder;
});

cardInput.addEventListener("change", (e) => {
  cardNumber.textContent = e.target.value || defaultCardNumber;
});

monthInput.addEventListener("change", (e) => {
  cardMonth.textContent = e.target.value || defaultMonth;
});

yearInput.addEventListener("change", (e) => {
  cardYear.textContent = e.target.value || defaultMonth;
});

cvcInput.addEventListener("change", (e) => {
  cardCVC.textContent = e.target.value || defaultCVC;
});

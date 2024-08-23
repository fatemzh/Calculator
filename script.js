const tipButton5 = document.querySelector('.defined-tips button[data-tip="5"]');
const tipButton10 = document.querySelector(
  '.defined-tips button[data-tip="10"]'
);
const tipButton15 = document.querySelector(
  '.defined-tips button[data-tip="15"]'
);
const tipButton25 = document.querySelector(
  '.defined-tips button[data-tip="25"]'
);
const tipButton50 = document.querySelector(
  '.defined-tips button[data-tip="50"]'
);
const customTipInput = document.getElementById("custom-tip");
const resetBtn = document.getElementById("btn-reset");

const billInput = document.getElementById("bill-amount");
const numPersonInput = document.getElementById("num-people");

const tipAmountDisplay = document.querySelector(
  "#upper-part .totals:nth-child(1) .final-sum"
);
const totalAmountDisplay = document.querySelector(
  "#upper-part .totals:nth-child(2) .final-sum"
);

const billError = document.createElement("span");
billError.textContent = "Can't be 0.";
billError.style.color = "red";
billError.style.display = "none";
billInput.parentElement.appendChild(billError);

let tipPercentage = 0;

// Function to reset the form
const resetForm = () => {
  billInput.value = "";
  numPersonInput.value = "";
  tipAmountDisplay.textContent = "0.0";
  totalAmountDisplay.textContent = "0.0";
  tipPercentage = 0;
  document
    .querySelectorAll(".defined-tips button")
    .forEach((btn) => btn.classList.remove("active"));
  customTipInput.value = "";
  billError.style.display = "none";
};

resetBtn.addEventListener("click", resetForm);

// Function to validate that both inputs fields are filled and not empty
const validateInputsFilled = () => {
  return billInput.value.trim() !== "" && numPersonInput.value.trim() !== "";
};

// Function to verify that there are at least 1 person
const validatePeopleCount = () => {
  const numPersons = parseInt(numPersonInput.value);
  return numPersons >= 1;
};

// Function to verify that the bill amount is greater than 0
const validateBillAmount = () => {
  const billValue = parseFloat(billInput.value);
  if (billValue > 0) {
    billError.style.display = "none";
    return true;
  } else {
    billError.style.display = "inline";
    return false;
  }
};

// Function to check all validations
const checkAllValidations = () => {
  const inputsFilled = validateInputsFilled();
  const validPeopleCount = validatePeopleCount();
  const validBillAmount = validateBillAmount();

  return inputsFilled && validPeopleCount && validBillAmount;
};

// Function to calculate the tip amount per person
const calculateTipAmountPerPerson = (amount, percentage, numPersons) => {
  return (amount * (percentage / 100)) / numPersons;
};

// Function to calculate the total per person, tip included
const calculateTotalPerPerson = (amount, tips, numPersons) => {
  return (amount + tips) / numPersons;
};

// Update the display
const updateDisplay = () => {
  if (!checkAllValidations()) {
    return;
  }

  const billValue = parseFloat(billInput.value);
  const numPersons = parseInt(numPersonInput.value);
  const tipAmountPerPerson = calculateTipAmountPerPerson(
    billValue,
    tipPercentage,
    numPersons
  );
  const totalPerPerson = calculateTotalPerPerson(
    billValue,
    tipAmountPerPerson * numPersons,
    numPersons
  );

  tipAmountDisplay.textContent = tipAmountPerPerson.toFixed(2);
  totalAmountDisplay.textContent = totalPerPerson.toFixed(2);
};

// Event listeners for tip buttons
document.querySelectorAll(".defined-tips button").forEach((button) => {
  button.addEventListener("click", function () {
    document
      .querySelectorAll(".defined-tips button")
      .forEach((btn) => btn.classList.remove("active"));
    this.classList.add("active");
    tipPercentage = parseFloat(this.getAttribute("data-tip"));
    customTipInput.value = ""; // Clear custom tip input
    updateDisplay();
  });
});

// Event listener for custom tip input
customTipInput.addEventListener("input", function () {
  document
    .querySelectorAll(".defined-tips button")
    .forEach((btn) => btn.classList.remove("active"));
  tipPercentage = parseFloat(this.value) || 0;
  updateDisplay();
});

// Event listeners for bill amount and number of people inputs
[billInput, numPersonInput].forEach((input) => {
  input.addEventListener("input", updateDisplay);
});

// Initialize the form to default state
resetForm();

const tipButton5 = document.querySelector('.defined-tips button[data-tip="5"]');
const tipButton10 = document.querySelector('.defined-tips button[data-tip="10"]');
const tipButton15 = document.querySelector('.defined-tips button[data-tip="15"]');
const tipButton25 = document.querySelector('.defined-tips button[data-tip="25"]');
const tipButton50 = document.querySelector('.defined-tips button[data-tip="50"]');
const customBtn = document.querySelector('.undefined-tip');
const resetBtn = document.getElementById('btn-reset');

const billInput = document.querySelector('.bill-amount');
const numPersonInput = document.querySelector('.num-people');

const form = document.querySelector('#container');

// Reset the form
const resetForm = () =>{
    billInput.innerHTML = '';
    numPersonInput.innerHTML = '';
}
resetBtn.addEventListener(resetForm);

//Verify that the 2 inputs fields are filled correctly: min 1 person (cant be zero), min 0.1$, both filled


// Calculate the tip amount per person
const calculateTipAmountPerPerson = (e) =>{

}

// Calculate the total per person, tip included


// Validate the form and calculate the tip amount per person, and the total amount per person
const handleSubmit = (e) =>{
    e.preventDefault();


}
form.addEventListener("submit", handleSubmit);

//Listen for submit
document.getElementById('loan-form').addEventListener('submit', function(e){
  //HIDE RESULTS
    document.getElementById('results').style.display = 'none';
  //SHOW LOADING
    document.getElementById('loading').style.display = 'block';
    setTimeout(calculateResults, 2000);
    e.preventDefault();
});

//Calculate Results
function calculateResults(){

    //UI vars
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');


const principal = parseFloat(amount.value);
const calculatedInterest = parseFloat(interest.value) / 100 / 12;
const calculatedPayments = parseFloat(years.value) * 12;

//Compute monthly payment
const x = Math.pow(1 + calculatedInterest, calculatedPayments);
const monthly = (principal * x * calculatedInterest)/(x-1);

if(isFinite(monthly)) {
monthlyPayment.value = monthly.toFixed(2);
totalPayment.value = (monthly * calculatedPayments).toFixed(2);
totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);

//Show results
document.getElementById('results').style.display = 'block';
//HIDE LOADER
document.getElementById('loading').style.display = 'none';
} else {
showError('Check your numbers, Please');
}
    
}

//Show Error
function showError(error) {

    //Hide results
document.getElementById('results').style.display = 'none';
//HIDE LOADER
document.getElementById('loading').style.display = 'none';

    //Create a div
    const errorDiv = document.createElement('div');
//Get Element
const card = document.querySelector('.card');
const heading = document.querySelector('.heading');

    //Add class name
    errorDiv.className ='alert alert-danger';

    //Create text node and append to div
    errorDiv.appendChild(document.createTextNode(error));

    //Insert before heading
    card.insertBefore(errorDiv, heading);

 //Clear after 3 secs
    setTimeout(clearError, 3000)
}

function clearError (){
    document.querySelector('.alert').remove();
}


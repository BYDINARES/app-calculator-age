//inputs
const dayInputElement = document.querySelector('#day');
const monthInputElement = document.querySelector('#month');
const yearInputElement = document.querySelector('#year');

//outputs
const yearOutputElement = document.querySelector('.button-years');
const monthOutputElement = document.querySelector('.button-months');
const dayOputElement = document.querySelector('.button-days');

//arrow button
const arrowButton = document.getElementById('arrow-button');
arrowButton.addEventListener('input', )


/*function dateToYearsMonthsDays() {
// Select the input elements
    const dayInputElement = document.querySelector('#day');
    const monthInputElement = document.querySelector('#month');
    const yearInputElement = document.querySelector('#year');

    //Get the values as numbers
    const inputDay = dayInputElement?.valueAsNumber || 0; // Defaults to 0 if invalid
    const inputMonth = monthInputElement?.valueAsNumber || 0;
    const inputYear = yearInputElement?.valueAsNumber || 0;

    //Real dates//
    const newDate = new Date();
    const todaysDay = newDate.getDate();
    const todaysMonth = newDate.getMonth() + 1;
    const todaysYear = newDate.getFullYear();

    //Erros//
    const dayError = document.querySelector('.day-error');
    
    const monthError = document.querySelector('.month-error');
    const yearError = document.querySelector('.year-error');
    
    
    //Validating
    if (inputYear > todaysYear || inputYear < 1) {
        yearError.textContent = 'Invalid year. Please enter a past or the actual year';  
        yearError.style.visibility = 'visible';

    } else if (inputMonth < 1 || inputMonth > 12) {
        monthError.textContent = 'Invalid month. Please enter a month between 1-12';
        monthError.style.visibility = 'visible';
        return;
    } else if (inputDay < 1 || inputDay > 31){
        dayError.textContent = 'Invalid day. Please enter a day between 1-31';
        dayError.style.visibility = 'visible';
        return;    
    } else {
        dayError.style.visibility = 'hidden';
        monthError.style.visibility = 'hidden';
        yearError.style.visibility = 'hidden';
    }

    console.log('hello');
}*/
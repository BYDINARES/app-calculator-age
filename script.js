const arrowButton = document.getElementById('arrow-button');

function dateToYearsMonthsDays() {
// Input dates
const dayInput = document.querySelector('.day-input');
const inputDay = parseInt(dayInput.value, 10);

const monthInput = document.querySelector('.month-input');
const inputMonth = parseInt(monthInput.value, 10);

const yearInput = document.querySelector('.year-input');
const inputYear = parseInt(yearInput.value, 10);

// Real dates
const newDate = new Date();
const todaysDay = newDate.getDate();
const todaysMonth = newDate.getMonth() + 1;  // Months are 0-indexed
const todaysYear = newDate.getFullYear();

// Error handling
const errorAlerts = document.querySelector('.errors');

// Reset visibility of errors
errorAlerts.style.visibility = 'hidden';

if (inputYear > todaysYear) {
    errorAlerts.style.visibility = 'visible';
    errorAlerts.innerHTML = 'Year cannot be in the future.';
    console.log('An error: Year is greater than today\'s year');
} else if (inputYear === todaysYear && inputMonth > todaysMonth) {
    errorAlerts.style.visibility = 'visible';
    errorAlerts.innerHTML = 'Month cannot be in the future.';
    console.log('An error: Month is greater than today\'s month');
} else if (inputYear === todaysYear && inputMonth === todaysMonth && inputDay > todaysDay) {
    errorAlerts.style.visibility = 'visible';
    errorAlerts.innerHTML = 'Day cannot be in the future.';
    console.log('An error: Day is greater than today\'s day');
} else {
    // Valid date, hide errors
    errorAlerts.style.visibility = 'hidden';
    console.log('Date is valid');
}
}
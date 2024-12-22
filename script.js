//inputs
let isValid = false;
const dayInputElement = document.querySelector('#day');
const monthInputElement = document.querySelector('#month');
const yearInputElement = document.querySelector('#year');

//outputs
const outputYear = document.querySelector('.button-years');
const outputMonth = document.querySelector('.button-months');
const ouputDay = document.querySelector('.button-days');

//Erros
const errorDay = document.querySelector('.day-error');
const errorMonth = document.querySelector('.month-error');
const errorYear = document.querySelector('.year-error');

//arrow button
const arrowButton = document.getElementById('arrow-button');

//dates
const currentDate = new Date;
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;
const currentDay = currentDate.getDate();

function calculateValidDate (){
    const day = +dayInputElement.value;
    const month = +monthInputElement.value;
    const year = +yearInputElement.value;
    const inputDate = new Date(year, month, day);

    if(currentDate < inputDate){
        isValid = false;
        return 'Date cannot be in the future';
    } else {
        isValid = true;
        return '';
    }
    
} 

dayInputElement.addEventListener('input', () => {    
    if(+dayInputElement.value > 31){
        errorDay.textContent = 'Must be a valid date';
        isValid = false;
    } else if (+dayInputElement.value === 0){
        errorDay.textContent = 'Please enter a number';
        isValid = false; 
    } else if (calculateValidDate() === false){
        errorDay.textContent = 'Date cannot be in the future';
        isValid = false;
    } else {
        errorDay.textContent = '';
        isValid = true;
    }
});

monthInputElement.addEventListener('input', () => {
    if(+monthInputElement.value > 12){
        errorMonth.textContent = 'Must be a valid date';
        isValid = false;
    } else if (+monthInputElement.value === 0){
        errorMonth.textContent = 'Please enter a number';
        isValid = false;
    } else if (calculateValidDate() === false){
        errorMonth.textContent = 'Date cannot be in the future';
        isValid = false;
    } else {
        errorMonth.textContent = '';
        isValid = true;
    }
});

yearInputElement.addEventListener('input', () => {
    if(+yearInputElement.value > currentYear){
        errorYear.textContent = 'Must be a valid date';
        isValid = false;
    } else if (+yearInputElement.value === 0){
        errorYear.textContent = 'Please enter a number';
        isValid = false; 
    } else if (calculateValidDate() === false){
        errorYear.textContent = 'Date cannot be in the future';
        isValid = false;
    } else {
        errorYear.textContent = '';
        isValid = true;
    }
    if (calculateValidDate()){
        errorDay.textContent = calculateValidDate(); 
        errorMonth.textContent = calculateValidDate();
        errorYear.textContent = calculateValidDate();
    } else {
        errorDay.textContent = '';
        errorMonth.textContent = '';
        errorYear.textContent = '';
    }
});
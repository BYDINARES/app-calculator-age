//inputs
let isValid = false;
const dayInputElement = document.querySelector('#day');
const monthInputElement = document.querySelector('#month');
const yearInputElement = document.querySelector('#year');
const inputsArray = [dayInputElement, monthInputElement, yearInputElement];

//outputs
const outputYear = document.querySelector('.yearOutput');
const outputMonth = document.querySelector('.monthOutput');
const outputDay = document.querySelector('.dayOutput');

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

//borders
let inputBorders = document.querySelectorAll('.top input');
let inputDayBorder = document.querySelector('.day input');
let inputMonthBorder = document.querySelector('.month input');
let inputYearBorder = document.querySelector('.year input');


function calculateValidDate (){
    const day = +dayInputElement.value;
    const month = +monthInputElement.value;
    const year = +yearInputElement.value;
    const arrayInputDate1 = [day, month, year];
    const inputDate = new Date(year, month - 1, day);
    
    for(let i = 0; i < arrayInputDate1.length; i++){
        if (arrayInputDate1[i] === day && day === 0){
            inputDayBorder.style.borderColor = 'red';
            errorDay.textContent = 'Please enter a number';
        } else if (arrayInputDate1[i] === month && month === 0){
            inputMonthBorder.style.borderColor = 'red';
            errorMonth.textContent = 'Please enter a number';
        } else if (arrayInputDate1[i] === year && year === 0){
            inputYearBorder.style.borderColor = 'red';
            errorYear.textContent = 'Please enter a number';
        }
    }
    
    if(currentDate < inputDate){
        isValid = false;
        for(let i = 0; i < inputBorders.length; i++){
            inputBorders[i].style.borderColor = 'red';
        }
        errorDay.textContent = "date can't be in the future"; 
        errorMonth.textContent = "date can't be in the future";
        errorYear.textContent = "date can't be in the future";
        return false;
    } else {
        isValid = true;
        for(let i = 0; i < inputBorders.length; i++){
            inputBorders[i].style.borderColor = '#cccccc';
        }
        errorDay.textContent = ""; 
        errorMonth.textContent = "";
        errorYear.textContent = "";       
        return true;
    }
}

//error functions
dayInputElement.addEventListener('input', () => {    
    const dayValue = +dayInputElement.value;
    
    if (isNaN(dayValue)) {
        alert('Please enter a numeric value for the day');
        errorDay.textContent = 'Please enter a positive number';
        inputDayBorder.style.borderColor = 'red';
        isValid = false;
    } else if (dayValue > 31) {
        errorDay.textContent = 'Must be a valid date';
        inputDayBorder.style.borderColor = 'red';
        isValid = false;
    } else {
        errorDay.textContent = '';
        inputDayBorder.style.borderColor = '#cccccc';
        isValid = true;
    }
});

monthInputElement.addEventListener('input', () => {
    if(+monthInputElement.value > 12){
        errorMonth.textContent = 'Must be a valid date';
        inputMonthBorder.style.borderColor = 'red';
        isValid = false;
    } else if (isNaN(+monthInputElement.value)){
        errorMonth.textContent = 'Please enter a positive number';
        inputMonthBorder.style.borderColor = 'red';
        isValid = false;
    } else {
        errorMonth.textContent = '';
        inputMonthBorder.style.borderColor = '#cccccc';
        isValid = true;
    }});

yearInputElement.addEventListener('input', () => {
    calculateValidDate();
    if(+yearInputElement.value > currentYear){
        errorYear.textContent = 'Must be in the past';
        inputYearBorder.style.borderColor = 'red';
        isValid = false;
    } else if (isNaN(+yearInputElement.value)){
        errorYear.textContent = 'Please enter a number';
        inputYearBorder.style.borderColor = 'red';
        isValid = false; 
    } else if (isValid) {
        errorYear.textContent = '';
        inputYearBorder.style.borderColor = '#cccccc';
    }
});
//Output functions
arrowButton.addEventListener('click', () => {
    //error alerts
    for (let i = 0; i < inputsArray.length; i++) {
        if (inputsArray[i].value <= 0) {
            inputsArray[i].style.borderColor = 'red';
            if (inputsArray[i] === dayInputElement) {
                errorDay.textContent = 'Please fill the boxes with a number';
            } else if (inputsArray[i] === monthInputElement) {
                errorMonth.textContent = 'Please fill the boxes with a number';
            } else if (inputsArray[i] === yearInputElement) {
                errorYear.textContent = 'Please fill the boxes with a number';
            }
        } else {
            inputsArray[i].style.borderColor = '#cccccc';
            inputsArray[i].textContent = '';
        }
    }

    if (isValid) {
        const birthday = new Date(`${yearInputElement.value}/${monthInputElement.value}/${dayInputElement.value}`);

        let ageInYears = currentYear - birthday.getFullYear();
        let ageInMonths = currentMonth - birthday.getMonth() - 1;
        let ageInDays = currentDay - birthday.getDate();

        if (currentMonth < birthday.getMonth()) {
            ageInMonths += (birthday.getMonth() - currentMonth);
        } else if(currentDate < birthday.getDate())//you still need to complete this part

        //outputs
        outputYear.textContent = ageInYears;
        outputMonth.textContent = ageInMonths;
        outputDay.textContent = ageInDays;
    } else {
        outputYear.textContent = '- -';
        outputMonth.textContent = '- -';
        outputDay.textContent = '- -';
    }
});
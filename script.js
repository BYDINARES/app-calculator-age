//inputs
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
const inputBorders = document.querySelectorAll('.top input');
const inputDayBorder = document.querySelector('.day input');
const inputMonthBorder = document.querySelector('.month input');
const inputYearBorder = document.querySelector('.year input');

//call back functions
function calculateValidDate(){
    const day = +dayInputElement.value;
    const month = +monthInputElement.value;
    const year = +yearInputElement.value;
    const inputDate = new Date(year, month - 1, day);
    
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

let maximumAmountOfDays = 0;
function daysInMonth(monthInput, yearInput){
    let daysInMonthObj = {
        1: {theMonth: 'January', days: 31},
        2: {theMonth: 'February', days: 28},
        3: {theMonth: 'March', days: 31},
        4: {theMonth: 'April', days: 30},
        5: {theMonth: 'May', days: 31},
        6: {theMonth: 'June', days: 30},
        7: {theMonth: 'July', days: 31},
        8: {theMonth: 'August', days: 31},
        9: {theMonth: 'September', days: 30},
        10: {theMonth: 'October', days: 31},
        11: {theMonth: 'November', days: 30},
        12: {theMonth: 'December', days: 31},
    }

    function isLeapYear(year){
        return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    }
    
    if (monthInput === 2 && isLeapYear(yearInput)){
        daysInMonthObj[2].days = 29;
    } else if (+dayInputElement.value.trim() > maximumAmountOfDays){
        if(maximumAmountOfDays !== 0){
            errorDay.textContent = "Worng amount of days in the month";
            inputDayBorder.style.borderColor = 'red';
            isValidDay = false;
        } else {
            errorDay.textContent = "";
            inputDayBorder.style.borderColor = '#cccccc';
            isValidDay = true;
        }
    }
    maximumAmountOfDays = daysInMonthObj[monthInput].days;
}

//error functions
let isValidDay = true;
dayInputElement.addEventListener('input', () => {    
    const dayValue = +dayInputElement.value.trim();

    if (isNaN(dayValue) || dayValue <= 0){
        errorDay.textContent = "Please enter a valid NUMBER";
        inputDayBorder.style.borderColor = 'red';
        isValidDay = false;
    } else if (dayValue > 31) {
        errorDay.textContent = 'Must be a valid date';
        inputDayBorder.style.borderColor = 'red';
        isValidDay = false;
    } else if (dayValue > maximumAmountOfDays && maximumAmountOfDays !== 0){
        errorDay.textContent = `Days must be between 1 and ${maximumAmountOfDays}`;
        inputDayBorder.style.borderColor = 'red';
        isValidDay = false;
    } else {
        errorDay.textContent = '';
        inputDayBorder.style.borderColor = '#cccccc';
        isValidDay = true;
    }
});

let isValidMonth = true;
monthInputElement.addEventListener('input', () => {
    const monthValue = +monthInputElement.value.trim();
    if(+monthValue > 12 || isNaN(monthValue) || monthValue <= 0){
        errorMonth.textContent = 'Please enter a valid month';
        inputMonthBorder.style.borderColor = 'red';
        isValidMonth = false;
    } else if (daysInMonth(monthValue)) {
        if (+dayInputElement.value.trim() > maximumAmountOfDays){
            errorDay.textContent = 'Wrong amount of days in the month';
            inputDayBorder.style.borderColor = 'red';
            isValidDay = false;
        } else {
            errorDay.textContent = '';
            inputDayBorder.style.borderColor = '#cccccc';
            isValidDay = true;
        }
    } else {
        errorMonth.textContent = '';
        inputMonthBorder.style.borderColor = '#cccccc';
        isValidMonth = true;
    }
});

let isValidYear = true;
yearInputElement.addEventListener('input', () => {
    daysInMonth(+monthInputElement.value.trim(), +yearInputElement.value.trim());
    if (+dayInputElement.value.trim() > maximumAmountOfDays){
        errorDay.textContent = 'Wrong amount of days in the month';
        inputDayBorder.style.borderColor = 'red';
        isValidDay = false;
    } else if (+dayInputElement.value.trim() <= maximumAmountOfDays){
        errorDay.textContent = '';
        inputDayBorder.style.borderColor = '#cccccc';
        isValidDay = true; 
    }
    if(+yearInputElement.value.trim() > currentYear){
        errorYear.textContent = 'Must be in the past';
        inputYearBorder.style.borderColor = 'red';
        isValidYear = false;
    } else if (isNaN(+yearInputElement.value.trim()) || +yearInputElement.value.trim() <= 0){
        errorYear.textContent = 'Please enter a valid NUMBER';
        inputYearBorder.style.borderColor = 'red';
        isValidYear = false;
    } else {
        errorYear.textContent = '';
        inputYearBorder.style.borderColor = '#cccccc';
        isValidYear = true;
    }
});

daysInMonth(+monthInputElement.value.trim(), +yearInputElement.value.trim());

function isValid(){
    if( isValidDay && isValidMonth && isValidYear){
        return true;
    } else return false;
}
//Output functions
arrowButton.addEventListener('click', () => {
    //error alerts

    if (isValid() === true) {
        const birthday = new Date(
            yearInputElement.value, 
            monthInputElement.value -1, 
            dayInputElement.value
        );

        let ageInYears = currentYear - birthday.getFullYear();
        let ageInMonths = currentMonth - birthday.getMonth() - 1;
        let ageInDays = currentDay - birthday.getDate();
        const daysInThePriorMonth = new Date(currentYear, currentMonth -1, 0).getDate();


        if(ageInDays < 0){
            ageInDays += daysInThePriorMonth;
            ageInMonths--;
        }
        
        if (ageInMonths < 0){
            ageInMonths += 12;
            ageInYears--;
        }

        if (ageInYears < 0) {
            ageInYears = 0;
        }
        //outputs
        outputYear.textContent = ageInYears >= 0 ? ageInYears : 0;
        outputMonth.textContent = ageInMonths >= 0 ? ageInMonths : 0;
        outputDay.textContent = ageInDays >= 0 ? ageInDays : 0;
    } else {
        outputYear.textContent = '- -';
        outputMonth.textContent = '- -';
        outputDay.textContent = '- -';
    }
});

/* function calculateAge(birthDate) {
    const currentDate = new Date();
    let years = currentDate.getFullYear() - birthDate.getFullYear();
    let months = currentDate.getMonth() - birthDate.getMonth();
    let days = currentDate.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentDate.getFullYear(), currentDate.getMonth(), 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

arrowButton.addEventListener('click', () => {
    const year = parseInt(document.getElementById('yearInput').value);
    const month = parseInt(document.getElementById('monthInput').value) - 1; // Months are 0-based
    const day = parseInt(document.getElementById('dayInput').value);
    const birthDate = new Date(year, month, day);

    const age = calculateAge(birthDate);
    console.log(`Age: ${age.years} years, ${age.months} months, and ${age.days} days`);
}); */

// ...existing code...
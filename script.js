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

//call back functions
function calculateValidDate(){
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
let maximumAmountOfDays = 0;
function daysInMonth(monthInput, yearInput){
    const daysInMonthObj = {
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
    

    if (daysInMonthObj[monthInput]){
        if (daysInMonth[monthInput] == 2 && isLeapYear(yearInput)){
            maximumAmountOfDays = 2;
        } else {
            maximumAmountOfDays = daysInMonthObj[monthInput].days;
            return true;
        }
        return true;
    } else {
        return false;
    }
}

//error functions
dayInputElement.addEventListener('input', () => {    
    const dayValue = +dayInputElement.value;

    if (isNaN(dayValue)) {
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
    } else if (daysInMonth(+monthInputElement.value)){
        if (dayInputElement.value > maximumAmountOfDays){
            errorDay.textContent = 'Wrong amount of days in the month';
            inputDayBorder.style.borderColor = 'red';
            isValid = 'false';
        } else {
            errorDay.textContent = '';
            inputDayBorder.style.borderColor = '#cccccc';
            isValid = true;
        }
    } else if (isNaN(+monthInputElement.value)){
        errorMonth.textContent = 'Please enter a positive number';
        inputMonthBorder.style.borderColor = 'red';
        isValid = false;
    } else {
        errorMonth.textContent = '';
        inputMonthBorder.style.borderColor = '#cccccc';
        isValid = true;
    }
});

yearInputElement.addEventListener('input', () => {
    calculateValidDate();
    daysInMonth(+monthInputElement.value, +yearInputElement.value)
    if(+yearInputElement.value > currentYear){
        errorYear.textContent = 'Must be in the past';
        inputYearBorder.style.borderColor = 'red';
        isValid = false;
    } else if (isNaN(+yearInputElement.value)){
        errorYear.textContent = 'Please enter a number';
        inputYearBorder.style.borderColor = 'red';
        isValid = false; 
    } else if (+dayInputElement.value > maximumAmountOfDays){
        errorDay.textContent = 'Wrong amount of days in the month';
        inputDayBorder.style.borderColor = 'red';
        isValid = 'false'; //continue here, because I don't know why this doesn't work.
    } 
    else if (isValid) {
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
            if (inputsArray[i] === dayInputElement){
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
        const birthday = new Date(
            yearInputElement.value, 
            monthInputElement.value -1, 
            dayInputElement.value
        );

        let ageInYears = currentYear - birthday.getFullYear();
        let ageInMonths = currentMonth - birthday.getMonth() - 1;
        let ageInDays = currentDay - birthday.getDate();

        if (currentMonth < birthday.getMonth()) {
            ageInYears--;
            ageInMonths = 12 - (birthday.getMonth() - currentMonth);
        } else if (currentMonth === birthday.getMonth() && currentDay < birthday.getDate()){
            ageInYears--;
            ageInMonths = 11;
            const daysInThePriorMonth = new Date(currentYear, currentMonth -1, 0).getDate();
            ageInDays = daysInThePriorMonth - birthday.getDate() + currentDay;
        }
            //WE NEED A AN ELSE IF HERE IF THE BIRTHDAY DAY IS LATER THAN THE CURRENT ONE.

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
/* function calculateDaysFromDate(date) {
    const inputDate = new Date(date);
    const timeDifference = currentDate - inputDate;
    const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    return daysDifference;
}
function calculateTimePassed(date) {
    const inputDate = new Date(date);
    let years = currentYear - inputDate.getFullYear();
    let months = currentMonth - (inputDate.getMonth() + 1);
    let days = currentDay - inputDate.getDate();

    if (days < 0) {
        months--;
        days += new Date(currentYear, currentMonth - 1, 0).getDate();
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
} */
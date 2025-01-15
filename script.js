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
        for(let i = 0; i < inputBorders.length; i++){
            inputBorders[i].style.borderColor = 'red';
        }
        errorDay.textContent = "date can't be in the future"; 
        errorMonth.textContent = "date can't be in the future";
        errorYear.textContent = "date can't be in the future";
        return false;
    } else {
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

    if(+monthValue > 12 || isNaN(monthValue) || monthValue == 0){
        errorMonth.textContent = 'Please enter a valid NUMBER';
        inputMonthBorder.style.borderColor = 'red';
        isValidMonth = false;
    } else {
        errorMonth.textContent = '';
        inputMonthBorder.style.borderColor = '#cccccc';
        isValidMonth = true;
    }

    daysInMonth(monthValue, +yearInputElement.value.trim());

    if (+dayInputElement.value.trim() > maximumAmountOfDays){
        errorDay.textContent = `Days must be between 1 and ${maximumAmountOfDays}`;
        inputDayBorder.style.borderColor = 'red';
        isValidDay = false;
    } else {
        errorDay.textContent = '';
        inputDayBorder.style.borderColor = '#cccccc';
        isValidDay = true;
    }
});

let isValidYear = true;
yearInputElement.addEventListener('input', () => {
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

    daysInMonth(+monthInputElement.value.trim(), +yearInputElement.value.trim());

    if (+dayInputElement.value.trim() > maximumAmountOfDays){
        errorDay.textContent = `Days must be between 1 and ${maximumAmountOfDays}`;
        inputDayBorder.style.borderColor = 'red';
        isValidDay = false;
    } else if (+dayInputElement.value.trim() <= maximumAmountOfDays){
        errorDay.textContent = '';
        inputDayBorder.style.borderColor = '#cccccc';
        isValidDay = true; 
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

    let listItems = document.querySelectorAll(".bottom li");

    calculateValidDate();
    if (isValid() === true && calculateValidDate()) {
        //date inputs
        let yearValue2 = parseInt(yearInputElement.value.trim(), 10);
        let monthValue2 = parseInt(monthInputElement.value.trim(), 10);
        let dayValue2 = parseInt(dayInputElement.value.trim(), 10);

        //Birthday date
        const birthday = new Date(yearValue2, monthValue2 - 1, dayValue2);
        const birthdayYear = birthday.getFullYear();

        if (birthdayYear < 100){
        birthdayYear -= 1900;
        }

        //outputs numbers
        let ageInYears = currentYear - birthdayYear;
        let ageInMonths = currentMonth - birthday.getMonth() - 1;
        let ageInDays = currentDay - birthday.getDate();
        const daysInThePriorMonth = new Date(currentYear, currentMonth -1, 0).getDate();

        // edge cases
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

        //animation
        listItems.forEach((item, index) => {
            setTimeout(() => {
              item.classList.add("animate");
            }, index * 150);
        });
        // Optionally, remove the class after animation completes to reset
        setTimeout(() => {
            listItems.forEach(item => {
                item.classList.remove('animate');
            });
        }, 600);
        
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
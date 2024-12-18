const arrowButton = document.getElementById('arrow-button');

function dateToYearsMonthsDays() {
    //Input dates//
    
    const dayImput = document.querySelector('.day-input');
    const inputDay = Number(dayImput?.value);

    const monthImput = document.querySelector('.month-input');
    const inputMonth = Number(monthImput?.value);

    const yearImput = document.querySelector('.year-input');
    const inputYear = Number(yearImput?.value);


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
        errorAlerts.textContent = 'Invalid year. Please enter a past or the actual year';  
        errorAlerts.style.visibility = 'visible';
        return;
    } else if (inputMonth < 1 || inputMonth > 12) {
        errorAlerts.textContent = 'Invalid month. Please enter a month between 1-12';
        errorAlerts.style.visibility = 'visible';
        return;
    } else if (inputDay < 1 || inputDay > 31){
        errorAlerts.textContent = 'Invalid day. Please enter a day between 1-31';
        errorAlerts.style.visibility = 'visible';
        return;    
    } else {
        errorAlerts.style.visibility = 'hidden';
    }

    console.log('hello');
}
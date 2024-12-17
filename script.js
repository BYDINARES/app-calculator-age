const arrowButton = document.getElementById('arrow-button');

function dateToYearsMonthsDays() {
    //Input dates//
    
    const dayImput = document.querySelector('.day-input');
    const inputDay = parseInt(dayImput.value, 10);

    const monthImput = document.querySelector('.month-input');
    const inputMonth = parseInt(monthImput.value, 10);

    const yearImput = document.querySelector('.year-input');
    const inputYear = parseInt(yearImput.value, 10);


    //Real dates//
    const newDate = new Date();
    const todaysDay = newDate.getDate();
    const todaysMonth = newDate.getMonth() + 1;
    const todaysYear = newDate.getFullYear();

    //Erros//
    const errorAlerts = document.querySelector('.errors');

    
    if (inputYear > todaysYear) {
        errorAlerts.style.visibility = 'visible';
        console.log('An error');
    } else {
        errorAlerts.style.visibility = 'hidden';
    }
}
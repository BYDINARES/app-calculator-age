function dateToYearsMonthsDays() {
    //Input dates//
    let dayImput = document.querySelector('.day-input');
    let monthImput = document.querySelector('.month-input');
    let yearImput = document.querySelector('.year-input');

    const arrowButton = document.getElementById('arrow-button');

    //Real dates//
    const newDate = new Date();
    let todaysDay = newDate.getDate();
    let todaysMonth = newDate.getMonth();
    let todaysYear = newDate.getFullYear();

    //Erros//
    const errorAlerts = document.querySelector('.errors');

    if (yearImput > todaysYear) {
        return errorAlerts.style.visibility = 'hidden'; 
    }
}
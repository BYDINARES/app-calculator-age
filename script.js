//Input dates//
let dayImput = document.getElementsByTagName('day-input');
let monthImput = document.querySelector('.month-input');
let yearImput = document.querySelector('.year-input');

const arrowButton = document.getElementById('arrow-button');

//Real dates//
let todaysDay = new Date.prototype.getDate();
let todaysMonth = new Date.prototype.getMonth();
let todaysYear = new Date.prototype.getFullYear();

const actualDay = todaysDay - dayImput;
// var jumbotronEl = document.querySelector(".jumbotron");
// var currentDayEl = document.querySelector("#current-day");
// currentDayEl.textContent = moment().format('MMMM Do YYYY, h:mm:ss a');
// currentDayEl.textContent = "Hello";
// var containerEl = document.querySelector(".container");
// var saveBtnEl = document.querySelector(".saveBtn");
var day = moment().format('MMMM Do YYYY, h:mm:ss a');
$("#current-day").text(day);


// TODO:
// Display Time
// Timeblock change color
// save text from Timeblock
// saves to local storage 
// persists when page refreshes 

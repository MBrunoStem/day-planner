function displayTime() {
    var day = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#current-day').html(day);
    setInterval(displayTime, 1000);
}
displayTime();

// TODO:
// Display Time
// Timeblock change color
// save text from Timeblock
// saves to local storage 
// persists when page refreshes 

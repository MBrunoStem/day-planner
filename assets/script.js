function displayDay() {
    var day = moment().format('MMMM Do YYYY');
    $('#current-day').html(day);
    setInterval(displayDay, 1000);
}
displayDay();

function displayTime() {
    var time = moment().format('h:mm:ss a');
    $('#current-time').html(time);
    setInterval(displayTime, 1000);
}
displayTime();

var schedule = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"];
var timeID = ["9-AM", "10-AM", "11-AM", "12-PM", "1-PM", "2-PM", "3-PM", "4-PM", "5-PM"]
for (var i = 0; i < schedule.length; i++) {
    $("#timeblocks").append(`<div id="${timeID[i]}" class="timeblock row present">
    <div class="hour col-1">
    ${schedule[i]}
    </div>
    <textarea class="description col-10">
     </textarea>
    <button type="submit" class="saveBtn col-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
        fill="currentColor" class="bi bi-calendar2-plus-fill" viewBox="0 0 16 16">
        <path
          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 3.5v1c0 .276.244.5.545.5h10.91c.3 0 .545-.224.545-.5v-1c0-.276-.244-.5-.546-.5H2.545c-.3 0-.545.224-.545.5zm6.5 5a.5.5 0 0 0-1 0V10H6a.5.5 0 0 0 0 1h1.5v1.5a.5.5 0 0 0 1 0V11H10a.5.5 0 0 0 0-1H8.5V8.5z" />
      </svg></button>
  </div>`);
}

$(".saveBtn").on("click", function (event) {
    event.preventDefault
    var descriptionEl = $(this).siblings('.description').val();
    var descId = $(this).parent().attr('id')
   
    console.log(descId ,descriptionEl)
    localStorage.setItem(descId, descriptionEl);
})

$(document).ready(() => {
    
       $("#9-AM .description").val(localStorage.getItem('9AM'))
       $("#10-AM .description").val(localStorage.getItem('10AM'))
       $("#11-AM .description").val(localStorage.getItem('11AM'))
       $("#12-PM .description").val(localStorage.getItem('12PM'))
       $("#1-PM .description").val(localStorage.getItem('1PM'))
       $("#2-PM .description").val(localStorage.getItem('2PM'))
       $("#3-PM .description").val(localStorage.getItem('3PM'))
       $("#4-PM .description").val(localStorage.getItem('4PM'))
       $("#5-PM .description").val(localStorage.getItem('5PM'))
    
})
function checkHour(){
    var currentHour = moment().format("h")
    console.log(currentHour)
$('.timeblock').each(function(){
    var timeCheck = $(this).attr("id").split('-')[0]
    console.log(timeCheck);
    // console.log(currentHour)
    if(timeCheck > currentHour){
        $(this).addClass('future')
    } else if (timeCheck === currentHour){
        $(this).addClass('present')
        $(this).removeClass('future')
    } else {
         $(this).addClass('present')
        $(this).removeClass('future')
    }
})
}
checkHour()
setInterval(checkHour, 5000)

// TODO:
// Display Time
// Timeblock change color
// save text from Timeblock
// saves to local storage 
// persists when page refreshes 


// function paletteSwap(time) {
//     var hourEL = $(".hour").html();
//     if(hourEL < time ) {
//         timeblockEL.attr("class", "timeblock row past")
//     }
// }
// paletteSwap();
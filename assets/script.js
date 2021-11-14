function displayTime() {
    var day = moment().format('MMMM Do YYYY, h:mm:ss a');
    $('#current-day').html(day);
    setInterval(displayTime, 1000);
}
displayTime();

var schedule = ["9:00AM", "10:00AM", "11:00AM", "12:00PM", "1:00PM", "2:00PM", "3:00PM", "4:00PM", "5:00PM"];
for (var i = 0; i < schedule.length; i++) {
    $("#timeblocks").append(`<div id="time" class="timeblock row present">
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

$(".saveBtn").on("click", function name(params) {
    var descriptionEl = $(".desription").text();
    localStorage.setItem("appointment", JSON.stringify(descriptionEl));
})

// function setApp() {
//     localStorage.setItem($(".description").val())

// }

// function saveAppointment() {
//     var descriptionEl = document.querySelector(".description");
//     var task = descriptionEl.textContent;
//     localStorage.setItem("appointment", task)
// }

// $(".saveBtn").on("click", saveAppointment())


// function palette(){

// }



// TODO:
// Display Time
// Timeblock change color
// save text from Timeblock
// saves to local storage 
// persists when page refreshes 
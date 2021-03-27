var currDay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").append(currDay);

var currTime = new Date().getHours();

for (let rows = 9; rows < 18; rows++) {
  //Determine row color based on curr time
  var statuClass = "";
  if (currTime === rows) {
    statusClass = "present"
  } else if (currTime > rows) {
    statusClass = "past"
  } else {
    statusClass = "future"
  }

  // create button
  var createButton = document.createElement("button");
  createButton.setAttribute("class", "col-1 saveBtn");
  createButton.innerHTML = '<i class="far fa-save"></i>'

  // create text area
  var createTextArea = document.createElement("textarea");
  var storageValue = localStorage.getItem('hour' + rows)
  createTextArea.setAttribute("class", "col-10 form-control " + statusClass);
  createTextArea.textContent = storageValue

  // create time-block
  var createTimeBlock = document.createElement("div");
  createTimeBlock.setAttribute("class", "col-1 hour")
  if (rows < 12) {
    createTimeBlock.innerHTML = rows + ' AM'
  } else if (rows === 12) {
    createTimeBlock.innerHTML = rows + ' PM'
  } else {
    createTimeBlock.innerHTML = (rows - 12) + ' PM'
  }

  // create new row 
  var containerEl = document.querySelector(".container");

  var createRow = document.createElement("div");
  createRow.setAttribute("class", "row")
  createRow.setAttribute("id", "hour" + rows)
  createRow.appendChild(createTimeBlock)
  createRow.appendChild(createTextArea)
  createRow.appendChild(createButton)
  containerEl.appendChild(createRow)

  console.log('row= ' + rows + ' status ' + statusClass)

}

$(".saveBtn").on("click", function () {
  console.log(this);
  var text = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");

  //set items in local storage.
  localStorage.setItem(time, text);
})




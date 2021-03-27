var currDay = moment().format("dddd LL");
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
  createTextArea.setAttribute("class", "col-10 description form-control " + statusClass);

  // create time-block
  var createTimeBlock = document.createElement("div");
  createTimeBlock.setAttribute("class", "col-1 hour")
  createTimeBlock.innerHTML = rows + ' AM'

  // create new row 
  var containerEl = document.querySelector(".container");

  var createRow = document.createElement("div");
  createRow.setAttribute("class", "row")
  createRow.appendChild(createTimeBlock)
  createRow.appendChild(createTextArea)
  createRow.appendChild(createButton)
  containerEl.appendChild(createRow)

  console.log('row= ' + rows + ' status ' + statusClass)

}




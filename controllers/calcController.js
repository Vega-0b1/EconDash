$( document ).ready(function() {
  loadLists();
  eventSetup();
  loadCurrentMonth();
});

function calc(){
  var incomeValues = retrieveValueData("income");
  var savingsValues = retrieveValueData("savings");
  var billValues = retrieveValueData("bill");
  var incomeSum = 0;

  for(var i=0; i<incomeValues.length; i++){
      incomeSum += parseFloat(incomeValues[i]);
  }

  var savingsSum = 0;

  for(var i=0; i<savingsValues.length; i++){
      savingsSum += parseFloat(savingsValues[i]);
  }

  var billSum = 0;

  for(var i=0; i<billValues.length; i++){
      billSum += parseFloat(billValues[i]);
  }

  var total = incomeSum - savingsSum - billSum;
  total = total.toFixed(2);
  var output = document.getElementById("output");;

  output.innerHTML = "$" + total;
}

function loadCurrentMonth(){
  var myDate = new Date();

  var month = new Array();
  month[0] = "January";
  month[1] = "February";
  month[2] = "March";
  month[3] = "April";
  month[4] = "May";
  month[5] = "June";
  month[6] = "July";
  month[7] = "August";
  month[8] = "September";
  month[9] = "October";
  month[10] = "November";
  month[11] = "December";
  var currentMonth = month[myDate.getMonth()];

  var place = document.getElementById("thisMonth");
  place.innerHTML = currentMonth;
}

setInterval(function(){
  saveLists();
}, 5000);

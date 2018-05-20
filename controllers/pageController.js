function newElement(name) {
  var inputValue = document.getElementById(name).value;

  if (inputValue === '') {
    alert("You must write something!");
  }
  else{
    var li = document.createElement("li");
    var valueBox = document.createElement("SPAN");
    var newValue = document.createTextNode(inputValue);
    var nameBox = document.createElement("SPAN");
    var newName = document.createTextNode("New " + name);
    valueBox.appendChild(newValue)
    valueBox.className = "valueBox";
    valueBox.contentEditable = "true";
    nameBox.appendChild(newName);
    nameBox.className = "nameBox";
    nameBox.contentEditable = "true";

    li.appendChild(nameBox);
    li.appendChild(valueBox);
    document.getElementById(name + "-ul").appendChild(li);
  }
  document.getElementById(name).value = "";

  var span = document.createElement("SPAN");
  var ex = document.createTextNode("\u00D7");

  span.className = "close";
  span.appendChild(ex);
  li.appendChild(span);

  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
  saveLists();
}

function eventSetup(){
  var incomeBtn = document.getElementById("add-income");
  incomeBtn.onclick = function(){
    newElement("income");
  };

  var savingsBtn = document.getElementById("add-savings");
  savingsBtn.onclick = function(){
    newElement("savings");
  };

  var billsBtn = document.getElementById("add-bills");
  billsBtn.onclick = function(){
    newElement("bill");
  };

  var calcBtn = document.getElementById("calc");
  calcBtn.onclick = function(){
    calc();
  };
}

function saveLists(){
  var incomeNames = retrieveNameData("income");
  var incomeValues = retrieveValueData("income");
  var savingsNames = retrieveNameData("savings");
  var savingsValues = retrieveValueData("savings");
  var billNames = retrieveNameData("bill");
  var billValues = retrieveValueData("bill");

  var myList = new lists(incomeNames, incomeValues,savingsNames, savingsValues, billNames, billValues);
  localStorage.clear();
  localStorage.setItem("data", JSON.stringify(myList));
}

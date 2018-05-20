function loadLists(){
  var list = JSON.parse(localStorage.getItem("data"));
  populateList(list);
}

function lists(incomeNames, incomeValues, savingsNames, savingsValues, billNames, billValues){
  this.incomeNames = incomeNames;
  this.incomeValues = incomeValues;

  this.savingsNames = savingsNames;
  this.savingsValues = savingsValues;

  this.billNames = billNames;
  this.billValues = billValues;
}

function retrieveNameData(type){
  var list = document.getElementById(type + "-ul");
  var nameCount = list.getElementsByClassName("nameBox").length;
  var names = [];

  for(var i=0; i<nameCount; i++){
    names.push(list.getElementsByClassName("nameBox")[i].childNodes[0].nodeValue);
  }
  return names;
}

function retrieveValueData(type){
  var list = document.getElementById(type + "-ul");
  var valueCount = list.getElementsByClassName("valueBox").length;
  var values = [];

  for(var i=0; i<valueCount; i++){
    values.push(list.getElementsByClassName("valueBox")[i].childNodes[0].nodeValue);
  }
  return values;
}

function populateList(list) {
  for(var i=0; list.incomeNames.length > i; i++){
    var li = document.createElement("li");
    var inputValue = list.incomeValues[i];
    var valueBox = document.createElement("SPAN");
    var newValue = document.createTextNode(inputValue);
    valueBox.appendChild(newValue)
    valueBox.className = "valueBox";

    var nameBox = document.createElement("SPAN");
    var newName = document.createTextNode(list.incomeNames[i]);
    nameBox.appendChild(newName);
    nameBox.className = "nameBox";
    nameBox.contentEditable = "true";
    valueBox.contentEditable = "true";
    li.appendChild(nameBox);
    li.appendChild(valueBox);
    document.getElementById("income-ul").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  }
  for(var i=0; list.savingsNames.length > i; i++){
    var li = document.createElement("li");
    var inputValue = list.savingsValues[i];
    var valueBox = document.createElement("SPAN");
    var newValue = document.createTextNode(inputValue);
    valueBox.appendChild(newValue)
    valueBox.className = "valueBox";

    var nameBox = document.createElement("SPAN");
    var newName = document.createTextNode(list.savingsNames[i]);
    nameBox.appendChild(newName);
    nameBox.className = "nameBox";
    nameBox.contentEditable = "true";
    valueBox.contentEditable = "true";
    li.appendChild(nameBox);
    li.appendChild(valueBox);
    document.getElementById("savings-ul").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  }
  for(var i=0; list.billNames.length > i; i++){
    var li = document.createElement("li");
    var inputValue = list.billValues[i];
    var valueBox = document.createElement("SPAN");
    var newValue = document.createTextNode(inputValue);
    valueBox.appendChild(newValue)
    valueBox.className = "valueBox";

    var nameBox = document.createElement("SPAN");
    var newName = document.createTextNode(list.billNames[i]);
    nameBox.appendChild(newName);
    nameBox.className = "nameBox";
    nameBox.contentEditable = "true";
    valueBox.contentEditable = "true";
    li.appendChild(nameBox);
    li.appendChild(valueBox);
    document.getElementById("bill-ul").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");

    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  }

  var close = document.getElementsByClassName("close");
  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.remove();
      saveLists();
    }
  }
}

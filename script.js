document.addEventListener("DOMContentLoaded", function() {

  var inputNumber = document.getElementById('inputNumber');
  var submitButton = document.getElementById('submitButton');
  var resultBox = document.getElementById("result");
  var historyBox = document.getElementById("get_history");
 
  inputNumber.addEventListener("keyup", function() {

    if (inputNumber.value.length == 6) {
        submitButton.removeAttribute("disabled");
    } else {
        submitButton.setAttribute("disabled", null);
    }
  });

  historyBox.onclick = function () {

  	var view = '';
  	var xhttp = new XMLHttpRequest();

  	xhttp.open("GET", "http://localhost:8080/history", true);
  	xhttp.send();
  	xhttp.onreadystatechange = function () {
  	  if (xhttp.readyState == 4) {

	    var tickets = JSON.parse(xhttp.response);
	  	var counter = 0;

	  	for (var ticket in tickets) {
	  	  counter += 1;
	  	  view += '<tr><td>' + String(tickets[ticket].number) + '</td>' + '<td>' + String(tickets[ticket].count) + '</td></tr>';
	  	}

	  	document.getElementById("history").innerHTML = '';
	  	if (Object.keys(tickets).length == 0) {
	  	  document.getElementById("history").innerHTML = '<h3>No records yet</h3>'
	  	} else {
	  	  document.getElementById("history").innerHTML = view;
	  	}
	  }	  
    }
  };

  submitButton.onclick = function () {

  	var xhttp = new XMLHttpRequest();
	var number = [document.getElementById("inputNumber").value];

	xhttp.open("POST", "http://localhost:8080/", true);
	xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.setRequestHeader("DataType", "json");

	json = JSON.stringify(number);
	xhttp.send(json);

	xhttp.onreadystatechange = function () {

	  if (xhttp.response == 'true') {
	  	resultBox.style.backgroundColor = "green";
	  } else {
	  	resultBox.style.backgroundColor = "red";
	  }
	};
  }
});
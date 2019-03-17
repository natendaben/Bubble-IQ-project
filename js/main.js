var textField = document.getElementById("textField");
var addButton = document.getElementById("addButton");

function addListItem(content){
	var list = document.getElementById("list");
	var newEntry = document.createElement("li");
	newEntry.appendChild(document.createTextNode(content));
	list.appendChild(newEntry);
}

function grabText(){ //gets text from input field and adds new listitem with it
	var textContent = textField.value; //save text from text field to variable
	if(textContent != ""){ //check to make sure text field isn't blank
		textField.value = ""; //clear text field
		addListItem(textContent); //adds new item to list with saved text
	}
}

addButton.addEventListener("click", grabText); //starts the process to add new item to list with grabText function


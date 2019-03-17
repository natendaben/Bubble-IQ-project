var textField = document.getElementById("textField");
var addButton = document.getElementById("addButton");

function addListItem(content){
	var list = document.getElementById("list"); //grab list
	var newEntry = document.createElement("li"); //create new list item
	newEntry.appendChild(document.createTextNode(content)); //add text to list item
	var newSpan = document.createElement("span"); //create new span for close button
	newSpan.appendChild(document.createTextNode("\u0FBE")); //put new close button in span
	newSpan.className = "closeButton"; //give span a class
	newSpan.onclick = function(){ //add onclick event to new to-do item
		var deleteNode = this.parentElement; //grab to-do item
		deleteNode.remove(); //delete to-do item
		//console.log("deleted node");
	}
	newEntry.appendChild(newSpan); //attach span to new list item
	list.appendChild(newEntry); //attach new list item to list
}

function grabText(){ //gets text from input field and adds new listitem with it
	var textContent = textField.value; //save text from text field to variable
	if(textContent != ""){ //check to make sure text field isn't blank
		textField.value = ""; //clear text field
		addListItem(textContent); //adds new item to list with saved text
	}
}

addButton.addEventListener("click", grabText); //starts the process to add new item to list with grabText function


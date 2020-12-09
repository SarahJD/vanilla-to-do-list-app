document.querySelector(".add-button").addEventListener("click", addItem);

/* add new Item to To-do-List, create X-button, add event listeners and and call function to clear input-field*/
function addItem() {
  let inputValue = document.querySelector(".input").value;
  if (inputValue === "") {
    alert("You must write something!");
  } else {
    let listItem = document.createElement("li");
    listItem.addEventListener("dblclick", crossOut);
    let text = document.createTextNode(inputValue);
    let list = document.querySelector(".list");
    list.appendChild(listItem);
    listItem.appendChild(text);
    let crossOutButton = document.createElement("button");
    let xSign = document.createTextNode("X");
    crossOutButton.appendChild(xSign);
    listItem.appendChild(crossOutButton);
    crossOutButton.classList.add("cross-out-button");
    crossOutButton.addEventListener("click", deleteListItem);
    clearInput();
  }
}

// clear input-field
function clearInput() {
  document.querySelector(".input").value = "";
}

// cross out list-item
function crossOut() {
  this.classList.toggle("cross-out");
}

//delete list-item
function deleteListItem() {
  this.parentNode.remove();
}

const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");

function additem(e) {
  e.preventDefault();

  const newitem = itemInput.value;
  if (newitem == "") {
    alert("please add item");
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newitem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
  itemInput.value = "";
}

function createButton(classes) {
  const button = document.createElement("button");
  button.className = classes;
  const Icon = createIcon("fa-solid fa-xmark");
  button.appendChild(Icon);
  return button;
}

function createIcon(classes) {
  const Icon = document.createElement("i");
  Icon.className = classes;
  return Icon;
}

itemForm.addEventListener("submit", additem);

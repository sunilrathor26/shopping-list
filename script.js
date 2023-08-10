const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const clearbtn = document.getElementById("clear");
const filter = document.getElementById("filter");

function additem(e) {
  e.preventDefault();

  const newitem = itemInput.value;
  if (newitem == "") {
    alert("please add item");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(newitem));

  const button = createButton("remove-item btn-link text-red");
  li.appendChild(button);
  itemList.appendChild(li);
  checkUI();
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

function removeItem(e) {
  if (e.target.parentElement.classList.contains("remove-item")) {
    if (confirm("are u sure to remove")) {
      e.target.parentElement.parentElement.remove();
    }
    checkUI();
  }
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.removeChild(itemList.firstChild);
  }
  checkUI();
}

function filterItem(e) {
  const items = itemList.querySelectorAll("li");
  const inputItem = e.target.value.toLowerCase();
  items.forEach((i) => {
    const itemName = i.firstChild.textContent.toLowerCase();
    if (itemName.indexOf(inputItem) != -1) {
      i.style.display = "flex";
    } else {
      i.style.display = "none";
    }
  });
}

function checkUI() {
  const items = itemList.querySelectorAll("li");
  if (items.length === 0) {
    clearbtn.style.display = "none";
    filter.style.display = "none";
  } else {
    clearbtn.style.display = "block";
    filter.style.display = "block";
  }
}

itemForm.addEventListener("submit", additem);
itemList.addEventListener("click", removeItem);
clearbtn.addEventListener("click", clearItems);
filter.addEventListener("input", filterItem);

checkUI();

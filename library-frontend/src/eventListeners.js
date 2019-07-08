function filterResults(choice) {
  const newChoice = choice.target.value;
  document.querySelector("main").innerHTML = ''
  if (newChoice == "Book") {
    displayBooks()
  }else if (newChoice == "Journal") {
    displayJournals()
  }else if (newChoice == "Magazine") {
    displayMagazines()
  }else if (newChoice == "ConferenceProceeding") {
    displayConferenceProceedings()
  }else {
    displayLibrary()
  }
}

function addItem(click) {
  console.log("add");
}
function deleteItem(click) {
  console.log("delete");

}

function editItem(click) {
  console.log("edit");

}
function checkoutItem(click) {
  console.log("checkout");

}

function buttonFunctionality(click) {
  if (click.target.classList.contains("checkout")) {
    checkoutItem(click.target);
  }else if (click.target.classList.contains("edit")) {
    editItem(click.target);
  }else if (click.target.classList.contains("delete")) {
    deleteItem(click.target);
  }else if (click.target.classList.contains("add-item")) {
    addItem(click.target);
  }
}
function addAllListeners() {
  const dropDown = document.querySelector(".filter")
  dropDown.addEventListener("change", filterResults)
  document.body.addEventListener("click", buttonFunctionality)
}

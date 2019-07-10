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

function submitNewItem(e) {
  e.preventDefault()

  let commonItems = {
    name: e.target[0].value,
    publisher: e.target[1].value,
    description: e.target[2].value,
    url: e.target[3].value,
  }
  const itemType = e.target[4].value;

  if (itemType == "Book") {
    submitBook(commonItems, e.target[5].value, e.target[6].value)
  }else if (itemType == "Journal") {
    submitJournal(commonItems, e.target[5].value)
  }else if (itemType == "Magazine") {
    submitMagazine(commonItems, e.target[5].value, e.target[6].value)
  }else if (itemType == "ConferenceProceeding") {
    submitConferenceProceeding(commonItems, e.target[5].value, e.target[6].value, e.target[7].value)
  }
  resetForm()
  closeModule()
}

function submitUpdatedItem(e, currentItem) {
  e.preventDefault()

  let commonItems = {
    name: e.target[0].value,
    publisher: e.target[1].value,
    description: e.target[2].value,
    url: e.target[3].value,
  }
  const itemType = e.target[4].value;

  if (itemType == "Book") {
    submitEditedBook(commonItems, e.target[5].value, e.target[6].value, currentItem)
  }else if (itemType == "Journal") {
    submitEditedJournal(commonItems, e.target[5].value, currentItem)
  }else if (itemType == "Magazine") {
    submitEditedMagazine(commonItems, e.target[5].value, e.target[6].value, currentItem)
  }else if (itemType == "ConferenceProceeding") {
    submitEditedConferenceProceeding(commonItems, e.target[5].value, e.target[6].value, e.target[7].value, currentItem)
  }
  resetForm()
  closeModule()
  currentItem.remove()
}
function chooseFormOptions(option) {
  const formOptions = document.querySelector(".form-options")

  if (option.target.value == "Book") {
    displayBooksOptions(formOptions)
  }else if (option.target.value == "Journal") {
    displayJournalsOptions(formOptions)
  }else if (option.target.value == "Magazine") {
    displayMagazinesOptions(formOptions)
  }else if (option.target.value == "ConferenceProceeding") {
    displayConferenceProceedingsOptions(formOptions)
  }
}

function addItem() {
  formModule();
  const addForm = document.querySelector("form.add-library-item")
  const choiceDropDown = addForm.querySelector(".item-type")
  choiceDropDown.removeAttribute("disabled")
  choiceDropDown.addEventListener("change", chooseFormOptions)
  addForm.addEventListener("submit", submitNewItem)
}
function deleteItem(click) {
  // console.log("delete");
  deleteLibraryItem(click.parentNode.parentNode)
}

function editItem(click) {
  formModule();

  const currentItem = click.parentNode.parentNode;
  fetchCurrentItemInfo(currentItem)
  const editedForm = document.querySelector("form.add-library-item")

  editedForm.addEventListener("submit", e => submitUpdatedItem(e, currentItem))
}
function checkoutItem(click) {
  console.log("checkout");

}

function buttonFunctionality(click) {
  // console.log(click.target.classList);
  if (click.target.classList.contains("checkout")) {
    checkoutItem(click.target);
  }else if (click.target.classList.contains("edit")) {
    editItem(click.target);
  }else if (click.target.classList.contains("delete")) {
    deleteItem(click.target);
  }else if (click.target.classList.contains("add-item")) {
    addItem();
  }else if (click.target.classList.contains("exit") || click.target.classList.contains("fas")) {
    resetForm()
    closeModule()
  }
}
function addAllListeners() {
  const dropDown = document.querySelector(".filter")
  dropDown.addEventListener("change", filterResults)
  document.body.addEventListener("click", buttonFunctionality)
}

function addRegisterElements(e,form) {
  const regFormElements = generateRegisterFormElements();
  form.insertBefore(regFormElements,form.lastChild)
  const dropDrownOptions = form.querySelector(".student-faculty-filter")
  // dropDrownOptions.addEventListener()
  // displayFormOptions()
  dropDrownOptions.addEventListener("change", chooseFormOptions)
  const loginChoice = showRegister(e)
  loginChoice.addEventListener("click", loginInstead)
}

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
  const createFormOptions = document.querySelector(".form-options")
  const regFormOptions = document.querySelector(".reg-form-options")

  if (option.target.value == "Book") {
    displayBooksOptions(createFormOptions)
  }else if (option.target.value == "Journal") {
    displayJournalsOptions(createFormOptions)
  }else if (option.target.value == "Magazine") {
    displayMagazinesOptions(createFormOptions)
  }else if (option.target.value == "ConferenceProceeding") {
    displayConferenceProceedingsOptions(createFormOptions)
  }else if (option.target.value == "Student") {
    displayStudentOptions(regFormOptions)
  }else if (option.target.value == "Faculty") {
    displayFacultyOptions(regFormOptions)
  }
}

function addItem() {
  formModule();
  const addForm = document.querySelector("form.add-library-item")
  const choiceDropDown = addForm.querySelector(".item-type")
  choiceDropDown.removeAttribute("disabled")
  choiceDropDown.addEventListener("change", chooseFormOptions)
  addForm.removeEventListener("submit", submitUpdatedItem);
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
  editedForm.removeEventListener("submit", submitNewItem);
  editedForm.addEventListener("submit", e => submitUpdatedItem(e, currentItem))
}
function checkoutItem(click) {
  // console.log("WHAR", click);
  const div = click.parentNode.parentNode
  const userId = document.body.dataset.userId
  const libraryItemId = div.dataset.libraryItemId
  checkoutItemRequest(userId, libraryItemId, div);
}
function returnItem(click) {
  // console.log("WHAR", click);
  const div = click.parentNode.parentNode
  const userId = document.body.dataset.userId
  const libraryItemId = div.dataset.libraryItemId
  returnItemRequest(userId, libraryItemId, div);
}
function reserveItem(click) {
  // console.log("here");
  const div = click.parentNode.parentNode
  const userId = document.body.dataset.userId
  const libraryItemId = div.dataset.libraryItemId
  reserveItemRequest(userId, libraryItemId, div);
}
function unReserveItem(click) {
  // console.log("dsadhere");
  const reservationId = click.dataset.reservationId
  const div = click.parentNode.parentNode
  unReserveItemRequest(reservationId, div);
}
function buttonFunctionality(click) {
  // console.log(click.target.classList);
  if (click.target.classList.contains("checkout")) {
    checkoutItem(click.target);
  }else if (click.target.classList.contains("return")) {
    returnItem(click.target);
  }else if (click.target.classList.contains("reserve")) {
    reserveItem(click.target);
  }else if (click.target.classList.contains("delete-reservation")) {
    unReserveItem(click.target);
  }else if (click.target.classList.contains("edit")) {
    editItem(click.target);
  }else if (click.target.classList.contains("delete")) {
    deleteItem(click.target);
  }else if (click.target.classList.contains("add-item")) {
    addItem();
  }else if (click.target.classList.contains("close-check-menu") || click.target.classList.contains("check-menu-icon")) {
    // console.log("click");
    closeNav();
  }else if (click.target.classList.contains("open-check-menu")) {
    // console.log("click");
    openNav();
  }else if (click.target.classList.contains("exit") || click.target.classList.contains("fas")) {
    resetForm()
    closeModule()
  }
}
function loginUser(e) {
  e.preventDefault()
  // console.log(e.target.children.length);
  if (e.target.children.length === 3) {
    loginRequest(e.target)
  }else{
    registerRequest(e.target)
  }
}



function addAllListeners() {
  const dropDown = document.querySelector(".filter")
  const registrationBtn = document.querySelector(".register-btn")
  const regForm = registrationBtn.parentNode.querySelector("form")
  registrationBtn.addEventListener("click", e => addRegisterElements(e,regForm))


  dropDown.addEventListener("change", filterResults)
  document.body.addEventListener("click", buttonFunctionality)
}

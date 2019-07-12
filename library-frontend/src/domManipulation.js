function getCommonElements() {
  const item = document.createElement("div");
  const img = document.createElement("img");
  const itemInfo = document.createElement("div");
  const name = document.createElement("p");
  const publisher = document.createElement("p");
  const description = document.createElement("p");
  const buttonsDiv = document.createElement("div");
  const checkoutBtn = document.createElement("button");
  const returnBtn = document.createElement("button");
  const deleteBtn = document.createElement("button");
  const editBtn = document.createElement("button");

  item.classList.add("grid")
  img.classList.add("img")

  name.classList.add("name")
  publisher.classList.add("publisher")
  itemInfo.classList.add("item-info")
  itemInfo.append(name, publisher)

  description.classList.add("description")

  checkoutBtn.textContent = "Checkout";
  checkoutBtn.classList.add("checkout");
  returnBtn.textContent = "Return";
  returnBtn.classList.add("return");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");

  if (FACULTY_LOGGED_IN) {
    deleteBtn.style.display = "block"
    editBtn.style.display = "block"
  }else {
    deleteBtn.style.display = "none"
    editBtn.style.display = "none"
  }
  buttonsDiv.classList.add("buttons");

  returnBtn.style.display = "none";

  buttonsDiv.append(checkoutBtn, returnBtn, editBtn, deleteBtn);
  item.append(img, itemInfo, description, buttonsDiv)

  return {item, img, name, publisher, description, itemInfo, checkoutBtn, returnBtn};
}
function displayBooksOptions(formDiv) {
  formDiv.innerHTML = ""
  const authorInput = document.createElement("input")
  const authorLabel = document.createElement("label")
  const volumeInput = document.createElement("input")
  const volumeLabel = document.createElement("label")

  authorInput.setAttribute("type","text")
  authorInput.setAttribute("name","author")
  authorInput.setAttribute("required","")
  authorInput.id = "author"

  authorLabel.setAttribute("for","author")
  authorLabel.textContent = "Author: "

  volumeInput.setAttribute("type","number")
  volumeInput.setAttribute("name","volume")
  volumeInput.setAttribute("required","")
  volumeInput.id = "volume"

  volumeLabel.setAttribute("for","volume")
  volumeLabel.textContent = "Volume: "

  formDiv.append(authorLabel, authorInput, volumeLabel, volumeInput)
}
function displayJournalsOptions(formDiv) {
  formDiv.innerHTML = ""
  const numberInput = document.createElement("input")
  const numberLabel = document.createElement("label")

  numberInput.setAttribute("type","number")
  numberInput.setAttribute("name","number")
  numberInput.setAttribute("required","")
  numberInput.id = "number"

  numberLabel.setAttribute("for","number")
  numberLabel.textContent = "Number: "

  formDiv.append(numberLabel, numberInput)
}
function displayMagazinesOptions(formDiv) {
  formDiv.innerHTML = ""
  const typeOfMagInput = document.createElement("input")
  const typeOfMagLabel = document.createElement("label")
  const dateOfPubInput = document.createElement("input")
  const dateOfPubLabel = document.createElement("label")

  typeOfMagInput.setAttribute("type","text")
  typeOfMagInput.setAttribute("name","type_of_mag")
  typeOfMagInput.setAttribute("required","")
  typeOfMagInput.id = "typeOfMag"

  typeOfMagLabel.setAttribute("for","typeOfMag")
  typeOfMagLabel.textContent = "Type: "

  dateOfPubInput.setAttribute("type","date")
  dateOfPubInput.setAttribute("name","date_of_pub")
  dateOfPubInput.setAttribute("required","")
  dateOfPubInput.id = "dateOfPub"

  dateOfPubLabel.setAttribute("for","dateOfPub")
  dateOfPubLabel.textContent = "Date Of Publication: "

  formDiv.append(typeOfMagLabel, typeOfMagInput, dateOfPubLabel, dateOfPubInput)
}
function displayConferenceProceedingsOptions(formDiv) {
  formDiv.innerHTML = ""
  const locationInput = document.createElement("input")
  const locationLabel = document.createElement("label")
  const dateInput = document.createElement("input")
  const dateLabel = document.createElement("label")
  const editorInput = document.createElement("input")
  const editorLabel = document.createElement("label")

  locationInput.setAttribute("type","text")
  locationInput.setAttribute("name","location")
  locationInput.setAttribute("required","")
  locationInput.id = "location"

  locationLabel.setAttribute("for","location")
  locationLabel.textContent = "Location: "

  dateInput.setAttribute("type","date")
  dateInput.setAttribute("name","date")
  dateInput.setAttribute("required","")
  dateInput.id = "date"

  dateLabel.setAttribute("for","date")
  dateLabel.textContent = "Date: "

  editorInput.setAttribute("type","text")
  editorInput.setAttribute("name","editor")
  editorInput.setAttribute("required","")
  editorInput.id = "editor"

  editorLabel.setAttribute("for","editor")
  editorLabel.textContent = "Editor: "

  formDiv.append(editorLabel, editorInput, dateLabel, dateInput,locationLabel, locationInput)
}

function displayStudentOptions(formDiv) {
  formDiv.innerHTML = ""
  const majorInput = document.createElement("input")
  const majorLabel = document.createElement("label")
  const gpaInput = document.createElement("input")
  const gpaLabel = document.createElement("label")

  majorInput.setAttribute("type","text")
  majorInput.setAttribute("name","major")
  majorInput.setAttribute("required","")
  majorInput.id = "major"

  majorLabel.setAttribute("for","major")
  majorLabel.textContent = "Major: "

  gpaInput.setAttribute("type","number")
  gpaInput.setAttribute("name","gpa")
  gpaInput.setAttribute("step","0.01")
  gpaInput.setAttribute("required","")
  gpaInput.id = "gpa"

  gpaLabel.setAttribute("for","gpa")
  gpaLabel.textContent = "GPA: "

  formDiv.append(majorLabel, majorInput, gpaLabel, gpaInput)
}

function displayFacultyOptions(formDiv) {
  formDiv.innerHTML = ""
  const yearsOfServiceInput = document.createElement("input")
  const yearsOfServiceLabel = document.createElement("label")

  yearsOfServiceInput.setAttribute("type","number")
  yearsOfServiceInput.setAttribute("name","years_of_service")
  yearsOfServiceInput.setAttribute("required","")
  yearsOfServiceInput.id = "yearsOfService"

  yearsOfServiceLabel.setAttribute("for","yearsOfService")
  yearsOfServiceLabel.textContent = "Years Of Service: "

  formDiv.append(yearsOfServiceLabel, yearsOfServiceInput)
}

function formModule() {
  const overlay = document.querySelector("#add-overlay")

  document.body.classList.add("no-scroll")
  overlay.classList.remove("hidden")
}
function closeModule() {
  const overlay = document.querySelector("#add-overlay")
  const body = document.querySelector("body")

  body.classList.remove("no-scroll")
  overlay.classList.add("hidden")
}

function generateJournalElements(specifics) {
  const number = document.createElement("p")
  number.innerHTML = `Number: <span>${specifics.number}</span>`
  return number
}

function generateBookElements(specifics) {
  const author = document.createElement("p")
  const volume = document.createElement("p")
  author.textContent = `Author: ${specifics.author}`
  volume.textContent = `Volume: ${specifics.volume}`

  return {author, volume};
}

function generateMagazineElements(specifics) {
  const typeOfMag = document.createElement("p")
  const dateOfPub = document.createElement("p")
  typeOfMag.textContent = `Type: ${specifics.type_of_mag}`
  dateOfPub.textContent = `Date Of Publication: ${specifics.date_of_pub}`
  return {typeOfMag, dateOfPub}

}

function generateConferenceElements(specifics) {
  const location = document.createElement("p")
  const editor = document.createElement("p")
  const date = document.createElement("p")
  location.textContent = `Location: ${specifics.location}`
  editor.textContent = `Editor: ${specifics.editor}`
  date.textContent = `Date: ${specifics.date}`
  return {editor, location, date}
}

function displayItem(libraryItem, specifics) {
  const main = document.querySelector("main");
  let commonElements = getCommonElements();
  commonElements.item.setAttribute("data-library-type",libraryItem.libraryable_type)
  commonElements.item.setAttribute("data-library-id",specifics.id)
  commonElements.item.setAttribute("data-library-item-id",libraryItem.id)
  commonElements.img.src = libraryItem.url;
  commonElements.name.textContent = `Name: ${libraryItem.name}`;
  commonElements.description.textContent = `Description: ${libraryItem.description}`;
  commonElements.publisher.textContent = `Publisher: ${libraryItem.publisher}`;

  if (libraryItem.libraryable_type == "Journal") {
    const jrnNum = generateJournalElements(specifics)
    commonElements.itemInfo.appendChild(jrnNum)

  }else if (libraryItem.libraryable_type == "Book") {
    const bookElements = generateBookElements(specifics)
    commonElements.itemInfo.append(bookElements.author, bookElements.volume)

  }else if (libraryItem.libraryable_type == "Magazine") {
    const magazineElements = generateMagazineElements(specifics)
    commonElements.itemInfo.append(magazineElements.typeOfMag, magazineElements.dateOfPub)

  }else if (libraryItem.libraryable_type == "ConferenceProceeding") {
    const conferenceElements = generateConferenceElements(specifics)
    commonElements.itemInfo.append(conferenceElements.editor, conferenceElements.location, conferenceElements.date)
  }

  currentLoggedInUser.library_items.find((book) => {
    if (book.id === libraryItem.id) {
      commonElements.checkoutBtn.style.display = "none";
      commonElements.returnBtn.style.display = "block";
    }
  });


  main.prepend(commonElements.item);
}

function displayItems(libraryItems) {
  for (libraryItem of libraryItems) {
    if (libraryItem.library_item) {
      displayItem(libraryItem.library_item, libraryItem)
    }else {
      displayItem(libraryItem, libraryItem.libraryable)
    }

  }
  // gatherCheckoutInfo()
  displayCheckoutInfo()
}

function processEdit(currentItem, databaseItem, url) {

  // console.log(currentItem.children);
  const editForm = document.querySelector("form.add-library-item")
  let editURL = url+"/edit";
  // console.log(databaseItem);
  editForm.children[1].value = databaseItem.library_item.name;
  editForm.children[3].value = databaseItem.library_item.publisher;
  editForm.children[5].value = databaseItem.library_item.description;
  editForm.children[7].value = databaseItem.library_item.url;

  const choiceDropDown = editForm.querySelector(".item-type")

  choiceDropDown.addEventListener("change", chooseFormOptions)
  choiceDropDown.value = currentItem.dataset.libraryType;
  choiceDropDown.dispatchEvent(new Event('change'))

  choiceDropDown.setAttribute("disabled","disabled")

  if (currentItem.dataset.libraryType == "Book") {
    editForm.children[10].children[1].value = databaseItem.author
    editForm.children[10].children[3].value = databaseItem.volume

  } else if (currentItem.dataset.libraryType == "Journal") {
    editForm.children[10].children[1].value = databaseItem.number
  } else if (currentItem.dataset.libraryType == "Magazine") {
    editForm.children[10].children[1].value = databaseItem.type_of_mag
    editForm.children[10].children[3].value = databaseItem.date_of_pub
  } else if (currentItem.dataset.libraryType == "ConferenceProceeding") {
    editForm.children[10].children[1].value = databaseItem.editor
    editForm.children[10].children[3].value = databaseItem.date
    editForm.children[10].children[5].value = databaseItem.location
  }
}

function removeItemLocally(item) {
  item.remove()

}

function generateRegisterFormElements() {
  const registerDiv = document.createElement("div");
  const registerDivOptions= document.createElement("div");
  const nameLabel = document.createElement("label");
  const nameInput = document.createElement("input");
  const addressLabel = document.createElement("label");
  const addressInput = document.createElement("input");
  const dropdownLabel = document.createElement("label");
  const typeDropdown = document.createElement("select");
  dropdownLabel.textContent = "Role";

  nameInput.setAttribute("type","text");
  nameInput.setAttribute("name","name");
  nameInput.setAttribute("required","");
  nameInput.id = "name";

  nameLabel.setAttribute("for","name");
  nameLabel.textContent = "Name: ";

  addressInput.setAttribute("type","text");
  addressInput.setAttribute("name","address");
  addressInput.setAttribute("required","");
  addressInput.id = "address";

  addressLabel.setAttribute("for","address");
  addressLabel.textContent = "Address: ";

  typeDropdown.classList.add("student-faculty-filter");
  typeDropdown.setAttribute("required","");

  typeDropdown.innerHTML =
  `<option value="">Select One …</option>
  <option value="Student">Student</option>
  <option value="Faculty">Faculty</option>`;

  // const dropDrownOptions = regForm.querySelector(".student-faculty-filter")
  // dropDrownOptions.addEventListener("change", displayFormOptions)
  registerDiv.classList.add("all-reg-options")
  registerDivOptions.classList.add("reg-form-options")
  registerDiv.append(nameLabel, nameInput, addressLabel, addressInput, dropdownLabel,typeDropdown,registerDivOptions)

  return registerDiv;
}



function generateLoginFormElements() {
  const overlay = document.createElement("div");
  const formModule = document.createElement("div");
  const header = document.createElement("h2");
  const form = document.createElement("form");
  const usernameLabel = document.createElement("label");
  const usernameInput = document.createElement("input");
  const submitInput = document.createElement("input");
  const regButton = document.createElement("button")

  // submitInput.
  regButton.textContent = "Register Now"
  regButton.classList.add("register-btn")
  header.textContent = "Login"

  submitInput.setAttribute("type","submit")
  submitInput.value = "Login"

  usernameInput.setAttribute("type","text")
  usernameInput.setAttribute("name","username")
  usernameInput.setAttribute("required","")
  usernameInput.id = "username"

  usernameLabel.setAttribute("for","username")
  usernameLabel.textContent = "Username: "

  form.classList.add("login-form")
  formModule.classList.add("module")
  overlay.classList.add("overlay")

  form.addEventListener("submit", loginUser)
  // regButton.addEventListener("click", e => addRegisterElements(e,form))

  form.append(usernameLabel,usernameInput,submitInput)
  formModule.append(header,form,regButton)
  overlay.appendChild(formModule)

  return {overlay,form};
}

function loginFormModule() {
  const loginFormElements = generateLoginFormElements();
  document.body.prepend(loginFormElements.overlay)
  document.body.classList.add("no-scroll")

  return loginFormElements.form
}

function showRegister(e) {
  const loginBtn = document.createElement("button")
  document.querySelector(".module h2").textContent = "Register"
  loginBtn.textContent = "Already Have Account"
  loginBtn.classList.add("login-instead")
  e.target.parentNode.insertBefore(loginBtn,e.target)

  e.target.style.display = "none"
  return loginBtn
}

function loginInstead() {
  const regBtn = document.querySelector(".register-btn")
  const regOptions = document.querySelector(".all-reg-options")
  document.querySelector(".module h2").textContent = "Login"

  regOptions.remove();
  document.querySelector(".login-instead").remove()
  regBtn.style.display = "block";
}
function removeLoginModule(form) {
  form.parentNode.parentNode.classList.add("hidden")
  document.body.classList.remove("no-scroll")
}
function addDataIdToBody(id) {
  // console.log(id);
  document.body.dataset.userId = id;

}
function displayCheckoutInfo() {
  const checkoutMenuUl = document.querySelector(".check-menu ul")
  // gatherCheckoutInfo()
  // checkooutMenu
  // console.log(currentLoggedInUser.library_items);
  checkoutMenuUl.innerHTML = "";
  for (libraryItem of currentLoggedInUser.library_items) {
    const listItem = document.createElement("li")
    listItem.innerHTML = `Name: ${libraryItem.name}<br>
     Checkout Date: ${libraryItem.checkout_date}<br>
     Return Date: ${libraryItem.return_date}`
     checkoutMenuUl.prepend(listItem)
  }
}
function closeNav() {
  document.querySelector(".check-menu").style.width = "0";
  document.querySelector("main").style.margin = "0 5em";
  document.querySelector("header").style.marginLeft = "0";
  document.querySelector("header").style.width= "100%";

}
function openNav() {
  document.querySelector(".check-menu").style.width = "300px";
  document.querySelector("main").style.marginLeft = "300px";
  document.querySelector("header").style.marginLeft = "300px";
  document.querySelector("header").style.width= "70%";
}

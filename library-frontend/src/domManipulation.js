function getCommonElements() {
  const item = document.createElement("div");
  const img = document.createElement("img");
  const itemInfo = document.createElement("div");
  const name = document.createElement("p");
  const publisher = document.createElement("p");
  const description = document.createElement("p");
  const buttonsDiv = document.createElement("div");
  const checkoutBtn = document.createElement("button");
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
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete");
  editBtn.textContent = "Edit";
  editBtn.classList.add("edit");
  buttonsDiv.classList.add("buttons");

  buttonsDiv.append(checkoutBtn, editBtn, deleteBtn);
  item.append(img, itemInfo, description, buttonsDiv)

  return {item, img, name, publisher, description, itemInfo};
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

function formModule() {
  const overlay = document.querySelector("#add-overlay")
  const body = document.querySelector("body")

  body.classList.add("no-scroll")
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
  number.textContent = `Number: ${specifics.number}`
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
  commonElements.img.src = libraryItem.url;
  commonElements.name.textContent = libraryItem.name;
  commonElements.description.textContent = libraryItem.description;
  commonElements.publisher.textContent = libraryItem.publisher;

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

  main.appendChild(commonElements.item);
}

function displayItems(libraryItems) {
  for (libraryItem of libraryItems) {
    if (libraryItem.library_item) {
      displayItem(libraryItem.library_item, libraryItem)
    }else {
      displayItem(libraryItem, libraryItem.libraryable)
    }

  }
}

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

function displayLibrary() {
  fetch(LIBRARY_ITEMS_URL)
  .then(response => response.json())
  .then(json => displayItems(json))
}
function displayBooks() {
  fetch(BOOKS_URL)
  .then(response => response.json())
  .then(json => displayItems(json))
}
function displayJournals() {
  fetch(JOURNALS_URL)
  .then(response => response.json())
  .then(json => displayItems(json))
}
function displayMagazines() {
  fetch(MAGAZINES_URL)
  .then(response => response.json())
  .then(json => displayItems(json))
}
function displayConferenceProceedings() {
  fetch(CONFERENCE_PROCEEDINGS_URL)
  .then(response => response.json())
  .then(json => displayItems(json))
}

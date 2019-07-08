const BASE_URL = "http://localhost:3000"
const LIBRARY_ITEMS_URL = `${BASE_URL}/library_items`
const BOOKS_URL = `${BASE_URL}/books`
const MAGAZINES_URL = `${BASE_URL}/magazines`
const JOURNALS_URL = `${BASE_URL}/journals`
const CONFERENCE_PROCEEDINGS_URL = `${BASE_URL}/conference_proceedings`

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

function displayItem(library_item) {
  const main = document.querySelector("main");
  let commonElements = getCommonElements();
  commonElements.img.src = library_item.url;
  commonElements.name.textContent = library_item.name;
  commonElements.description.textContent = library_item.description;
  commonElements.publisher.textContent = library_item.publisher;

  if (library_item.libraryable_type == "Journal") {
    const number = document.createElement("p")
    number.textContent = `Number: ${library_item.libraryable.number}`
    commonElements.itemInfo.appendChild(number)

  }else if (library_item.libraryable_type == "Book") {
    const author = document.createElement("p")
    const volume = document.createElement("p")
    author.textContent = `Author: ${library_item.libraryable.author}`
    volume.textContent = `Volume: ${library_item.libraryable.volume}`
    commonElements.itemInfo.append(author, volume)

  }else if (library_item.libraryable_type == "Magazine") {
    const typeOfMag = document.createElement("p")
    const dateOfPub = document.createElement("p")
    typeOfMag.textContent = `Type: ${library_item.libraryable.type_of_mag}`
    dateOfPub.textContent = `Date Of Publication: ${library_item.libraryable.date_of_pub}`
    commonElements.itemInfo.append(typeOfMag, dateOfPub)

  }else if (library_item.libraryable_type == "ConferenceProceeding") {
    const location = document.createElement("p")
    const editor = document.createElement("p")
    const date = document.createElement("p")
    location.textContent = `Location: ${library_item.libraryable.location}`
    editor.textContent = `Editor: ${library_item.libraryable.editor}`
    date.textContent = `Date: ${library_item.libraryable.date}`
    commonElements.itemInfo.append(editor, location, date)
  }

  main.appendChild(commonElements.item);
}

function displayItems(library_items) {
  for (library_item of library_items) {
    displayItem(library_item)
  }
}

function displayLibrary() {
  fetch(LIBRARY_ITEMS_URL)
  .then(response => response.json())
  .then(json => displayItems(json))
}

function application() {
  displayLibrary();
}

document.addEventListener("DOMContentLoaded",() => {
  application()
})

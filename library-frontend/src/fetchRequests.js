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

function resetForm(){
  document.querySelector("input.reset").click()
}

function submitBook(commonItems, author, volume) {
  const bodyObj = {
    author: author,
    volume: volume,
    library_item_attributes: commonItems
  }
  const reqObj = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj)
  }

  fetch(BOOKS_URL, reqObj)
  .then(response => response.json())
  .then((json) => {
    displayItem(json, json.libraryable);
  })
}

function submitJournal(commonItems, number) {
  const bodyObj = {
    number: number,
    library_item_attributes: commonItems
  }
  const reqObj = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj)
  }

  fetch(JOURNALS_URL, reqObj)
  .then(response => response.json())
  .then((json) => {
    displayItem(json, json.libraryable);
  })
}
function submitMagazine(commonItems, type, dateOfPub) {
  const bodyObj = {
    type_of_mag: type,
    date_of_pub: dateOfPub,
    library_item_attributes: commonItems
  }
  const reqObj = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj)
  }

  fetch(MAGAZINES_URL, reqObj)
  .then(response => response.json())
  .then((json) => {
    displayItem(json, json.libraryable);
  })
}
function submitConferenceProceeding(commonItems, editor, date, location) {
  const bodyObj = {
    editor: editor,
    date: date,
    location:location,
    library_item_attributes: commonItems
  }
  const reqObj = {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj)
  }

  fetch(CONFERENCE_PROCEEDINGS_URL, reqObj)
  .then(response => response.json())
  .then((json) => {
    displayItem(json, json.libraryable);
  })
}

function submitEditedBook(commonItems, author, volume, item) {
  const id = `/${item.dataset.libraryId}`;
  let editURL = BOOKS_URL + id;
  const bodyObj = {
    author: author,
    volume: volume,
    library_item_attributes: commonItems
  }
  const reqObj = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj)
  }

  fetch(editURL, reqObj)
  .then(response => response.json())
  .then((json) => {
    displayItem(json, json.libraryable);
  })
}

function submitEditedJournal(commonItems, number, item) {
  const id = `/${item.dataset.libraryId}`;
  let editURL = JOURNALS_URL + id;

  const bodyObj = {
    number: number,
    library_item_attributes: commonItems
  }
  const reqObj = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj)
  }

  fetch(editURL, reqObj)
  .then(response => response.json())
  .then((json) => {
    displayItem(json, json.libraryable);
  })
}
function submitEditedMagazine(commonItems, type, dateOfPub, item) {
  const id = `/${item.dataset.libraryId}`;
  let editURL = MAGAZINES_URL + id;
  const bodyObj = {
    type_of_mag: type,
    date_of_pub: dateOfPub,
    library_item_attributes: commonItems
  }
  const reqObj = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj)
  }

  fetch(editURL, reqObj)
  .then(response => response.json())
  .then((json) => {
    displayItem(json, json.libraryable);
  })
}
function submitEditedConferenceProceeding(commonItems, editor, date, location, item) {
  const id = `/${item.dataset.libraryId}`;
  let editURL = CONFERENCE_PROCEEDINGS_URL + id;
  const bodyObj = {
    editor: editor,
    date: date,
    location:location,
    library_item_attributes: commonItems
  }
  const reqObj = {
    method: "PATCH",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(bodyObj)
  }

  fetch(editURL, reqObj)
  .then(response => response.json())
  .then((json) => {
    displayItem(json, json.libraryable);
  })
}

function deleteLibraryItem(item) {
  const id = `/${item.dataset.libraryId}`;
  let deleteURL;
  const reqObj ={
    method: "DELETE"
  }

  if (item.dataset.libraryType == "Book") {
    deleteURL = BOOKS_URL + id;
  }else if (item.dataset.libraryType == "Journal") {
    deleteURL = JOURNALS_URL + id;
  }else if (item.dataset.libraryType == "Magazine") {
    deleteURL = MAGAZINES_URL + id;
  }else if (item.dataset.libraryType == "ConferenceProceeding") {
    deleteURL = CONFERENCE_PROCEEDINGS_URL + id;
  }

  fetch(deleteURL, reqObj)
  .then(response => response.json())
  .then(json => removeItemLocally(item))
}

function fetchCurrentItemInfo(item) {
  const id = `/${item.dataset.libraryId}`;
  let showURL;

  if (item.dataset.libraryType == "Book") {
    showURL = BOOKS_URL + id;
  }else if (item.dataset.libraryType == "Journal") {
    showURL = JOURNALS_URL + id;
  }else if (item.dataset.libraryType == "Magazine") {
    showURL = MAGAZINES_URL + id;
  }else if (item.dataset.libraryType == "ConferenceProceeding") {
    showURL = CONFERENCE_PROCEEDINGS_URL + id;
  }
  return fetch(showURL)
  .then(response => response.json())
  .then(json => processEdit(item, json, showURL))
}

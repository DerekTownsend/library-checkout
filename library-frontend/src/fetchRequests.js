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

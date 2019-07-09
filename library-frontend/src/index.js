const BASE_URL = "http://localhost:3000"
const LIBRARY_ITEMS_URL = `${BASE_URL}/library_items`
const BOOKS_URL = `${BASE_URL}/books`
const MAGAZINES_URL = `${BASE_URL}/magazines`
const JOURNALS_URL = `${BASE_URL}/journals`
const CONFERENCE_PROCEEDINGS_URL = `${BASE_URL}/conference_proceedings`

function application() {
  displayLibrary();
  addAllListeners();

}

document.addEventListener("DOMContentLoaded",() => {
  application()
})

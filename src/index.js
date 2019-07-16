const BASE_URL = "http://localhost:3000"
const LIBRARY_ITEMS_URL = `${BASE_URL}/library_items`
const BOOKS_URL = `${BASE_URL}/books`
const MAGAZINES_URL = `${BASE_URL}/magazines`
const JOURNALS_URL = `${BASE_URL}/journals`
const CONFERENCE_PROCEEDINGS_URL = `${BASE_URL}/conference_proceedings`
const USERS_URL = `${BASE_URL}/users`
const FACULTIES_URL = `${BASE_URL}/faculties`
const STUDENTS_URL = `${BASE_URL}/students`
const LOGIN_URL = `${BASE_URL}/users_login`
const RESERVATIONS_URL = `${BASE_URL}/reservations`
let FACULTY_LOGGED_IN = false;
let currentLoggedInUser;

function application() {
  loginFormModule();
  addAllListeners();

}

document.addEventListener("DOMContentLoaded",() => {
  application()
})

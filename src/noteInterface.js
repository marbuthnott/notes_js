
setupListeners();

function setupListeners() {
  backToNoteList();
  makeUrlChangeShowNoteForCurrentPage();
}

function renderNotePage() {
  console.log('hashchange')
  hideTextArea();
  showNote(getNoteFromUrl(window.location));
  showBackButton();
};

function showBackButton() {
  var backButton = document.getElementById('back-button');
  backButton.style.display = 'block';
};

function hideTextArea() {
  var textBox = document.getElementById('input-container');
  textBox.style.display = 'none';
};

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", renderNotePage);
};

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
};

function showNote(noteIndex) {
  document.getElementById("goslings-list").innerHTML = notes.getList()[noteIndex];
};

function backToNoteList() {
  document.getElementById("back-button")
          .addEventListener("click", function(clickEvent) {
          clickEvent.preventDefault();
          renderHomePage();
        });
}

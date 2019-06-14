
ListenForClick();

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

function ListenForClick() {
   window.addEventListener("hashchange", function() {
     if (window.location.href.includes('#home')) {
       renderHomePage();
     }
     else {
       renderNotePage();
     }
   });
 }

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
};

function showNote(noteIndex) {
  document.getElementById("goslings-list").innerHTML = notes.getList()[noteIndex];
};

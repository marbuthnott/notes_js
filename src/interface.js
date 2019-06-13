var notes = new Notes();

function publishNotes() {
  document.getElementById("goslings-list").innerHTML = '';
  notes.all.forEach(function(note, index) {
    var a = document.createElement("a");
    a.setAttribute('href', '#' + index)
    a.innerHTML = note.slice(0, 20) + "...";
    var li = document.createElement("li");
    li.appendChild(a);
    var div = document.getElementById("goslings-list");
    div.appendChild(li);
  });
};

backToNoteList();
makeUrlChangeShowNoteForCurrentPage();
addNote();
hideBackButton();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  hideTextArea();
  showNote(getNoteFromUrl(window.location));
  showBackButton();

};

function backToNoteList() {
  document.getElementById("back-button")
          .addEventListener("click", function(clickEvent) {
          clickEvent.preventDefault();
          renderHomePage();
        });
}

function renderHomePage() {
  hideBackButton();
  showTextArea();
  publishNotes();
}

function hideBackButton() {
  var backButton = document.getElementById('back-button');
  backButton.style.display = 'none';
};

function showBackButton() {
  var backButton = document.getElementById('back-button');
  backButton.style.display = 'block';
};




function hideTextArea() {
  var textBox = document.getElementById('input-container');
  textBox.style.display = 'none';
};

function showTextArea() {
  var textBox = document.getElementById('input-container');
  textBox.style.display = 'block';
};

function getNoteFromUrl(location) {
  return location.hash.split("#")[1];
};

function showNote(noteIndex) {
  document.getElementById("goslings-list").innerHTML = notes.all[noteIndex];
};

function addNote() {
  document.getElementById("submit-note")
          .addEventListener("click", function(clickEvent) {
            clickEvent.preventDefault();
            notes.add(document.getElementById('note-text').value);
            document.getElementById('note-text').value = '';
            publishNotes();// (notes.all[notes.all.length - 1]);
          });
}

function errorAlert() {
  window.onerror = function() {
    alert("Ryan desires (that) you (enter text)");
  }
}

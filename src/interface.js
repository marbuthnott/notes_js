var notes = new Notes();

function showNewNote(note) {
    var a = document.createElement("a");
    a.setAttribute('href', '#' + (notes.all.length - 1))
    a.innerHTML = note.slice(0, 20) + "...";
    var li = document.createElement("li");
    li.appendChild(a);
    var div = document.getElementById("goslings-list");
    div.appendChild(li);
};

makeUrlChangeShowNoteForCurrentPage();
addNote();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  hideTextArea();
  showNote(getNoteFromUrl(window.location));
};

function hideTextArea() {
  var textBox = document.getElementById('input-container');
  textBox.style.display = 'none';
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
            showNewNote(notes.all[notes.all.length - 1]);
          });
}

function errorAlert() {
  window.onerror = function() {
    alert("Ryan desires (that) you (enter text)");
  }
}



// showNote();
// function showNotes() {
//   notes.all.forEach(function(note, index) {
//     var a = document.createElement("a");
//     a.setAttribute('href', '#' + index)
//     a.innerHTML = note.slice(0, 20) + "...";
//     var li = document.createElement("li");
//     li.appendChild(a);
//     var div = document.getElementById("goslings-list");
//     div.appendChild(li);
//   });
// };

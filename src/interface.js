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
  // div = document.getElementById('goslings-list');
  // button = document.createElement("button");
  // br = document.createElement("br");
  // button.innerHTML = "Back";
  // button.id = "back-button";
  // div.appendChild(br);
  // div.appendChild(button);
};

function backToNoteList() {
  document.getElementById("back-button")
          .addEventListener("click", function(clickEvent) {
          clickEvent.preventDefault();
          hideBackButton();
          showTextArea();
          showNotes();
          // window.setAttribute('href', '#')
          // getHomeURL();
        });
}

function hideBackButton() {
  var backButton = document.getElementById('back-button');
  backButton.style.display = 'none';
};

function showBackButton() {
  var backButton = document.getElementById('back-button');
  backButton.style.display = 'block';
};

// function getHomeURL() {
//   return window.location.href.split("#")[0];
// }


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
            showNewNote(notes.all[notes.all.length - 1]);
          });
}

function errorAlert() {
  window.onerror = function() {
    alert("Ryan desires (that) you (enter text)");
  }
}

function showNotes() {
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

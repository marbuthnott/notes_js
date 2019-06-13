
var notes = new Notes();

addNote();

function renderHomePage() {
  hideBackButton();
  showTextArea();
  publishNotes();
}

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

function addNote() {
  document.getElementById("submit-note")
          .addEventListener("click", function(clickEvent) {
            clickEvent.preventDefault();
            notes.add(document.getElementById('note-text').value);
            document.getElementById('note-text').value = '';
            publishNotes();
          });
}

function hideBackButton() {
  var backButton = document.getElementById('back-button');
  backButton.style.display = 'none';
};

function showTextArea() {
  var textBox = document.getElementById('input-container');
  textBox.style.display = 'block';
};

function errorAlert() {
  window.onerror = function() {
    alert("Ryan desires (that) you (enter text)");
  }
}

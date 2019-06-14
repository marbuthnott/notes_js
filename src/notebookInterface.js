
var notes = new Notes();

addNote();

function renderHomePage() {
  hideBackButton();
  showTextArea();
  publishNotes();
}

function publishNotes() {
  document.getElementById("goslings-list").innerHTML = '';
  notes.getList().forEach(function(note, index) {
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
            weatherAlert();
            chuckNorrisAlert();
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

function chuckNorrisAlert() {
  var request = new XMLHttpRequest()
  request.open('GET', "https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random")
  request.setRequestHeader("X-RapidAPI-Host", "matchilling-chuck-norris-jokes-v1.p.rapidapi.com")
  request.setRequestHeader("X-RapidAPI-Key", "09bcda2c65mshaae832d1d88008dp127cc0jsn4697b7ed001c")
  request.setRequestHeader("accept", "application/json")
  request.send()

  request.onload = function(){
    var json = JSON.parse(request.responseText)
      alert(json.value)
  }
}

function weatherAlert() {
  var request = new XMLHttpRequest()
  request.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=Paris,france&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric')
  request.send()

  request.onload = function(){
    var json = JSON.parse(request.responseText)
    alert("Weather in " + json.name + " is " + json.weather[0].main + ": " + json.main.temp +"C")
  }
}

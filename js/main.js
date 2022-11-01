var $photoUrl = document.querySelector('#PhotoURL');
var $userIMG = document.querySelector('#user-image');
var $Title = document.querySelector('#Title');
var $Notes = document.querySelector('#Notes');
var $submit = document.querySelector('#submit');

var url = $photoUrl.addEventListener('input', function (event) {
  url = event.target.value;
});
var title = $Title.addEventListener('input', function (event) {
  title = event.target.value;
});
var notes = $Notes.addEventListener('input', function (event) {
  notes = event.target.value;
});

$photoUrl.addEventListener('input', function (event) {
  $userIMG.setAttribute('src', event.target.value);
  if (event.target.value === '') {
    $userIMG.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}
);

function submitNote(event) {
  var userNote = {
    Title: title,
    PhotoUrl: url,
    Notes: notes
  };
  data.entries.push(userNote);
  data.nextEntryId++;
}

function string(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJSON);
}

$submit.addEventListener('click', submitNote);
$submit.addEventListener('click', string);

var $photoUrl = document.querySelector('#PhotoURL');
var $userIMG = document.querySelector('#user-image');

$photoUrl.addEventListener('input', function (event) {
  $userIMG.setAttribute('src', event.target.value);
  if (event.target.value === '') {
    $userIMG.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}
);

var url = $photoUrl.addEventListener('input', function (event) {
  url = event.target.value;
});

var $Title = document.querySelector('#Title');
var title = $Title.addEventListener('input', function (event) {
  title = event.target.value;
});

var $Notes = document.querySelector('#Notes');
var notes = $Notes.addEventListener('input', function (event) {
  notes = event.target.value;
});

function submitNote(event) {
  var userNote = {
    Title: title,
    PhotoUrl: url,
    Notes: notes
  };
  data.entries.push(userNote);
  data.nextEntryId++;
  event.preventDefault();
}

var $submit = document.querySelector('#submit');
$submit.addEventListener('click', submitNote);

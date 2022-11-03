var $photoUrl = document.querySelector('#PhotoURL');
var $userIMG = document.querySelector('#user-image');
var $Title = document.querySelector('#Title');
var $Notes = document.querySelector('#Notes');
var $submit = document.querySelector('form');
var $emptyPlaceholder = document.querySelector('.empty-placeholder');

$photoUrl.addEventListener('input', function (event) {
  $userIMG.setAttribute('src', event.target.value);
  if (event.target.value === '') {
    $userIMG.setAttribute('src', 'images/placeholder-image-square.jpg');
  }
}
);

function submitNote(event) {
  event.preventDefault();
  var userNote = {
    Title: $Title.value,
    PhotoUrl: $photoUrl.value,
    Notes: $Notes.value,
    ID: data.nextEntryId++
  };
  data.entries.unshift(userNote);
  $NoteContent.prepend(renderEntries(userNote));
  $userIMG.setAttribute('src', 'images/placeholder-image-square.jpg');
  if (data.entries.length !== 0) {
    $emptyPlaceholder.setAttribute('class', 'row empty-placeholder hidden');
  }
  $submit.reset();
}

function renderEntries(data) {

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row list-item');

  var $columnHalfImg = document.createElement('div');
  $columnHalfImg.setAttribute('class', 'column-half');

  var $img = document.createElement('img');
  $img.setAttribute('src', data.PhotoUrl);
  $img.setAttribute('alt', 'placeholder');

  var $ul = document.createElement('ul');
  $ul.setAttribute('class', 'column-half list-text');

  var $liH2 = document.createElement('li');
  $liH2.setAttribute('class', 'row icon');

  var $h2 = document.createElement('h2');
  $h2.textContent = data.Title;
  $h2.setAttribute('class', 'column-auto');

  var $icon = document.createElement('i');
  $icon.setAttribute('class', 'fa-solid fa-pen column-auto');

  var $li = document.createElement('li');

  var $p = document.createElement('p');
  $p.textContent = data.Notes;

  $row.appendChild($columnHalfImg);
  $columnHalfImg.appendChild($img);
  $row.appendChild($ul);
  $ul.appendChild($liH2);
  $liH2.appendChild($h2);
  $liH2.appendChild($icon);
  $ul.appendChild($li);
  $li.appendChild($p);

  return $row;
}

var $NoteContent = document.querySelector('.content');
function appendToPage(event) {
  for (var i = 0; i < data.entries.length; i++) {
    $NoteContent.appendChild(renderEntries(data.entries[i]));
  }
}

if (data.entries.length !== 0) {
  $emptyPlaceholder.setAttribute('class', 'row empty-placeholder hidden');
}

var $EntriesSwitch = document.querySelector('#Entries-switch');
var $NEW = document.querySelector('#entry-form-switch');
var $entryForm = document.querySelector('.user-entry');
var $Entries = document.querySelector('.entries');

$EntriesSwitch.addEventListener('click', function (event) {
  $Entries.setAttribute('class', 'container entries');
  $entryForm.setAttribute('class', 'container user-entry hidden');
  data.view = 'entries';
});

$NEW.addEventListener('click', function (event) {
  $Entries.setAttribute('class', 'container entries hidden');
  $entryForm.setAttribute('class', 'container user-entry');
  data.view = 'entry-form';
});

function staySamePage(event) {
  if (data.view === 'entry-form') {
    $entryForm.setAttribute('class', 'container user-entry ');
    $Entries.setAttribute('class', 'container entries hidden');
  } else if (data.view === 'entries') {
    $Entries.setAttribute('class', 'container entries');
    $entryForm.setAttribute('class', 'container user-entry hidden');
  }
}

window.addEventListener('DOMContentLoaded', staySamePage);
window.addEventListener('DOMContentLoaded', appendToPage);
$submit.addEventListener('submit', submitNote);

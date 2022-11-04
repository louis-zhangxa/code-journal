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
  if (data.editing === null) {
    data.entries.unshift(userNote);
    $NoteContent.prepend(renderEntries(userNote));
    $userIMG.setAttribute('src', 'images/placeholder-image-square.jpg');
  } else {
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].ID === data.editing) {
        userNote = {
          Title: $Title.value,
          PhotoUrl: $photoUrl.value,
          Notes: $Notes.value,
          ID: data.editing
        };
        data.entries[i] = userNote;
      }
    }
    $userIMG.setAttribute('src', 'images/placeholder-image-square.jpg');
    var $li = document.querySelectorAll('li');
    for (var j = 0; j < $li.length; j++) {
      if (Number($li[j].getAttribute('data-entry-id')) === data.editing) {
        $li[j].replaceWith(renderEntries(userNote));
      }
    }
  }
  if (data.entries.length !== 0) {
    $emptyPlaceholder.setAttribute('class', 'row empty-placeholder hidden');
  }
  $submit.reset();
}

function renderEntries(data) {

  var $columnFullLi = document.createElement('li');
  $columnFullLi.setAttribute('class', 'column-full');
  $columnFullLi.setAttribute('data-entry-id', data.ID);

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row list-item');

  var $columnHalfImg = document.createElement('div');
  $columnHalfImg.setAttribute('class', 'column-half');

  var $img = document.createElement('img');
  $img.setAttribute('src', data.PhotoUrl);
  $img.setAttribute('alt', 'placeholder');

  var $div = document.createElement('div');
  $div.setAttribute('class', 'column-half list-text');

  var $divH2 = document.createElement('div');
  $divH2.setAttribute('class', 'row icon');

  var $h2 = document.createElement('h2');
  $h2.textContent = data.Title;
  $h2.setAttribute('class', 'column-auto');

  var $icon = document.createElement('i');
  $icon.setAttribute('class', 'fa-solid fa-pen column-auto');

  var $divP = document.createElement('div');

  var $p = document.createElement('p');
  $p.textContent = data.Notes;

  $columnFullLi.appendChild($row);
  $row.appendChild($columnHalfImg);
  $columnHalfImg.appendChild($img);
  $row.appendChild($div);
  $div.appendChild($divH2);
  $divH2.appendChild($h2);
  $divH2.appendChild($icon);
  $div.appendChild($divP);
  $divP.appendChild($p);

  return ($columnFullLi);
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
  data.editing = null;
});

$NEW.addEventListener('click', function (event) {
  $Entries.setAttribute('class', 'container entries hidden');
  $entryForm.setAttribute('class', 'container user-entry');
  data.view = 'entry-form';
  data.editing = null;
  $userIMG.setAttribute('src', 'images/placeholder-image-square.jpg');
  $photoUrl.value = null;
  $Title.value = null;
  $Notes.value = null;
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

$NoteContent.addEventListener('click', function (event) {
  if (event.target.className === 'fa-solid fa-pen column-auto') {
    $Entries.setAttribute('class', 'container entries hidden');
    $entryForm.setAttribute('class', 'container user-entry');
    data.view = 'entry-form';
    var dataEntryID = event.target.closest('.column-full').getAttribute('data-entry-id');
    data.editing = Number(dataEntryID);
    for (var i = 0; i < data.entries.length; i++) {
      if (data.entries[i].ID === data.editing) {
        $Title.value = data.entries[i].Title;
        $photoUrl.value = data.entries[i].PhotoUrl;
        $userIMG.setAttribute('src', $photoUrl.value);
        $Notes.value = data.entries[i].Notes;
      }
    }
  }
});

window.addEventListener('DOMContentLoaded', staySamePage);
window.addEventListener('DOMContentLoaded', appendToPage);
$submit.addEventListener('submit', submitNote);

var $photoUrl = document.querySelector('#PhotoURL');
var $userIMG = document.querySelector('#user-image');

var $Title = document.querySelector('#Title');
var $Notes = document.querySelector('#Notes');
var $submit = document.querySelector('form');
var $main = document.querySelector('main');

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
  $userIMG.setAttribute('src', 'images/placeholder-image-square.jpg');
  $submit.reset();
}

function renderEntries(data) {
  var $container = document.createElement('div');
  $container.setAttribute('data-view', 'entries');
  $container.setAttribute('class', 'container entries');

  var $row = document.createElement('div');
  $row.setAttribute('class', 'row');

  var $columnHalfImg = document.createElement('div');
  $columnHalfImg.setAttribute('class', 'column-half');

  var $img = document.createElement('img');
  $img.setAttribute('src', data.PhotoUrl);
  $img.setAttribute('alt', 'placeholder');

  var $ul = document.createElement('ul');
  $ul.setAttribute('class', 'column-half list-text');

  var $liH2 = document.createElement('li');

  var $h2 = document.createElement('h2');
  $h2.textContent = data.Title;

  var $li = document.createElement('li');

  var $p = document.createElement('p');
  $p.textContent = data.Notes;

  $container.appendChild($row);
  $row.appendChild($columnHalfImg);
  $columnHalfImg.appendChild($img);
  $row.appendChild($ul);
  $ul.appendChild($liH2);
  $liH2.appendChild($h2);
  $ul.appendChild($li);
  $li.appendChild($p);

  return $container;
  // console.log($container);
}

function appendToPage(event) {
  for (var i = 0; i < data.entries.length; i++) {
    $main.appendChild(renderEntries(data.entries[i]));
  }
}

window.addEventListener('DOMContentLoaded', appendToPage);
$submit.addEventListener('submit', submitNote);

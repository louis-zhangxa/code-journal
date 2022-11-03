var $photoUrl = document.querySelector('#PhotoURL');
var $userIMG = document.querySelector('#user-image');

var $Title = document.querySelector('#Title');
var $Notes = document.querySelector('#Notes');
var $submit = document.querySelector('form');

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

// function renderEntries(data) {
//   var $container = document.createElement('div');
//   $container.setAttribute('data-view', 'entries');
//   $container.setAttribute('class', 'container entries');

//   var $row = document.createElement('div');
//   $row.setAttribute('class', 'row');

//   var $columnHalfImg = document.createElement('div');
//   $columnHalfImg.setAttribute('class', 'column-half');

//   var $img = document.createElement('img');
//   $img.setAttribute('src', 'images/placeholder-image-square.jpg');
//   $img.setAttribute('alt', 'placeholder');

//   var $ul = document.createElement('ul');
//   $ul.setAttribute('class', 'column-half list-text');

//   var $liH2 = document.createElement('li');

//   var $h2 = document.createElement('h2');
//   $h2.textContent = 'Ada Lovelace';

//   var $liTitle = document.createElement('li');

//   var $pTitle = document.createElement('p');
//   $pTitle.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus commodi veniam, quas facere dignissimos a repellendus ducimus provident reiciendis ea perferendis obcaecati excepturi amet sed labore. Perferendis, commodi voluptas vitae praesentium at earum provident, consectetur aspernatur unde culpa quia corrupti magni rerum ad, deleniti iure!';

//   var $liNotes = document.createElement('li');
//   var $pNotes = document.createElement('p');
//   $pNotes.textContent = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloribus commodi veniam, quas facere dignissimos a repellendus ducimus provident reiciendis ea perferendis obcaecati excepturi amet sed labore. Perferendis, commodi voluptas vitae praesentium at earum provident, consectetur aspernatur unde culpa quia corrupti magni rerum ad, deleniti iure!';

//   $container.appendChild($row);
//   $row.appendChild($columnHalfImg);
//   $columnHalfImg.appendChild($img);
//   $row.appendChild($ul);
//   $ul.appendChild($liH2);
//   $liH2.appendChild($h2);
//   $ul.appendChild($liTitle);
//   $liTitle.appendChild($pTitle);
//   $ul.appendChild($liNotes);
//   $liNotes.appendChild($pNotes);
// }

$submit.addEventListener('submit', submitNote);

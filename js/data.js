/* exported data */

var data = {
  view: 'entry-form',
  entries: [],
  editing: null,
  nextEntryId: 1
};

function storeDataInLocalStorage(event) {
  var dataJSON = JSON.stringify(data);
  localStorage.setItem('javascript-local-storage', dataJSON);
}

var $submit = document.querySelector('form');
$submit.addEventListener('beforeunload', storeDataInLocalStorage);

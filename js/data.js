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

var previousDataJson = localStorage.getItem('javascript-local-storage');
if (previousDataJson !== null) {
  data = JSON.parse(previousDataJson);
}

window.addEventListener('beforeunload', storeDataInLocalStorage);

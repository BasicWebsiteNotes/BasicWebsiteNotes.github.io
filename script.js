var editBtn0 = document.getElementById('editBtn0');
var editBtn1 = document.getElementById('editBtn1');
var editBtn2 = document.getElementById('editBtn2');
var editables0 = document.querySelectorAll('#author0, #content0');
var editables1 = document.querySelectorAll('#author01, #content1');
var editables2 = document.querySelectorAll('#author2, #content2');

if (typeof(Storage) !== "undefined") {
  if (localStorage.getItem('author0') !== null) {
    editables0[0].innerHTML = localStorage.getItem('author0');
  }
  if (localStorage.getItem('content0') !== null) {
    editables0[1].innerHTML = localStorage.getItem('content0');
  }
    if (localStorage.getItem('author1') !== null) {
    editables1[0].innerHTML = localStorage.getItem('author1');
  }
  if (localStorage.getItem('content1') !== null) {
    editables1[1].innerHTML = localStorage.getItem('content1');
  }
    if (localStorage.getItem('author2') !== null) {
    editables2[0].innerHTML = localStorage.getItem('author2');
  }
  if (localStorage.getItem('content2') !== null) {
    editables2[1].innerHTML = localStorage.getItem('content2');
  }
}

editBtn0.addEventListener('click', function(e) {
  if (!editables0[0].isContentEditable) {
    editables0[0].contentEditable = 'true';
    editables0[1].contentEditable = 'true';
    editBtn0.innerHTML = 'Save Changes';
    editBtn0.style.backgroundColor = '#6F9';
  } else {
    // Disable Editing
    editables0[0].contentEditable = 'false';
    editables0[1].contentEditable = 'false';
    // Change Button Text and Color
    editBtn0.innerHTML = 'Edit';
    editBtn0.style.backgroundColor = '#F96';
    // Save the data in localStorage 
    for (var i = 0; i < editables0.length; i++) {
      localStorage.setItem(editables0[i].getAttribute('id'), editables0[i].innerHTML);
    }
  }
});
editBtn1.addEventListener('click', function(e) {
  if (!editables1[0].isContentEditable) {
    editables1[0].contentEditable = 'true';
    editables1[1].contentEditable = 'true';
    editBtn1.innerHTML = 'Save Changes';
    editBtn1.style.backgroundColor = '#6F9';
  } else {
    // Disable Editing
    editables1[0].contentEditable = 'false';
    editables1[1].contentEditable = 'false';
    // Change Button Text and Color
    editBtn1.innerHTML = 'Edit';
    editBtn1.style.backgroundColor = '#F96';
    // Save the data in localStorage 
    for (var i = 0; i < editables1.length; i++) {
      localStorage.setItem(editables1[i].getAttribute('id'), editables1[i].innerHTML);
    }
  }
});
editBtn2.addEventListener('click', function(e) {
  if (!editables2[0].isContentEditable) {
    editables2[0].contentEditable = 'true';
    editables2[1].contentEditable = 'true';
    editBtn2.innerHTML = 'Save Changes';
    editBtn2.style.backgroundColor = '#6F9';
  } else {
    // Disable Editing
    editables2[0].contentEditable = 'false';
    editables2[1].contentEditable = 'false';
    // Change Button Text and Color
    editBtn2.innerHTML = 'Edit';
    editBtn2.style.backgroundColor = '#F96';
    // Save the data in localStorage 
    for (var i = 0; i < editables2.length; i++) {
      localStorage.setItem(editables2[i].getAttribute('id'), editables2[i].innerHTML);
    }
  }
});

setInterval(function() {
  for (var i = 0; i < editables0.length; i++) {
    localStorage.setItem(editables0[i].getAttribute('id'), editables0[i].innerHTML);
  }
}, 5000);

setInterval(function() {
  for (var i = 0; i < editables0.length; i++) {
    localStorage.setItem(editables0[i].getAttribute('id'), editables0[i].innerHTML);
  }
}, 5000);
setInterval(function() {
  for (var i = 0; i < editables0.length; i++) {
    localStorage.setItem(editables0[i].getAttribute('id'), editables0[i].innerHTML);
  }
}, 5000);

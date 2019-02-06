var list = document.querySelector('#car-list ul');

//delete cars
list.addEventListener('click', function(e) {
    if(e.target.className == 'delete') {
        var li = e.target.parentElement;
        list.removeChild(li);
    }
})

//add cars
var addForm = document.forms['add-car'];
addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    var value = addForm.querySelector('input[type="text"]').value;
    
})

//hide cars
var hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e) {
    if (hideBox.checked) {
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
})

//filter cars
var searchBar = document.forms['search-car'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    var term = e.target.value.toLowerCase();
    var cars = list.getElementByTagName('li');
    Array.from(cars).forEach(function(car) {
        var title = book.firstElementChild.textContent;
        if (title.toLowerCase().indexOf(term) != -1) {
            car.style.display = 'block';
        } else {
            car.style.display = 'none';
        }
    })
})
var stringValue;
var arrayOfElements;
var banane, apple;
var items;
var sum;
var x;
var elementsFromArea = [];
$(document).ready(function() {



  $.getJSON('food.json', function(data) {


    items = data.items.map(function(item) {
      return item;
    });




  });


});


function removeSpaces(val) {
  return val.split(' ').join('');
}

function calculateCalories() {
    elementsFromArea = [];



  stringValue = document.getElementById("myTextarea").value;

  arrayOfElements = removeSpaces(stringValue);

  arrayOfElements = arrayOfElements.split(",");


arrayOfElements.forEach(function(element) {

items.forEach(function(entry) {


if(entry.name== element){

  elementsFromArea.push(entry.kcal);

}

});
});


sum = elementsFromArea.reduce(add, 0);

function add(a, b) {
    return a + b;
}



    document.getElementById("sumOfCalories").innerHTML = "Your calories are: " + " "+ sum ;


}

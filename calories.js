var stringValue;
var arrayOfElements;
var banane, apple;
var items;

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



  stringValue = document.getElementById("myTextarea").value;

  arrayOfElements = removeSpaces(stringValue);

  arrayOfElements = arrayOfElements.split(",");


arrayOfElements.forEach(function(element) {

items.forEach(function(entry) {


if(entry.fruit == element){

  elementsFromArea.push(entry.kcal);

}

});
});


var sum = elementsFromArea.reduce(add, 0);

function add(a, b) {
    return a + b;
}


    var x = sum;
    document.getElementById("sumOfCalories").innerHTML = "Your calories are: " + x;


console.log(sum); // 6
    // console.log(entry.fruit);


}

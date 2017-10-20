
    var stringValue;
    var arrayOfElements;
    var banane, brot;
    var items;

    $(document).ready(function () {

    var showData = $('#show-data');

        $.getJSON('food.json', function (data) {
          console.log(data);

          items = data.items.map(function (item) {
            return item;
          });

          showData.empty();

          if (items.length) {
            var content = '<li>' + items.join('</li><li>') + '</li>';
            var list = $('<ul />').html(content);
            showData.append(list);
          }
        });

        showData.text('Loading the JSON file.');
      });


    function removeSpaces(val) {
       return val.split(' ').join('');
    }

function calculateCalories() {



    stringValue = document.getElementById("myTextarea").value;

    arrayOfElements = removeSpaces(stringValue);

    arrayOfElements = arrayOfElements.split(",");

    console.log(arrayOfElements.includes('banane'));
  var banane;
  var brot ;

  console.log(items[0].kcal);
    if(arrayOfElements.includes('banane'))
    {




      banane = items[0].kcal;

      console.log("Banane stehts fur 96 kcal");

    }
    if(arrayOfElements.includes('brot'))
    {
    brot = 67;
      console.log("Brot stehts fur 67 kcal");

    }
    var calorieValue;

console.log(typeof banane == 'undefined');
    if(typeof banane === 'undefined' && typeof brot === 'undefined')
    {
          calorieValue = banane + brot;
    }else if(typeof banane === 'undefined')
      {
        calorieValue = banane;
      } else if(typeof brot === 'undefined')
        {
          calorieValue = brot;
        }


    console.log("Deine Kalorie sind:" + calorieValue);

  }

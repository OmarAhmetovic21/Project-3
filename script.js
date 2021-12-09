const currentTime = new Date();
const currentHour = currentTime.getHours();

var greeting ;

if(currentHour>=0 && currentHour<12)
{
    greeting="Good Morning"
}

else if (currentHour>=12 && currentHour<18)
{
    greeting="Good Afternoon"
}

else if (currentHour>=18 && currentHour<23)
{
    greeting="Good Evening"
}

else
{
    greeting="Hello"
}

document.getElementById("WelcomeMessage").innerHTML = greeting;


function pressed()
{
    var text = document.getElementById("InputColor").value;

    switch(text)
    {
        case "red":
            document.getElementById("ColoredText").style.color="red";
            break;

        case "Red":
            document.getElementById("ColoredText").style.color="red";
            break;

        case "RED":
            document.getElementById("ColoredText").style.color="red";
            break;


        case "blue":
        document.getElementById("ColoredText").style.color="blue";
        break;

        case "Blue":
        document.getElementById("ColoredText").style.color="blue";
        break;

        case "BLUE":
        document.getElementById("ColoredText").style.color="blue";
        break;


        case "yellow":
        document.getElementById("ColoredText").style.color="yellow";
        break;

        case "Yellow":
        document.getElementById("ColoredText").style.color="yellow";
        break;

        case "YELLOW":
        document.getElementById("ColoredText").style.color="yellow";
        break;
        

        case "green":
        document.getElementById("ColoredText").style.color="green";
        break;

        case "Green":
        document.getElementById("ColoredText").style.color="green";
        break;

        case "GREEN":
        document.getElementById("ColoredText").style.color="green";
        break;


        default:
            document.getElementById("ColoredText").style.color="black";
            break;
    }
}

const cars = ["Volkswagen", "Audi", "BMW", "Mercedes", "Ferrari", "Mclaren", "Koenigsegg"];

let arrayContent = "";

for(var i = 0; i < cars.length; i++)
{
    arrayContent += cars[i] + ", ";
}

document.getElementById("ArrayPrint").innerHTML = arrayContent;


$(document).ready(() =>{

    $("#SlideDownButton").click(() =>{
      $("#SlideBox").slideDown(1500);
    });
  
  $("#SlideUpButton").click(() =>{
      $("#SlideBox").slideUp(1500);
    });
  
  });


  $("#accordion").on("click", "#accordion-control", function(e) {
    e.preventDefault();
    $(this)
    .next("#accordion-panel")
    .not("animated")
    .slideToggle();
    });
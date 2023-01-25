//1.

$(document).ready(function(){


    
})

//2.
$(document).ready(function(){

$("#change_heading").text("Hello World!");
    
})

//3.
  $(".brown").hover(function(){
    $(".selected").text('brown')
  })
  $(".green").hover(function(){
    $(".selected").text('green')
  })
  $(".blue").hover(function(){
    $(".selected").text('blue')
  })
  $(".blue").hover(function(){
    $(".selected").text('blue')
  })

    //4.
    var newDiv = document.createElement("div");
    newDiv.className = "purple";
    section.appendChild(newDiv);

    var button = document.querySelector("button");
    var car1 = document.querySelector('.car1');
    var car2 = document.querySelector('.car2');
    car1.style.marginLeft = 0;
    car2.style.marginLeft = 0;

    function reset(car1, car2){
        clearTimeout(car1.timer);
        clearTimeout(car2.timer);
        car1.style.marginLeft = 0;
        car2.style.marginLeft = 0;
        button.disabled = false;
    }

    button.addEventListener("click", function(event){
        button.disabled = true;
        car1.timer = setInterval(function(){
            car1.style.marginLeft = parseInt(car1.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car1.style.marginLeft) > window.innerWidth){
                alert("Car 1 wins!");
                reset(car1,car2);
            }
        },60)

        car2.timer = setInterval(function(){
            car2.style.marginLeft = parseInt(car2.style.marginLeft) + Math.random()*60 + 'px';
            if(parseInt(car2.style.marginLeft) > window.innerWidth){
                alert("Car 2 wins!");
                reset(car1,car2);
            }
        },60)


    })

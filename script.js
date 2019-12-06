var btn1=document.getElementById("Button1");// Объявляем переменную для кнопки с id (с айдишником Button1)
 btn1.addEventListener("click", function (){// Обработка нажатия на кнопку  с айдишником Button1 и вызов функции для неё
   location = "http://www.mozilla.org";
 })

 var clr=document.getElementById("Click_container");
 var btn2=document.getElementById("Button2");
 btn2.addEventListener("click", function (){
    clr.style.background = "black";
    clr.style.height = "100vh";
 })

 var fbc=document.getElementById("Flex_box_container");
 

 var btn3=document.getElementById("Button3");
 btn3.addEventListener("click", function (){
   btn3.style.display = "none";
   fbc.style.display = "block";
 })

 var btn4=document.getElementById("Button4");
 btn4.addEventListener("click", function (){
 btn1.style.display = "none";
 btn2.style.display = "none";
 btn3.style.display = "none";
})
 
 var term = {
  Canada: 10,
  Germany: 13,
  Spain: 22,
  }
 
  var sum = 0;
  var times = 0;
  for (var key in term) {
    sum += term[key];
    times ++;
  }
  
  alert(sum/times);
  
  var max = 0;
    for (let key in term){
        max >= term[key]?
        null:
        max = term[key];
    }

  alert(max);

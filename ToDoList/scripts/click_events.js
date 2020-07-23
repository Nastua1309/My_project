var tipsBtn = document.querySelector(".tipBtn");
var weatherpBtn = document.querySelector(".weatherpBtn");
var closeBtn = document.querySelector(".closebtn");
var close2Btn = document.querySelector(".close2btn");
var close3Btn = document.querySelector(".close3btn");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var pencil = document.querySelector("#pencil");
var overlay = document.getElementById("overlay");
var calendarBtn = document.querySelector(".calendarBtn");
import {DeleteTodo} from './main.min.js';
 function Button_f (){
clearBtn.addEventListener('click', function () {
    ul.innerHTML= "";
    localStorage.removeItem("todoList", ul.innerHTML);
   });

calendarBtn.addEventListener('click', function () {
   div_calendar.style. visibility= "visible";
   });
close3Btn.addEventListener("click", function(){
   div_calendar.style. visibility= "hidden";
   });

 saveBtn.addEventListener('click', function () {
    localStorage.setItem ("todoList", ul.innerHTML);
 });
 
 tipsBtn.addEventListener("click", function(){
    overlay.style.height="100%";
    });

closeBtn.addEventListener("click", function(){
     overlay.style.height="0";
});
weatherpBtn.addEventListener("click", function(){
   overlay2.style.height="15%";
});
close2Btn.addEventListener("click", function(){
   overlay2.style.height="0";
});
} 

function icons_f (){
   input.addEventListener ("keypress", function(key){
      if(key.which ===13){
          var li = document.createElement ("li");
          var spanElement = document.createElement ("span");
          var icon = document.createElement ("i");
   
          var newtodo = this.value;
          this.value ="";
          if(newtodo == "") {
              alert("You didn't enter your details , please come back when you have something to do (((");
          } else{
          icon.classList.add ('fas', 'fa-trash-alt');
          spanElement.append (icon);
          ul.appendChild(li).append(spanElement, newtodo);
   
          DeleteTodo();
          }
      }
   });
  
ul.addEventListener('click', function (e) {
   if(e.target.tagName === "LI") {
      e.target.classList.toggle('checked');
   } else if(e.target.tagName === "SPAN") {
      var div = e.target.parentNode;
      div.remove();
   }
}, 
false);
pencil.addEventListener('click', function(){
   input.classList.toggle ("display");

});
}
export {Button_f,icons_f };

var ul = document.querySelector("ul");

var spans = document.getElementsByTagName("span");


 export function DeleteTodo() {
    for (let span of spans){
        span.addEventListener("click", function (){
            span.parentElement.remove();
        });
    }
};

 function loadTodos() {
    const data = localStorage.getItem("todoList");
    if (data) {
        ul.innerHTML = data;
    }
    DeleteTodo();
}
loadTodos();

import {Button_f, icons_f} from './click_events.js';
import {calendar} from './calendar.js';
Button_f ();
icons_f();
calendar();
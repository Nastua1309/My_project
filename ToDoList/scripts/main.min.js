var input = document.querySelector("input[type='text']");
var ul = document.querySelector("ul");
var container = document.querySelector("div");
var lists = document.querySelectorAll("li");
var spans = document.getElementsByTagName("span");
var pencil = document.querySelector("#pencil");
var saveBtn = document.querySelector(".save");
var clearBtn = document.querySelector(".clear");
var lists = document.querySelectorAll("li");
var tipsBtn = document.querySelector(".tipBtn");
var closeBtn = document.querySelector(".closebtn");
var overlay = document.getElementById("overlay");

pencil.addEventListener('click', function(){
    input.classList.toggle ("display");

});
function DeleteTodo() {
    for (let span of spans){
        span.addEventListener("click", function (){
            span.parentElement.remove();
        });
    }
};

tipsBtn.addEventListener("click", function(){
overlay.style.height="100%";
});
closeBtn.addEventListener("click", function(){
    overlay.style.height="0";
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

clearBtn.addEventListener('click', function () {
    ul.innerHTML= "";
    localStorage.removeItem("todoList", ul.innerHTML);
 });
 saveBtn.addEventListener('click', function () {
    localStorage.setItem ("todoList", ul.innerHTML);
 });

 function loadTodos() {
    const data = localStorage.getItem("todoList");
    if (data) {
        ul.innerHTML = data;
    }
    DeleteTodo();
}
loadTodos();
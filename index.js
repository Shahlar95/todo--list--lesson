let main = document.getElementsByClassName("main");
let main2 = document.getElementsByClassName("main2");
let input = document.getElementById("input");
let btn = document.getElementById("btn");
let lists = document.getElementById("list-box");

if (JSON.parse(localStorage.getItem("local")) === null) {
  localStorage.setItem("local", JSON.stringify([]));
}

function writer() {
  let newArr = JSON.parse(localStorage.getItem("local"));
  lists.innerHTML = "";
  newArr.forEach((element) => {
    lists.innerHTML += `<li>
        <p >${element}</p><i class="fa-solid fa-xmark" onclick = deleteTodo("${element}") ></i>
         </li>`;
  });
}   

btn.addEventListener("click", () => {
  let arr = JSON.parse(localStorage.getItem("local"));
  localStorage.setItem("local", JSON.stringify([...arr, input.value]));
  writer();
  input.value="";
});

function deleteTodo(e) {
   let del =  JSON.parse(localStorage.getItem("local"));
   let newArr = del.filter(item => item !== e );
   localStorage.setItem("local",JSON.stringify(newArr));
   writer();
}
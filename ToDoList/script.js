const inputName = document.querySelector("input[name='name']");
const inputDescription = document.querySelector("input[name='description']");
const todoButton = document.querySelector("input[type='submit']");
const todoList = document.querySelector(".todo-list");

//Adding EventListner
todoButton.addEventListener("click", addTodo);
todoList.addEventListener("click", updateTodo);

function addTodo(e) {
  e.preventDefault();
  if (inputName.value !== "" && inputDescription.value !== "") {
    let li = document.createElement("li");
    li.classList.add("todo-item");
    li.innerHTML = `
                    <div class="name-box">
                       <span class="name"> ${inputName.value}</span>
                       <span class="description">${inputDescription.value}</span>
                    </div>
                    <div class="btn-ctrl">
                      <button class="btn btn-delete" name="deleteCtrl">Delete</button>
                      <button class="btn btn-done" name="doneCtrl">Done</button>
                    </div>`;
    todoList.appendChild(li);
    inputName.value = "";
    inputDescription.value = "";
  }
}

function updateTodo(e) {
  const parent = e.target.parentElement.parentElement;
  if (e.target.classList[1] === "btn-delete") {
    parent.classList.add("work-delete");
    parent.addEventListener("transitionend", function () {
      parent.remove();
    });
  } else if (e.target.classList[1] === "btn-done") {
    parent.classList.toggle("work-done");
  } else {
    return;
  }
}

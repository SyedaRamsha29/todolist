function saveToLocalStorage(task) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function updateLocalStorage() {
  const tasks = [];
  const taskItems = document.querySelectorAll("#tasklist li span");
  taskItems.forEach((taskItem) => {
    tasks.push(taskItem.innerHTML);
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function editTask(taskElement) {
  const newText = prompt("Edit the task:", taskElement.innerText);
  if (newText !== null) {
    taskElement.innerText = newText;
    updateLocalStorage();
  }
}

function add() {
  const task = document.getElementById("input").value.trim();

  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  const tlist = document.createElement("li");
  tlist.style.listStyleType = "none";

  const div = document.createElement("div");
  const textDiv = document.createElement("div");
  const btnDiv = document.createElement("div");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const text = document.createElement("span");
  text.innerHTML = task;

  const editbtn = document.createElement("button");
  const editimg = document.createElement("img");
  editimg.src = "edit.png";
  editbtn.appendChild(editimg);
  editbtn.className = "editbtn";

  const deletebtn = document.createElement("button");
  deletebtn.className = "deletebtn";
  const deleteimg = document.createElement("img");
  deleteimg.src = "delete.png";
  deletebtn.appendChild(deleteimg);

  textDiv.appendChild(checkbox);
  textDiv.appendChild(text);

  btnDiv.appendChild(editbtn);
  btnDiv.appendChild(deletebtn);

  div.appendChild(textDiv);
  div.appendChild(btnDiv);
  div.className = "maindiv";

  tlist.appendChild(div);
  document.getElementById("tasklist").appendChild(tlist);

  document.getElementById("input").value = "";

  checkbox.onclick = function () {
    if (checkbox.checked) {
      text.style.textDecoration = "line-through";
    } else {
      text.style.textDecoration = "none";
    }
    updateLocalStorage();
  };

  editbtn.addEventListener("click", function () {
    editTask(text);
  });

  deletebtn.addEventListener("click", function () {
    tlist.remove();
    updateLocalStorage();
  });

  saveToLocalStorage(task);
}

window.onload = function () {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("tasklist");

  tasks.forEach((task) => {
    const tlist = document.createElement("li");
    tlist.style.listStyleType = "none";

    const div = document.createElement("div");
    const textDiv = document.createElement("div");
    const btnDiv = document.createElement("div");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const text = document.createElement("span");
    text.innerHTML = task;

    const editbtn = document.createElement("button");
    const editimg = document.createElement("img");
    editimg.src = "edit.png";
    editbtn.appendChild(editimg);
    editbtn.className = "editbtn";

    const deletebtn = document.createElement("button");
    deletebtn.className = "deletebtn";
    const deleteimg = document.createElement("img");
    deleteimg.src = "delete.png";
    deletebtn.appendChild(deleteimg);

    textDiv.appendChild(checkbox);
    textDiv.appendChild(text);

    btnDiv.appendChild(editbtn);
    btnDiv.appendChild(deletebtn);

    div.appendChild(textDiv);
    div.appendChild(btnDiv);
    div.className = "maindiv";

    tlist.appendChild(div);
    taskList.appendChild(tlist);

    div.className = "maindiv";

    checkbox.onclick = function () {
      if (checkbox.checked) {
        text.style.textDecoration = "line-through";
      } else {
        text.style.textDecoration = "none";
      }
      updateLocalStorage();
    };

    editbtn.addEventListener("click", function () {
      editTask(text);
    });

    deletebtn.addEventListener("click", function () {
      tlist.remove();
      updateLocalStorage();
    });
  });
};

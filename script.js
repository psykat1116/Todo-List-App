let inputBox = document.getElementById("input-box");
let list = document.getElementById("list");

const addTask = () => {
  if (inputBox.value === "") {
    alert("You Must Write Something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value + `<i class="fa-solid fa-xmark"></i>`;
    list.appendChild(li);
  }
  inputBox.value = "";
  saveData();
};

list.onclick = (e) => {
  if (e.target.tagName === "LI") {
    e.target.classList.toggle("active");
    saveData();
  } else if (e.target.tagName === "I") {
    e.target.parentElement.remove();
    saveData();
  }
};

function saveData() {
  localStorage.setItem("data", list.innerHTML);
}

function showTask() {
  list.innerHTML = localStorage.getItem("data");
}

showTask();

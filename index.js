let todo_data = [];

document.getElementById("todo_input").addEventListener("input", () => {
  let todo_input = document.getElementById("todo_input").value;
  // if (todo_input.length > 0) {
  //   alert(todo_input.length);
  // }
  if (todo_input.length > 0) {
    document.getElementById("todo_clear").style.display = "inline-block";
  } else {
    document.getElementById("todo_clear").style.display = "none";
  }
});

document.getElementById("todo_add").addEventListener("click", () => {
  todo_data.unshift(document.getElementById("todo_input").value);
  document.getElementById("todo_input").value = "";
  console.log(todo_data);
  reloadData();
});

const clearButton = () => {
  document.getElementById("todo_input").value = "";
  document.getElementById("todo_clear").style.display = "none";
};

let reloadData = () => {
  document.getElementById("output").innerHTML = todo_data.map((todo_data) => {
    return `<li>${todo_data}<button>Delete</button></li>`;
  }).join('');
};

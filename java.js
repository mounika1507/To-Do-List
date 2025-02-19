function addTask() {
    let taskInput = document.getElementById("inputtask");
    let taskList = document.getElementById("listitems");
    let taskText = taskInput.value.toUpperCase();
    if (taskText === "") {
        alert("Enter a task!"); 
        return;
    }
    let li = document.createElement("li");
    li.textContent = taskText;
    let removeBtn = document.createElement("button");
    removeBtn.textContent = "-";
    removeBtn.onclick = function () {
        taskList.removeChild(li); 
    };
    li.appendChild(removeBtn);
    taskList.appendChild(li);
    taskInput.value = "";
}

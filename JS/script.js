document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("taskInput");
    var addBtn = document.getElementById("addBtn");
    var taskList = document.getElementById("taskList");

    addBtn.addEventListener("click", function() {
        var task = taskInput.value;
        if (task) {
            var li = document.createElement("li");
            var span = document.createElement("span");
            span.innerHTML = task;
            span.addEventListener("click", function() {
                this.classList.toggle("completed");
            });
            li.appendChild(span);
            taskList.appendChild(li);
            taskInput.value = "";
        }
    });

    taskInput.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            addBtn.click();
        }
    });
});

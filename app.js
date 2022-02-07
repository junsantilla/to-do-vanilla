const taskInput = document.querySelector(".task-input");
const addBtn = document.querySelector(".add-task");
const taskList = document.querySelector(".task-list");
const clearTaskListBtn = document.querySelector(".clear-task-list");

function loadAllEveentHandlers() {
	console.log("Event handler loaded");
	addBtn.addEventListener("click", addList);
	taskInput.addEventListener("keypress", function (e) {
		if (e.key === "Enter") {
			addList();
		}
	});
	taskList.addEventListener("click", removeTask);
	clearTaskListBtn.addEventListener("click", clearTaskList);
}

loadAllEveentHandlers();

// Add task to the list
function addList(e) {
	if (taskInput.value.trim() == "") {
		alert("Please add a task!");
	} else {
		const task = document.createElement("li");
		task.classList =
			"list-group-item d-flex justify-content-between align-items-center";
		task.appendChild(document.createTextNode(taskInput.value));
		taskList.appendChild(task);

		const deleteBtn = document.createElement("button");
		deleteBtn.classList = "btn-close";
		task.appendChild(deleteBtn);

		taskInput.value = "";
	}
	checkList();
	e.preventDefault();
}

// Delete all tasks
function clearTaskList(e) {
	taskList.innerHTML = "";
	checkList();
}

// Remove task from the list
function removeTask(e) {
	if (e.target.parentElement.classList.contains("list-group-item")) {
		e.target.parentElement.remove();
	}
	checkList();
}

// Check if the list is empty
function checkList() {
	if (taskList.innerHTML == "") {
		clearTaskListBtn.classList.add("disabled");
	} else {
		clearTaskListBtn.classList.remove("disabled");
	}
}
checkList();

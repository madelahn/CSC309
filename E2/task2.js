document.getElementById("addItemButton").onclick = function addListItem() {
    var listItem = document.getElementById("itemInput").value;
    if (listItem === "") return;
    const list = document.createElement("li");
    const node = document.createTextNode(listItem);
    list.appendChild(node);
    
    const container = document.getElementById("itemList");
    container.append(list);
    console.log(list);
};


document.getElementById("submitButton").onclick = function validateForm() {
    var allValid = true;

    // name
    var name = document.getElementById("name");
    var nameError = document.getElementById("nameError");
    if (name.value === "") {
        name.style.borderColor = "red";
        nameError.hidden = false;
        nameError.innerHTML = "Please enter a name.";
        allValid = false;
    } else {
        nameError.hidden = true;
        nameError.innerHTML = "";
        name.style.borderColor = "black";
    }

    // email
    var email = document.getElementById("email");
    var emailError = document.getElementById("emailError");
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email.value === "") {
        email.style.borderColor = "red";
        emailError.hidden = false;
        emailError.innerHTML = "Please enter an email.";
        allValid = false;
    } else if (
        !email.value.toLowerCase().match(re)
    ) {
        email.style.borderColor = "red";
        emailError.hidden = false;
        emailError.innerHTML = "Invalid email.";
        allValid = false;
    } else {
        emailError.hidden = true;
        emailError.innerHTML = "";
        email.style.borderColor = "black";
    }

    // password
    var pass = document.getElementById("password");
    var passError = document.getElementById("passwordError");
    if (
        pass.value.length < 8 ||
        !/[A-Z]/.test(pass.value) ||
        !/[a-z]/.test(pass.value) ||
        !/\d/.test(pass.value)
    ) {
        passError.hidden = false;
        passError.innerHTML = "Invalid password.";
        allValid = false;
        pass.style.borderColor = "red";
    } else {
        passError.hidden = true;
        passError.innerHTML = "";
        pass.style.borderColor = "black";
    }

    // repeat
    var repeat = document.getElementById("repeatPassword");
    var repeatError = document.getElementById("repeatPasswordError");
    if (pass.value != repeat.value) {
        repeat.style.borderColor = "red";
        repeatError.hidden = false;
        allValid = false;
        repeatError.innerHTML = "Password does not match."
    } else {
        repeatError.hidden = true;
        repeatError.innerHTML = "";
        repeat.style.borderColor = "black";
    }


    // submit return
    if (allValid) {
        document.getElementById("successMessage").innerHTML = "Form successfully submitted."
    }
}


window.onload = function todoApp() {
    const currList = document.getElementById("todoList");
    const newTaskButton = document.getElementById("addTodoButton");
    const taskInput = document.getElementById("newTodo");

    function addTask() {
        console.log("add task", taskInput.value);
        const task = taskInput.value;
        if (task === "") return;

        const li = document.createElement("li");
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function () {
            if (checkbox.checked) {
                li.style.textDecoration = "line-through";
            } else {
                li.style.textDecoration = "none";
            }
        })

        const taskText = document.createTextNode(task);
        const deleteButton = document.createElement("button");
        deleteButton.append("Delete");
        deleteButton.addEventListener("click", function () {
            currList.removeChild(li);
        })

        li.append(checkbox); li.append(taskText); li.append(deleteButton);
        todoList.appendChild(li);
        taskInput.value = "";
    }

    newTaskButton.addEventListener("click", addTask);
}

const messages = [
    "Girl, that did not have to take that long...",
    "That should've been done yesterday.",
    "You definitely made that a lot harder than it needed to be.",
    "You must be so proud of yourself...",
    "A normal person would have finished this hours ago.",
    "Was that so difficult?",
    "I'm going to pretend you didn't take this long to do that",
    "2.0 GPA behavior...",
    "Girrrlllll...",
    "I have nothing nice to say to you right now...",
    "Not everyone was born to be productive :)",
    "Honestly, I'm surprised you actually did that."
];

function setName() {
    let nameInput = document.getElementById("nameInput").value.trim();

    if (nameInput === "") {
        alert("Girl, you have to have a name...");
        return;
    }

    document.getElementById("list-title").textContent = `${nameInput}'s To-Do List`;
    document.getElementById("list-title").style.display = "block";
    document.querySelector(".input-container").style.display = "flex";
    document.getElementById("name-input-container").style.display = "none";
}

function addTask() {
    let input = document.getElementById("taskInput");
    let taskText = input.value.trim();
    
    if (taskText === "") {
        alert("You have to have something to do...");
        return;
    }

    let li = document.createElement("li");
    li.innerHTML = `
        <span>${taskText}</span>
        <input type="checkbox" onclick="completeTask(this)">
    `;
    
    document.getElementById("taskList").appendChild(li);
    input.value = "";
}

function completeTask(checkbox) {
    let li = checkbox.parentElement;
    
    if (checkbox.checked) {
        let message = messages[Math.floor(Math.random() * messages.length)];
        alert(message);
        li.classList.add("completed");


    } else {
        li.classList.remove("completed");
    }
}
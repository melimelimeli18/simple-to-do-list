document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("date").innerHTML = dateGenerator(); //date generator
    document.getElementById("todolist").addEventListener("click", inputArea); //make the input text appear when we clicked "create new things "
    document.getElementById("myForm").addEventListener("submit", submit);
});

function underlined() {

}
function submit(event) {
    event.preventDefault();

    const theInput = document.getElementById("myInput").value;
    var inputValue = document.createElement("span");
    inputValue.innerHTML = theInput;
    document.getElementById("myInput").value = ""; //be reset when clicked enter
    
    
    const goalDiv = document.createElement("div");
    goalDiv.classList.add("goal");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox";

    goalDiv.appendChild(checkbox);
    goalDiv.appendChild(document.createTextNode(inputValue));

    document.getElementById("goalList").appendChild(goalDiv);
}

function inputArea() {
//const inputText = document.getElementById('inputText');
if (inputText.style.display === 'block') {
inputText.style.display = 'none';
}else {
inputText.style.display = 'block';
}
document.getElementById("inputText").focus();
}

const date = document.getElementById("#date");
function dateGenerator() {
const dateNow = new Date();
const dateString = dateNow.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
});
return dateString;
};
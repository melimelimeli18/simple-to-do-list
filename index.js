//selalu taroh event listener diatas function;

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("date").innerHTML = dateGenerator(); //date generator
  document.getElementById("todolist").addEventListener("click", inputArea); //make the input text appear when we clicked "create new things "
  document.getElementById("myForm").addEventListener("submit", submit);
  
});

//displaying input area when clicked "create new thing"
function inputArea() {
  //const inputText = document.getElementById('inputText');
  if (inputText.style.display === 'none') {
    inputText.style.display = 'block';
  }else {
    inputText.style.display = 'none';
  }
  document.getElementById("inputText").focus();
}

function submit(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  const inputValue = document.getElementById("myInput").value;

  // Clear the input field
  document.getElementById("myInput").value = "";

  // Create a new div element for the goal
  const goalDiv = document.createElement("div");
  goalDiv.classList.add("goal");

  // Create a checkbox element for the goal
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  //checkbox.classList.add("checkbox");
  checkbox.id = "checkbox";

  // Add the checkbox and input value to the goal div
  goalDiv.appendChild(checkbox);
  goalDiv.appendChild(document.createTextNode(inputValue));

  // Add the goal div to the goal list
  document.getElementById("goalList").appendChild(goalDiv);
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
}
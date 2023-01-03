//selalu taroh event listener diatas function;

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("date").innerHTML = dateGenerator(); //date generator
  document.getElementById("todolist").addEventListener("click", inputArea); //make the input text appear when we clicked "create new things "
  //document.getElementById("myform").addEventListener("submit".newList);
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

// function submit (event) {
//   // Prevent the default form submission behavior
//   event.preventDefault();

//   // Get the value of the input field
//   var inputValue = document.getElementById("myInput").value;

//   // Clear the input field
//   document.getElementById("myInput").value = "";

//   // Create a new div element for the goal
//   var goalDiv = document.createElement("div");
//   goalDiv.classList.add("goal");

//   // Create a checkbox element for the goal
//   var checkbox = document.createElement("input");
//   checkbox.type = "checkbox";
//   checkbox.classList.add("checkbox");

//   // Add the checkbox and input value to the goal div
//   goalDiv.appendChild(checkbox);
//   goalDiv.appendChild(document.createTextNode(inputValue));

//   // Add the goal div to the goal list
//   document.getElementById("goalList").appendChild(goalDiv);

//   // Add an event listener to the checkbox to toggle the checked state
//   checkbox.addEventListener("change", function() {
//     if (checkbox.checked) {
//       checkbox.classList.add("checked");
//     } else {
//       checkbox.classList.remove("checked");
//     }
//   });
// };
//backup

function submit (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  var inputValue = document.getElementById("myInput").value;
  // Clear the input field
  document.getElementById("myInput").value = "";

  // Create a new div element for the goal
  var goalDiv = document.createElement("div");
  goalDiv.classList.add("goalDiv"); //CSS purpose

  // Create a checkbox element for the goal
  var checkbox = document.createElement("svg");
  checkbox.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.182 2.81802C22.0259 3.66193 22.5 4.80653 22.5 6V18C22.5 19.1935 22.0259 20.3381 21.182 21.182C20.3381 22.0259 19.1935 22.5 18 22.5H6C4.80653 22.5 3.66193 22.0259 2.81802 21.182C1.97411 20.3381 1.5 19.1935 1.5 18V6C1.5 4.80653 1.97411 3.66193 2.81802 2.81802C3.66193 1.97411 4.80653 1.5 6 1.5H18C19.1935 1.5 20.3381 1.97411 21.182 2.81802Z" stroke="#B4B4B4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`;
  //checkbox.classList.add("checkbox");
  checkbox.id = "checkbox";
  checkbox.setAttribute("data-checked", "false");
  ; //OFF

  // Add the checkbox and input value to the goal div
  goalDiv.appendChild(checkbox);
  goalDiv.appendChild(document.createTextNode(inputValue));

  //toggle 
  function toggleCheckbox() {
    if (checkbox.getAttribute("data-checked") === "false") {
      checkbox.setAttribute("data-checked", "true");
    } else {
    checkbox.setAttribute("data-checked", "false");
  }
  } 
  // Add the goal div to the goal list
  document.getElementById("goalList").appendChild(goalDiv);

  };
































//submit feature
function newList(event){
  event.preventDefault();
  
  //// Get the value of the input field and clear the input field
  const inputValue = documen.getElementById("inputText").value;
  document.getElementById("inputText").value = "";
  
  //crate new div element (newList)
  const newList = document.createElement("DIV");
    newList.classList.add("newList");
  
  //create checkbox
  const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("checkbox"); 
    /*checkbox.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M43.4246 4.57538C45.3938 6.54451 46.5 9.21523 46.5 12V36C46.5 38.7848 45.3938 41.4555 43.4246 43.4246C41.4555 45.3938 38.7848 46.5 36 46.5H12C9.21523 46.5 6.54451 45.3938 4.57538 43.4246C2.60625 41.4555 1.5 38.7848 1.5 36V12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5H36C38.7848 1.5 41.4555 2.60625 43.4246 4.57538Z" stroke="#B4B4B4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      `;*///when i comment this, the checkbox still appear on web

  // Checkbox sama Input dari value ditambahin sbg struktur newLIst
    newList.appendChild(checkbox);
    newList.appendChild(document.createTextNode(inputValue));

  // Add the NewList to the goal list
  const theList = document.querySelector("#theList");
  theList.appendChild(newList);

  // Add an event listener to the checkbox to toggle the checked state
  checkbox.addEventListener ("change", function() {
    if(checkbox.checked){
          checkbox.innerHTML = `
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 12C48 8.8174 46.7357 5.76516 44.4853 3.51472C42.2348 1.26428 39.1826 0 36 0H12C8.8174 0 5.76516 1.26428 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12V36C0 39.1826 1.26428 42.2348 3.51472 44.4853C5.76516 46.7357 8.8174 48 12 48H36C39.1826 48 42.2348 46.7357 44.4853 44.4853C46.7357 42.2348 48 39.1826 48 36V12ZM36.7371 13.4126C37.0025 13.6215 37.224 13.8808 37.3889 14.1755C37.5538 14.4702 37.6589 14.7946 37.698 15.1301C37.7372 15.4656 37.7098 15.8054 37.6172 16.1303C37.5247 16.4551 37.3689 16.7584 37.1589 17.0229L23.6777 34.056C23.3506 34.5558 22.9226 34.9816 22.4211 35.3061C21.9196 35.6307 21.3558 35.8467 20.7659 35.9403C20.176 36.034 19.573 36.0032 18.9957 35.8499C18.4184 35.6966 17.8795 35.4242 17.4137 35.0503L11.2869 30.3223C10.7467 29.9058 10.3942 29.2918 10.3067 28.6154C10.2193 27.939 10.4041 27.2556 10.8206 26.7154C11.237 26.1753 11.851 25.8227 12.5274 25.7353C13.2038 25.6478 13.8873 25.8327 14.4274 26.2491L19.2617 29.9829C19.4416 30.1192 19.6678 30.1794 19.8916 30.1505C20.1154 30.1217 20.3189 30.006 20.4583 29.8286L33.144 13.8274C33.5666 13.2975 34.1817 12.9564 34.855 12.8787C35.5283 12.8009 36.205 12.9929 36.7371 13.4126Z" fill="#29ABE2"/>
          <path d="M37.3889 14.1755C37.224 13.8808 37.0025 13.6215 36.7371 13.4126C36.205 12.9929 35.5283 12.8009 34.855 12.8787C34.1817 12.9564 33.5666 13.2975 33.144 13.8274L20.4583 29.8286C20.3189 30.006 20.1154 30.1217 19.8916 30.1505C19.6678 30.1794 19.4416 30.1192 19.2617 29.9829L14.4274 26.2491C13.8873 25.8327 13.2038 25.6478 12.5274 25.7353C11.851 25.8227 11.237 26.1753 10.8206 26.7154C10.4041 27.2556 10.2193 27.939 10.3067 28.6154C10.3942 29.2918 10.7467 29.9058 11.2869 30.3223L17.4137 35.0503C17.8795 35.4242 18.4184 35.6966 18.9957 35.8499C19.573 36.0032 20.176 36.034 20.7659 35.9403C21.3558 35.8467 21.9196 35.6307 22.4211 35.3061C22.9226 34.9816 23.3506 34.5558 23.6777 34.056L37.1589 17.0229C37.3689 16.7584 37.5247 16.4551 37.6172 16.1303C37.7098 15.8054 37.7372 15.4656 37.698 15.1301C37.6589 14.7946 37.5538 14.4702 37.3889 14.1755Z" fill="white"/>
          </svg>`
          ;
        } else {
          checkbox.innerHTML =` 
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M43.4246 4.57538C45.3938 6.54451 46.5 9.21523 46.5 12V36C46.5 38.7848 45.3938 41.4555 43.4246 43.4246C41.4555 45.3938 38.7848 46.5 36 46.5H12C9.21523 46.5 6.54451 45.3938 4.57538 43.4246C2.60625 41.4555 1.5 38.7848 1.5 36V12C1.5 9.21523 2.60625 6.54451 4.57538 4.57538C6.54451 2.60625 9.21523 1.5 12 1.5H36C38.7848 1.5 41.4555 2.60625 43.4246 4.57538Z" stroke="#B4B4B4" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

          `;
        }
  });
    
};

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
document.addEventListener("DOMContentLoaded", function (event) {
  outerDateGenerator(); //Success
  outerInputArea(); // toggle success
  //outerSubmit();
  outerSubmit(); // function success
});


function outerDateGenerator (){
  const date = document.getElementById("date");
  
  date.innerHTML =(function dateGenerator() {
    const dateNow = new Date();
    const dateString = dateNow.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return dateString;
  })();
}  

function outerInputArea(){
  const createBtn = document.getElementById("createBtn");
  const myForm = document.getElementById("myForm");

  createBtn.addEventListener("click", function() {
      if (myForm.style.display === "none") {
        myForm.style.display = "block";
      } else {
        myForm.style.display = "none";
      }
    }); 
}
  
function outerSubmit (){
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function(event){
    
    event.preventDefault();
    
    //checkbox - child 1
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox"; //styling purpose
    
    //text - child 2
    const inputValue = document.getElementById("myInput").value;
    //inputValue.classList.add("inputValue");
    document.getElementById("myInput").value = "";
    
    

    if (inputValue === "") {
          return;
        }

    //parent
    const goalDiv = document.createElement("div");
    goalDiv.classList.add("goal");

    //appending child to parent
    goalDiv.appendChild(checkbox);
    goalDiv.appendChild(document.createTextNode(inputValue));

    const eachList = document.getElementById("goalList");
    eachList.appendChild(goalDiv);
  });
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
  
  
  // function dateGenerator() {
    // const dateNow = new Date();
    // const dateString = dateNow.toLocaleDateString("en-US", {
    //   day: "numeric",
    //   month: "short",
    //   year: "numeric",
    // });
    // return dateString;
  // }
document.addEventListener("DOMContentLoaded", function (event) {
  const todos = JSON.parse(localStorage.getItem('todos'));
  outerDateGenerator(); //Success
  //outerInputArea(); // toggle success
  //outerSubmit();
  outerSubmit(); // function success
});


function outerDateGenerator (){
  const date = document.getElementById("date");
  
  date.innerText =(function dateGenerator() {
    const dateNow = new Date();
    const dateString = dateNow.toLocaleDateString("en-US", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
    return dateString;
  })();
}  
  
function outerSubmit (){
  const form = document.getElementById("myForm");
  form.addEventListener("submit", function(event){
    
    event.preventDefault();
    
    //checkbox - child 1
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox"; //styling purpose
    
    //text (input) - child 2
    const inputValue = document.getElementById("myInput").value;
    //inputValue.value = task;
    //inputValue.setAttribute('readonly', 'readonly');
    //inputValue.classList.add("inputValue");
    document.getElementById("myInput").value = "";

    if (inputValue === "") {
          return;
        }

    //edit button 
    const editButton = document.createElement('button');
    editButton.classList.add('editButton');
    const editIcon = document.createElement('img');
    editIcon.src = '../icon-svg/icon_edit.svg';
    editButton.appendChild(editIcon);
    
    
    //delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add ('deleteButton');
    const deleteIcon = document.createElement('img');
    deleteIcon.src = '../icon-svg/icon_delete.svg';
    deleteButton.appendChild(deleteIcon);
    
    //edit button & delete button parent
    const actionBtn = document.createElement('div');
    actionBtn.classList.add('actionBtn');
    actionBtn.appendChild(editButton);
    actionBtn.appendChild(deleteButton);
    
    // Input and checkbox one div
    const theThings = document.createElement("div");
    theThings.appendChild(checkbox);
    theThings.appendChild(document.createTextNode(inputValue));

    //parent (one list)
    const goalDiv = document.createElement("div");
    goalDiv.classList.add("goal");

    //appending child to parent
    goalDiv.appendChild(theThings);
    goalDiv.appendChild(actionBtn);

    const eachList = document.getElementById("goalList");
    eachList.appendChild(goalDiv);
    
    //EDIT - event listener
    // editButton.addEventListener('click', (e) => {
		// 	inputValue.removeAttribute('readonly');
    //   inputValue.focus()
    //   input.addEventListener('blur', (e) => {
		// 		input.setAttribute('readonly', true);
		// 		todo.content = e.target.value;
		// 		localStorage.setItem('todos', JSON.stringify(todos));
				
		//   });
    // });
    
    //DELETE - event listener (Success)
    deleteButton.addEventListener('click',function (e){
      eachList.removeChild(goalDiv);
    });
});
}

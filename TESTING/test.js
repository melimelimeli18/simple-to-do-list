document.addEventListener("DOMContentLoaded", function (event) {
  outerDateGenerator(); //Success
  //outerInputArea(); // toggle success
  //outerSubmit();
  outerSubmit(); // function success

});


function outerDateGenerator (){
  const date = document.getElementById("date");
  
  date.textContent =(function dateGenerator() {
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
    const theValue = document.getElementById("myInput").value;
    const inputValue = document.createElement('span');
    inputValue.innerText = theValue;
    inputValue.id = "theInputSpan"
 
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
    theThings.appendChild(inputValue);

    //parent (one list)
    const goalDiv = document.createElement("div");
    goalDiv.classList.add("goal");

    //appending child to parent
    goalDiv.appendChild(theThings);
    goalDiv.appendChild(actionBtn);

    const eachList = document.getElementById("goalList");
    eachList.appendChild(goalDiv);
    
    //EDIT - event listener
    editButton.addEventListener('click', function (e)  {
      inputValue.contentEditable = true;
    });
    editButton.addEventListener ('keypress',function(event){
      if (event.keyCode === 13) { // user pressed "enter"
        inputValue.contentEditable = false; // make the text not editable
      }
    })

    //note = when clicked on edit button, it immediently direct the cursor to type the inputValue, and when i enter, it will save it 

    //DELETE - event listener (Success)
    deleteButton.addEventListener('click',function (e){
      eachList.removeChild(goalDiv);
    });
  
  });
    
    
};

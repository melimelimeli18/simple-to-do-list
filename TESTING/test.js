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
 
    inputValue.contentEditable = "false";

    //inputValue.classList.add("inputValue");
    document.getElementById("myInput").value = "";
    
    
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
    //goalDiv.contentEditable = "false";
    
    const eachList = document.getElementById("goalList");
    eachList.appendChild(goalDiv);
    
    //EDIT - event listener
    // editButton.addEventListener('click', function (e)  {
    //   if (inputValue.contentEditable === "false") {
    //     editButton.innerText = "save";
    //     inputValue.contentEditable = "true";
        
    //   }else {
    //     editButton.reset()
    //     inputValue.contentEditable = "false";
        
    //   }
    // });
    
    editButton.addEventListener('click', function (e)  {
      // if (inputValue.contentEditable === "false") {
      //   editButton.innerText = "save";
      //   inputValue.contentEditable = "true";
        
      // }else {
      //   editButton.reset()
      //   inputValue.contentEditable = "false"; 
      // }
      
      if (inputValue.contentEditable === "false") {
        editButton.innerText = "save";
        inputValue.contentEditable = "true";
        inputValue.focus() //This work. Please make it when we clicked, it will selected ALL chr on Input, and when we clicked enter it will be assigned as save.
      }else {
       editButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M17.7242 0.390386C17.9742 0.140422 18.3133 0 18.6669 0C19.0204 0 19.3595 0.140422 19.6096 0.390386L23.6096 4.39043C23.8596 4.64047 24 4.97956 24 5.33311C24 5.68667 23.8596 6.02575 23.6096 6.27579L11.6095 18.2759C11.3595 18.526 11.0204 18.6665 10.6668 18.6666H6.66675C6.31312 18.6666 5.97398 18.5261 5.72393 18.2761C5.47387 18.026 5.3334 17.6869 5.3334 17.3333V13.3332C5.33347 12.9796 5.474 12.6405 5.72407 12.3905L17.7242 0.390386ZM8.00009 13.8852V15.9999H10.1148L20.7816 5.33311L18.6669 3.21842L8.00009 13.8852ZM0 5.33311C0 4.62586 0.280955 3.94757 0.781058 3.44747C1.28116 2.94737 1.95945 2.66641 2.6667 2.66641H9.33344C9.68707 2.66641 10.0262 2.80689 10.2763 3.05694C10.5263 3.30699 10.6668 3.64614 10.6668 3.99976C10.6668 4.35339 10.5263 4.69253 10.2763 4.94258C10.0262 5.19263 9.68707 5.33311 9.33344 5.33311H2.6667V21.3333H18.6669V14.6666C18.6669 14.3129 18.8074 13.9738 19.0574 13.7237C19.3075 13.4737 19.6466 13.3332 20.0002 13.3332C20.3539 13.3332 20.693 13.4737 20.9431 13.7237C21.1931 13.9738 21.3336 14.3129 21.3336 14.6666V21.3333C21.3336 22.0406 21.0526 22.7188 20.5525 23.2189C20.0524 23.719 19.3741 24 18.6669 24H2.6667C1.95945 24 1.28116 23.719 0.781058 23.2189C0.280955 22.7188 0 22.0406 0 21.3333V5.33311Z" fill="#9C9C9C"/>
       </svg>
       `
        //editButton.innerHtml = '<img src="../icon-svg/icon_edit.svg" alt="edit icon">';
        //const parent = editButton.parentElement;
        //parent.parentElement.removeChild(parent);
        //editButton.innerHTML = "../icon-svg/icon_edit.svg"
        inputValue.contentEditable = "false"; 
        
        if (inputValue === "") {
          return;
        }

      }
    })
    

    //ref
    /*
      function myFunction(button) {
        const x = document.getElementById("myP");
        if (x.contentEditable == "true") {
          x.contentEditable = "false";
          button.innerHTML = 'Edit';
        } else {
          x.contentEditable = "true";
          button.innerHTML = 'Save';
        }
      }
    */
    //note = when clicked on edit button, it immediently direct the cursor to type the inputValue, and when i enter, it will save it 

    //DELETE - event listener (Success)
    deleteButton.addEventListener('click',function (e){
      eachList.removeChild(goalDiv);
    });
     
  
  
  });  
};
console.log(inputValue);

/*
<!DOCTYPE html>
<html>
<body>
<h1>The Element Object</h1>
<h2>The contentEditable Property</h2>

<p id="myP" contenteditable="true">Try to change this text.</p>
<p id="myP" contenteditable="false">Try to change this text.</p>

<button onclick="myFunction(this);"></button>

<p id="demo"></p>

<script>
function myFunction(button) {
  const x = document.getElementById("myP");
  if (x.contentEditable == "true") {
    x.contentEditable = "false";
    button.innerHTML = 'Edit';
  } else {
    x.contentEditable = "true";
    button.innerHTML = 'Save';
  }
}

function secondFunction(button) {
  const x = document.getElementById("myP");
  if (x.contentEditable == "true") {
    x.contentEditable = "false";
    button.innerHTML = 'Edit';
  } else {
    x.contentEditable = "true";
    button.innerHTML = 'Save';
  }
}
</script>

</body>
</html>
*/
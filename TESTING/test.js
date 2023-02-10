// Try to style with origin text button
// https://codepen.io/samstelr/pen/jOpRKoM

// add the class to the label.
// on css, try to change the input value into that (css label)
// try to adding attribute, for the checkbox, inside the for is checkbox id

// try to fix checked linethrough

document.addEventListener("DOMContentLoaded", function (event) {
  outerDateGenerator(); //Success
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
    
    //checkbox 
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "checkbox"; //styling purpose
    checkbox.class = "checkbox";
    
    //TEXT (input) 
    const Label =  document.createElement("label");
    Label.htmlFor = "checkbox";
    const inputHTML = document.getElementById("myInput");
    const theValue = document.getElementById("myInput").value;
    const inputValue  = document.createElement("input");
    inputValue.type = "text";
    inputValue.value = theValue;
    inputValue.classList.add("inputValue");

    Label.appendChild(inputValue);

    const checkboxContainer = document.createElement('div')
    checkboxContainer.classList.add('checkboxContainer');

    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(Label);

      // inputValue.readOnly = true ;
      inputValue.setAttribute('readonly', 'readonly');
      document.getElementById("myInput").value = "";   

    if(theValue === ""){
      inputHTML.style.borderColor = "red";
      return;
    } else {
      inputHTML.style.borderColor = "white";
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

    //parent (one list)
    const goalDiv = document.createElement("div");
    goalDiv.classList.add("goal");

    //appending child to parent
    // goalDiv.appendChild(checkbox);
    // goalDiv.appendChild(Label);
    goalDiv.appendChild(checkboxContainer);
    goalDiv.appendChild(actionBtn);
    
    const eachList = document.getElementById("goalList");
    eachList.appendChild(goalDiv);
 
    
    // EDIT button toggle
    editButton.addEventListener('click', function readable(e)  {
      if (inputValue.readOnly === true) {
        inputValue.removeAttribute("readonly");
        inputValue.focus();
        inputValue.select();
        inputValue.contentEditable = "true";
        editButton.innerText = "save";        
      }else{
        editButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7242 0.390386C17.9742 0.140422 18.3133 0 18.6669 0C19.0204 0 19.3595 0.140422 19.6096 0.390386L23.6096 4.39043C23.8596 4.64047 24 4.97956 24 5.33311C24 5.68667 23.8596 6.02575 23.6096 6.27579L11.6095 18.2759C11.3595 18.526 11.0204 18.6665 10.6668 18.6666H6.66675C6.31312 18.6666 5.97398 18.5261 5.72393 18.2761C5.47387 18.026 5.3334 17.6869 5.3334 17.3333V13.3332C5.33347 12.9796 5.474 12.6405 5.72407 12.3905L17.7242 0.390386ZM8.00009 13.8852V15.9999H10.1148L20.7816 5.33311L18.6669 3.21842L8.00009 13.8852ZM0 5.33311C0 4.62586 0.280955 3.94757 0.781058 3.44747C1.28116 2.94737 1.95945 2.66641 2.6667 2.66641H9.33344C9.68707 2.66641 10.0262 2.80689 10.2763 3.05694C10.5263 3.30699 10.6668 3.64614 10.6668 3.99976C10.6668 4.35339 10.5263 4.69253 10.2763 4.94258C10.0262 5.19263 9.68707 5.33311 9.33344 5.33311H2.6667V21.3333H18.6669V14.6666C18.6669 14.3129 18.8074 13.9738 19.0574 13.7237C19.3075 13.4737 19.6466 13.3332 20.0002 13.3332C20.3539 13.3332 20.693 13.4737 20.9431 13.7237C21.1931 13.9738 21.3336 14.3129 21.3336 14.6666V21.3333C21.3336 22.0406 21.0526 22.7188 20.5525 23.2189C20.0524 23.719 19.3741 24 18.6669 24H2.6667C1.95945 24 1.28116 23.719 0.781058 23.2189C0.280955 22.7188 0 22.0406 0 21.3333V5.33311Z" fill="#9C9C9C"/>
        zzzzzz</svg>`;
        // inputValue.setAttribute("readonly", "readonly");
      }
    })
    
    // save button through ENTER
    inputValue.addEventListener("keydown", function saveEdit(e){
      if (e.code === "Enter" ){
        editButton.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.7242 0.390386C17.9742 0.140422 18.3133 0 18.6669 0C19.0204 0 19.3595 0.140422 19.6096 0.390386L23.6096 4.39043C23.8596 4.64047 24 4.97956 24 5.33311C24 5.68667 23.8596 6.02575 23.6096 6.27579L11.6095 18.2759C11.3595 18.526 11.0204 18.6665 10.6668 18.6666H6.66675C6.31312 18.6666 5.97398 18.5261 5.72393 18.2761C5.47387 18.026 5.3334 17.6869 5.3334 17.3333V13.3332C5.33347 12.9796 5.474 12.6405 5.72407 12.3905L17.7242 0.390386ZM8.00009 13.8852V15.9999H10.1148L20.7816 5.33311L18.6669 3.21842L8.00009 13.8852ZM0 5.33311C0 4.62586 0.280955 3.94757 0.781058 3.44747C1.28116 2.94737 1.95945 2.66641 2.6667 2.66641H9.33344C9.68707 2.66641 10.0262 2.80689 10.2763 3.05694C10.5263 3.30699 10.6668 3.64614 10.6668 3.99976C10.6668 4.35339 10.5263 4.69253 10.2763 4.94258C10.0262 5.19263 9.68707 5.33311 9.33344 5.33311H2.6667V21.3333H18.6669V14.6666C18.6669 14.3129 18.8074 13.9738 19.0574 13.7237C19.3075 13.4737 19.6466 13.3332 20.0002 13.3332C20.3539 13.3332 20.693 13.4737 20.9431 13.7237C21.1931 13.9738 21.3336 14.3129 21.3336 14.6666V21.3333C21.3336 22.0406 21.0526 22.7188 20.5525 23.2189C20.0524 23.719 19.3741 24 18.6669 24H2.6667C1.95945 24 1.28116 23.719 0.781058 23.2189C0.280955 22.7188 0 22.0406 0 21.3333V5.33311Z" fill="#9C9C9C"/>
        zzzzzz</svg>`;
        inputValue.setAttribute("readonly","readonly"); 
      }
    })

    //DELETE - event listener (Success)
    deleteButton.addEventListener('click',function (e){
      eachList.removeChild(goalDiv);
    });

    // checkbox.addEventListener ("clicked", function lineThrough(){
    //   if (checkbox.checked) {
    //     inputValue.style.textDecoration = "line-through";
    //     inputValue.style.color = "gray";    
    //   }else{
    //     inputValue.style.textDecoration = "none";
    //     inputValue.style.color = "black";
    //   }
    // })

    // const isChecked = false;

    // checkbox.addEventListener("click", checkmark);
    // inputValue.addEventListener("click", checkmark);
    // function checkmark(){
    //   if(isChecked){
    //     inputValue.style.textDecoration = "none";
    //     inputValue.style.color = "black";
    //   }else {
    //     inputValue.style.textDecoration = "line-through";
    //     inputValue.style.color = "gray";
    //   }
     
    // }


  });  
};

//Make the button be a webkit appeareance, and style it own ur self, so u can get a validation of checkbox, and u can add more style on InputValue
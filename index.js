//selalu taroh event listener diatas function;

document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("date").innerHTML = dateGenerator();
  document.getElementById("todolist").addEventListener("click", inputArea);

    function displayDate() {
      document.getElementById("demo").innerHTML = Date();
    };
});

function newList() {
  //const textArea = document.createElement('textarea');
  //document.getElementById("textarea").innerHTML = textArea;
  if (textarea.style.display === 'none') {
    textarea.style.display = 'block';
  } else {
    textarea.style.display = 'none';
  }
}
function inputArea() {
  //const inputText = document.getElementById('inputText');
  if (input-text.style.display === 'none') {
    inputText.style.display = 'block';
  }else {
    inputText.style.display = 'none';
  }
}


//ketika pencet createnewlist, 
//akan kebuat element text area baru, 
// text area mencet submit
// jadi li baru



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

//parent
//const toDoList = document.getElementById("todolist") ; 

//new list item 
//const createList = 


//ketika pencet createnewlist, 
//akan kebuat element text area baru, 
// text area mencet submit
// jadi li baru


// listItems.forEach(item => {
//   item.addEventListener('click', event => {
//     const id = event.target.id;
//     if (id === 'list-item-1') {
//       function1();
//     } else if (id === 'list-item-2') {
//       function2();
//     }
//   });
// });

// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value; //input text
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";
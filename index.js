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
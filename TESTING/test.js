/*
 *   This content is licensed according to the W3C Software License at
 *   https://www.w3.org/Consortium/Legal/2015/copyright-software-and-document
 *
 *   File:   Checkbox.js
 *
 *   Desc:   Checkbox widget that implements ARIA Authoring Practices
 */
document.getElementById("demoDate").innerHTML = dateGenerator(); //date generator
document.getElementById("create").addEventListener("click", inputArea); document.getElementById("myForm").addEventListener("submit", submit);

function inputArea() {
  //const inputText = document.getElementById('inputText');
  document.getElementById("inputText").focus();
  if (inputText.style.display === 'none') {
    inputText.style.display = 'block';
  }else {
    inputText.style.display = 'none';
  }
}

function submit (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the value of the input field
  var inputValue = document.getElementById("myInput").value;
  // Clear the input field
  document.getElementById("myInput").value = "";

  // Create a new div element for the goal
  
  var newDiv = document.createElement("div");
    newDiv.setAttribute("role","checkbox");
    newDiv.setAttribute("aria-checked","false");
    newDiv.setAttribute("tabindex","0");
  var newLi = document.createElement("li");
  var parentList = document.getElementById("ParentList")
  
//Append content inside the div.  Appen Div inside the List. List > Div/checkbox > content
    newDiv.appendChild(document.createTextNode(inputValue));
  newLi.appendChild(newDiv);
  //parentList.appendChild(newLi)

  // Add the goal div to the goal list
 document.getElementById("ParentList").appendchild(newLi);


  };
const date = document.getElementById("DemoDate");
function dateGenerator() {
  const dateNow = new Date();
  const dateString = dateNow.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  return dateString;
}













// TOGGLEEEEEE
'use strict';

class Checkbox {
  constructor(domNode) {
    this.domNode = domNode;
    this.domNode.tabIndex = 0;

    if (!this.domNode.getAttribute('aria-checked')) {
      this.domNode.setAttribute('aria-checked', 'false');
    }

    this.domNode.addEventListener('keydown', this.onKeydown.bind(this));
    this.domNode.addEventListener('click', this.onClick.bind(this));
  }

  toggleCheckbox() {
    if (this.domNode.getAttribute('aria-checked') === 'true') {
      this.domNode.setAttribute('aria-checked', 'false');
    } else {
      this.domNode.setAttribute('aria-checked', 'true');
    }
  }

  /* EVENT HANDLERS */

  onKeydown(event) {
    var flag = false;

    switch (event.key) {
      case ' ':
        this.toggleCheckbox();
        flag = true;
        break;

      default:
        break;
    }

    if (flag) {
      event.stopPropagation();
      event.preventDefault();
    }
  }

  onClick() {
    this.toggleCheckbox();
  }
}

// Initialize checkboxes on the page
window.addEventListener('load', function () {
  let checkboxes = document.querySelectorAll('.checkboxes [role="checkbox"]');
  for (let i = 0; i < checkboxes.length; i++) {
    new Checkbox(checkboxes[i]);
  }
});

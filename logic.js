const wrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".bar");
const task = document.querySelector(".task");
const taskBox = document.querySelector(".taskbox");
const taskList = document.querySelector(".task-list");
const checkbox = document.querySelector("#todo_status");
const todoBox = document.querySelector(".container");
const todos = document.querySelectorAll(".todo");
const deleteButton = document.querySelectorAll(".delate");


// variables 
let totalNoTask = null;
const menuIcon = `<i class="fa-solid fa-bars-staggered"></i>`;
const arrowIcon = `<i class="fa-solid fa-arrow-left"></i>`;

menuBtn.addEventListener("click", () => {
  wrapper.classList.remove("task_opened");
  menuBtn.innerHTML = menuIcon;
});

taskBox.addEventListener("click", (event) => {
  const taskElement = event.target.closest(".task");

  if (taskElement) {
    // first remove all active classlist on prev
    taskBox.childNodes.forEach((node) => {
      console.log(node.nodeType === 1);
      if (node.nodeType === 1) {
        node.classList.remove("active");
      }
    });

    // stop bobbling
    event.preventDefault();
    event.stopPropagation();

    // add class name active on div and wrapper active
    taskElement.classList.add("active");
    wrapper.classList.add("task_opened");

    // change menu icon 
    menuBtn.innerHTML = arrowIcon;
  }
});

// ============ task functions ==============

// checkbox.addEventListener("click",()=>{
//   if (checkbox.checked == true){
//     todoBox.classList.add("checked");
//    } else {
//     todoBox.classList.remove("checked");
//    }
   
// });

// todos.forEach(todo => {
//   todo.addEventListener('click', function() {
//       const checkbox = this.querySelector('input[type="checkbox"]');
//       // checkbox.removeAttribute('checked');
//       console.log(this.childNodes);
//       // todoBox.classList.toggle("checked");

//   });
// });


// delete todo work 
deleteButton.forEach(todo =>{
  todo.addEventListener("click",()=>{
    console.log(this.parent);
    // this.parentElement.remove()
  })
})
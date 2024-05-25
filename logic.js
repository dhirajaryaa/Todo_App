const wrapper = document.querySelector(".wrapper");
const menuBtn = document.querySelector(".bar");
const task = document.querySelector(".task");
const taskBox = document.querySelector(".taskbox");
const taskList = document.querySelector(".task-list");

const screenToggle = () => {
  const menuIcon = `<i class="fa-solid fa-bars-staggered"></i>`;
  const arrowIcon = `<i class="fa-solid fa-arrow-left"></i>`;

  wrapper.classList.toggle("task_opened");

  if (menuBtn.innerHTML != arrowIcon) {
    menuBtn.innerHTML = arrowIcon;
  } else {
    menuBtn.innerHTML = menuIcon;
    
  }
};

menuBtn.addEventListener("click", screenToggle);


taskBox.addEventListener("click",(event)=>{
    const taskElement = event.target.closest('.task');
    
    if (taskElement) {
        taskElement.classList.add('active');

        event.preventDefault();
        event.stopPropagation();
        taskElement.classList.add('active');
    }


    screenToggle()

});
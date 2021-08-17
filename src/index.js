document.addEventListener("DOMContentLoaded", () => {
  
const submit = document.querySelector('form');
submit.addEventListener("submit", (e) => {
  e.preventDefault()
  createToDo()
  submit.reset()
})

function createToDo(){
      
    const input = document.getElementById("new-task-description");
    const aNewTask = document.createElement('li');
    const deleteBttn = document.createElement('button');

    aNewTask.textContent = input.value;
    document.getElementById('tasks').appendChild(aNewTask); 
  

    deleteBttn.textContent = 'Bye';
    aNewTask.appendChild(deleteBttn);
    deleteBttn.addEventListener('click', () => aNewTask.remove())
}    

})

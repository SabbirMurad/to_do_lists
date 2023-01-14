let addBox = document.querySelector('.add_task_box');
let addInput = addBox.querySelector('.add_input');
let addBtn = addBox.querySelector('.add_btn');
let toDoLists = document.querySelector('.to_do_lists')

addBtn.addEventListener('click',()=>{
  let taskText = addInput.value
  addNewTask(taskText)
})

async function addNewTask(task){
  await fetch('/api/v1/task',{
    method :'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body : JSON.stringify(task)
  })

  //loading all items again after adding new task
  getAllTasks()
}

async function getAllTasks(){
  let response = await fetch('/api/v1/task',{
    method :'GET'
  })
  let data = await response.json()
  
  for(let task of data){
    let items = document.createElement('div')
    items.classList.add('items')
    items.innerHTML = `
    <div class="task_details">
      <img src="" alt="" class="checked_icon">
      <div class="task_text">${task.name}</div>
    </div>
    <div class="task_icons">
      <img src="" alt="" class="edit_icon" onclick="editTask()">
      <img src="" alt="" class="delete_icon onclick="deleteTask()">
    </div>
    `
    toDoLists.append(items)
  }
}

async function deleteTask(id){
  await fetch(`/api/v1/task/search?id=${id}`)

  //loading all items again after deleting one task
  await getAllTasks()
}
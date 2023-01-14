let addBox = document.querySelector('.add_task_box');
let addInput = addBox.querySelector('.add_input');
let addBtn = addBox.querySelector('.add_btn');
let toDoLists = document.querySelector('.to_do_lists')

window.addEventListener('load',async ()=>{
  getAllTasks()
})

addBtn.addEventListener('click',async ()=>{
  let taskText = addInput.value
  await addNewTask({name:taskText})
  addInput.value =''
  getAllTasks()
})

async function addNewTask(task){
  await fetch('/api/v1/tasks',{
    method :'POST',
    headers: {'Content-Type': 'application/json;charset=utf-8'},
    body : JSON.stringify(task)
  })
}

async function getAllTasks(){
  let response = await fetch('/api/v1/tasks')
  let data = await response.json()

  toDoLists.innerHTML=``

  for(let task of data){
    let items = document.createElement('div')
    items.classList.add('items')
    items.setAttribute('task-id',task._id)

    items.innerHTML = `
    <div class="task_details">
      <img src="./icons/checked.svg" alt="" class="checked_icon ${task.completed === false? "display_none":""}">
      <div class="task_text ${task.completed === true? "text_crossed":""}">${task.name}</div>
    </div>
    <div class="task_icons">
      <img src="./icons/done.svg" alt="" class="done_icon ${task.completed === true? "display_none":""}" onclick="doneTask(event)">
      <img src="./icons/delete.svg" alt="" class="delete_icon" onclick="deleteTask(event)">
    </div>
    `
    toDoLists.append(items)
  }
}

async function doneTask(event){
  let taskItem = event.currentTarget.parentElement.parentElement
  let taskId = taskItem.getAttribute('task-id')

  await fetch(`/api/v1/tasks/search?id=${taskId}`,{
    method:'PATCH'
  })

  //loading all items again after deleting one task
  await getAllTasks()
}

async function deleteTask(event){
  let taskItem = event.currentTarget.parentElement.parentElement
  let taskId = taskItem.getAttribute('task-id')

  await fetch(`/api/v1/tasks/search?id=${taskId}`,{
    method:'DELETE'
  })

  //loading all items again after deleting one task
  await getAllTasks()
}
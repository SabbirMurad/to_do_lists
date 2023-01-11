const getAllTasks = (req,res)=>{
  res.send('all tasks')
}
const addNewTask = (req,res)=>{
  res.send('add new task')
}
const getTask = (req,res)=>{
  res.send('get single task')
}
const updateTask = (req,res)=>{
  res.send('update a task')
}
const deleteTask = (req,res)=>{
  res.send('delete a task')
}
module.exports ={
  getAllTasks,
  addNewTask,
  getTask,
  updateTask,
  deleteTask
}
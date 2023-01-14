const Task = require('../models/task') 

//get all the tasks
const getAllTasks = async (req,res)=>{
  try{
    const task = await Task.find({})
    res.status(201).json(task)
  }
  catch(err){
    res.status(500).send("Could not get the tasks")
  }
}

//add a new task
const addNewTask = async (req,res)=>{
  try{
    const task = await Task.create(req.body)
    res.status(201).send("Task added")
  }
  catch(err){
    res.status(500).send("Invalid data")
  }
}

//get a single task
const getTask = async (req,res)=>{
  try{
    const {id}=req.query
    const task = await Task.find({_id:id})
    res.status(201).json(task)
  }
  catch(err){
    res.status(500).send("Could not get the tasks")
  }
}

//update a task
const updateTask = async (req,res)=>{
  try{
    const {id}=req.query
    await Task.updateOne({_id:id},{$set:req.body},{
      new:true,
      runValidators:true
    })
    res.status(201).send("Updated this task")
  }
  catch(err){
    res.status(500).send("Could not get the tasks")
  }
}

//delete a task
const deleteTask = async (req,res)=>{
  try{
    const {id}=req.query
    await Task.deleteOne({_id:id})
    res.status(201).send("Deleted this task")
  }
  catch(err){
    res.status(500).send("Could not get the tasks")
  }
}

module.exports ={
  getAllTasks,
  addNewTask,
  getTask,
  updateTask,
  deleteTask
}
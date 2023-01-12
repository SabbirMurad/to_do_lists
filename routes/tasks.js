const express = require('express')
const router = express.Router()
const {
  getAllTasks,
  addNewTask,
  getTask,
  updateTask,
  deleteTask
} = require('../controllers/task')

router.route('/').get(getAllTasks).post(addNewTask)
router.route('/search').get(getTask).patch(updateTask).delete(deleteTask)


module.exports = router
import { Task, TodoList } from '../logic/todo-list.js'

describe('To-do list functionality', () => {

  it('should correctly add a single new task to the to-do list', () => {
    // Arrange
    const todoList = new TodoList()
    const newTask = new Task('Test task')

    // Act
    todoList.addTask(newTask)
    
    // Assert
    expect(todoList.tasks).toEqual([newTask])
  })

  it('should correctly add multiple new tasks to the to-do list', () => {
    const todoList = new TodoList()
    const testTask1 = new Task('Test task 1')
    const testTask2 = new Task('Test task 2')

    todoList.addTask(testTask1)
    todoList.addTask(testTask2)

    expect(todoList.tasks).toEqual([testTask1, testTask2])
  })

  it('should not add a task to a list if the task has no name', () => {
    const todoList = new TodoList()
    const testTask = new Task('')

    todoList.addTask(testTask)

    expect(todoList.tasks).toEqual([])
  })

  it('should correctly toggle the completion status of a task', () => {
    // Arrange
    const task = new Task('Test Task')

    // Assert initial state
    expect(task.isComplete).toBe(false)

    // Act - toggle completion status
    task.toggleCompletion()

    // Assert toggled state
    expect(task.isComplete).toBe(true)

    // Act - toggle completion status again
    task.toggleCompletion()

    // Assert toggled state back to initial
    expect(task.isComplete).toBe(false)
  })

  it('should correctly delete a task from a to-do list', () => {
    // Arrange
    const todoList = new TodoList()
    const taskToDelete = new Task('Task to delete')
    const taskToKeep = new Task('Task to keep')
    todoList.addTask(taskToDelete)
    todoList.addTask(taskToKeep)

    // Act
    todoList.deleteTask(taskToDelete)

    // Assert
    expect(todoList.tasks).toEqual([taskToKeep])
  })

  it('should count the correct total number of tasks in a to-do list', () => {
      const todoList = new TodoList()
      todoList.addTask(new Task('1'))
      todoList.addTask(new Task('2'))
      todoList.addTask(new Task('3'))

      const tasksCount = todoList.countTotalTasks()

      expect(tasksCount).toBe(3)
  })
  
it('should count the correct number of incomplete tasks in a to-do list', ()=>{
    const todoList = new TodoList()

    todoList.addTask(new Task('1', true))
    todoList.addTask(new Task('1', false))
    todoList.addTask(new Task('1', false))

    const incompleteTasksCount = todoList.countIncompleteTasks()

    expect(incompleteTasksCount).toBe(2)

})

it('should count the correct number of complete tasks in a to-do list', ()=>{
  const todoList = new TodoList()

  todoList.addTask(new Task('1', true))
  todoList.addTask(new Task('1', false))
  todoList.addTask(new Task('1', false))

  const completeTasksCount = 
  todoList.countCompleteTasks()

  expect(completeTasksCount).toBe(1)

})

it('should check if full list has been complete', ()=>{
  const todoList = new TodoList()

  todoList.addTask(new Task('1', true))
  todoList.addTask(new Task('2', true))
  todoList.addTask(new Task('3', true))

  const checkIsEntireListComplete = 
  todoList.checkIsEntireListComplete()

  expect(checkIsEntireListComplete).toBe(true)
})



  

  })


// Business logic
function Todo() {
    this.task = {};
  }
//   constructor for task
function Diary(event, date, description){
    this.event = event;
    this.date = date;
    this.description = description;
}
//   prototype to add task
Todo.prototype.addTask = function(task){
    this.task[task.event] = task;
}
let list = new Todo();
let user1 = new Diary("study", "03-10-2022", "study chapter 2");
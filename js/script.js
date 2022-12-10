// Business logic
function Todo() {
    this.task = {};
    this.taskId = 0;
  }
//   constructor for task
function Diary(event, date, description){
    this.event = event;
    this.date = date;
    this.description = description;
}
// prototype to assign id to task
Todo.prototype.giveId = function(){
    this.taskId +=1;
    return this.taskId;
}
//   prototype to add task
Todo.prototype.addTask = function(tasks){
    tasks.id = this.giveId();
    this.task[tasks.id] = tasks;
}
// prototype to find task
Todo.prototype.findTask = function(id) {
    if (this.task[id] != undefined) {
      return this.task[id];
    }
    return false;
  };

  let noteBook = new Todo();
let person1 = new Diary("study", "03-10-2022", "study chapter 2");

// UI LOGIC
function displayTask(tasks){
    const eventList = $("#tasks");
    let htmlDisplay = "";
    Object.keys(tasks.task).forEach(function(key){
        const contact = tasks.findTask(key);
        htmlDisplay += "<li id=" + contact.id + ">" + contact.event + " " + contact.date + "</li>";
      });
      eventList.html(htmlDisplay);
}

// function to display diary
function showDiary(taskId){
    const diary = noteBook.findTask(taskId);
    $("#diary").show();
    $(".taskTitle").html(diary.event);
    $(".taskDate").html(diary.date);
    $(".taskDescription").html(diary.description);
}
console.log(showDiary);

// function to add listener
function eventListener(){
    $("#tasks").on("click","li", function(){
        showDiary(this.id);
    });
}



$(document).ready(function() {
    eventListener();
    $("form#form").submit(function(event) {
      event.preventDefault();
      const inputtedEvent = $("#event").val();
      const inputtedDate = $("#dateInput").val();
      const inputtedDescription = $("textarea").val();
  
      // to clear form after submission
      $("#event").val("");
      $("#dateInput").val("");
      $("#textarea").val("");
      
      let newTask = new Diary(inputtedEvent, inputtedDate, inputtedDescription);
      noteBook.addTask(newTask);
      displayTask(noteBook);
    });
})
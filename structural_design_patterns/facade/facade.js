// Facade Pattern
// Used to provide a simplified interface to a complicated system.
// Facade hides the complexity of the back end from us
// Simplifies the interface - jQuery

// Object with proprties only
var Task = function(data) {
  this.name = data.name;
  this.priority = data.priority;
  this.project = data.project;
  this.user = data.user;
  this.completed = data.completed;
}

var TaskService = function() {
  return {
    complete: function(task) {
      task.completed = true;
      console.log("Completing task: " + task.name);
    },

    setCompletedDate: function(task) {
      task.completedDate = new Date();
      console.log(task.name + ' completed on ' + task.completedDate);
    },

    save: function(task) {
      console.log('Saving Task: ' + task.name);
    }
  }
}();

// Creating a wrapper
var TaskServiceWrapper = function() {

  var completeAndNotify = function(task){
    TaskService.complete(myTask);
    if (myTask.complete == true) {
      TaskService.setCompletedDate(myTask);
      TaskService.notifyCompletion(myTask, myTask.user);
      TaskService.save(myTask);
    }
  }
  return {
    completeAndNotify: completeAndNotify
  }
}();

var myTask = new Task ({
  name: 'MyTask',
  priority: 1,
  project: "Courses",
  user: 'Jon',
  completed: false
});

//console.log(myTask);
TaskServiceWrapper.completeAndNotify(myTask);
// if(myTask.completed == true) {
//   TaskService.setCompletedDate(myTask);
//   TaskService.notifyCompetion(myTask, myTask.user);
//   TaskService.save(myTask);
// }

console.log(myTask);

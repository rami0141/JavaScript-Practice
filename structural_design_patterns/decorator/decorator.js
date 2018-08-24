// Decorator Patterns
// Used to add new functionality to an existing object, without being obstrusive
// it wraps an object and protects the existing object - it just adds functionality

// Constructor
var Task = function(name) {
  this.name = name;
  this.completed = false;
}

// 2 methods
Task.prototype.complete = function() {
  this.completed = true;
  console.log("Completing Task: " + this.name);
};

Task.prototype.save = function() {
  console.log("Saving Task: " + this.name);
};

var myTask = new Task("Legacy Task");
myTask.complete();
myTask.save();

// -----------------------------------------

var urgentTask = new Task("Urgent Task");

// Decorated urgent task with priority and notify
urgentTask.priority = 2;
urgentTask.notify = function() {
  console.log("notifying important people");
};

// urgentTask.notify();
urgentTask.complete();

// have decorated urgentTask with a new save
urgentTask.save = function() {
  this.notify();
    Task.prototype.save.call(this)
};

urgentTask.save();

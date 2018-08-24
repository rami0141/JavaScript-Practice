// Create a new object and decorate it
// We don't want to mess with Task so it doesn't break
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

// Sub Object from task - constructor calling Task and with a new property
var UrgentTask = function(name, priority) {
  Task.call(this, name);
  this.priority = priority;
};

// set up the prototype so we can access the complete method
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function() {
  this.notify();
  console.log('do special stuff before saving');
  Task.prototype.save.call(this)
};

var ut = new UrgentTask('This is urgent', 1);

ut.complete();
ut.save();
console.log(ut);

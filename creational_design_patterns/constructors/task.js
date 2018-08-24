var Task = function(name) {
  this.name = name;
  this.completed = false;
}

Task.prototype.complete = function() {
  this.completed = true;
  console.log("Completing Task: " + this.name);
};

Task.prototype.save = function() {
  console.log("Saving Task: " + this.name);
}

// We are exporting task
module.exports = Task;

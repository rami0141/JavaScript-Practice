var Repo = require('./taskRepo');

var Task = function(data) {
  this.name = data.name;
  this.completed = false;
}

Task.prototype.complete = function() {
  this.completed = true;
  console.log("Completing Task: " + this.name);
};

Task.prototype.save = function() {
  console.log("Saving Task: " + this.name);
  Repo.save(this);
}

// We are exporting task
module.exports = Task;

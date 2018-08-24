// Flyweight Patterns
// Conserves memory by sharing portions of an object between objects
// Share data across objects - results in a smaller memory footprint
// Only useful if you have large numbers of objects

// Task object
var Task = function(data) {
  this.name = data.name;
  this.flyweight = FlyweightFactory.get(data.project, data.priority, data.user, data.completed);
  // this.priority = data.priority;
  // this.project = data.project;
  // this.user = data.user;
  // this.completed = data.completed;
};

Task.prototype.getPriority = function() {
  this.flyweight.priority;
};

function Flyweight(project, priority, user, completed) {
  this.priority = priority;
  this.project = project;
  this.user = user;
  this.completed = completed;
};

var FlyweightFactory = function(){
  var flyweights = {};

  var get = function(project, priority, user, completed) {
    // not unique to the tasks
    // if this collection does not exist then we are going to create a new flyweight
    if (!flyweights[project + priority + user + completed]) {
      flyweights[project + priority + user + completed] =
      new Flyweight(project + priority + user + completed);
    }
    return flyweights[project + priority + user + completed];
  };
  // We want to know how many flyweight there are
  var getCount = function() {
    var count = 0;
    for (var f in flyweights) count++;
    return count;
  }
  return {
    get: get,
    getCount: getCount
  }
}();
// have 3 methods - add, get, getCount
function TaskCollection() {
  var tasks = {};
  var count = 0;
  var add = function(data) {
    tasks[data.name] =
      new Task(data);
    count++;
  };
  var get = function(name) {
    return tasks[name];
  };
  var getCount = function() {
    return count;
  };
  return {
    add: add,
    get: get,
    getCount: getCount
  };
}

var tasks = new TaskCollection();

// Arrays
var projects = ['none', 'courses', 'training', 'project'];
var priorities = [1, 2, 3, 4, 5];
var users = ['Jon', 'Erica', 'Amanda', 'Nathan'];
var completed = [true, false];

// Looking at the current memory usage
var initialMemory = process.memoryUsage().heapUsed;

// A loop that will create random tasks
for (var i = 0; i < 10000; i++) {
  tasks.add({
    name: 'task' + i,
    priority: priorities[Math.floor((Math.random() * 5))],
    project: projects[Math.floor((Math.random() * 4))],
    user: users[Math.floor((Math.random() * 4))],
    completed: completed[Math.floor((Math.random() * 2))]
  });
};

// how many memory have we used in course of 10,000 objects
var afterMemory = process.memoryUsage().heapUsed;
console.log('used memory ' + (afterMemory - initialMemory) / 1000000);

console.log("tasks: " + tasks.getCount());
console.log("Flyweights: " + FlyweightFactory.getCount());

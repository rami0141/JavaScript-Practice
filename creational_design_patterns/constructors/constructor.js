// Creational Design Patterns

// **Constructor Pattern**
// Used to create new objects with their own object scope.
// The new keyword - it create a constructor function when used.
// 1. creates a new objects
// 2. links to an object prototype
// 3. Binds 'this' to the new object scope
// 4. returns this
// pass in parameters through the function called ObjectName
function ObjectName(param1, param2) {
  this.param1 = param1;
  this.param2 = param2;
  this.toString = function () {
    return this.param1 + ' ' + this.param2;
  }
}

// toString is recreataed multiple times - this is not ideal
// Prototype - an encapsulation of properties that an object links todo
// When two copies of the task object are created, the refer to the task prototype
// They don't pull those methods into themselves.
// var Task = function(name) {
//   this.name = name;
//   this.completed = false;
//
//   this.complete = function() {
//     this.completed = true;
//     console.log("Completing Task: " + this.name);
//   }
//   this.save = function() {
//     console.log("Saving Task: " + this.name);
//   }
// }
// -------------------------------------------------
// The code below will not create a copy of the complete function
// All copies of the object have access to the prototype but don't have their own cop
// This is much more efficient
// ClassName.prototype.methodName = function(arguments) {
//   // remove the methods from the constructor
// }
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

// Creating an object and then making copies of it - 4 copies of the object
var task1 = new Task("create a demo for constructor");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singletons");
var task4 = new Task("create a demo for prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();

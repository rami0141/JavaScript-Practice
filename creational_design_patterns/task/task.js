var task = {
  title: "My Title",
  description: "My Description"
};

Object.defineProperty(task, 'toString', {
  value: function() {
    return this.title + " " + this.description;
  },
  writable: false, // This prevents you from over a valuewriting a value
  enumerable: false, // does not display the method
  configurable: false //cannot redefine a property
});

console.log(task);
console.log(task.toString());
// This does not overwrite toString
// task.toString = "hi";

//----------------------------------------------------------
// Created a new object and was able to change toString
var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
  value: function() {
    return this.title + " is urgent";
  },
  writable: false, // This prevents you from over a valuewriting a value
  enumerable: false, // does not display the method
  configurable: false //cannot redefine a property
});

console.log(urgentTask.toString());
// ------------------------------------------------------


// ------------------------------------------------------
// task.title = "My Task";
// task.description = "My Description";
// task.toString  = function() {
//   return this.title + " " + this.description;
// }
// console.log(task.toString());

// Defining Properties - defineProperty method
// Object.defineProperty(obj, 'name', {
//   value: 'my name',
//   writable: true,
//   enumerable: true, // in foreign loop or keys function
//   configurable: true // not allowed to change the configuration of these items
// });

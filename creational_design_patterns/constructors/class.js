// EcmaScript2015
// We can use classes but only in strict module
// you can add methods to a class
'use strict'

class Task {
  constructor(name) {
    this.name = name;
    this.completed = false;
  }
  complete() {
    this.completed = true;
    console.log("Completing Task: " + this.name);
  };
  save() {
    console.log("Saving Task: " + this.name);
  };
}

var task1 = new Task("create a demo for constructor");
var task2 = new Task("create a demo for modules");
var task3 = new Task("create a demo for singletons");
var task4 = new Task("create a demo for prototypes");

task1.complete();
task2.save();
task3.save();
task4.save();

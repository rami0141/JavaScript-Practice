// Module Pattern
// Simple way to encapsulate methods
// Creates a "Toolbox" of functions to use
// For example - everytime I want to do something with the database
// Module pattern will deal with that
// Only need one Module and not a bunch of objects are created

var Module = {
  method: function() {...},
  nextMethod: function() {...}
}

var Module = function () {
  var privateVar = "I am private...";
  return {
    method: function () {
      ...
    },
    nextMethod: function() {
      ...
    }
  }
}

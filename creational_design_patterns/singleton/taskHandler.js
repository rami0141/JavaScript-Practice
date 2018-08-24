var myrepo = require('./repo');

// will create a new task in the repo
var taskHandler = function () {
  return {
    save: function() {
      myrepo.save('Hi from taskHandler');
    }
  }
}

module.exports = taskHandler();

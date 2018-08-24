// Singleton
// Used to restrict an object to one instance of that object across the application.
/* Remembers the last time you used it and Hands you back that same instance
that you used before*/
// First you create an object in the create Repo function and returns it
var TaskRepo = (function() {
  var TaskRepo;
  function createRepo() {
    var TaskRepo = new Object("Task");
    return TaskRepo;
  }
  return {
    // if an instance has not been created, it will create console
    // If an instance has been created, it will return it
    getInstance: function() {
      if (!TaskRepo) {
        taskRepo = createRepo();
      }
      return taskRepo;
    }
  };
})();

var repo1 = TaskRepo.getInstance();
var repo2 = TaskRepo.getInstance();

if (repo1 === repo2) {
  console.log("Same TaskRepo");
}

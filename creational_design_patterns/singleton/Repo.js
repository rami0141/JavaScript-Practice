var repo = function() {
  //called will keep track of how many times method save has been called
  var called = 0;

  var save = function(task) {
    called++;
    console.log("Saving " + task + " Called " + called + " times");
  }
  console.log("newing up task repo");
  return{
    save: save
  }
}

module.exports = repo();

todoList.controller('ToDoListController', [function(){
  var self = this;

  self.theList = [];
  self.view = 1;

  self.addTask = function(){
    self.theList.push({"task": self.inputTask, "completed": false});
    self.inputTask = ''
  }

  self.removeTask = function(index){
    self.theList.splice(index, 1);
  }

  self.complete = function(task){
   task.completed = !task.completed;
 };

 self.clearCompleted = function(){
   self.theList = self.theList.filter(function(task){
     return !task.completed;
   });
 };

 self.setView = function(viewNumber){
   self.view = viewNumber;
 };

 self.isView = function(viewNumber){
   return self.view === viewNumber;
 };

}]);

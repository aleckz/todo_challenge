todoList.controller('ToDoListController', [function(){
  var self = this;

  self.theList = [];


  self.addTask = function(){
    self.theList.push(self.inputTask);
  }

}]);

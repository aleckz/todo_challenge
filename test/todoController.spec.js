describe('ToDoListController', function(){

  beforeEach(module('ToDoList'));

  var controller

  beforeEach(inject(function($controller){
    controller = $controller('ToDoListController');
  }));

  it('initialises with an empty to-do list', function(){
    expect(controller.theList).toEqual([]);
  })

  describe('to-do list functionality', function(){
    var tasks = ['shopping', 'learntocode']

    it('displays a task when it has been added', function(){
      controller.inputTask = 'shopping'
      controller.addTask();
      controller.inputTask = 'learntocode'
      controller.addTask();
      expect(controller.theList).toEqual(tasks);
    })
  });

});

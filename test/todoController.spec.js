describe('ToDoListController', function(){

  beforeEach(module('ToDoList'));

  var controller

  beforeEach(inject(function($controller){
    controller = $controller('ToDoListController');
  }));

  it('has a title on the webpage', function(){
    expect(browser.getTitle()).toEqual('To-do List')
  })

  it('initialises with an empty to-do list', function(){
    expect(controller.theList).toBeUndefined();
  })

  //
  // it('should create "todoList" model with 3 items', function(){
  //
  // })

});

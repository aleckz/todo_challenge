describe('ToDoListController', function(){

  beforeEach(function(){
    browser.get('http://localhost:8080')
  })

  it('has a title on the webpage', function(){
    expect(browser.getTitle()).toEqual('To-do List')
  })


  it('should create "todoList" model with 3 items', function(){

  })

})

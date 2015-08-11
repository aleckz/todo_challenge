describe('to do list', function(){

  var addingTaskText = element(by.model('listController.inputTask'))
  var addTaskButton = element(by.className('button'))

  beforeEach(function(){
    browser.get('http://localhost:8080')
  })

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('To-do List')
  });

  it('can add tasks to a list', function(){
    addingTaskText.sendKeys('shopping')
    addTaskButton.click();
    expect(element(by.binding('task')).getText()).toEqual('shopping')
  });

  it('can edit tasks with a list', function(){

  });

});

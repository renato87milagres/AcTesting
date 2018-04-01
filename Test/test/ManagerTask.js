
var LoginPage = require ( '../Model/form.page' ); //import the functions base from the form.page.js
//fris test is desktop 
describe('Create Task', function () {
	it('I should be able to create a task', function () {
		LoginPage.open('users/sign_in');
		LoginPage.username.setValue('renato_milagres@yahoo.com.br');
		browser.pause(1000);
        LoginPage.password.setValue('110987rmm');
		browser.pause(1000);
        LoginPage.submit();
		browser.pause(1000);
		browser.url('/tasks');
		browser.pause(1000)
		browser.click('.btn.btn-xs.btn-primary.ng-binding');
		browser.waitForText('.modal-title', 3000);
		browser.setValue('#new_sub_task', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus nunc ante, vitae scelerisque libero vulputate non. Aenean a turpis dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et justo sed risus accumsan pellentesque sed eu ligula. Fusce eget urna neque. Integer quis erat ante. Duis luctus scelerisque sapien, at porta nisi efficitur vitae. Mauris quis augue vulputate, vehicula dui a, ultrices odio');
		browser.pause(1000);
		browser.scroll('.panel-body');
		browser.pause(1000);
		browser.click('#add-subtask');
		browser.pause(1000);
		browser.waitForText('#MsgErroMaximium250characters', 3000);
});

it('I should be able to create a subtask due date = empty ', function () {
	
		browser.setValue('#new_sub_task', ' ');
		browser.click('#add-subtask');
		browser.waitForText('#MsgErrodescrpitionEmpty', 3000);
});

it('I should be able to create a subtask due date = empty ', function () {
	
		browser.setValue('#dueDate', ' ');
		browser.click('#add-subtask');
		browser.waitForText('#MsgErroduedateEmpty', 3000);
});


it('I should be able to create a subtask due date format mm/dd/yyyy ', function () {
	
		browser.setValue('#dueDate', '31/12/2060');
		browser.click('#add-subtask');
		browser.waitForText('#MsgErroduedateformatDate', 3000);
});






	});



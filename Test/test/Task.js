
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
		browser.waitForExist('h1');
		browser.click('.input-group-addon:last-child');
    	browser.waitForText('#MsgErroMinimuimthreecharacters', 3000);
		browser.pause(1000);
});
	
it('I should be not able to create a task name > 250', function () {
		browser.url('/tasks');
		browser.waitForExist('h1');
		browser.setValue('#new_task', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus nunc ante, vitae scelerisque libero vulputate non. Aenean a turpis dolor. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum et justo sed risus accumsan pellentesque sed eu ligula. Fusce eget urna neque. Integer quis erat ante. Duis luctus scelerisque sapien, at porta nisi efficitur vitae. Mauris quis augue vulputate, vehicula dui a, ultrices odio');
		browser.click('.input-group-addon:last-child');
		browser.waitForText('#MsgErroMaximium250characters', 3000);
		browser.pause(1000);
});

it('I should be  able to create a task ', function () {
		browser.url('/tasks');
		browser.waitForExist('h1');
		browser.setValue('#new_task', 'task');
		browser.click('.input-group-addon:last-child');
		browser.waitForText('#MsgSucessCreateTask', 3000);
		browser.pause(1000);
});
	});



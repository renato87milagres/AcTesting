var page = require('./page');
var id ;

var formPage = Object.create(page, {
	
	username: { get: function () { return $('#user_email'); } },
    password: { get: function () { return $('#user_password'); } },
	submitButton: {get: function () { return $('.btn');}},
	submit: { value: function() {this.submitButton.click();}},
	
	 open: { value: function() { //function for the url 
			browser.url('/users/sign_in'); //set the url 
			
		 } },
	 game: { value: function() { //function for search game 
			browser.setValue('.search-input__input-wrapper input',game);
			
		 } },
	  clicked: { value: function(id) { //pass the element html and click
		  browser.click(id); //function click 
			
			
		 } }
});

module.exports = formPage;
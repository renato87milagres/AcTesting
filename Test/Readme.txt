Step 1 - Run the test ;

For run the test, you need before to install the Webdriver.io;
after this execute the command c://<yourfolder>/<>/ npm test;
Two test was created
 1- for desktop 
 2- for mobile; 
All test run in the google chrome; The tests are in the folder ./test (login.js)

You need have installed the Webdriver.IO Globally and all additional packages globally ($ ./node_modules/.bin/ wdio- v);

The configurations was :

Where do you want to execute your tests? On my local machine
Which framework do you want to use? mocha
Shall I install the framework adapter for you? Yes
Where are your test specs located? ./test/**/*.js
Which reporter do you want to use? spec - https://github.com/webdriverio/wdio-spec-reporter
Shall I install the reporter library for you? Yes
Do you want to add a service to your test setup? selenium-standalone - https://github.com/webdriverio/wdio-selenium-standalone-service
Shall I install the services for you? Yes
Level of logging verbosity silent
In which directory should screenshots gets saved if a command fails? ./errorShots/
What is the base url? https:

You can read more here : http://webdriver.io/guide.html


Step 2 - Run the Allure :

For to execute the Allure Framework , you need before to install the Allure; (npm install wdio-allure-reporter --save-dev)
after this execute the command c://<yourfolder>/<>/ allure server C://<youfolder>/<>/allure-results


If you not installed the Allure, you need to change the wdio.config after the installation
 reporters: ['dot', 'allure'],
    reporterOptions: {
        allure: {
            outputDir: 'allure-results'
        }
    },
	
you can read more here : http://webdriver.io/guide/reporters/allure.html
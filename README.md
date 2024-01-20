# General Description:
- My script files are available in the cypress\e2e file.
- I used comments in some lines of my codes for further explanation.
- According to my conversation with Atefeh, I did not add the assertions to each coding action and just added them where the assignment told me to verify. Besides, I used only implicit assertions so that it is visible to you when the test is run and the test is passed. It should be noted that I am completely familiar with all the explicit assertions and can use them.
- I wrote a describe block and used it for TC01 and TC02. For TC01, I could write scenario A and scenario B in two it blocks. However, because these two scenarios can be considered as a flow to create and edit a user, I wrote them in one it block (in our current way, a new user is added in scenario A, and then the first name and last name of that user is edited as scenario B). It is worth mentioning that the decision to carry out a test case continuously or to leave it in separate it blocks can be discussed and planned with the test team. Although TC01 and TC02 are not related to a test scenario and they are separate from each other, the assignment named this with TC01 and TC02. Therefore, I wrote one describe block and two its block for TC01 and TC02. As I mentioned, it can be discussed and planned with the test team in a real situation.

# POM:
I used the page object model (POM) for this assignment since this procedure should be in every script tests of automation tools like Cypress, Selenium, Appium and so on. It helps reduce code duplication and improves test case maintenance

# Test Data:
In the real project, test data is better to have their own scripts owing to reducing code duplication and improving test case maintenance. Therefore, I created a testData.js for the test data of this assignment.It should be mentioned that test data can be in the separate js file, the pom class, or even in our main cy.js scripts. For most general purposes, a separate file is flexible and keeps our tests organized.

# Uncaught Exceptions:
Since the site of the assignment is a demo site, the Cypress tests sometimes might fail due to uncaught exceptions. Therefore, I added these lines to my scripts:
` Cypress.on( 'uncaught:exception', (error,Runnable)=> {
    return false;
});`

The primary use of this code is to prevent Cypress tests from failing due to uncaught exceptions that are not critical to the functionality being tested. For more information about the reasons for this failure and this code please refer to this document of Cypress: 
https://docs.cypress.io/guides/references/error-messages#Cypress-detected-that-an-uncaught-error-was-thrown-from-a-cross-origin-script

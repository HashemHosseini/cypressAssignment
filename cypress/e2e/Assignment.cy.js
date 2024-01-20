/// <reference types ="cypress"/>

Cypress.on( 'uncaught:exception', (error,Runnable)=> {
    return false;
});

import user from "./testData";          //Importing user's information (test data) from testData.js

import {POM } from "./pomClass";        //Importing POM class

const pom = new POM ()


// One describe block for whole assignment including TC01 and TC02:
describe('Assignment', () => {
    
    beforeEach ('Going to website',()=>{
        pom.enterURL()                    //Go to website befor it blocks
        cy.wait(1000)
    })

    it ('TC01',() =>  {
        
        // Scenario A starts from here:

        pom.navigateElement()                    //Navigate element
        pom.clickOnWebTable()                    //Click on web table
        pom.clickOnAdd()                         //Click on add button
        cy.wait(1000)

        pom.enterFirstName(user.firstName)       //Adding first name
        cy.wait(1000)
        pom.enterLastName(user.lastName)         //Adding last name    
        pom.enterAge(user.age)                   //Adding age
        pom.enterEmail(user.email)               //Adding email
        pom.enterSalary(user.salary)             //Adding salary
        pom.enterDepartment(user.department)     //Adding department
        cy.wait(1000)
        
        pom.clickOnSubmit()                      //Hit submit
        cy.wait(1000)

        pom.firstNameAssertion(user.firstName)        //Assertions for first name
        pom.lastNameAssertion(user.lastName)          //Assertions for last name
        pom.ageAssertion(user.age)                   //Assertions for age
        pom.emailAssertion(user.email)               //Assertions for email
        pom.salaryAssertion(user.salary)             //Assertions for salary
        pom.departmentAssertion(user.department)    //Assertions for department
        


        // Scenario B starts from here:
        
        pom.clickOnEditButton()                         //Click on edit button             
        pom.enterFirstName(user.editedFirstName)        //Adding edited first name
        pom.enterLastName(user.editedLastName)          //Adding edited last name

        pom.clickOnSubmit()                             //Hit submit
        cy.wait(1000)

        pom.firstNameAssertion(user.editedFirstName)     //Assertions for edited first name
        pom.lastNameAssertion(user.editedLastName)      //Assertions for edited last name
     })

    it ('TC02',() =>  {

        pom.selectNavigateWidget()        //Navigate Widget
        pom.selectProgressBar()           //Select Progress Bar
        pom.clickOnStartButton()         //Click on Start
        cy.wait(20000)                   //Wait for the progress bar gets 100% value

        pom.progressBarAssertion()       //Assertion for green color and 100% 
    })

})

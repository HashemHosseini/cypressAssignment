
import user from "./testData"

export class POM {
    
    url ='https://demoqa.com/'      //url of the website
    
    //All element selectors (can be identified from their variable name):
    elementSelector ='Elements'
    webTableSelector='Web Tables'
    addSelector='Add'
    firstNameSelector= '#firstName'
    lastNameSelector='#lastName'
    ageSelector='#age'
    emailSelector='#userEmail'
    salarySelector='#salary'
    departmentSelector='#department'
    submitSelector='Submit'
    editButtonSelector='#edit-record-4'
    widgetSelector='Widgets'
    progressBarSelector='Progress Bar'
    startButtonSelector='#startStopButton'

    firstNameAssertionSelector=':nth-child(4) > .rt-tr > :nth-child(1)'
    lastNameAssertionSelector=':nth-child(4) > .rt-tr > :nth-child(2)'
    ageAssertionSelector=':nth-child(4) > .rt-tr > :nth-child(3)'
    emailAssertionSelector=':nth-child(4) > .rt-tr > :nth-child(4)'
    salaryAssertionSelector=':nth-child(4) > .rt-tr > :nth-child(5)'
    departmentAssertionSelector=':nth-child(4) > .rt-tr > :nth-child(6)'
    
    progressBarAssertionSelector='.progress-bar'
    greenColorAssertionSelector='bg-success'


    //Web elements (can be identified from their name):
    enterURL (){
        cy.visit(this.url) 
    }

    navigateElement (){
        cy.contains(this.elementSelector).click()
    }

    clickOnWebTable (){
        cy.contains(this.webTableSelector).click()
    }

    clickOnAdd (){
        cy.contains(this.addSelector).click()
    }

    enterFirstName (firstName){
        cy.get(this.firstNameSelector).type('{selectall}'+ firstName)
    }

    enterLastName (lastName){
        cy.get(this.lastNameSelector).type('{selectall}'+ lastName)
    }

    enterAge (age){
        cy.get(this.ageSelector).type(age)
    }

    enterEmail (email){
        cy.get(this.emailSelector).type(email)  
    }

    enterSalary (salary){
        cy.get(this.salarySelector).type(salary) 
    }

    enterDepartment (department){
        cy.get(this.departmentSelector).type (department)
    }

    clickOnSubmit (){
        cy.contains(this.submitSelector).click()
    }

    clickOnEditButton(){
        cy.get(this.editButtonSelector).click()
    }

    selectNavigateWidget(){
        cy.contains(this.widgetSelector).click()
    }

    selectProgressBar(){
        cy.contains(this.progressBarSelector).click()
    }


    
    //Assertions (can be identified from their name):

    clickOnStartButton(){
        cy.get('#startStopButton').click()
    }

    firstNameAssertion(firstName){
        cy.get(this.firstNameAssertionSelector)
        .should('have.text', firstName)
        .and('be.visible')
    }

    lastNameAssertion(lastName){
        cy.get(this.lastNameAssertionSelector)
        .should('have.text', lastName)
        .and('be.visible')
    }

    ageAssertion(age){
        cy.get(this.ageAssertionSelector)
        .should('have.text', age)
        .and('be.visible')
    }

    emailAssertion(email){
        cy.get(this.emailAssertionSelector)
        .should('have.text', email)
        .and('be.visible')
    }

    salaryAssertion(salary){
        cy.get(this.salaryAssertionSelector)
        .should('have.text', salary)
        .and('be.visible')
    }

    departmentAssertion(department){
        cy.get(this.departmentAssertionSelector)
        .should('have.text', department)
        .and('be.visible')

    }

    progressBarAssertion (){
        cy.get(this.progressBarAssertionSelector) 
        .should('have.class', this.greenColorAssertionSelector)
        .and('have.attr', 'aria-valuenow', '100')
    }
}

/// <reference types="cypress"/>

import reg from "../Pages/Register.cy"

const regs = new reg()

describe("Verifying a Registration Page",()=>{
    beforeEach("Open the login page",()=>{
       regs.visit()
    })
    it("The user should be able to register successfully",()=>{
        regs.FirstName().type("Olatunde")
        regs.LastName().type("Muiz")
        regs.Email().type("Muiz.olatunde22@gmail.com")
        regs.BusinessName().type("Creative Gallery")
        regs.Country().type("Nigeria")
        regs.dropdown().click()
        regs.dropdown().should('contain','Nigeria')
        regs.PhoneNumber().type('7061212798')
        regs.Password().type('Windows123@')
        regs.ConfrimPassword().type('Windows123@')
        regs.StarterB_radioButton().click()
        regs.FalseRadioButton().click()
        regs.CheckBox1().click()
        regs.CheckBox2().click()
        regs.SignupButton().click()
        cy.wait(3000)
        regs.successfulMessage().should('have.text','User account was created successfully')

    }).
})
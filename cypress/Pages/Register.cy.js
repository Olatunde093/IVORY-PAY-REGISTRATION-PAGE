class reg{
    visit(){
        return cy.visit("https://qa.d1ainun5cjrnni.amplifyapp.com/register")
    }
    FirstName(){
        return cy.get('#register_firstName')
    }
    LastName(){
        return cy.get('#register_lastName')
    }
    Email(){
        return cy.get('#register_email')
    }
    BusinessName(){
        return cy.get('#register_businessName')
    }
    dropdown(){
        return cy.get(".ant-select-item-option-content")
    }
    Country(){
        return cy.get("#rc_select_0")
    }
    PhoneNumber(){
        return cy.get(".add-on.ant-input-group-wrapper  .ant-input")
    }
    Password(){
        return cy.get("#register_password")
    }
    ConfrimPassword(){
        return cy.get('#register_confirmPassword')
    }
    StarterB_radioButton(){
        return cy.get('[value="starter"]')
    }
    RegisterdB_radioButton(){
        return cy.get('[value="registered"]')
    }
    TrueRadioButton(){
        return cy.get('[value="true"]')
    }
    FalseRadioButton(){
        return cy.get ('[value="false"]')
    }
    DeveloperCode(){
        return cy.get ('#register_developerId')
    }
    CheckBox1(){
        return cy.get ('[class="mb-5"] .ant-checkbox-input')
    }
    CheckBox2(){
        return cy.get ('[class="mb-8"] .ant-checkbox-input')
    }
    SignupButton(){
        return cy.get('button')
    }
    notification(){
        return cy.get ('.ant-notification-notice-description')

    }
    notification2(){
        return cy.get('.ant-notification-notice-message')
    }
    errormessage(){
        return cy.get ('.ant-form-item-explain-error')
    }
}
module.exports = reg
const elCheckoutPage = require('./elements').elements

class CheckoutPage{
    clickProceedToOrderForm(){
        cy.wait(3000)
        cy.get(elCheckoutPage.cart.btnToOrderForm).should('be.visible').click()
    }

    typeProfileFirstName(name){
        cy.get(elCheckoutPage.profile.inputFirstName).should('be.visible').type(name)
    }

    typeProfileLastName(name){
        cy.get(elCheckoutPage.profile.inputLastName).should('be.visible').type(name)
    }

    typeProfileDocument(document){
        cy.get(elCheckoutPage.profile.inputDocument).should('be.visible').type(document)
    }

    typeProfilePhone(phone){
        cy.get(elCheckoutPage.profile.inputPhone).should('be.visible').type(phone)
    }

    typeProfileBirthDate(birthDate){
        cy.get(elCheckoutPage.profile.inputBirthDate).should('be.visible').type(birthDate)
    }

    clickProceedToShipping(){
        cy.wait(2000)
        cy.get(elCheckoutPage.profile.btnProceedToShipping).should('be.visible').click()
    }

    typeShippingPostalCode(postalCode){
        cy.get(elCheckoutPage.shipping.inputPostalCode).should('be.visible').type(postalCode)
    }

    typeShippingNumber(number){
        cy.get(elCheckoutPage.shipping.inputShipNumber).should('be.visible').type(number)
    }

    typeReceiverName(name){
        cy.get(elCheckoutPage.shipping.inputReceiver).should('be.visible').type(name)
    }

    clickProceedToPayment(){
        cy.wait(3000)
        cy.get(elCheckoutPage.shipping.btnProceedToPayment).should('be.visible').click({force:true})
    }

    clickBtnPaymentSubmit(){
        cy.get(elCheckoutPage.summary.btnPaymentSubmit).last().click({force:true})
    }

    validateBtnPaymentSubmit(){
        cy.get(elCheckoutPage.summary.btnPaymentSubmit).last().should('exist')
    }

    validatePixConfirmationModal(){
        cy.get(elCheckoutPage.pix.pixLogoModal).should('be.visible')
    }

    clickPixPaymentOption(){
        cy.wait(2000)
        cy.get(elCheckoutPage.paymentOption.pixOpt).should('be.visible').click()
    }

}

export default new CheckoutPage();
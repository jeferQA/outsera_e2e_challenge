const elPdpPage = require('./elements').elements

class MinicartPage{
    clickProceedToCheckout(){
        cy.wait(5000)
        cy.get(elPdpPage.btnProceedToCheckout).click({force:true})
    }

}

export default new MinicartPage()
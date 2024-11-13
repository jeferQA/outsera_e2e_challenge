const elPdpPage = require('./elements').elements

class PdpPage{
    visitPdp(url){
        cy.visit(url)
    }

    selectFirstSize(){
        cy.wait(2000)
        cy.get(elPdpPage.btnSizeList).first().click({force:true})
    }

    clickAddToMinicart(){
        cy.wait(3000)
        cy.get(elPdpPage.btnAddToMinicart).click()
    }

    validateImageGallery(){
        cy.get(elPdpPage.imageGallery).first().should('be.visible')
    }
}

export default new PdpPage()
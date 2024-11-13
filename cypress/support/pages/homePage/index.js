const elHomePage = require('./elements').elements

class HomePage{
    visitHome(url){
        cy.visit(url)
    }

    clickLoginIcon(){
        cy.wait(2000)
        cy.get(elHomePage.iconLoginHeader).should('be.visible').click()
    }

    clickEmailPasswordOption(){
        cy.wait(5000)
        cy.get(elHomePage.btnEmailPassword).should('be.visible').click()
    }

    typeEmailLogin(email){
        cy.get(elHomePage.inputEmailLogin).should('be.visible').type(email)
    }

    typePasswordLogin(password){
        cy.get(elHomePage.inputPasswordLogin).should('be.visible').type(password)
    }

    clickEnterLogin(){
        cy.get(elHomePage.btnEnterLogin).should('be.visible').click()
    }

    validateAuthCoockie(authCookie){
        cy.wait(5000)
        cy.getCookie(authCookie).should('not.be.null')
    }

}

export default new HomePage()
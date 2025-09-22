import {Before, Given, When, And, Then} from "cypress-cucumber-preprocessor/steps"
import HomePage from "../pages/homePage"
import PdpPage from "../pages/pdpPage"
import MinicartPage from "../pages/minicartPage"
import CheckoutPage from "../pages/checkoutPage"

import authCookie from "../../fixtures/auth.json"


Given('that im on homepage', () => {
    HomePage.visitHome('/')
})

When('i do login', () => {
    HomePage.clickLoginIcon()
    HomePage.clickEmailPasswordOption()
    HomePage.typeEmailLogin('jeferson.dev@gmail.com')
    HomePage.typePasswordLogin('@Teste2024')
    HomePage.clickEnterLogin()
})

Then('user should be logged', () => {
    HomePage.validateAuthCoockie(authCookie.authLoginCookie)
})

Given('i add a product to the cart', () => {
    PdpPage.visitPdp('/meias-performer-longas-branco/p')
    PdpPage.selectFirstSize()
    PdpPage.clickAddToMinicart()
    MinicartPage.clickProceedToCheckout()
    CheckoutPage.clickProceedToOrderForm()
})

When('fill purchase data', () => {
    CheckoutPage.typeProfileFirstName('jeferson')
    CheckoutPage.typeProfileLastName('indejejczak')
    CheckoutPage.typeProfileDocument('68358573073')
    CheckoutPage.typeProfileBirthDate('1995-09-04')
    CheckoutPage.typeProfilePhone('42999619817')
    CheckoutPage.clickProceedToShipping()
    CheckoutPage.typeShippingPostalCode('84016330')
    CheckoutPage.typeShippingNumber('123')
    CheckoutPage.typeReceiverName('Jeferson')
    CheckoutPage.clickProceedToPayment()
    CheckoutPage.clickPixPaymentOption()
})

And('finish the order', () => {
    CheckoutPage.validateBtnPaymentSubmit()
    CheckoutPage.clickBtnPaymentSubmit()
})

Then('Pix modal should be visible to confirmation', () => {
    CheckoutPage.validatePixConfirmationModal()
})

Given('that im on PDP', () => {
    PdpPage.visitPdp('shorts-masculino-longo-minimal-preto/p')
})

Then('product must have image', () =>{
    PdpPage.validateImageGallery()
})

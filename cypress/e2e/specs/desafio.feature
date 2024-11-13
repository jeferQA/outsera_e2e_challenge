Feature: Testes E2E

    Background: 
        Given that im on homepage
        When i do login
        Then user should be logged

    Scenario: Tarefa 1 - Validação dos dados do produto na PDP
        Given that im on PDP
        Then product must have image

    Scenario: Tarefa 2 - FLuxo de compra
        Given i add a product to the cart
        When fill purchase data
        Then finish the order
    

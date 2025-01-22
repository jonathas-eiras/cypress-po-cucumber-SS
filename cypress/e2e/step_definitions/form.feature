Feature: Preencher Formulario

    Scenario Outline: Preencher formulario de dados dos alunos

        Given que estou na pagina de preenchimento do formulario
        When eu quero preencher os dados do formulario com "<nome>" e "<sobrenome>"
        And confirmo o envio do formulario
        Then o formulario foi enviado com sucesso
    
    Examples:
        | nome | sobrenome |
        | João | Eiras     |
        | Luís | Silva     |
        | Paulo| Costa     |
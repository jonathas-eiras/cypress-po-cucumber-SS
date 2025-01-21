Feature: Preencher Formulario

    Scenario: Preencher formulario de dados dos alunos

        Given que estou na pagina de preenchimento do formulario
        When eu quero preencher os dados do formulario
        And confirmo o envio do formulario
        Then o formulario foi enviado com sucesso
    
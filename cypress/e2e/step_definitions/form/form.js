import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

import FormPage from "../../../pages/formPage"



Given('que estou na pagina de preenchimento do formulario', () => {
    FormPage.validaUrl()
})

When('eu quero preencher os dados do formulario com {string} e {string}', function (nome, sobrenome){

    FormPage.preencheFormulario(nome, sobrenome)
})

And('confirmo o envio do formulario', () => {
    FormPage.confirmarEnvio()
})

Then('o formulario foi enviado com sucesso', () => {
    FormPage.validateCreatedRepository()
})
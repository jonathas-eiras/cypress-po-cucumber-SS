import { Given, When, Then, And} from "cypress-cucumber-preprocessor/steps"

import FormPage from "../../../pages/formPage"



Given('que estou na pagina de preenchimento do formulario', () => {
    FormPage.validaUrl()
})

When('eu quero preencher os dados do formulario', () => {
    FormPage.preencheFormulario()
})

And('confirmo o envio do formulario', () => {
    FormPage.confirmarEnvio()
})

Then('o formulario foi enviado com sucesso', () => {
    FormPage.validateCreatedRepository()
})
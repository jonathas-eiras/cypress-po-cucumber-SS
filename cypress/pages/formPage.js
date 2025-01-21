import { faker } from '@faker-js/faker'
import * as formElements from '../fixtures/elements_pages/form_elements'

class formPage {


    nomeFake = faker.person.firstName
    sobrenomeFake = faker.person.lastName

    validaUrl() {
        cy.url()
            .should(
                'be.equal', Cypress.config("baseUrl")
            )
    }

    preencheFormulario() {

        //dados do aluno
        formElements.txt_nome().should('be.visible').type("João")
        formElements.txt_sobrenome().should('be.visible').type("Eiras")
        formElements.select_dataDia().should('be.visible').select(2)
        formElements.select_dataMes().should('be.visible').select('January')
        formElements.select_dataAno().should('be.visible').select('2025')
        formElements.txt_serie().should('be.visible').type("6 ano")
        formElements.txt_nomeMae().should('be.visible').type("Maria")
        formElements.txt_sobrenomeMae().should('be.visible').type("Eiras")
        formElements.txt_nomePai().should('be.visible').type("José")
        formElements.txt_sobrenomePai().should('be.visible').type("Eiras")
        formElements.txt_telefoneResidencialArea().should('be.visible').type("83")
        formElements.txt_telefoneResidencialNumero().should('be.visible').type("99999-9999")
        formElements.txt_celularArea().should('be.visible').type("83")
        formElements.txt_celularNumero().should('be.visible').type("99999-8888")
        formElements.txt_telefoneProfissionalArea().should('be.visible').type("83")
        formElements.txt_telefoneProfissionalNumero().should('be.visible').type("88888-9999")
        formElements.txt_endereco().should('be.visible').type("Rua da Alegria")
        formElements.txt_bairro().should('be.visible').type("Centro")
        formElements.txt_cidade().should('be.visible').type("Cidade")
        formElements.txt_estado().should('be.visible').type("PB")
        formElements.txt_cep().should('be.visible').type("58000-000")
        formElements.select_pais().should('be.visible').select("Brazil")

        //razoes para referencia
        formElements.check_areaAcademicaMatematica().should('be.visible').check()
        formElements.check_areaAcademicaLeitura().should('be.visible').check()
        formElements.check_areaAcademicaOutro().should('be.visible').check()
        formElements.check_comportamentoExtroIntro().should('be.visible').check()

        //presenca
        formElements.txt_anoAnteriorDiasPresentes().should('be.visible').type("10")
        formElements.txt_anoAnteriorDiasAusente().should('be.visible').type("5")
        formElements.txt_escolasAnteriores().should('be.visible').type("Escola1, Escola2, Escola3")

        //provas
        formElements.txt_provaMatematica().should('be.visible').type("prova matematica")
        formElements.txt_provaPortugues().should('be.visible').type("prova portugues")

        //triagem do ultimo ano
        formElements.select_triagemDataMes().should('be.visible').select('January')
        formElements.select_triagemDataDia().should('be.visible').select(5)
        formElements.select_triagemDataAno().should('be.visible').select('2025')
        formElements.txt_resultados().should('be.visible').type("otimo")
        formElements.radio_necessitaReavaliacaoNao().should('be.visible').check()
        formElements.select_dataNascimentoMes().should('be.visible').select('April')
        formElements.select_dataNascimentoDia().should('be.visible').select(23)
        formElements.select_dataNascimentoAno().should('be.visible').select('2001')
        formElements.select_visaoMes().should('be.visible').select('April')
        formElements.select_visaoDia().should('be.visible').select(23)
        formElements.select_visaoAno().should('be.visible').select('2024')
        formElements.txt_resultado().should('be.visible').type("otimo")
        formElements.radio_rechecagemSim().should('be.visible').check()
        formElements.txt_necessidadesEspecias().should('be.visible').type("não")

        //disciplina
        formElements.txt_qtdeRelatoriosDisciplina().should('be.visible').type("2")
        formElements.txt_qtdeSuspensoes().should('be.visible').type("2")
        formElements.txt_qtdeSuspensoesNaEscola().should('be.visible').type("5")
        formElements.txt_qtdeSuspensoesForaDaEscola().should('be.visible').type("1")

        //ultimas notas escolares
        formElements.txt_notaPortugues().should('be.visible').type("10")
        formElements.txt_notaLeitura().should('be.visible').type("10")
        formElements.txt_notaMatematica().should('be.visible').type("10")
        formElements.txt_notaCiencias().should('be.visible').type("10")
        formElements.txt_notaEstudosSociais().should('be.visible').type("10")
        formElements.txt_notaEducacaoFisica().should('be.visible').type("10")
        formElements.txt_notaOutro().should('be.visible').type("10")

        //retencoes
        formElements.txt_anoRetencao().should('be.visible').type("2015")
        formElements.txt_notasRetencao().should('be.visible').type("10")
        formElements.txt_escolaAnteriorRetencao().should('be.visible').type("Escola anterior")


    }

    confirmarEnvio() {

        formElements.btn_enviar().should('be.visible').click()

    }


    validateCreatedRepository() {
        cy.url().should('be.equal', "https://submit.jotform.com/submit/250203944883661")
        formElements.btn_submitForm().should('be.visible')
    }


}

module.exports = new formPage() 
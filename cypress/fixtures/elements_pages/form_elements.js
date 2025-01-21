module.exports = {

    //dados do aluno
    txt_nome: () => cy.get('[id="first_3"]'),
    txt_sobrenome: () => cy.get('[id="last_3"]'),
    select_dataDia: () => cy.get('[id="input_4_day"]'),
    select_dataMes: () => cy.get('[id="input_4_month"]'),
    select_dataAno: () => cy.get('[id="input_4_year"]'),
    txt_serie: () => cy.get('[id="input_5"]'),
    txt_nomeMae: () => cy.get('[id="first_6"]'),
    txt_sobrenomeMae: () => cy.get('[id="last_6"]'),
    txt_nomePai: () => cy.get('[id="first_7"]'),
    txt_sobrenomePai: () => cy.get('[id="last_7"]'),
    txt_telefoneResidencialArea: () => cy.get('[id="input_8_area"]'),
    txt_telefoneResidencialNumero: () => cy.get('[id="input_8_phone"]'),
    txt_celularArea: () => cy.get('[id="input_9_area"]'),
    txt_celularNumero: () => cy.get('[id="input_9_phone"]'),
    txt_telefoneProfissionalArea: () => cy.get('[id="input_10_area"]'),
    txt_telefoneProfissionalNumero: () => cy.get('[id="input_10_phone"]'),
    txt_endereco: () => cy.get('[id="input_11_addr_line1"]'),
    txt_bairro: () => cy.get('[id="input_11_addr_line2"]'),
    txt_cidade: () => cy.get('[id="input_11_city"]'),
    txt_estado: () => cy.get('[id="input_11_state"]'),
    txt_cep: () => cy.get('[id="input_11_postal"]'),
    select_pais: () => cy.get('[id="input_11_country"]'),

    //razoes para referencia
    check_areaAcademicaMatematica: () => cy.get('[id="input_13_0"]'),
    check_areaAcademicaLeitura: () => cy.get('[id="input_13_1"]'),
    check_areaAcademicaOutro: () => cy.get('[id="input_13_2"]'),
    check_comportamentoExtroIntro: () => cy.get('[id="input_14_0"]'),

    //presenca
    txt_anoAnteriorDiasPresentes: () => cy.get('[id="input_16"]'),
    txt_anoAnteriorDiasAusente: () => cy.get('[id="input_17"]'),
    txt_escolasAnteriores: () => cy.get('[id="input_18"]'),

    //provas
    txt_provaMatematica: () => cy.get('[id="input_20"]'),
    txt_provaPortugues: () => cy.get('[id="input_21"]'),


    //triagem do ultimo ano
    select_triagemDataMes: () => cy.get('[id="input_25_month"]'),
    select_triagemDataDia: () => cy.get('[id="input_25_day"]'),
    select_triagemDataAno: () => cy.get('[id="input_25_year"]'),
    txt_resultados: () => cy.get('[id="input_23"]'),
    radio_necessitaReavaliacaoSim: () => cy.get('[id="input_26_0"]'),
    radio_necessitaReavaliacaoNao: () => cy.get('[id="input_26_1"]'),
    select_dataNascimentoMes: () => cy.get('[id="input_27_month"]'),
    select_dataNascimentoDia: () => cy.get('[id="input_27_day"]'),
    select_dataNascimentoAno: () => cy.get('[id="input_27_year"]'),
    select_visaoMes: () => cy.get('[id="input_28_month"]'),
    select_visaoDia: () => cy.get('[id="input_28_day"]'),
    select_visaoAno: () => cy.get('[id="input_28_year"]'),
    txt_resultado: () => cy.get('[id="input_29"]'),
    radio_rechecagemSim: () => cy.get('[id="input_30_0"]'),
    radio_rechecagemNao: () => cy.get('[id="input_30_1"]'),
    txt_necessidadesEspecias: () => cy.get('[id="input_24"]'),

    //disciplina
    txt_qtdeRelatoriosDisciplina: () => cy.get('[id="input_32"]'),
    txt_qtdeSuspensoes: () => cy.get('[id="input_33"]'),
    txt_qtdeSuspensoesNaEscola: () => cy.get('[id="input_34"]'),
    txt_qtdeSuspensoesForaDaEscola: () => cy.get('[id="input_35"]'),

    //ultimas notas escolares
    txt_notaPortugues: () => cy.get('[id="input_38_0"]'),
    txt_notaLeitura: () => cy.get('[id="input_38_1"]'),
    txt_notaMatematica: () => cy.get('[id="input_38_2"]'),
    txt_notaCiencias: () => cy.get('[id="input_38_3"]'),
    txt_notaEstudosSociais: () => cy.get('[id="input_38_4"]'),
    txt_notaEducacaoFisica: () => cy.get('[id="input_38_5"]'),
    txt_notaOutro: () => cy.get('[id="input_38_6"]'),

    //retencoes
    txt_anoRetencao: () => cy.get('[id="input_36"]'),
    txt_notasRetencao: () => cy.get('[id="input_40"]'),
    txt_escolaAnteriorRetencao: () => cy.get('[id="input_42"]'),

    //botao enviar
    btn_enviar: () => cy.get('[id="input_2"]'),

    //captcha
    select_captcha: () => cy.get('[id="checkbox"]'),
    //botao submit
    btn_submitForm: () => cy.get('[id="input_4"]')
}
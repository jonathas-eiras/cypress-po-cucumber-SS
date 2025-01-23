module.exports = {

    //dados do aluno
    txt_nome: () => cy.get('[id="first_4"]'),
    txt_sobrenome: () => cy.get('[id="last_4"]'),
    select_dataMes: () => cy.get('[id="input_24_month"]'),
    select_dataDia: () => cy.get('[id="input_24_day"]'),
    select_dataAno: () => cy.get('[id="input_24_year"]'),
    txt_serie: () => cy.get('[id="input_54"]'),
    txt_nomeMae: () => cy.get('[id="first_55"]'),
    txt_sobrenomeMae: () => cy.get('[id="last_55"]'),
    txt_nomePai: () => cy.get('[id="first_56"]'),
    txt_sobrenomePai: () => cy.get('[id="last_56"]'),
    txt_telefoneResidencialArea: () => cy.get('[id="input_57_area"]'),
    txt_telefoneResidencialNumero: () => cy.get('[id="input_57_phone"]'),
    txt_celularArea: () => cy.get('[id="input_59_area"]'),
    txt_celularNumero: () => cy.get('[id="input_59_phone"]'),
    txt_telefoneProfissionalArea: () => cy.get('[id="input_60_area"]'),
    txt_telefoneProfissionalNumero: () => cy.get('[id="input_60_phone"]'),
    txt_endereco: () => cy.get('[id="input_61_addr_line1"]'),
    txt_bairro: () => cy.get('[id="input_61_addr_line2"]'),
    txt_cidade: () => cy.get('[id="input_61_city"]'),
    txt_estado: () => cy.get('[id="input_61_state"]'),
    txt_cep: () => cy.get('[id="input_61_postal"]'),
    select_pais: () => cy.get('[id="input_61_country"]'),

    //razoes para referencia
    check_areaAcademicaMatematica: () => cy.get('[id="input_106_0"]'),
    check_areaAcademicaLeitura: () => cy.get('[id="input_106_1"]'),
    check_areaAcademicaOutro: () => cy.get('[id="input_106_2"]'),
    check_comportamentoExtroIntro: () => cy.get('[id="input_106_3"]'),

    //presenca
    txt_anoAnteriorDiasPresentes: () => cy.get('[id="input_66"]'),
    txt_anoAnteriorDiasAusente: () => cy.get('[id="input_67"]'),
    txt_escolasAnteriores: () => cy.get('[id="input_69"]'),

    //provas
    txt_provaMatematica: () => cy.get('[id="first_71"]'),
    txt_provaPortugues: () => cy.get('[id="last_71"]'),


    //triagem do ultimo ano
    select_triagemDataMes: () => cy.get('[id="input_72_month"]'),
    select_triagemDataDia: () => cy.get('[id="input_72_day"]'),
    select_triagemDataAno: () => cy.get('[id="input_72_year"]'),
    txt_resultados: () => cy.get('[id="input_76"]'),
    radio_necessitaReavaliacaoSim: () => cy.get('[id="input_77_0"]'),
    radio_necessitaReavaliacaoNao: () => cy.get('[id="input_77_1"]'),
    select_dataNascimentoMes: () => cy.get('[id="input_78_month"]'),
    select_dataNascimentoDia: () => cy.get('[id="input_78_day"]'),
    select_dataNascimentoAno: () => cy.get('[id="input_78_year"]'),
    select_visaoMes: () => cy.get('[id="input_79_month"]'),
    select_visaoDia: () => cy.get('[id="input_79_day"]'),
    select_visaoAno: () => cy.get('[id="input_79_year"]'),
    txt_resultado: () => cy.get('[id="input_80"]'),
    radio_rechecagemSim: () => cy.get('[id="input_81_0"]'),
    radio_rechecagemNao: () => cy.get('[id="input_81_1"]'),
    txt_necessidadesEspecias: () => cy.get('[id="input_82"]'),

    //disciplina
    txt_qtdeRelatoriosDisciplina: () => cy.get('[id="input_84"]'),
    txt_qtdeSuspensoes: () => cy.get('[id="input_103"]'),
    txt_qtdeSuspensoesNaEscola: () => cy.get('[id="input_85"]'),
    txt_qtdeSuspensoesForaDaEscola: () => cy.get('[id="input_86"]'),

    //ultimas notas escolares
    txt_notaPortugues: () => cy.get('[id="input_88"]'),
    txt_notaLeitura: () => cy.get('[id="input_89"]'),
    txt_notaMatematica: () => cy.get('[id="input_94"]'),
    txt_notaCiencias: () => cy.get('[id="input_95"]'),
    txt_notaEstudosSociais: () => cy.get('[id="input_92"]'),
    txt_notaEducacaoFisica: () => cy.get('[id="input_93"]'),
    txt_notaOutro: () => cy.get('[id="input_96"]'),

    //retencoes
    txt_anoRetencao: () => cy.get('[id="input_98"]'),
    txt_notasRetencao: () => cy.get('[id="input_99"]'),
    txt_escolaAnteriorRetencao: () => cy.get('[id="input_100"]'),

    //botao enviar
    btn_enviar: () => cy.get('[id="input_101"]'),

    img_thankyou: () => cy.get('.thankyou-wrapper')
}
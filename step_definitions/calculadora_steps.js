const { I, CalculadoraPage } = inject();

Given('número {int}', (numA) => {
  CalculadoraPage.tocarNumero(numA)
});

When('{string} com {int}', (operador, numB) => {
  CalculadoraPage.efetuarOperacao(operador, numB)
});

Then('resultado deve ser igual {int}', (total) => {
  CalculadoraPage.validarResultado(total)
});
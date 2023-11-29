const { I, CalculadoraPage } = inject();

Given('número {int}', (numA) => {
  CalculadoraPage.tocarNumero(numA)
});

When('{string} com {int}', (operador, numB) => {
  CalculadoraPage.tocarOperacao(operador)
  CalculadoraPage.tocarNumero(numB)
});

Then('resultado deve ser igual {int}', async (total) => {
  await CalculadoraPage.validarResultado(total)
});
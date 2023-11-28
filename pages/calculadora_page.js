const { I } = inject();

module.exports = {

  fields:{
    total: '#com.google.android.calculator:id/result_final',
  },

  buttons:{
    mais: '~mais',
    menos: '~menos',
    dividir: '~dividir',
    multiplicar: '~multiplicar',
    igual: '~igual' 
  },

  tocarNumero(numA) {
    I.tap('#com.google.android.calculator:id/digit_'+ numA +'')
  },
  
  efetuarOperacao(operador, numB) {
    switch (operador) {
        case "somar": 
            I.tap(this.buttons.mais); 
            break;
        case "subtrair": 
            I.tap(this.buttons.menos); 
            break;
        case "dividir": 
            I.tap(this.buttons.dividir); 
            break;
        case "multiplicar": 
            I.tap(this.buttons.multiplicar); 
            break;
    }
    I.tap('#com.google.android.calculator:id/digit_'+ numB +'')
  },

  async validarResultado(total) {
    I.tap(this.buttons.igual)
    const valor = await I.grabTextFrom(this.fields.total)
    I.assert(total, valor)
  }
}
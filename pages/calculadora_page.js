const { I } = inject();

module.exports = {

  fields:{
    total: '#com.google.android.calculator:id/result_final',
  },

  buttons:{
    mais: '#com.google.android.calculator:id/op_add',
    menos: '#com.google.android.calculator:id/op_sub',
    dividir: '#com.google.android.calculator:id/op_div',
    multiplicar: '#com.google.android.calculator:id/op_mul',
    igual: '#com.google.android.calculator:id/eq' 
  },

  tocarNumero(num) {
    I.tap('#com.google.android.calculator:id/digit_'+ num +'')
  },
  
  tocarOperacao(operador) {
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
  },

  async validarResultado(total) {
    I.tap(this.buttons.igual)
    const valor = await I.grabTextFrom(this.fields.total)
    I.assert(total, valor)
  }
}
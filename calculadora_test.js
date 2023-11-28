const assert = require('assert');

Feature('Calculadora');

Scenario('Testando calculadora', async ({ I }) => {
    I.wait(5)
    I.tap('#com.google.android.calculator:id/digit_5')
    I.tap('~mais')
    I.tap('#com.google.android.calculator:id/digit_2')
    I.tap('~igual')
    const total = await I.grabTextFrom('#com.google.android.calculator:id/result_final')
    assert.equal(7, total);
});
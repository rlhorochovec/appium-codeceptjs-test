Feature: Calculadora
  Eu como usuário
  Desejo efetuar operações matemáticas
  Utilizando a Calculadora do Google

  Scenario Outline: Operações Matemáticas
    Given número <a>
    When "<operador>" com <b>
    Then resultado deve ser igual <total>
    Examples:
      | a | b | operador    | total |
      | 2 | 2 | somar       | 4     |
      | 7 | 3 | subtrair    | 4     |
      | 9 | 3 | dividir     | 3     |
      | 8 | 9 | multiplicar | 72    |

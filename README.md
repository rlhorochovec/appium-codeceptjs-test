# appium-codeceptjs-test

Projeto de automação de testes mobile utilizando Appium, Cucumber e CodeceptJS.

## Dependências
- CodeceptJS: 3.5.8
- WebdriverIO: 8.6.3
- codeceptjs-assert: 0.0.5
- codeceptjs-resemblehelper: 1.9.7

## Instalação
Baixando as dependências

```bash
  cd appium-codeceptjs-test
  npm install
```

## Rodando os testes
Para rodar os testes, rode o seguinte comando

```bash
  npx codeceptjs run --plugins allure
```

## Relatório dos testes
Gerar o Allure Report

```bash
  allure serve allure-results
```

Apagar o Allure Report de execuções anteriores

```bash
  allure generate --clean --output allure-results
```

## Referência

 - [Mobile Testing with Appium](https://codecept.io/mobile/#setting-up)
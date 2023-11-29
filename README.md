# appium-codeceptjs-test
[![appium-codeceptjs-test](https://github.com/rlhorochovec/appium-codeceptjs-test/actions/workflows/ci.yml/badge.svg)](https://github.com/rlhorochovec/appium-codeceptjs-test/actions/workflows/ci.yml)

Projeto de automação de testes mobile utilizando Appium, Cucumber e CodeceptJS.

Execução via GitHub Actions, device no BrowserStack e Allure Report no GitHub Pages.

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
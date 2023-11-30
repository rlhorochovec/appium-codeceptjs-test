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

Visualizar o Allure Report publicado
[Visualizar](https://rlhorochovec.github.io/appium-codeceptjs-test/)

## Execução BrowserStack
[Visualizar](https://app-automate.browserstack.com/builds/062438b8a5cea4e094b6501bddb896d66648138b/sessions/6e5d4b33d190b5c320b75b1d35143496c5487f7b?auth_token=4814169cbe7e9581f53c04d7d1cac1c079323eb4ea5feed54a18c0ca4bf6db52)

## Demonstração
[Assistir vídeo da execução](https://youtu.be/8PlWhlCkkLg)

## Screenshots
<img src="https://github.com/rlhorochovec/codeceptjs-web-test/blob/develop/Screenshots/github_actions.png" width="400" /> <img src="https://github.com/rlhorochovec/codeceptjs-web-test/blob/develop/Screenshots/github_pages.png" width="400" />
src="https://github.com/rlhorochovec/codeceptjs-web-test/blob/develop/Screenshots/browserstack.png" width="400" />

## Referência

 - [Mobile Testing with Appium](https://codecept.io/mobile/#setting-up)
const { env } = require("process")

exports.config = {
  output: './output',
  helpers: {
    AssertWrapper : {
      require: 'codeceptjs-assert'
    },
    ResembleHelper: {
      require: 'codeceptjs-resemblehelper',
      screenshotFolder: './tests/output/',
      baseFolder: './tests/screenshots/base/',
      diffFolder: './tests/screenshots/diff/'
    },
    Appium: {
      app: process.env.BROWSERSTACK_APP,
      host: "hub-cloud.browserstack.com",
      port: 4444,
      user: process.env.BROWSERSTACK_USERNAME,
      key: process.env.BROWSERSTACK_ACCESS_KEY,
		  platformName: 'android',
		  deviceName: 'Samsung Galaxy S22 Ultra',
		  platformVersion: '12.0'
    },
  },
  include: {
    I: './steps_file.js',
    CalculadoraPage: './pages/calculadora_page.js'
  },
  mocha: {},
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/calculadora_steps.js']
  },
  plugins: {
    screenshotOnFail: {
      enabled: true
    },
    allure: {
      enabled: true,
      outputDir: "./allure-results",
      require: "allure-codeceptjs"
    },
    stepByStepReport: {
      enabled: true,
    },
    tryTo: {
      enabled: true
    },
    retryFailedStep: {
      enabled: false
    },
    retryTo: {
      enabled: true
    },
    eachElement: {
      enabled: true
    },
    pauseOnFail: {}
  },
  stepTimeout: 0,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 0
    },
    {
      pattern: 'amOnPage',
      timeout: 0
    }
  ],
  name: 'appium-codeceptjs-test',
  translation: 'pt-BR'
}
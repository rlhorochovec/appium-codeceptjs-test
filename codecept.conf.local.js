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
      appiumV2: true,
      app: 'D:/dev/code-workspace/appium-codeceptjs-test/app/calculator.apk',
      desiredCapabilities: {
        deviceName: 'emulator-5554',
        platformName: 'android',
        platformVersion: '14.0',
        automationName: 'UIAutomator2',
        newCommandTimeout: 300000,
        androidDeviceReadyTimeout: 300000,
        androidInstallTimeout: 90000,
        appWaitDuration: 300000,
        autoGrantPermissions: true,
        waitForIdleTimeout: 0,
        disableWindowAnimation: true
      }
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

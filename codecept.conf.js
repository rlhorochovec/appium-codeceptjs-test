exports.config = {
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      app: '/home/xovec/code-workspace/appium-codeceptjs-test/app/calculator.apk',
      desiredCapabilities: {
        deviceName: 'jnxczdjra6zx45x4',
        platformName: 'android',
        platformVersion: '10.0',
        automationName: 'UIAutomator2',
        newCommandTimeout: 300000,
        androidDeviceReadyTimeout: 300000,
        androidInstallTimeout: 90000,
        appWaitDuration: 300000,
        autoGrantPermissions: true,
        waitForIdleTimeout: 0,
        disableWindowAnimation: true
      }
    }
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
    }
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
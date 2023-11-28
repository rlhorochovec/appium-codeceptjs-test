/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      app:  __dirname + '/app/calculator.apk',
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
    I: './steps_file.js'
  },
  name: 'appium-codeceptjs-test',
  translation: 'pt-BR'
}
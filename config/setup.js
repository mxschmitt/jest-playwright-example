// @ts-check
const chalk = require('chalk')
const playwright = require('playwright')
const fs = require('fs')
const mkdirp = require('mkdirp')
const os = require('os')
const path = require('path')

const { ENVIRONMENT_DATA_TRANSFER_WS_ENDPOINT, BROWSER_NAME } = require('./constants.js')

const DIR = path.join(os.tmpdir(), 'jest_playwright_global_setup')

module.exports = async function () {
  console.log(chalk.green('Setup playwright'))
  const browser = await playwright[BROWSER_NAME].launchServer()
  // This global is not available inside tests but only in global teardown
  global.__BROWSER_GLOBAL__ = browser
  // Instead, we expose the connection details via file system to be used in tests
  await mkdirp(DIR)
  await fs.promises.writeFile(ENVIRONMENT_DATA_TRANSFER_WS_ENDPOINT, browser.wsEndpoint())
}

// @ts-check
const chalk = require('chalk')
const rimraf = require('rimraf')
const { tmpdir } = require('os')
const { join } = require('path')

const DIR = join(tmpdir(), 'jest_playwright_global_setup')

module.exports = async function() {
  console.log(chalk.green('Teardown Playwright'))
  await global.__BROWSER_GLOBAL__.close()
  rimraf.sync(DIR)
}

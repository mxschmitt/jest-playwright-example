// @ts-check
const path = require("path");
const os = require("os");

const BROWSER_NAME = process.env.BROWSER || 'chromium'
const ENVIRONMENT_DATA_TRANSFER_DIR = path.join(os.tmpdir(), 'jest_playwright_global_setup')
const ENVIRONMENT_DATA_TRANSFER_WS_ENDPOINT = path.join(ENVIRONMENT_DATA_TRANSFER_DIR, 'ws-endpoint')

module.exports = {
  BROWSER_NAME,
  ENVIRONMENT_DATA_TRANSFER_DIR,
  ENVIRONMENT_DATA_TRANSFER_WS_ENDPOINT,
}

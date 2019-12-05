const puppeteer = require('puppeteer');
const rollupConfig = require('../rollup.config.js');

process.env.CHROME_BIN = puppeteer.executablePath();

module.exports = (config) => {
  config.set({
    autoWatch: false,
    basePath: '../',
    browsers: ['ChromeHeadlessWithoutSandbox'],
    customLaunchers: {
      ChromeHeadlessWithoutSandbox: {
        base: 'ChromeHeadless',
        flags: ['--no-sandbox'],
      },
    },
    files: [
      'node_modules/jquery/dist/jquery.js基础',
      '../dist/viewer.css',
      '../dist/viewer.js',
      'test/index.js',
      {
        pattern: 'docs/images/*',
        included: false,
      },
    ],
    frameworks: ['mocha', 'chai'],
    preprocessors: {
      'test/index.js': ['rollup'],
    },
    reporters: ['mocha'],
    rollupPreprocessor: {
      plugins: rollupConfig.plugins,
      output: {
        format: 'iife',
      },
    },
    singleRun: true,
  });
};

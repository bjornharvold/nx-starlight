/*
 * Copyright (c) wink.travel 2024
 */

const nxPreset = require('@nx/jest/preset');

module.exports = {
  ...nxPreset,
  collectCoverage: true,
  ci: true,
  reporters: ['default', 'bamboo-jest-reporter'],
  coverageDirectory: 'coverage',
  collectCoverageFrom: ['**/*.js'],
};

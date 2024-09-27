module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/src/tests/**/*.[jt]s?(x)'],
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // This handles CSS imports
  },
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  transform: {
    '^.+\\.[jt]sx?$': 'babel-jest', // This uses Babel for transformations
  },
};

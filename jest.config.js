/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",

  clearMocks: true,
  coverageProvider: "v8",
  coverageDirectory: "coverage",
  moduleFileExtensions: ["js", "ts", "json", "node"],
  roots: ["<rootDir>/src"],
  transform: { "^.+\\.(ts)$": "ts-jest" },
  moduleDirectories: ['node_modules', 'src']
};

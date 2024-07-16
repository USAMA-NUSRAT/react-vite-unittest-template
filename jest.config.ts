// module.exports = {
//   preset: "ts-jest",
//   testEnvironment: "jsdom",
//   transform: {
//     "^.+\\.tsx?$": "ts-jest",
//   },
//   moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
//   moduleNameMapper: {
//     "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
//     "\\.(css|less|sass|scss)$": "identity-obj-proxy",
//   },
//   setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Ensure setupTests.ts is correctly configured
//   globals: {
//     "ts-jest": {
//       tsconfig: "tsconfig.app.json", // Adjust based on your TypeScript configuration file
//     },
//   },
// };

export default {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  moduleNameMapper: {
    "\\.(gif|ttf|eot|svg|png)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
};

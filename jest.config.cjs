module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
  },
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  // setupFiles: ["<rootDir>/jest.setup.jsx"],
//   moduleNameMapper: {"\\.(css|less|scss|sass)$": "<rootDir>/__mocks__/styleMock.js"  } 
};

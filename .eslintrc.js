module.exports = {
  root: true,
  env: {
    browser: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "comma-dangle": 0,
    "semi": 0,
    "prettier/prettier": ["error", { singleQuote: true }],
    "indent": 1
  },
  parserOptions: {
    parser: "babel-eslint",
    esversion: 6,
    sourceType: "module"
  }
};

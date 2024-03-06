module.exports = {
  env: {
    "node": true,
  },
  extends: [
    "@wemake-services/typescript/recommended"
  ],
  overrides: [
    {
      "env": {
        "node": true
      },
      "files": [
        ".eslintrc.{js,cjs}"
      ],
      "parserOptions": {
        "sourceType": "script"
      }
    }
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  rules: {
    "semi": "off",
    "@typescript-eslint/semi": ["error", "always"],
  }
};

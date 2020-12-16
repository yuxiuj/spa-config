const reactRules = require("./react");
const tsRules = require("./typescript");

const isEnvProduction = process.env.NODE_ENV === "production";

module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  globals: {
    document: true,
    localStorage: true,
    window: true,
  },
  env: {
    browser: true,
    node: true,
    es6: true,
    mocha: true,
    jest: true,
    jasmine: true,
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"] },
    },
  },
  parser: "@typescript-eslint/parser",
  plugins: ["babel", "@typescript-eslint"],
  rules: Object.assign(
    {
      "prettier/prettier": 2,
      "default-case": 2,
      "linebreak-style": [2, "unix"],
      "no-useless-escape": 2,
      "key-spacing": [
        2,
        {
          beforeColon: false,
          afterColon: true,
        },
      ],
      "semi-spacing": [
        2,
        {
          before: false,
          after: true,
        },
      ],
      "comma-spacing": [
        2,
        {
          before: false,
          after: true,
        },
      ],
      "space-unary-ops": [
        2,
        {
          words: true,
          nonwords: false,
        },
      ],
      "space-infix-ops": [
        2,
        {
          int32Hint: false,
        },
      ],
      "no-mixed-spaces-and-tabs": 0,
      "object-curly-spacing": [2, "always"],
      "no-duplicate-imports": 2,
      "standard/no-callback-literal": 0,
      "no-cond-assign": [2, "always"],
      "no-console": isEnvProduction ? 2 : 0,
      "no-debugger": isEnvProduction ? 2 : 0,
      "spaced-comment": [2, "always"],
      "no-constant-condition": 2,
      "no-dupe-args": 2,
      "no-dupe-keys": 2,
      "no-duplicate-case": 2,
      "no-empty": 0,
      "no-empty-character-class": 2,
      "no-control-regex": 2,
      "no-regex-spaces": 2,
      "no-ex-assign": 2,
      "no-extra-boolean-cast": 2,
      "no-func-assign": 2,
      "no-invalid-regexp": 2,
      "no-irregular-whitespace": 2,
      "no-negated-in-lhs": 2,
      "no-obj-calls": 2,
      "no-sparse-arrays": 2,
      "no-unexpected-multiline": 2,
      "no-unreachable": 2,
      "use-isnan": 2,
      "valid-jsdoc": 0,
      "valid-typeof": 2,
      "accessor-pairs": 2,
      eqeqeq: 2,
      "no-case-declarations": 0,
      "no-div-regex": 0,
      "no-empty-pattern": 2,
      "no-eq-null": 1,
      "no-eval": 0,
      "no-extra-bind": 2,
      "no-fallthrough": 2,
      "no-floating-decimal": 2,
      "no-implied-eval": 0,
      "no-invalid-this": 2,
      "no-iterator": 2,
      "no-labels": 2,
      "no-lone-blocks": 2,
      "no-loop-func": 0,
      "no-multi-str": 2,
      "no-native-reassign": 2,
      "no-redeclare": 2,
      "no-self-assign": 2,
      "no-self-compare": 2,
      "no-sequences": 2,
      "no-throw-literal": 2,
      "no-unmodified-loop-condition": 2,
      "no-unused-labels": 2,
      "no-useless-call": 2,
      "no-useless-concat": 2,
      "no-with": 2,
      radix: 0,
      "wrap-iife": [2, "any"],
      yoda: [2, "never"],
      "no-delete-var": 2,
      "no-label-var": 2,
      "no-shadow-restricted-names": 2,
      "no-undef": 0,
      "no-undef-init": 2,
      "no-unneeded-ternary": 2,
      // 为了避免和 @typescript-eslint/no-unused-vars 冲突
      "no-unused-vars": 0,
    },
    reactRules,
    tsRules
  ),
};

module.exports = {
  printWidth: 100,
  tabWidth: 2,
  useTabs: true,
  singleQuote: true,
  trailingComma: "all",
  semi: true,
  bracketSpacing: true,
  jsxBracketSameLine: false,
  arrowParens: "always",
  proseWrap: "never",
  overrides: [
    {
      files: ".prettierrc",
      options: {
        parser: "json",
      },
    },
  ],
};

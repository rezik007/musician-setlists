module.exports = {
  extends: ['next', 'airbnb', 'airbnb-typescript'],
  parserOptions: {
    project: 'tsconfig.json',
  },
  settings: {
    next: {
      rootDir: ["apps/*/", "packages/*/"],
    },
  },
  rules: {
    "@next/next/no-html-link-for-pages": "off",
    "react/react-in-jsx-scope": "off"
  },
};
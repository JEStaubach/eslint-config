module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true,
    },
  },
  rules: {
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2,
    'react/react-in-jsx-scope': 2,
    'max-len': [
      'error',
      {
        code: 110,
      },
    ],
    'no-console': [
      'error',
      {
        allow: ['log', 'warn', 'error'],
      },
    ],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};

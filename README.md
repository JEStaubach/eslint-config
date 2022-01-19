@jestaubach/eslint-config
===================
[@jestaubach/eslint-config](https://github.com/jestaubach/eslint-config) is a set of [shareable configs](https://eslint.org/docs/developer-guide/shareable-configs) for [ESLint](https://eslint.org/).

Motivation
------------

1. [DRY principle](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself) - reuse the same eslint configurations across projects.

2. Enforce a consistent style amongst contributors to a project.

Installation
------------

[ESLint](https://eslint.org/) and the [@jestaubach/eslint-config](https://github.com/jestaubach/eslint-config) will be used in the development of other projects. Therefore, run the following [npm](https://docs.npmjs.com/about-npm/) command to install them as [devDependencies](https://docs.npmjs.com/files/package.json#devdependencies) of your project:

```bash
npm install eslint @jestaubach/eslint-config --save-dev
```

or

```bash
yarn add -D eslint @jestaubach/eslint-config
```

Configuration
-------------

Simply [add an eslintConfig key to your package.json file](https://eslint.org/docs/user-guide/configuring), like so:

```json
  "eslintConfig": {
    "extends": "@jestaubach/eslint-config"
  },
```

Extend with additonal configurations:

```json
  "eslintConfig": {
    "extends": [
      "@jestaubach/eslint-config",
      "@jestaubach/eslint-config/react"
    ]
  },
```

Override specific rules:

```json
  "eslintConfig": {
    "extends": "@jestaubach/eslint-config",
    "rules": {
      "max-len": [
        "error",
        {
          "code": 80,
        }
      ]
    }
  }
```

Related Projects
----------------

[@jestaubach/babel-config](https://github.com/jestaubach/babel-config)

[@jestaubach/babel-config-ts](https://github.com/jestaubach/babel-config-ts)

[@jestaubach/eslint-config-ts](https://github.com/jestaubach/eslint-config-ts)

[@jestaubach/prettier-config](https://github.com/jestaubach/prettier-config)

[@jestaubach/stylelint-config](https://github.com/jestaubach/stylelint-config)

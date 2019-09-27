# Modern Wallaby JS Starter (TypeScript + Babel + Jest)

*Notice: If you have any propositions feel free to make an issue or create a pull request.*

## Features

* Wallaby JS works out of the box without any additional config  
  Notice: How to run in "Without Configuration" mode ([Official Wallaby JS Guide](https://wallabyjs.com/docs/intro/config.html#automatic-configuration))
* ESLint for linting JS & TS files (TSLint is outdated for 2019). Basic rules configured.
* Unit Testing via Jest 24+
* Type Script 3.6+ via Babel
* Yarn for packages installation and `check-yarn` utility to prevent packages installation via `npm`
* `.nvmrc`
* Nothing platform related. This repository template can be used for NodeJS and for Browser development.

## Ways to use

1. Clone as is

    1. `git clone git@github.com:korniychuk/wallaby-ts-starter.git`
    2. `cd wallaby-ts-starter`
    3. `yarn`
2. Fork

    0. Click **Fork** git button
    1. `git clone git@github.com:YOUR_GIT_NAME/wallaby-ts-starter.git`
    2. `cd wallaby-ts-starter`
    3. `yarn`
3. Creating from template

    0. Click **Fork** git button
    1. Create new repository and specify template ![template](./resources/readme.git-create-from-template.png)
    1. `git clone git@github.com:YOUR_GIT_NAME/NEW_REPOSITORY_NAME.git`
    2. `cd NEW_REPOSITORY_NAME`
    3. `yarn`
4. Using with already cloned repository as an additional origin for pulling updates

    1. `git remote add template git@github.com:korniychuk/wallaby-ts-starter.git`
    2. `git fetch`
    3. `git merge template/master`

## How to

### How to make a build

`npm run build`

### How to run lint

* Just show problems `npm run lint`
* Fix problems if it is possible `npm run lint:fix`

### How to run tests

* All tests

  `npm run test`  
  `npm run test:watch`
* Specific tests

  `npm run test -- src/my.spec.ts`  
  `npm run test:watch -- src/my.spec.ts`

## Author

| [<img src="https://www.korniychuk.pro/avatar.jpg" width="100px;"/><br /><sub>Anton Korniychuk</sub>](https://korniychuk.pro) |
| :---: |

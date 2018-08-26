# Vuejs_Business_App

## Let's Create Vuejs Business App

### Frameworks and Libraries
VENoM Stack
- Vue.js
- Express.js
- Node.js
- Mongoose for MongoDB

### Technology Stack Overview

#### Roadmap
| Client (UI) | Server (API) |
| :---------: | :----------: |
| Routes      | API routes   |
| Components  | Models       |
| State       |              |

#### API Layer
Use Express.js to build our API on. Express Router handles `GET, POST, PUT` and other routes to our API.

#### User Experience
Material Design - material.io

Material Design Principles
- Material is the metaphor
- Bols, graphic, intentional
- Motion provides meaning

[link](https://material.io/guidelines/#introduction-principles)

The implementation of material design for Vuejs is (Vuetify)[https://vuetifyjs.com]

We often use UI components and API explorer on the website.

#### Other Libraries You Will Use
vue-cli `npm install -g vue-cli`

eslint `npm install --save-dev eslint` to keep our JavaScript code clean and compliant

webpack `npm install --save-dev webpack`

axios `npm install -s axios`

body-parser `npm install -s body-parser`

morgan `npm install -s morgan` to request logger

nodemon `npm install -g nodemon` 

cors `npm install -s cors` to handle cross-origin resource sharing

bcryptjs `npm install -s bcryptjs` to encrypt password

#### Development Tools

Visual Studio Code (link)[https://code.visualstudio.com]

Webpack (link)[https://webpack.js.org]

Postman (link)[https://www.getpostman.com] to develop API

Studio 3T (link)[https://studio3t.com] to manage MongoDB collections

### Setting Up the Demo Application

1. Lay the foundation
2. Install core frameworks and libraries
3. Identify the baseline architecture
   

#### Demo: vue-cli
1. Install core libraries and frameworks
    - Node.js (nodejs.org)
    - Express.js
    - Vue.js
2. Install yarn (yarnpkg.com) `brew install yarn --without-node`
3. Install vue-cli `npm install -g vue-cli`
4. Stub in project using vue-cli `vue init webpack client`
```sh
? Project name client
? Project description A Vue.js project
? Author Matt
? Vue build standalone
? Install vue-router? Yes
? Use ESLint to lint your code? Yes
? Pick an ESLint preset Standard
? Set up unit tests No
? Setup e2e tests with Nightwatch? No
? Should we run `npm install` for you after the project has been created? (recommended) yarn

# Project initialization finished!
# ========================

To get started:

  cd client
  npm run dev
```
5. Test run project
`npm run dev` or `yarn run dev`

#### Baseline Architecture
```sh
client        <- Client project
  build
  config
  src         <- Vue.js source folder
    assets
    components
    router
  static
  ...

server        <- Server project
  api         <- API endpoints
  models      <- Mongoose models
  ...
```


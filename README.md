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

Robo 3T is a lightweight free tool (link)[https://robomongo.org/download]

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

### Designing the Data Layer with MongoDB and Mongoose

#### Data First
- The client's requirements have more specifics about the data
- Happy with whatever UI provided
- Still needs to meet requirements
- We will go with a database first approach

#### Demo: Setting up MongoDB
1. Install MongoDB (docs.mongodb.com/manual/installation/)
2. Studio 3T (Robo 3T for free tool)
  1. Connect to `localhost:27017`
  2. Add Database named `globomantics`
  3. Add Collection named `users` and `transactions`
3. Insert sample data
  - Users for development
  - Sample transactions
    1. Right Click on `user` and import data and choose JSON file `seed_users.json`
    2. You can select multiple JSON file, so choose `seed_transactions.json` but make sure you modify Target Collection to `transactions`
    3. Check `Validate JSON before import` before clicking `Next >`

#### Mongoose: The Bridge to MongoDB
Mongoose Courses
- Introduction to Mongoose for Node.js and MongoDB
- Moving Forward with Mongoose.js

Everything in Mongoose starts with a Schema

Schema Example
```Javascript
const mongoose = require('mongoose')
const Schema = mongoose.Schema

let userSchema = new Schema({
  email:     String,
  name:      String,
  password:  String, // Should be encrypted later, but as a sample, we define as String type
  createdOn: Date,
  lastLogin: Date,
  isActive:  Boolean
})
```

Mongoose Data Types

| Mongoose Schema Types | Javascript Data Types |
| --------------------: | :-------------------- |
| String                | String                |
| Number                | Number                |
| Date                  | Object                |
| Buffer                | Object                |
| Boolean               | Boolean               |
| Mixed                 | Object                |
| ObjectId              | Object                |
| Array                 | Array (Object)        |


#### Demo: Develop the Mongoose Schema
1. Create API server `cd server`
2. `npm init -f` to initialize with default without prompt for any options
3. Restart automatically by nodemon `npm install nodemon -g`
4. Keep clean code by ESLint `yarn add eslint`
5. Create `.eslintrc.js` file by running command `node ./node_modules/eslint/bin/eslint.js --init`
```sh
? How would you like to configure ESLint? Use a popular style guide
? Which style guide do you want to follow? Standard (https://github.com/standard/standard)
? What format do you want your config file to be in? JavaScript
```
6. Install mongoose `yarn add mongoose`
7. Copy `.gitignore` file from client folder
8. Create a `models` folder under server to keep Mongoose schemas
9. Create a users schema file under `models`
10. Create a transactions schema file under `models`

### Developping the API with Node and Express

#### Interface to Our Data
see `server/models/users.js` and `server/models/transactions.js`
* Note that in transactionSchema, userId: mongoose.SchemaTypes.ObjectId

#### Design the API

##### User Endpoint
We will create `GET, PUT, POST` endpoint

| HTTP Verb | CRUD Action    |
| --------: | :------------- |
| POST      | Create         |
| GET       | Read           |
| PUT       | Update/Replace |
| PATCH     | Update/Modify  |
| DELETE    | Delete         |

```sh
server                <- Our API routes or "endpoints"
  api
    routes
      transaction.js
      user.js
    index.js          <- Index "bundle" file
  models              <- Our Mongoose Model files
    transaction.js
    user.js
```

##### User Route Example
Most of our endpoints will follow this exact same pattern

```Javascript
const User = require('../../models/user)

module.exports = function (router) {
  router.get('/user/:id', function (req, res) {
    User.findById(req.params.id).exec()
      .then(docs => res.status(200) // If found, then we return a document
        .json(docs)) // as JSON along with a status code of 200.
  })
}
```

#### Demo: Build the API
1. install Express by `yarn add express`
2. edit `server/package.json`
```Javascript
  "scripts": {
    "start": "npm run lint & nodemon app.js", // app.js to be created
    "lint": "./node_modules/.bin/eslint **/*.js"
  },
```
3. create `app.js` to kick-off our Express API server
4. create `api` folder and create `index.js` to bundle up all of the routes
5. create `api/routes` folder and create `user.js` `transaction.js` file for routing
6. `yarn add morgan` and `yarn add body-parser` and `yarn add eslint`
7. Create reference to those middleware in `server/app.js`

#### Demo: API Routes
* Define API endpoints in `routes` for `router.get, router.post, router.put`
See `server/api/routes/user.js` and `server/api/routes/transaction.js`

(Example API) Define GET endpoint
```Javascript
// server/aipi/routes/user.js
const User = require('../../models/user')

module.exports = function (router) {
  router.get('/user/:id', function (req, res) {
    User.findById(req.params.id).exec()
      .then(docs => res.status(200)
        .json(docs))
      .catch(err => res.status(500)
        .json({
          message: 'Error finding user',
          error: err
        }))
  })
}
```

Bundle API routes
```Javascript
// server/api/index.js
const express = require('express')
const router = express.Router()

require('./routes/transaction')(router)
require('./routes/user')(router)

module.exports = router
```

#### Debugging and Testing he API
1. Start MongoDB `mongod`
2. Start API Server `yarn run start`
3. TEST each `GET, POST` on Postman
4. For testing transaction API, don't forget to include `UserId` key and its value. See in `server/api/routes/transaction.js` `const userId = req.get('userId')

### UI Development with Vue.js and Vuetify

#### Getting Our Development Environment
- VSCode Extension `Vetur` for vuejs syntax highlighting
- VSCode Extension `GitLens` for useful git managment

#### Stubbing in the Vue Files
Vue Files We'll Need
- Login - no registration page needed
- Transactions - list of transactions for the current month
- Edit Transaction - add new and edit existing transactions
- About - as time allows - not critical for "MVP"

Create vue files in `client/src/components` folder

Import Transactions components to Home.vue. Note template `<transactions>` tag should be lower-case.

Import EditTransactions components to Home.vue. Note template `<edit-transactions>` tag should be kebab-style.

Run `yarn run build` to package using webpack

#### Setting up Routing
Setup Routes
- Home (default route)
- Login
- About

Transactions
- Child component in Home.vue
- Route not needed

Edit Transaction
- Route not needed
- We'll use modal for this

"router" folder and `src/router/index.js` already added by vue-cli

Official router package: vue-router

Import components from `@/components/` folder. @ means src folder created by vue-cli

#### Demo: Testing the Baseline Setup

run `yarn run dev`

If you find error by eslint, run `run lint --fix`

#### Selecting a Vuetify Layout
Vuetify Pre-Defined Layouts
* https://vuetifyjs.com/en/examples/layouts/baseline
* https://vuetifyjs.com/en/examples/layouts/complex
* https://vuetifyjs.com/en/examples/layouts/googleContacts

#### Add Vuetify to the Project
https://vuetifyjs.com/en/getting-started/quick-start

1. Add Vuetify
`npm install vuetify --save` or `yarn add vuetify`

```Javascript
// client/main.js
import Vue from 'vue'
import Vuetify from 'vuetify'
 
Vue.use(Vuetify)
```

2. Add selected layout
Copy [the vuetify source code](https://github.com/vuetifyjs/vuetifyjs.com/blob/master/src/examples/layouts/googleContacts.vue) and replace entirely in `src/components/Home.vue`

3. Do a test run
`yarn run dev`

4. Fix any issues
`yarn run lint --fix` will automatically fix linting issues.

5. Import Vuetify styles
6. Import material design icons
```Java
// App.vue
<style>
@import 'vuetify/dist/vuetify.min.css'; // Don't forget semicolon here
@import 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons';
</style>
```

7. Vuetify components should be surrounded by `<v-app>` tag
```html
<!-- App.vue -->
<template>
  <v-app id="app">
    <router-view/>
  </v-app>
</template>
```

#### Vuetify Components Review
Components are like building blocks
Examples
- Buttons
- Dialogs
- Data tables
- Forms

Vuetify includes a large number of UI components

#### Using Vuetify Components
Components We Need
- Button: saving and canceling events
- Data Tables: to display a list of our transactions
- Dialogs: add new and edit existing transactions
- Forms
- Icons: for menus and form entry fields 
- Pickers: date pickers
- Snackbars: notify users of some action or error that takes place

Working on Login.vue using Grid system.
- The structure should follow `<v-container><v-layout><v-flex></v-flex></v-layout></v-container>`

#### Review Vuetified Components

Working on Home.vue
- Home
- Transactions (Child component)
- EditTransaction (Modal dialog)

See `Home.vue, Transactions.vue, EditTransactions.vue`


#### Vuetify Tags Usage Pattern

Basic Structure
```html
<v-app>
  <v-content>
    <v-container>
      <v-layout>
        <v-flex>
          Vuetify Components Here
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</v-app>
```

Toolbar
```html
<v-toolbar>
  <v-list>
    <v-list-tile>
      <v-list-tile-title class="title">
        Title Here
      </v-list-tile-title>
    </v-list-tile>
  </v-list>
</v-toolbar>
```

Navigation Drawer
```html
<v-navigation-drawer>
  <v-toolbar>
    ...
  </v-toolbar>

  <v-divider></v-divider>

  <v-list>
    ...
  </v-list>
</v-navigation-drawer>
```

Lists
```html
<v-list>
  <v-list-tile>
    <v-list-tile-action>
      <v-icon>{{ item.icon }}</v-icon>
    </v-list-tile-action>
    <v-list-tile-content>
      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
    </v-list-tile-content>
  </v-list-tile>
</v-list>
```

Data Table
```Javascript
<template>
  <v-data-table :headers="headers" :items="desserts" class="elevation-1">
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.calories }}</td>
      <td class="text-xs-right">{{ props.item.fat }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    data () {
      return {
        headers: [
          { text: 'Dessert', value: 'name', sortable: false },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
        ],
        desserts: [
          { name: 'Frozen Yogurt', calories: 159, fat: 6.0 },
          { name: 'Ice cream', calories: 237, fat: 9.0},
        ]
      }
    }
  }
</script>
```

Vuejs Vocabulary
```
<v-navigation-drawer>
<v-subheader>
<v-divider>
<v-select>
<v-list>
<v-list-group>
<v-list-tile>
<v-list-tile-action>
<v-list-tile-content>
<v-list-tile-title>
<v-toolbar>
<v-toolbar-side-icon>
<v-toolbar-title>
<v-card>
<v-card-title>
<v-card-text>
<v-card-actions>
<v-form>
<v-dialog>
<v-spacer>
<v-tooltip>
<v-btn>
<v-icon>
<v-avatar>
<v-footer>
<blockquote>
<code>
<var>
<kbd>
```

### Manage Application State with Vuex

Script Block
- Name
- Data
- Props / PropsData
- Computed
- Methods
- Watch
- Lifecycle Hooks

#### What is Vuex?
Vuex is a state management pattern & the library for Vue.js applications. It serves as a centralized store for all the components in an application.

#### Vuex Store Objects
- State
- Actions
- Mutations
- Getters
- Modules

![Vuex Workflow](https://vuex.vuejs.org/vuex.png)

#### State
```Javascript
const store = new Vuex.Store({
  state: {
    user: null,
    isAuthorized: false,
    roles: []
  }
})
```

#### Actions
```Javascript
const store = new Vuex.Store({
  state: {...},
  actions: {
    // loginUser (context, user) {
    //   // Login Code Goes Here...
    //   let isAuthorized = true
    //   context.commit('loginUser', isAuthorized)
    // }
    loginUser ( { commit }, user) {  // deconstructed version
      // Login Code Goes Here...
      let isAuthorized = true
      commit('loginUser', isAuthorized)  // Actions -> commit
    }
  }
})
```

#### Mutations
```Javascript
const store = new Vuex.Store({
  state: {...},
  actions: { loginUser (context, user {...})},
  mutetions: {
    loginUser (state, isAuthorized) {
      state.isAuthorized = isAuthorized // Mutations -> change state
    }
  }
})
```

#### Getters
```Javascript
const store = new Vuex.Store({
  state: {...},
  getters: {
    fullName: state => {
      return state.firstName + ' ' + state.lastName
    }
  },
  actions: {...},
  mutations: {...}}
})
```

#### Modules
store/index.js (this is a single state tree of the two module)
store/modules/users.js
store/modules/transactions.js

#### Demo: Develop the Vuex Store
`yarn add vuex`

```Javascript
// client/src/store/index.js
import Vue from 'vue'
import Vuex from 'vuex'

import user from './modules/user'
import transactions from './modules/transactions'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    user,
    transactions
  }
})
```

```Javascript
// client/main.js
// Vuex store
import store from './store'

Vue.config.productionTip = false

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
```


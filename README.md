# React Front-end Challenge
This single page application that Consume the JSONPlaceholder Album API.
## What’s Included?
* This app has everything to build a modern single-page React app:
* React, JSX, es6, boilerplate and Flow syntax support.
* Auto prefixed CSS, so you don’t need -webkit- or other prefixes.
* Preprocessor scripting language Sass.
* A fast-interactive unit test runner with built-in support for coverage reporting with Jest and Enzyme.
* A live development server that warns about common mistakes.

## Components app 
The app has 6 components Header, Content, SectionListRace ,SectionSeason , loading and footer:
* Header component gets the header.
* Content component gets the content.
* Loading component get animation loading while the sectionListRace load data.
* Footer  component get the footer content

## Screenshot and demonstration of this app 

The app is responsive 

Tablet device 

Mobile device



## Folder Structure
>
>     |   config-overrides.js
>     |   Dockerfile
>     |   package.json
>     |   README.md
>     +---public
>     |       favicon.ico
>     |       index.html
>     |       manifest.json
>     |       logo.svg
>     +---src
>     |   index.js
>     +---api
>     |       Race.js
>     +---components
>     |       App.js
>     |       Content.js
>     |       Footer.js
>     |       Header.js
>     |       Loading.js
>     |       registerServiceWorker.js
>     |       AlbumsList.js
>     |       PhotoList.js
>     +---config
>     |       api.js
>     +---styles
>     |   |   main.scss
>     |   +---base
>     |   |       _page.scss
>     |   |       _reset.scss
>     |   |       _typography.scss
>     |   +---components
>     |   |       _actions.scss
>     |   |       _box.scss
>     |   |       _grid.scss
>     |   |       _icon.scss
>     |   |       _icons.scss
>     |   |       _inner.scss
>     |   |       _list.scss
>     |   |       _loading.scss
>     |   |       _gallery.scss
>     |   |       _wrapper.scss
>     |   +---layout
>     |   |       _footer.scss
>     |   |       _header.scss
>     |   |       _main.scss
>     |   \---libs
>     |           _breakpoints.scss
>     |           _flexgrid.scss
>     |           _functions.scss
>     |           _grid.scss
>     |           _mixins.scss
>     |           _vars.scss
>     |           _vendor.scss
>     |           
>     \---test
>         |   App.test.js
>              

 

* the redux folder holds all the store configuration, and reducer and actions that I used. If it was a bigger project I would have used selectors as well, but I didn't see a necessity here
* the  queries folder manages all the calls to the Ergast API. Both of them require a lot of simultaneous promise calls since there wasn't (or at least I couldn't find) a single endpoint that gave me all the data I needed.
* the  components folder holds all React components and the SCSS for said components (I'm more comfortable using SCSS or styled-components than CSS).
* the config contains the configuration's URL API and the setup for jest. 
* the styles contains all sass style.
* the test contains the script test.


## How to install on your computer

`# Clone this git repo:`

`git clone https://github.com/sguiderk/Consume_Album_API_React.git`

`cd consumeapialbum/`

`# install the depencies `

`npm install`

`# run the application `

`npm start `

Then it will open http://localhost:3000 and the application will be running.

## Test

The script of test app.test.js contains 17 cases of test and 11 of them are used with
Snapshot, it tests to automate the process and create unit tests that can easily be overwritten and managed through time, and for the 6 We check if the API work perfectly and check the render of title and section with toEqual() function.

## To Run Tests

`npm test`


## How to install on docker

I’ve provided the possibility to run this app under docker 

`# Now let's build it:`

`docker build -t consumeapialbum .`

`# Now to run it:`

`docker run --name consumeapialbum -it -p 3000:3000 consumeapialbum`

Then it will open http://yourhost:3000 and the application will be running.

## How run test on docker

`# connect to the container:`

`docker exec -it imagefincompare bash`

`npm test`

## Component used for this app

**Redux-thunk : ** Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action.
Link package : [link](https://www.npmjs.com/package/redux-thunk)

**React-paginations : ** A ReactJS component to render a pagination. By installing this component and writing only a little bit of CSS.
Link package : [link](https://www.npmjs.com/package/@trendmicro/react-paginations)

_**React-modal :**_ Accessible modal dialog component for React.JS.
Link package :  [link](https://www.npmjs.com/package/react-modal)

_**Node-sass :**_ Node-sass is a library that provides binding for Node.js to LibSass, the C version of the popular stylesheet preprocessor, Sass.
Link package :  [link](https://www.npmjs.com/package/node-sass).

_**sass-loader :**_ Loads a Sass/SCSS file and compiles it to CSS.
Link package :  [link](https://www.npmjs.com/package/sass-loader).

**Jest  : ** Jest is a JavaScript testing framework designed to ensure correctness of any JavaScript codebase.
Link package :  [link](https://www.npmjs.com/package/jest).

_**Enzyme :**_ Enzyme is a JavaScript Testing utility for React that makes it easier to assert, manipulate, and traverse your React Components' output.
Link package :  [link](https://www.npmjs.com/package/enzyme).







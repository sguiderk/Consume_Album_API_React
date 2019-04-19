# React Front-end Challenge
This single page application that Consume the JSONPlaceholder Album API.
## What’s Included?
* This app has everything to build a modern single-page React app:
* Functional programming 
* React, JSX, Redux ,es6, boilerplate and Flow syntax support.
* Auto prefixed CSS, so you don’t need -webkit- or other prefixes.
* Preprocessor scripting language Sass.
* A fast-interactive unit test runner with built-in support for coverage reporting with Jest and Enzyme.
* A live development server that warns about common mistakes.

## Components app 
The app has 7 components Header , App , AlbumsList , PhotosList, Page, loading, List and footer:
* Header component gets the header.
* App component Manage all the components.
* AlbumsList component gets the Album with pagination.
* PhotosList component gets the Album with pagination.
* Page component appers the loading while data is loading.
* Link component for generating the link.
* Loading component get animation loading while the reducer load data.
* Footer  component get the footer content

## Screenshot and demonstration of this app 

As the specified in the requierement I've respected the first mobile approach 
,and the app is responsive.

### Desktop list of album 
![](https://i.imgur.com/wImkr5Oh.png)
### Desktop list of photo 
![](https://i.imgur.com/ZQTA3tSh.png)
### Modal to zoom the picture
![](https://i.imgur.com/g5Prbpsh.png)
### Loading animation
![](https://i.imgur.com/YaA1T8Kh.png)
### If you're not connected to internet an message is appeared 
![](https://i.imgur.com/a0YBUEXl.png)
### Tablet device list of album 
![](https://i.imgur.com/xg69o1ih.png)
### Mobile device of album 
![](https://i.imgur.com/vduzNduh.png)

## Style and url are parametrable

I've built a theme for this project so could change the colors of the style font-size 
or font-familly feel free to check the styles/libs/_vars.css
, and the config/api.js you could change the url for the API.

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
>     +---config
>     |       api.js
>     +---constants
>     |       ActionTypes.js
>     +---queries
>     |      loadAlbums.js
>     |      loadPhotos.js
>     |      loadUsers.js
>     +---redux
>     |      reducers.js
>     |      storeconfig.js
>     +---components
>     |       App.js
>     |       Content.js
>     |       Footer.js
>     |       Header.js
>     |       Loading.js
>     |       Link.js
>     |       AlbumsList.js
>     |       PhotoList.js
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
* the  queries folder manages all the calls to the Album API. Both of them require a lot of simultaneous promise calls since there wasn't (or at least I couldn't find) a single endpoint that gave me all the data I needed.
* the components folder holds all React components and the SCSS for said components
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

The script of test app.test.js contains 14 cases of test.

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

`docker exec -it consumeapialbum bash`

`npm test`

## Component used for this app

_**Redux-thunk : **_ Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action.
Link package : [link](https://www.npmjs.com/package/redux-thunk)

_**React-paginations : **_ A ReactJS component to render a pagination. By installing this component and writing only a little bit of CSS.
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







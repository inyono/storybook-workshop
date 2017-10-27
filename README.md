# Storybook Workshop

* Deployed mobile app: https://expo.io/@inyono/storybook-workshop
* Deployed web app: https://surgeon-goat-64020.netlify.com
* web storybook: https://masseur-distortion-13756.netlify.com

## Setup

### React

```
cd web
npm install
```

### React Native

```
cd mobile
npm install
```

## Usage

### React

* This is a [Create React App](https://github.com/facebookincubator/create-react-app), check out the [README.md](./web/README.md) for detailed instruction. **TL;DR**:
  * `npm start` starts the app in development mode on http://localhost:9009
  * `npm run storybook` starts the storybook on http://localhost:3000. Storybook automatically loads all `*.stories.js` files in the `src` directory
  * `npm test` runs the tests with Jest, see also [Running tests](./web/README.md#running-tests). Jest finds the tests by name, for example `*.test.js` files in the `src` directory are run.
* I included Semantic UI as UI library (see https://react.semantic-ui.com) and React Router (http://reacttraining.com/react-router/web)

### React Native

* This is a [Create React Native App](https://github.com/react-community/create-react-native-app), check out the [README.md](./mobile/README.md) for detailed instruction. **TL;DR**:
  * `npm start` starts the React Native packager and shows the QR code that you can scan in your Expo app on your real device. Also, this command is interactive and allows you to start iOS / Android simulators (if installed). You also need to run the storybook.
  * `npm run storybook` starts the storybook on http://localhost:7007. When you add additionally stories, you'll need to import them in `storybook/stories.js` (Unlike in React Storybook, we can't automatically load them by filename)
  * `npm test` runs the tests with Jest. Jest finds the tests by name, for example `*.test.js` files in the `src` directory are run.
* Expo SDK 21 is included in CRNA by default, see https://docs.expo.io/versions/v21.0.0/index.html
* I included NativeBase as UI library (see https://docs.nativebase.io) and React Router (http://reacttraining.com/react-router/native)


## Project structure

For both `web/` and `mobile/`:
* `scripts/` contains scripts used by Travis for deploying the app. You can ignore them
* `storybook/` resp. `.storybook` contains Storybook configuration files. You'll need to make changes to `storybook/stories.js` in the mobile app. Furthermore, you might need to change files that if you want to include additional Storybook addons
* `src/` contains the source files. `src/index.js` is the entry point for the real app (Note that the entry point for React Native is `mobile/index.js` and loads the Storybook entry in development mode)

## Tasks

Pick tasks that intrigue you (or do something else entirely ;-) )

* Get a basic understanding of the existing app
  * Feel free to change things up
  * Check the `*.stories.js` files to understand how the components are used (and how Storybook works)

* If you usually use React, you might use this as an opportunity to learn about React Native
* If you usually use vanilla React Native, you might use this as an opportunity to check out Expo SDK

* Story-Driven Development:
  * Create your story first
  * Create the component
  * Repeat that steps until you are happy with your component and its API
  * Add stories for interesting edge cases
  * Feel free to extract components
  * For bonus points: also do TDD

* Add another game
  * Ideas:
    * 9x9 Sudoku (Sudoku Generator: http://www.sudokuweb.org)
    * 2048 (https://gabrielecirulli.github.io/2048/)
    * Get creative
  * Add a story similar to src/sudoku4/index.stories.js
    * Game is a higher-order component that handles state management and the communication with the rest of the app.
    * See src/dashboard/game.js for the expected API of your component
  * For bonus points: TDD the game logic (by adding a `.test.js` file)
  * After you're done, you can add the game to `src/games.js` so that it gets used in the real app.

* Learn more about [Storybook](https://storybook.js.org)
  * web: Write a [decorator](https://storybook.js.org/basics/writing-stories/#using-decorators) so that the stories are displayed like in the real app. 
  * Use the [link addon](https://github.com/storybooks/storybook/tree/master/addons/links) to make links between the stories. With this, you could prototype the app flow in Storybook itself.
  * Check out the [addon library](https://storybook.js.org/addons/addon-gallery/) and try out any that interest you (**Note**. Many addons don't work in React Native Storybook, unfortunately)

* Build a storybook for the included UI library (Semantic UI resp. NativeBase)

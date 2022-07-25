# Recap

## 1. Home Page (Component)

- Create a `Home` component in the pages folder
  - Give your component a title using a heading element
  - Add the following text within a parapgraph tag - Today we will be covering:
  - And your Home component to your `App`

## 2. ListItem Component

- Create a `ListItem` component in the components folder
- Add your ListItem component to your Home Component
- Create an variable to hold our list items data called `initialListItemsState` (copy and paste)
  - each object will have three keys `id`, `text` and `completed`
- Use the useState hook to create a `listItems` state
- Set the initial value of the state you just created to `initialListItemsState`

- Within your return statement **map** the `listItems` and return a `<div>` element.
- In your div element
  - Add a p tag which will display the listItem text property
  - Below the p tag add a span tag with the text `Completed: ` followed by the a ternary statement that will display whether or not the listItem has been completed
  - Below the span tag add a button which contains the text `Toggle`

The button element will need an event handler

- Create a function called `handleClick`
- This function will take one argument called `id`
- Within your function create a new variable called `newListItems`
- Map over the `listItems` state and for each individual item we want to check whether item's id is equal to the id that will be passed to this function as an argument
  - If the id's are the same then we'll spread the item state and toggle the `completed` value
  - If the ids are not the same we will return the item without any modifications
- Lastly we want to set our listItems state with the newListItems value within the handleClick function
- And add the event handler to our button element

**NB:** We could change the styling based off of the `completed` state here instead

## 3. CatFact Component

- Create a `CatFact` component in the components folder
- Add your CatFact component to your Home Component
- Create a catfact state using useState, set the initial value to an empty string
- In the return statement add a paragraph with the text: Here's a random cat fact
- Place your catfact state in another p tag underneath

- Install axios `npm i axios`
- Create a useEffect block
- Use axios to make a get request to `https://catfact.ninja/fact?max_length=140` in your useEffect
- Update your state based on the result of the get request

**NB:** Extension: Add a button and create an event handler to fetch a new cat fact onClick

## 4. About Page (Component)

- Create an about component within the pages folder
- Add some placeholder / lorem ipsum text

## 5. React Router

- Install react router `react-router-dom@5.3.3`
- Import the **3** items you will need from react router into your App component
  - Can we remember how to structure what will go within our return statement using the 3 imports we get from react router?

**NB:** Extension: Add a nav that contain `Link` elements so we can switch between pages without manually changing the url

<br />
<br />

---

<br />

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

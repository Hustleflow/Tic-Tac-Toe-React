Tic-Tac-Toe

After installing react:

" npx create-react-app "

I deleted unnecessary files such as app.css, logo and test. I only needed the app.js, index.css and index.js.

My starting app.js file looked like this:

const App = () => { return (

<div className="app">

</div>
) }

and my starting index.css is blank as I wrote the custom css styles in the sheet for the tic-tac-toe project

In this project, useState and useEffects were used and only consisted 1 component called Cell.js inside the folder Components created under src.

the project may be run using the default command npm run start.

I set the code in such that if there is no winning message the handleClick is trigerred (places the cross or circle). Also if there is already a cross or circle in a cell, the said cell when clicked will not trigger the handleClick. If the code was not set in that way, it will cause for an error to show up. Example: " Run time errors: func.apply is not a function "

I also encountered this other error:

One of your dependencies, babel-preset-react-app, is importing the "@babel/plugin-proposal-private-property-in-object" package without declaring it in its dependencies. This is currently working because "@babel/plugin-proposal-private-property-in-object" is already in your node_modules folder for unrelated reasons, but it may break at any time.

babel-preset-react-app is part of the create-react-app project, which is not maintianed anymore. It is thus unlikely that this bug will ever be fixed. Add "@babel/plugin-proposal-private-property-in-object" to your devDependencies to work around this error. This will make this message go away.

and the solution was I ran this command in the terminal inside the folder where my react is from the "npx create-react-app tic-tac-toe", in this case inside tic-tac-toe:

npm install --save-dev @babel/plugin-proposal-private-property-in-object --legacy-peer-deps

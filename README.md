This is an app, showing a map of my favorite restaurants in Colorado Springs!

Running the app:

To run this project from your terminal, download the files (unzipping them if needed, of course), then cd into the directory containing them. Run `npm install` to install the dependencies, then `npm start` to start the server. If your browser does not open automatically, paste the localhost address given in the terminal into your browser.

For subsequent runs of this program, you just need `npm start`.

Using the app:

The map starts out with five locations (I may add more in future versions). If you want to filter the results, type in the text input box in the top left corner. You can search by restaurant name or type of cuisine. The filtered results will appear on the map, and in the list on the left. You can click the list item or the marker to see the restaurant name on the map. If you don't like the list being in your way, click "Toggle sidebar" to hide it. This leaves only the search box and the button. If you want to see the list again, just click the button again.

Service worker:

The app uses the default create-react-app service worker, which is only available in production mode.

Note on Google Maps API Error handling:

Since I used google-maps-react, most of the Google Maps API stuff is behind the scenes. I googled how to implement error handling with this package, but nobody had any answers. 

References:

This project was made with the packages create-react-app and google-maps-react. All the files outside the src directory are default files added by create-react-app, as are a few of the files inside src, with varying levels of modification.

MapContainer.js started with code from the google-maps-react documentation, but of course has been greatly modified since then.

The restaurant data is brought in from api.myjson.com, a convenient place to host all your JSON.

Much of the overall coding approach was inspired by Doug Brown's walkthrough: https://www.youtube.com/watch?v=NVAVLCJwAAo

Special thanks to Doug Brown for his immense assistance in debugging this program, and to all the wonderful people on the Grow With Google Slack for their advice and encouragement! 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).



------default create-react-app README, in case it's useful-------


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

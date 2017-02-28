#Location Station

## Technologies Used

1. [Express](http://expressjs.com/)
2. [Axios](https://www.npmjs.com/package/axios)
3. [Google Geocode API](https://developers.google.com/maps/documentation/geocoding/start)

## What it does

Practicing working with APIs.

1. Sends data from the typicode fake JSON API to the browser.

2. Sends data from the Google geocode API to the browser.
  * use the `secrets.template.js` file to store your personal API Key from Google
  * rename file to `secrets.js`.

## Get Started

1. Fork and clone repository
2. type `npm install` into the command line in the `location_station` directory
3. to start server type `node index.js`
4. go to browser and type `localhost:8080/posts/:postId` where `postId` is the
   id of the post
5. go to browser and type `localhost:8080/location/:address` where `address` is the
   location of your choice

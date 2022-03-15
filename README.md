# This is my React-based Notes App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The design and aesthetic feel of this project is inspired by iOS native Notes app. 

## Project Overview

- This notes app saves the information in localStorage and will also retrieve it once re-launched, using the useEffect hook, once the app has been fully rendered the first time. 
- Users can search/filter notes based on keywords
- Users can toggle between *dark* and *light* modes
- The app uses CSS grid style to layout individual notes
- There is a 200 word limit for each note
- Users also have the opportunity to delete any given note by pressing the trash can icon.
- The date is saved automatically according to the user's LocaleDateString settings

### How to run the app

#### `npm start` will run the bundler and will start the project. 

Usually the localhost server is prompted automatically, if not please:\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


### App Usage & Design
![App](/src/images/react-notes-app.gif)
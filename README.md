# React Facts site

## Description
A basic site presenting some facts about React. The page consists of two React components (Navbar and Main) which appearances could be toggled between Light and Dark mode, using the toggle switch at the upper right corner. Se images below.
<br/>
<br/>
<img src="dark-mode.png" alt="Screenshot." width="300px"/>

<img src="light-mode.png" alt="Screenshot." width="300px"/>

## Technologies
- HTML
- CSS
- JavaScript
- React

## Live link
The site is deployed here:
[https://toms-reactfacts.netlify.app](https://toms-reactfacts.netlify.app)

Please feel free to visit the site!

## What I learned
Where to put the *state*. In this case state `darkMode` is put in App component. Function `setDarkMode` is located in App but passed as a prop down to Navbar component where it is called from an onClick event on the toggle switch.

Then darkMode in passed as a prop down to both Navbar and Main components to set the mode.

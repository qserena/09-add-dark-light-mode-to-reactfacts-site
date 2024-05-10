# React Facts site

## Description
A basic site presenting some facts about React. The page consists of two React components (Navbar and Main) which appearances could be toggled between Light and Dark mode, using the toggle switch at the upper right corner. See images below.
<br/>
<br/>
<img src="dark-mode.png" alt="Screenshot." width="300px"/>

<img src="light-mode.png" alt="Screenshot." width="300px"/>

## Technologies
- HTML
- CSS
- JavaScript
- React
- TypeScript

## Live link
The site is deployed here:
[https://toms-reactfacts.netlify.app](https://toms-reactfacts.netlify.app)

Please feel free to visit the site!

## What I learned
Where to put the **state**. In this case state `darkMode` belongs to the App component, which is the parent component of Navbar and Main. 

Function `toggleDarkMode` is located in App but passed as a prop down to Navbar component where it is called from an onClick event on the toggle switch. In this way the state is set from the child component.

darkMode is then passed as a prop down to both Navbar and Main to really set the mode with help of CSS.

I also added TypeScript to this project.

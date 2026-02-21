# Frontend Mentor - Browser Extension Manager UI solution

This is a solution to the [Browser Extension Manager UI challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp). 
This project focuses on building a functional and responsive dashboard to manage browser extensions.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Key Functionalities](#key-functionalities)
- [Important Note](#important-note)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View a list of all browser extensions dynamically rendered from data.
- Toggle the status of an extension (Active/Inactive).
- Filter extensions based on their status (All, Active, or Inactive).
- Remove an extension from the list.
- Switch between Light and Dark mode.
- View the optimal layout for the interface depending on their device's screen size.

### Links

- Solution URL: [Frontend Mentor Solution](https://www.frontendmentor.io/challenges/browser-extension-manager-ui-yNZnOfsMAp)
- Live Site URL: [Live Demo](https://anasdef.github.io/Browser-extension-manager-UI/)

## My process

### Built with

- Semantic HTML5 markup
- CSS Custom properties (Variables)
- Flexbox and CSS Grid
- BEM (Block Element Modifier) methodology for CSS naming
- Vanilla JavaScript (DOM Manipulation & State Management)
- Desktop-first workflow

### Key Functionalities

- **Dynamic Rendering**: All extension items are generated using JavaScript from a central `extensions` array.
- **Filtering Logic**: Implemented a filtering system that updates the UI based on the `isActive` property of each extension.
- **Theme Management**: A dark mode toggle that modifies the root element's class and switches UI icons accordingly.
- **State Handling**: Functions to handle the logic of removing items and toggling individual extension switches.

### What I learned

During this project, I improved my skills in managing application state using Vanilla JS without external frameworks. I practiced filtering arrays and re-rendering the DOM efficiently.

## Important Note

The data in this project is static. All modifications (toggling status or removing extensions) 
are performed in-memory on the local array. This means that changes are not persistent; 
refreshing the page will reset the data to its original state

## Author

- Frontend Mentor - [@anasdef](https://www.frontendmentor.io/profile/anasdef)
- GitHub - [@anasdef](https://github.com/anasdef)

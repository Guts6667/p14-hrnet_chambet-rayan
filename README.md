# p14-hrnet_chambet-rayan

## HRnet is a fictional app for HR

The goal here was to:

- Convert a jQuery app to a React JS one.
- Convert a jQuery plugin to a React Component.
- Add a state management system with Redux.

The jQuery version can be found here:
https://github.com/OpenClassrooms-Student-Center/P12_Front-end

## Getting Started

Run: `npm start` or `yarn start`

## Create a build

Run: `npm build` or `yarn build`

## Component Modal

The component created and published on NPM can be found here:

Npm: https://www.npmjs.com/package/p14-lib-hrnet-chambet-rayan

GitHub: https://github.com/Guts6667/p14-lib-hrnet-chambet-rayan

Git: https://github.com/Guts6667/p14-lib-hrnet-chambet-rayan.git

### Import the modal in your project

Run: `npm i p14-lib-hrnet-chambet-rayan`

### Usage

```jsx
import React from "react";

import Modal from "p14-lib-hrnet-chambet-rayan";

const Home = () => {
  return (
    <div>
      <Modal
        title={"your__title"}
        description={"your__description"}
        buttonText={"Your_test_in_the_button"}
      />
    </div>
  );
};
```

## Stacks

This project uses:
React - Redux - JavaScrip - SCSS

Project created with: `npm create react-app nameOfTheApp`

# XState in React POC

This repository contains a Proof of Concept (POC) demonstrating the use of xState in a React application. In this POC, we have implemented a simple state machine with two steps. The application showcases the following features:

- Displaying context's value updating onChange.
- Reusing values from previous steps.
- Disabling the "Next" button if the input is not valid.
- Allowing users to go back to the previous step.

## Getting Started
To run this POC locally, follow these steps:

- Clone this repository to your local machine.
- Navigate to the project directory.
- Run `npm install` to install the dependencies.
- Run `npm start` to start the development server.

## Features
- **Live State Updates**: The application shows the state of the context, updating live as the user interacts with the steps.

- **Input Validation**: The "Next" button is disabled if the input is not valid, providing a better user experience.

- **Step Navigation**: Users can go back to the previous step using the "Back" button.

## Usage


When you open the application, you will see the first step with an input field.

Enter a valid input value (e.g. your name) to enable the "Next" button and proceed to the next step.

The live state updates will reflect the changes in the context as you navigate through the steps.

You can also use the "Back" button to go back to the previous step at any time.

# Technologies Used
- React
- xState
- antd

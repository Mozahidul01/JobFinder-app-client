# Redux-toolkit Job Finder App

This application exemplifies the utilization of Redux Toolkit to perform basic CRUD operations. Additionally, it facilitates job filtering by type (i.e., internship, full-time, or remote), job searching, and job sorting by salary in ascending or descending order.

## Getting Started

### Prerequisites

To run this project, you will need to have Node.js installed on your machine.

### Running the App

- Clone this repository to your local machine.
- In your terminal, navigate to the project directory and run the following command to install the project dependencies:

``` bash
yarn 
```

- Now, navigate to the project directory and run the following command to start the development server:

``` bash
yarn run dev
```

- Open your browser and go to `http://localhost:5173/` to see the app.

## Project Structure

- `src/`
  - `app/`: Contains redux store.
  - `assets/`: Contains all the necessary assets.
  - `components/`: Contains all the React components used in the app.
  - `feature/`: Contains all the Redux features.
  - `pages/`: Contains all the router.
  - `utils/`: Contains all the necessary utilities for this application.
  - `App.jsx`: The main component that renders all other components. This component wrapped with the `Provider` component to provide the Redux store to the entire application.
  - `main.jsx`: The entry point of the app that renders the `App` component.
  - `index.css`: Contains all the necessary CSS for this application.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Redux](https://redux.js.org/) - A predictable state container for JavaScript apps.
- [Redux Toolkit](https://redux-toolkit.js.org/) - An opinionated, efficient, and easy-to-use library for Redux that reduces boilerplate and provides powerful abstractions for managing application state.

## Author

- **Mozahidul01** - [GitHub](https://github.com/mozahidul01)

## Acknowledgments

This project was created as a sample project to showcase how to use React and Redux-toolkit together to build a simple CRUD app.

# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# About Project

Core structures in this project...

### Language:

- Typescript (Frontend)
- Javascript (JSON-server)

### State Management:

- Redux
- Redux-Saga

### Styling:

- Metarial-UI
- React-JSS
- StyledComponents

# Folder Structure

### assets

- Logo and product image in this folder

### components

- Layout folder has a tree structure which shows component placements and workflow
- UI folder has reusable components. (FilterCard and Product Card)

### helpers

- `config.ts`   ->  Config file for baseurl
- `constant.ts` ->  Constant variables for styling
- `theme.ts`    ->  Theme file for MUI components

### hooks

In this section we have custom hooks for keeping App and Filter component more lean.

- `useInitialData` ->  Gets initial data when the app starts
- `useFilter`      ->  This hook listens filter object in redux and sends a request every time filter gets updated

### redux

All redux related files are in this folder.

- `actions.ts`      ->  Action creators for leaner and manageable structure
- `actionTypes.ts`  ->  Action type constants for reducing typo mistakes
- `middleware.ts`   ->  Middlewares in reducer for leaner and readable code
- `reducer.ts`      ->  Reducer file
- `sagas.ts`        ->  Middleware for handling async operations. Watcher and worker structure handled in here
- `store.ts`        ->  Creating a store and applying middlewares for redux have done in this file
- `types.ts`        ->  All types which related with redux

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

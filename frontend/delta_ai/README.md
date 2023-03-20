# Delta.ai Frontend

## Installation

### `npm install or npm i`

this command would install all the dependencies

### `npm start`

this command would run the frontend application

## Folder Structure

### src

this is the directory that contains multiple sub folders explained below. However, it contain following 2 most importent files
App.js
index.js

#### App.js

this is the file responsible for handeling routes

#### index.js

this is the file responsible for rendering the App component.

### api

this directory contains one file at present that is concern with creating axios instances with default values for different APIs

### components

this directory consists of reusable components. the components build by us are present inside this directory along with a folder named MuiComponents that consists of components imported from material ui

### contexts

This folder consists of 2 files
NodeContext.jsx 
NodeState.jsx

The context Api helps to prevent props drealing.

this creates a global context to help the application define and store data and functions globaly.

### db

This is the folder that basically store files with dummy data that replicates the form of data recived when requested to the server

### Hooks

This is the directory that provides custom hooks for diffrent purpose.

### media

this folder stores images and categorize them on the basis of their type or file extension

### pages

this folder consist of all the pages of the application
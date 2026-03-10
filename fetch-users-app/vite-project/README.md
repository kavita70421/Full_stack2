Fetch Data from API using useEffect (React)

Project Description

This project demonstrates how to fetch data from an external API in a React application using the useEffect hook. The application retrieves user data from a public API and displays the Name and Email of each user in a list format.
This experiment helps in understanding how React components interact with APIs and how data can be dynamically rendered in the user interface.

API Used
The project uses the following public API:

https://jsonplaceholder.typicode.com/users

This API provides sample user data including:
Name
Email
Address
Phone
Company

In this project, only Name and Email are displayed.

Technologies Used
React.js
JavaScript (ES6)
Vite
HTML
CSS
Fetch API

FILE STRUCTURE:
fetch-users-app
│
├── node_modules
├── public
│
├── src
│   │
│   ├── assets
│   │
│   ├── components
│   │     └── Users.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── vite.config.js
└── README.md

Features:
Fetch data from an external API
Use React useEffect hook
Store data using useState
Dynamically display user information
Render list using map()
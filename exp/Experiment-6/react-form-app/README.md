# React Form Handling with Validation

## Experiment 6

### Objective

The objective of this experiment is to implement form handling in React using React Hook Form and perform validation using the Yup validation library.

---

## Learning Outcomes

After completing this experiment, students will be able to:

1. Understand form handling in React
2. Create controlled components
3. Implement form validation
4. Use React Hook Form library
5. Integrate Yup validation
6. Handle file uploads
7. Display validation error messages

---

## Technologies Used

* React.js
* React Hook Form
* Yup Validation Library
* JavaScript
* HTML
* CSS

---

## Project Structure

```
react-form-app
│
├── node_modules
├── public
│
├── src
│   ├── components
│   │   └── Form.js
│   │
│   ├── validation
│   │   └── validationSchema.js
│   │
│   ├── App.js
│   ├── index.js
│   └── App.css
│
├── package.json
└── README.md
```

---

## Installation Steps

### 1. Clone the Repository

```
git clone <repository-link>
```

### 2. Navigate to the Project Directory

```
cd react-form-app
```

### 3. Install Dependencies

```
npm install
```

### 4. Install Required Libraries

```
npm install react-hook-form yup @hookform/resolvers
```

### 5. Run the Application

```
npm start
```

The application will run on:

```
http://localhost:3000
```

---

## Features

* React form handling using React Hook Form
* Schema based validation using Yup
* Error message display for invalid inputs
* File upload support
* Simple and interactive user interface

---

## Form Fields

The form includes the following fields:

* Name
* Email
* Password
* Age
* File Upload

Each field is validated using the Yup validation schema.

---

## Validation Rules

* Name: Required
* Email: Must be a valid email format
* Password: Minimum 6 characters
* Age: Must be a number

---

## Output

The form collects user information and validates the inputs.
If the input is invalid, appropriate error messages are displayed.
If the input is valid, the form data is submitted successfully.

---

## Result

Successfully implemented form handling and validation in React using React Hook Form and Yup.

---

## Author

Student: Kavita Bathyal
Course: B.E. Artificial Intelligence & Data Science
Semester: 4th
Subject: Full Stack Development Lab

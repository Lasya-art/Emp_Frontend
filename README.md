# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Employee Management Application
Overview
Github Urls:
https://github.com/Lasya-art/Emp_Backend
https://github.com/Lasya-art/Emp_Frontend

Application URL:
Backend : http://localhost:5000
Frontend:    http://localhost:5173/employee

Ovreview:
This is a full-stack Employee Management Application built with React for the frontend and Node ,Express and Mango db for the backend. The application allows users to:
Features
* AddEmployee: Allows adding new employees to the system with details such as name, department and more.
* EmployeeTable: Displays a list of employees in a table format with options to view, update, or delete records.
* EmployeeManagementApp: The main application that integrates all functionalities, serving as the entry point for employee operations.
* Department: A section for managing and viewing different departments.
* Home: The landing page providing navigation options to access various functionalities of the app.
The backend is connected to a simple REST API for managing employee data, while the frontend provides a user interface for interacting with the data.
Tech Stack
Frontend:
* React.js for building the user interface
* Bootstrap and CSS for styling and responsive design
* React Router for navigation
* React Toastify for notifications
Backend:
* Node.js with Express.js for the server
* MongoDB (or your preferred database) for storing employee data

Features
* Employee Management: Add, update, and delete employee records.

* Employee Search: Search employees based on their name or other details.

* Pagination: Handles large datasets by paginating employee listings.

* Employee Details: View detailed information for each employee.



Project Structure
Frontend/
??? src/
?   ??? Components/
?   ?   ??? AddEmployee.jsx     # Add Employee Component
?   ?   ??? EmployeeTable.jsx   # Employee Table Component
?   ?   ??? Department.jsx      # Department Component
?   ?   ??? Home.jsx            # Home Page Component
?   ?
?   ??? App.jsx                 # Main App component
?   ??? appi.js                  # React entry file
?   ??? main.jsx                # ReactDOM render entry point
?   ??? index.css               # Global CSS
?   ??? utils.jsx               # Utility/helper functions
?
??? index.html                  # Main HTML file
Components Explanation
1. AddEmployee
o A form component to add a new employee to the system.
o Inputs include:
* Employee Name
* Department
* Role
* Date of Joining
* Salary
File: Components/AddEmployee.jsx
2. EmployeeTable
o Displays all employee details in a tabular format.
o Provides functionalities like:
* Viewing details
* Editing an employee record
* Deleting an employee
File: Components/EmployeeTable.jsx
3. Employee Management App
o The main application component combining Add Employee, Employee Table, and other functionalities.
o Acts as a centralized hub for managing employee records.
File: App.jsx
4. Department
o Users can view employees departments.
File: Components/Department.jsx
5. Home
o The landing page with navigation to various features:
* Add Employee
* View Employees
* Manage Departments
File: Components/Home.jsx






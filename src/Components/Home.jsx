// import React from 'react'
// import { useNavigate } from 'react-router-dom'; 

// function Home() {
//     const navigate = useNavigate();
  
//     return (
//       <div className="d-flex flex-column justify-content-center align-items-center w-100 p-5">
//         <h1>Welcome to the Home Page</h1>
//         <p>This is a simple home page for your application.</p>
  
//         {/* Navigate to Employee Management Page */}
//         <button
//           className="btn btn-primary mt-3"
//           onClick={() => navigate('/employee')}
//         >
//           Go to Employee Management
//         </button>
//       </div>
//     );
//   }
  
//   export default Home;

import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div className="d-flex flex-column vh-100">
      {/* Top Navigation */}
      <div className="d-flex justify-content-between align-items-center bg-dark text-white px-4 py-3">
        <h3>EMPLOYEE MANAGEMENT APP</h3>
        <div>
          <span>Lasya</span> &nbsp;
          <span className="text-warning">emp@admin.com</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="d-flex flex-row">
        {/* Sidebar */}
        <div className="bg-dark text-white vh-100 p-3" style={{ width: '200px' }}>
          <h5 className="pb-3">MAIN NAVIGATION</h5>
          <ul className="nav flex-column">
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white active">Dashboard</a>
            </li>
            <li className="nav-item mb-2">
              <a href="/department" className="nav-link text-white">Departments</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">Tasks</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">Evaluation</a>
            </li>
            <li className="nav-item mb-2">
              <a href="#" className="nav-link text-white">Employees</a>
            </li>
            <li className="nav-item">
                  <button
                    className="btn btn-link text-white text-decoration-none p-0"
                    onClick={() => navigate('/employee')}
                  >
                    Employee Management
                  </button>
                </li>


          </ul>
        </div>

        {/* Dashboard Cards */}
        <div className="container mt-4">
          <div className="row g-4">
            {[
              { title: 'TOTAL DEPARTMENTS', count: 11, color: 'primary' },
              { title: 'TOTAL DESIGNATIONS', count: 2, color: 'success' },
              { title: 'TOTAL USERS', count: 2, color: 'warning' },
              
            ].map((item, index) => (
              <div key={index} className="col-md-4">
                <div className={`card text-white bg-${item.color} h-100`}>
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <h1>{item.count}</h1>
                    <p className="card-text">{item.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-5 text-center">
            <img
              src={'https://sactsindia.com/img/employee-management-system-banner.jpg'} 
              alt="Employee Management System"
              className="img-fluid"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          {/* Navigation Button */}
          {/* <div className="text-center mt-5">
            <button
              className="btn btn-outline-primary"
              onClick={() => navigate('/employee')}
            >
              Go to Employee Management
            </button> */}
          </div>
        </div>
      </div>
    // </div>
  );
}

export default Home;

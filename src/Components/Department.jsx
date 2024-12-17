import React from 'react';
import { useNavigate } from 'react-router-dom';

function Departments() {
  const navigate = useNavigate();
  
  const departments = [
    "Business Analyst", "IT Support", "Customer Support", 
    "Administration", "Customer Associate", "Software Quality Assurance", "Finance",
    "Marketing", "Sales", "Operations",
    "Human Resource", 
    "Engineering", "Transportation"
  ];

  return (
    <div style={{ backgroundColor: '#000', color: '#fff', minHeight: '100vh', padding: '2rem' }}>
      {/* Home Button */}
      <div className="d-flex justify-content-start mb-3">
        <button
          className="btn btn-outline-light"
          onClick={() => navigate('/home')}
        >
          Home
        </button>
      </div>

      {/* Header */}
      <h2 className="text-center mb-4">Departments</h2>

      {/* Departments List */}
      <div className="container mt-4">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {departments.map((department, index) => (
            <div key={index} className="col">
              <div 
                className="card shadow-sm text-center p-3" 
                style={{ backgroundColor: '#333', color: '#fff', border: '1px solid #fff' }}
              >
                <div className="card-body">
                  <h5 className="card-title">{department}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Departments;

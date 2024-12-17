// 
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import EmployeeTable from './EmployeeTable';
import AddEmployee from './AddEmployee';
//import { GetAllEmployees } from '../appi';
import { ToastContainer } from 'react-toastify';
import { notify } from '../utils';
import { DeleteEmployeeById, GetAllEmployees } from '../appi';
import '../App.css';

function EmployeeManagementApp() {
  const [showModal, setShowModal] = useState(false);
 //const [employeeObj, setEmployeeObj] = useState(false)
  const[updateEmpObj,setUpdateEmpObj]=useState(null)
  const [employeesData, setEmployeesData] = useState({
    employees: [],
    pagination: {
      currentPage: 1,
      pageSize: 5,
      totalEmployees: 0,
      totalPages: 0,
    },
  });
  const navigate = useNavigate(); // For navigation
  const fetchEmployees = async (search = '', page = 1, limit = 5) => {
    console.log('Called fetchEmployees');
    try {
      const data = await GetAllEmployees(search, page, limit);
      console.log(data);
      setEmployeesData(data);
    } catch (err) {
      alert('Error', err);
    }
  };

  console.log('--enp--', employeesData);
  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleUpdateEmployee = (empObj) => {
  //  setEmployeeObj(emp);
  setUpdateEmpObj(empObj)  
  setShowModal(true);
   
    console.log('update',empObj)
}

const handleAddEmployee = () => {

setShowModal(true)

}

const handleDeleteEmployee = async (emp) =>{
try{
const {success,message }= await DeleteEmployeeById(emp._id)
fetchEmployees()
if(success){

  notify(message, 'success')
}
else{

  notify(message, 'error')
}


 }catch(err){
  console.log('error',err)
  notify(message,'error')
 }


}

const handleSearch = (e) => {
const term = e.target.value
fetchEmployees(term)

}


  return (
    // <div className='d-flex flex-column justify-content-center align-items-center w-100 p-3'>
    <div
      className="d-flex flex-column justify-content-center align-items-center"
      style={{
        width: '180%', 
        backgroundColor: '', 
        color:'red',
        borderRadius: '10px', 
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
        padding: '2rem', // Spacing inside the container
      }}
    >

      

 {/* Home Button */}
 <div className="w-100 d-flex justify-content-start mb-3">
        <button
          className="btn btn-secondary"
          onClick={() => navigate('/home')}
        >
          Home
        </button>
      </div>



      <h1>WELCOME</h1>
      <h2>To</h2>
      <h1>Employee Dashboard</h1>
      <div className='w-90 d-flex justify-content-center'>
        <div className='w-80 border bg-light p-3' style={{ width: '500%',Height: '800px' ,margin:'20px'}}>
          <div className='d-flex justify-content-between mb-7'>
          <button className='btn btn-primary'
                            onClick={() => handleAddEmployee()}>AddEmployee</button>
            <input
            onChange={handleSearch}
              type='text'
              placeholder='Search Employees...'
              className='form-control w-50'
            />
          </div>

          {/* Fix: Properly pass employees and pagination props to EmployeeTable */}
          <EmployeeTable
            employees={employeesData.employees} // Passing employees prop
            pagination={employeesData.pagination} // Passing pagination prop
            fetchEmployees={fetchEmployees}
            handleUpdateEmployee={handleUpdateEmployee}
            handleDeleteEmployee={handleDeleteEmployee}
          />

<AddEmployee
                        fetchEmployees={fetchEmployees}
                        showModal={showModal}
                        setShowModal={setShowModal}
                     // employeeObj={employeeObj}
                        updateEmpObj={updateEmpObj}
                       
                    />
        </div>

        
      </div>
      <ToastContainer
                position='top-right'
                autoClose={3000}
                hideProgressBar={false}
            />
    </div>
  );
}

export default EmployeeManagementApp;

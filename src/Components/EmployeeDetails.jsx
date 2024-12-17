import React, { useEffect , useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GetEmployeeById } from '../appi';
import { notify } from '../utils';

function EmployeeDetails() {

  const navigate = useNavigate();
  const { id } = useParams();
  const [employee, setEmployee] = useState({});
  console.log("name", id);

  const fetchEmpById = async () => {
    try {
     // const data = await GetEmployeeById(id);
      //setEmployee(data);
      const response = await GetEmployeeById(id);
if (response.success) {
  setEmployee(response.data); // Extract 'data' from the response
} else {
  notify('Failed to fetch Employee', 'error');
}


      console.log("Updated State:", employee);
    } catch (err) {
      notify('Failed to fetch Employee', 'error');
    }
  };

  useEffect(() => {
    fetchEmpById();
  }, [id]);

  return (
    // <div className="container mt-5">
    //         <div className="card">
    //             <div className="card-header">
    //                 <h2>Employee Details</h2>
    //             </div>
    // <div
    //         className="d-flex justify-content-center align-items-center"
    //         style={{
    //           width:"400px",
    //             height: "100px",
    //             backgroundColor: "black",
    //             color: "white",
    //         }}
    //     >
    //         <div className="card" style={{ width: "200%" }}>
    //             <div className="card-header text-center">
    //                 <h2>Employee Details</h2>
    //             </div>



    // /*update*
//     <div
//             className="d-flex justify-content-center align-items-center"
//             style={{
//                 height: "100vh", // Full viewport height
//                 backgroundColor: "black", // Background color
//                 color: "white", // Font color
//             }}
//         >
//             <div className="card" style={{ width: "50%" }}>
//                 <div className="card-header text-center">
//                     <h2>Employee Details</h2>
//                 </div>
//                 <div className="card-body">
//                     <div className="row mb-3">
//                         {/* <div className="col-md-3">
//                             <img
//                                 src={employee.profileImage}
//                                 alt={employee.name}
//                                 className="img-fluid rounded"
//                             />
//                         </div> */}
//                         <div className="col-md-9">
//                             <h4>{employee.name}</h4>
//                             <p><strong>Email:</strong> {employee.email}</p>
//                             <p><strong>Phone:</strong> {employee.phone}</p>
//                             <p><strong>Department:</strong> {employee.department}</p>
//                             <p><strong>Salary:</strong> {employee.salary}</p>
//                         </div>
//                     </div>
//                     <button className="btn btn-primary" onClick={() => navigate('/employee')}>
//                         Back
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };

<div
            className="d-flex justify-content-center align-items-center"
            style={{
              width:'600px',
                height: "300", 
                padding: "20px",
                margin: "200px",
                // margin-top: "10px",// Full height of the viewport
                backgroundColor: "black", // Background color
                color: "white", // Text color
            }}
        >
            <div className="card" style={{ width: "160%", padding: "20px",backgroundColor: "black",color: "white" }}>
                <div className="card-header text-center">
                    <h2>Employee Details</h2>
                </div>
                <div className="card-body text-center">
                    <h4>{employee.name}</h4>
                    <p>
                        <strong>Email:</strong> {employee.email}
                    </p>
                    <p>
                        <strong>Phone:</strong> {employee.phone}
                    </p>
                    <p>
                        <strong>Department:</strong> {employee.department}
                    </p>
                    <p>
                        <strong>Salary:</strong> {employee.salary}
                    </p>
                    <button
                        className="btn btn-primary mt-3"
                        onClick={() => navigate('/employee')}
                    >
                        Back
                    </button>
                </div>
            </div>
        </div>
    );
};


export default EmployeeDetails;





const BASE_URL = 'https://empbackend-x0q6.onrender.com';

export const GetAllEmployees = async (search = '', page = 1, limit = 5) => {
    const url =
        `${BASE_URL}/api/employees?search=${search}&page=${page}&limit=${limit}`;
    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const result = await fetch(url, options);
        const { data } = await result.json();

        return data;
    } catch (err) {
        return err;
    }
}
export const CreateEmployee = async (empObj) => {
    const url = `${BASE_URL}/api/employees`;
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(empObj),
    };
    try {
      const result = await fetch(url, options);
      const data = await result.json();
      return data;
    } catch (err) {
      console.error(err);
      return err;
    }
  };

//   export const UpdateEmployeeById = async (empObj, id) => {
//     const url = `${BASE_URL}/api/employees/${id}`;
//     console.log('url ', url);
//     // Create a FormData object
//     const formData = new FormData();

//     // Append all fields to the FormData object
//     for (const key in empObj) {
//         formData.append(key, empObj[key]);
//     }
//     // FormData handles the headers and content type
//     const options = {
//         method: 'PUT',
//         'Content-Type': 'application/json',
//         body: formData
//     };
//     try {
//         const result = await fetch(url, options);
//         const data = await result.json();
//         console.log('<---update--> ', data);
//         return data;
//     } catch (err) {
//         return err;
//     }
// };

export const UpdateEmployeeById = async (empObj, id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
    console.log('url ', url);

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json', // Correct for JSON
        },
        body: JSON.stringify(empObj), // Convert empObj to JSON string
    };

    try {
        const result = await fetch(url, options);
        const data = await result.json();
        console.log('<---update--> ', data);
        return data;
    } catch (err) {
        console.error('Error updating employee:', err);
        return { success: false, message: 'Failed to update employee.' };
    }
};



export const DeleteEmployeeById = async (id) => {
    const url = `${BASE_URL}/api/employees/${id}`;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    try {
        const result = await fetch(url, options);
        const data = await result.json();
        console.log(data);
        return data;
    } catch (err) {
        return err;
    }
};


export const GetEmployeeById = async (id) => {
  const url = `${BASE_URL}/api/employees/${id}`;
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  try {
    const result = await fetch(url, options);
    const data = await result.json();
    console.log(data);
    return data;
  } catch (err) {
    return err;
  }
};

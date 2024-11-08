
export const getUserDetails = async (id)=>{
  let response = await fetch(`https://reqres.in/api/users/${id}`);
  response.catch((error)=>{console.log('Error fetching data:', error)});
  console.log('Response:', response);
  console.log('Status:', response.status);
  console.log('OK?', response.ok);
  const userData=response.json();

  if(response){
    console.log('User Data is an', typeof(userData));
  } else {
    console.log('(null) user Data)', userData);
  }
  return userData;
}

export const login = async (email, password)=>{

  let body={
    email,
    password
  };
 
  let response = await fetch('https://reqres.in/api/login',{
    method: 'POST',
    mode: 'no-cors',
    credentials: 'omit',
    cache: 'no-cache',
    headers: {
      'Content-type': 'application/json'
    },
    body,
    
  });

  return response.json();
}
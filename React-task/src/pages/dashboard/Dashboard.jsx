import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Copyright from '../../components/pure/Copyright';
import { useNavigate } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import NavButtons from '../../hooks/navButtons';
import UsersExample from '../../components/pure/usersExample';
import AxiosExample from '../../components/pure/axiosExample';
//import MenuItems from '../../components/pure/MenuItems';

const Dashboard = () => {
    const navigate = useNavigate();
    const logOut= ()=>{
        console.log('login out...')
        localStorage.removeItem('credentials');
        navigate('/login');
}
    const [loading, setLoading] = useState(true);

    setTimeout(() => {
        setLoading(false);
    }, 1000);
 
const showDashboard=()=>{
 const dashboard= <div> 
 <h1>Dashboard</h1>
 <NavButtons></NavButtons>
 <Button variant="contained" onClick={()=>{navigate('/profile')}}>Go to Profile</Button>
 <Button variant="outlined" color='error' onClick={()=>{logOut()}}>Logout</Button>
 <AxiosExample></AxiosExample>
 {/*<MenuItems></MenuItems>*/}
 <Copyright></Copyright>
</div>
return dashboard;
}

return loading ? <CircularProgress size={40}/> : showDashboard();
}


export default Dashboard

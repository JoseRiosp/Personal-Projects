import React from 'react';

//Material MUI Components

import { Link } from '@mui/material';
import { Typography } from '@mui/material';


const Copyright = () => {
  return (
    <Typography variant='body2' color='GrayText' align='center'>
        {'Copyright (c)'}
        <Link color='inherit' href='https://imaginaformacion.com' >
        Imagina Formación</Link>
        { '' }
        {new Date().getFullYear()}
    </Typography>
  )
}

export default Copyright

import { Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom'; // If using React Router

const NotFoundPage = () => {
    return (
        <Box sx={{display: 'flex', flexDirection: 'column',  alignItems: 'center', pt: '10vh', width: '30vw', marginLeft: 'auto', marginRight: 'auto'}}>
            <h1>Oops! Page Not Found</h1>
            <img src="your_image_url_here.jpg" alt="Lost in the Digital Wilderness" />


            <div className="button-container">
                <Button
              fullWidth
              variant="contained"
              href='/'
              sx={{
                mt: 3,
                mb: 2,
                backgroundColor: 'secondary.main',
                color: 'primary.main',
                '&:hover': { color: 'white' },
              }}
            >
              Go back to home
             </Button>
            </div>
        </Box>
    );
};

export default NotFoundPage;

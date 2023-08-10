import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const Home = () => {
    return (
        <Box sx={{ margin: 0 }}>
            <Box
                color="white"
                sx={{
                    margin: 0,
                    padding: '1rem',
                    maxWidth: '100vw',
                    height: '92vh',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundImage: `url('./images/bghome-min.jpg')`,
                    '@media (min-width: 768px)': {
                        backgroundImage: `url('./images/bghome-min.jpg')`
                    },
                    '@media (min-width: 1440px)': {
                        backgroundImage: `url('./images/bghome-min.jpg')`
                    }
                }}
            >
                <Box
                    backgroundColor="transparent.main"
                    color="white"
                    sx={{ p: '1rem', mt: '5vh', mx: '5vw' }}
                >
                    <Typography variant="h4" component="h1" gutterBottom>
                        Introducing Our Automatic Plant Watering Webpage/App
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Welcome to our innovative webpage/app designed to make plant care a breeze! We
                        understand the importance of providing the right amount of water to your plants,
                        which is why we've developed a convenient and efficient solution for automatic
                        plant watering.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        With our webpage/app, you can create a customized flowerpot and PCB (Printed
                        Circuit Board) specifically tailored for your plant's watering needs. Simply click
                        on the
                        <Button
                            type="submit"
                            variant="contained"
                            sx={{
                                mt: 3,
                                mb: 2,
                                backgroundColor: 'secondary.main',
                                color: 'primary.main',
                                '&:hover': {
                                    color: 'white'
                                }
                            }}
                        >
                            Read more
                        </Button>
                        button to access detailed information on how to create your own flowerpot and PCB.
                        We provide step-by-step instructions and helpful tips to guide you through the process.
                    </Typography>
                    {/* Rest of the content... */}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '40vw',
                        mx: 'auto',
                        mt: '5vh'
                    }}
                >
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: 'secondary.main',
                            color: 'primary.main',
                            '&:hover': {
                                color: 'white'
                            }
                        }}
                    >
                        Sign In
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            mt: 3,
                            mb: 2,
                            backgroundColor: 'secondary.main',
                            color: 'primary.main',
                            '&:hover': {
                                color: 'white'
                            }
                        }}
                    >
                        Read more
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;

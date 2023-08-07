import React from 'react';
import { Box, Button } from '@mui/material';

const ReadMore = () => {
    return (
        <Box
            sx={{
                margin: 0,
                padding: '1rem',
                maxWidth: '100vw',
                height: '92vh',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundImage: `url('./images/pcb.jpg')`
            }}
        >
            <Box
                backgroundColor={'transparent.main'}
                color={'white'}
                sx={{
                    p: '1rem',
                    mt: '5vh',
                    mx: '5vw'
                }}
            >
                <h1>PCB</h1>
                <p>
                    Welcome to our electronics project! Here, you can find the design files and
                    instructions for our PCB (Printed Circuit Board). To access these files, please
                    visit our GitHub page by clicking the button below.
                </p>
                <p>
                    The GitHub repository contains detailed instructions on how to set up and use
                    the PCB, as well as the necessary files for manufacturing or modifying it.
                </p>
                <Button
                    variant="contained"
                    href="https://github.com/camivand4/PCB-planter"
                    target="_blank"
                    rel="noopener"
                    sx={{
                        backgroundColor: 'secondary.main',
                        color: 'primary.main',
                        '&:hover': { color: 'white' },
                        mr: '1rem',
                    }}
                >
                    Access PCB Files and Instructions
                </Button>
            </Box>
            <Box
                backgroundColor={'transparent.main'}
                color={'white'}
                sx={{
                    p: '1rem',
                    mt: '5vh',
                    mx: '5vw'
                }}
            >
                <h1>Plant Pot</h1>
                <p>
                    Welcome to our gardening project! Here, you can find the 3D files for our plant pot and printable instructions to make your own. To access these files, please visit the link below.
                </p>
                <p>
                    The website contains the 3D model files for the pot in various formats, and you can easily download and 3D print them to create your own plant pot.
                </p>
                <Button
                    variant="contained"
                    href="https://www.printables.com/"
                    target="_blank"
                    rel="noopener"
                    sx={{
                        backgroundColor: 'secondary.main',
                        color: 'primary.main',
                        '&:hover': { color: 'white' }
                    }}
                >
                    Plant Pot 3D Files and Printables
                </Button>
            </Box>
        </Box>
    );
};

export default ReadMore;

import React from 'react';
import {Box, Button} from '@mui/material';

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
        }}>
            <Box
                backgroundColor={'transparent.main'}
                color={'white'}
                sx={{
                p: '1rem',
                mt: '5vh',
                mx: '5vw'
            }}>
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
                    '&:hover': {
                        color: 'white'
                    },
                    mr: '1rem'
                }}>
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
            }}>
                <h1>Plant Pot</h1>
                <p>
                    Welcome to our gardening project! Here, you can find the 3D files for our plant
                    pot and printable instructions to make your own. To access these files, please
                    visit the link below.
                </p>
                <p>
                    The website contains the 3D model files for the pot in various formats, and you
                    can easily download and 3D print them to create your own plant pot.
                </p>
                <Button
                    variant="contained"
                    href="https://www.printables.com/model/552924-automatic-planter/"
                    target="_blank"
                    rel="noopener"
                    sx={{
                    backgroundColor: 'secondary.main',
                    color: 'primary.main',
                    '&:hover': {
                        color: 'white'
                    }
                }}>
                    Plant Pot 3D Files and Printables
                </Button>
            </Box>

            <Box
                backgroundColor={'transparent.main'}
                color={'white'}
                sx={{
                p: '1rem',
                mt: '5vh',
                mx: '5vw'
            }}>
                <h1>NodeMcu ESP-32S Lua ESP-WROOM-32 WIFI Development Board</h1>
                <p>
                    Introducing the NodeMcu ESP-32S Lua ESP-WROOM-32 WIFI Development Board, a
                    versatile and powerful platform for IoT (Internet of Things) projects. This
                    development board is built around the ESP-WROOM-32 module, which combines Wi-Fi
                    and Bluetooth capabilities with a dual-core processor, making it perfect for
                    creating smart and connected devices.
                </p>
                <p>
                    With the NodeMcu ESP-32S, you can build applications ranging from home
                    automation and sensor monitoring to remote control and data visualization. Its
                    compatibility with the Arduino ecosystem and support for the Lua scripting
                    language provide flexibility in programming and project implementation.
                </p>
                <p>
                    To get started with the NodeMcu ESP-32S, check out our detailed tutorial and
                    code examples on our GitHub repository. Whether you're a beginner or an
                    experienced developer, you'll find the resources you need to harness the
                    capabilities of this development board.
                </p>
                <Button
                    variant="contained"
                    href="https://github.com/camivand4/arduinoBotanix"
                    target="_blank"
                    rel="noopener"
                    sx={{
                    backgroundColor: 'secondary.main',
                    color: 'primary.main',
                    '&:hover': {
                        color: 'white'
                    }
                }}>
                    Explore the Tutorial and Code Examples
                </Button>
            </Box>
        </Box>
    );
};

export default ReadMore;

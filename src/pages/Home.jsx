import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

export const Home = () => {
    return (
        <Box sx={{
            margin: 0
        }}>
            <Box
                color={'white'}
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
            }}>
                <Box
                    backgroundColor={'transparent.main'}
                    color={'white'}
                    sx={{
                    p: '1rem',
                    mt: '5vh',
                    mx: '5vw'
                }}>
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
                        Circuit Board) specifically tailored for your plant's watering needs. Simply
                        click on the "                    <Button
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
                    }}>
                        Read more
                    </Button>"
button to access detailed information on how to create your own flowerpot and
PCB. We provide step-by-step instructions and helpful tips to guide you through
the process.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        If you already have a flowerpot and PCB, you can easily log in to our platform
                        to access a range of features and functionalities. Logging in allows you to set
                        up automated watering schedules, monitor your plants' hydration levels, and
                        adjust watering parameters based on specific plant requirements.
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Key Features of Our Webpage/App:
                    </Typography>
                    <ol>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                Automated Watering Schedules: Say goodbye to manual watering! Our platform
                                enables you to create personalized watering schedules for your plants. Set the
                                desired frequency and duration of watering, and let our system take care of the
                                rest.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                Hydration Monitoring: Stay informed about your plants' hydration levels at all
                                times. Our webpage/app provides real-time data on soil moisture levels, ensuring
                                your plants receive the optimal amount of water.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                Customizable Watering Parameters: Different plants have different watering
                                needs. With our platform, you can customize watering parameters such as water
                                flow rate, duration, and intervals to meet the specific requirements of each
                                plant in your collection.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                Notifications and Alerts: Never miss a watering session again! Our webpage/app
                                sends timely notifications and alerts to remind you when it's time to water your
                                plants or if any adjustments are needed.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                Plant Database and Care Guides: Access our comprehensive plant database and care
                                guides to enhance your gardening knowledge. Learn about the specific watering
                                needs, sunlight requirements, and other essential care instructions for various
                                plant species.
                            </Typography>
                        </li>
                        <li>
                            <Typography variant="body1" gutterBottom>
                                Community and Support: Join a community of like-minded plant enthusiasts, share
                                your experiences, and seek advice from fellow users. Our platform fosters a
                                supportive environment where you can connect with others who share your passion
                                for gardening.
                            </Typography>
                        </li>
                    </ol>
                    <Typography variant="body1" gutterBottom>
                        Experience the convenience and efficiency of automatic plant watering with our
                        user-friendly webpage/app. Start your journey towards healthier, thriving plants
                        today!
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Remember, if you're new to our platform and want to create a flowerpot and PCB,
                        click on "Read More." If you already have these components, proceed directly to
                        the login section and let our webpage/app simplify your plant care routine.
                        Happy gardening!
                    </Typography>
                </Box>
                <Box
                    sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '40vw',
                    mx: 'auto',
                    mt: '5vh'
                }}>
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
                    }}>
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
                    }}>
                        Read more
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};
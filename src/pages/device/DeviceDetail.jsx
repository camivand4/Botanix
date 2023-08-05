import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import {
    Typography,
    Button,
    Paper,
    Box,
    Slider,
    TextField
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ScheduleIcon from '@mui/icons-material/Schedule';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import InfoIcon from '@mui/icons-material/Info';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DeviceDetail = () => {
    const {id} = useParams();

    const initialDevice = {
        id: 1,
        name: 'Device 1',
        frequency: 'Daily',
        plantName: 'Plant A',
        humidity: 3,
        wateringTime: '08:00 AM',
        extraInfo1: 'Extra Info 1',
        extraInfo2: 'Extra Info 2'
    };

    const marks = [
        {
            value: 1,
            label: 'Low'
        }, {
            value: 2,
            label: 'Medium'
        }, {
            value: 3,
            label: 'High'
        }, {
            value: 4,
            label: 'Custom 1'
        }, {
            value: 5,
            label: 'Custom 2'
        }
    ];

    const [device,
        setDevice] = useState(initialDevice);
    const [isEditMode,
        setIsEditMode] = useState(false);
    const [humidityEditValue,
        setHumidityEditValue] = useState(initialDevice.humidity);

    const handleEdit = () => {
        setIsEditMode(true);
    };

    const handleSave = () => {
        setIsEditMode(false);
        // Add logic here to save the changes to the server or update the state,
        // depending on your implementation. For simplicity, we'll just update the local
        // state directly in this example.
        setDevice((prevDevice) => ({
            ...prevDevice,
            humidity: humidityEditValue, // Update the actual humidity value when saving changes
        }));
    };

    const handleChange = (event) => {
        const {name, value} = event.target;
        setDevice((prevDevice) => ({
            ...prevDevice,
            [name]: value
        }));

        if (name === 'humidity') {
            setHumidityEditValue(value);
        }
    };

    const handleBack = () => {
        // You can implement custom logic to handle navigation when going back. For
        // simplicity, we'll just use window.history.back() here.
        window
            .history
            .back();
    };

    return (
        <Box
            sx={{
            px: '1rem',
            mt: '5vh',
            display: 'flex',
            flexDirection: 'column'
        }}>
            <Box
                sx={{
                display: 'flex',
                alignItems: 'center',
                mb: '1rem'
            }}>
                <Typography
                    variant="h4"
                    sx={{
                    textAlign: 'left',
                    flex: 1
                }}>
                    Device Detail
                </Typography>
                <Button
                    variant="outlined"
                    onClick={handleBack}
                    sx={{
                    ml: '1rem'
                }}>
                    <ArrowBackIcon/>
                </Button>
            </Box>
            <Paper
                sx={{
                p: '1rem',
                width: '50%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'left',
                mx: 'auto'
            }}>
                {/* Paper Part 1: Edit and Delete Buttons */}
                <Box
                    sx={{
                    display: 'flex',
                    width: '100%',
                    gap: '1rem',
                    justifyContent: 'flex-end'
                }}>
                    {!isEditMode && (
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={< EditIcon />}
                            onClick={handleEdit}>
                            Edit
                        </Button>
                    )}
                    {isEditMode && (
                        <Button
                            variant="outlined"
                            color="primary"
                            startIcon={< EditIcon />}
                            onClick={handleSave}>
                            Save
                        </Button>
                    )}
                    <Button variant="outlined" color="secondary" startIcon={< DeleteIcon />}>
                        Delete
                    </Button>
                </Box>

                {/* Paper Part 2: Device Data */}
                <Box
                    sx={{
                    p: '1rem',
                    mt: '1rem',
                    width: '100%'
                }}>
                    <Typography
                        variant="h6"
                        sx={{
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        Plant Name:{' '} {isEditMode
                            ? (<TextField
                                name="plantName"
                                value={device.plantName}
                                onChange={handleChange}
                                sx={{
                                ml: '1rem',
                                minWidth: '20vw'
                            }}/>)
                            : (device.plantName)}
                    </Typography>
                    <Typography
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        ml: '1rem',
                        mt: '1rem'
                    }}>
                        <ScheduleIcon
                            sx={{
                            mr: 1
                        }}/>
                        Frequency:{' '} {isEditMode
                            ? (<TextField
                                name="frequency"
                                value={device.frequency}
                                onChange={handleChange}
                                sx={{
                                ml: '1rem',
                                minWidth: '20vw'
                            }}/>)
                            : (device.frequency)}
                    </Typography>
                    <Typography
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        ml: '1rem'
                    }}>
                        <WaterDropIcon
                            sx={{
                            mr: 1
                        }}/>
                        Humidity: {isEditMode
                            ? (<Slider
                                name="humidity"
                                value={humidityEditValue}
                                marks={marks}
                                valueLabelDisplay="auto"
                                step={1}
                                min={1}
                                max={5}
                                onChange={(e, value) => setHumidityEditValue(value)}
                                sx={{
                                ml: '1rem',
                                minWidth: '15vw',
                                maxWidth: '25vw'
                            }}/>)
                            : (<Slider name="humidity" value={device.humidity} marks={marks} valueLabelDisplay="auto" step={1} min={1} max={5} disabled // Disable the slider during view mode
    sx={{
                                ml: '1rem',
                                minWidth: '15vw',
                                maxWidth: '25vw'
                            }}/>)}
                    </Typography>
                    <Typography
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        ml: '1rem',
                        mt: '1rem'
                    }}>
                        <ScheduleIcon
                            sx={{
                            mr: 1
                        }}/>
                        Watering Time:{' '} {isEditMode
                            ? (<TextField
                                name="wateringTime"
                                value={device.wateringTime}
                                onChange={handleChange}
                                sx={{
                                ml: '1rem',
                                minWidth: '20vw'
                            }}/>)
                            : (device.wateringTime)}
                    </Typography>
                    <Typography
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        ml: '1rem',
                        mt: '1rem'
                    }}>
                        <InfoIcon sx={{
                            mr: 1
                        }}/>
                        Extra Info 1:{' '} {isEditMode
                            ? (<TextField
                                name="extraInfo1"
                                value={device.extraInfo1}
                                onChange={handleChange}
                                sx={{
                                ml: '1rem',
                                minWidth: '20vw'
                            }}/>)
                            : (device.extraInfo1)}
                    </Typography>
                    <Typography
                        sx={{
                        display: 'flex',
                        alignItems: 'center',
                        ml: '1rem',
                        mt: '1rem'
                    }}>
                        <InfoIcon sx={{
                            mr: 1
                        }}/>
                        Extra Info 2:{' '} {isEditMode
                            ? (<TextField
                                name="extraInfo2"
                                value={device.extraInfo2}
                                onChange={handleChange}
                                sx={{
                                ml: '1rem',
                                minWidth: '20vw'
                            }}/>)
                            : (device.extraInfo2)}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default DeviceDetail;

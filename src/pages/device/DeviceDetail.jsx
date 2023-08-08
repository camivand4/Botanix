import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Typography,
    Button,
    Paper,
    Box,
    Slider,
    TextField,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ScheduleIcon from '@mui/icons-material/Schedule';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const DeviceDetail = () => {
    const { id } = useParams();

    const [device, setDevice] = useState(null);
    const [isEditMode, setIsEditMode] = useState(false);
    const [humidityEditValue, setHumidityEditValue] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const deviceData = await getDeviceData(id);
                setDevice(deviceData);
                setHumidityEditValue(deviceData.humidity);
            } catch (error) {
                console.error('Error fetching device:', error);
            }
        };

        fetchData();
    }, [id]);

    const handleEdit = () => {
        setIsEditMode(true);
    };

    const handleSave = async () => {
        setIsEditMode(false);
        try {
            const updatedDevice = {
                ...device,
                humidity: humidityEditValue,
            };
    
            const updatedDeviceData = await updateDeviceData(id, updatedDevice);
    
            setDevice(updatedDeviceData);
            console.log(`Device with ID ${id} updated successfully.`);
            
            // Refresh the page after saving
            window.location.reload();
        } catch (error) {
            console.error('Error updating device:', error);
        }
    };
    

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setDevice((prevDevice) => ({
            ...prevDevice,
            [name]: value,
        }));
    };

    const handleBack = () => {
        window.history.back();
    };

    if (!device) {
        return <Typography>Loading...</Typography>;
    }

    const marks = [
        { value: 1, label: 'Low' },
        { value: 2, label: 'Medium' },
        { value: 3, label: 'High' },
    ];

    const humiditySlider = (
        <Slider
            name="humidity"
            value={isEditMode ? humidityEditValue : device.humidity}
            marks={marks}
            valueLabelDisplay="auto"
            step={1}
            min={1}
            max={5}
            onChange={(e, value) => setHumidityEditValue(value)}
            sx={{ ml: '1rem', minWidth: '15vw', maxWidth: '25vw' }}
        />
    );

    return (
        <Box sx={{ px: '1rem', mt: '5vh', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: '1rem' }}>
                <Typography variant="h4" sx={{ textAlign: 'left', flex: 1 }}>
                    Device Detail
                </Typography>
                <Button variant="outlined" onClick={handleBack} sx={{ ml: '1rem' }}>
                    <ArrowBackIcon />
                </Button>
            </Box>
            <Paper sx={{ p: '1rem', width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'left', mx: 'auto' }}>
                <Box sx={{ display: 'flex', width: '100%', gap: '1rem', justifyContent: 'flex-end' }}>
                    <Button variant="outlined" disabled>
                        Device ID: {device.id}
                    </Button>
                    {isEditMode ? (
                        <>
                            <Button variant="outlined" color="primary" startIcon={<EditIcon />} onClick={handleSave}>
                                Save
                            </Button>
                        </>
                    ) : (
                        <>
                            <Button variant="outlined" color="primary" startIcon={<EditIcon />} onClick={handleEdit}>
                                Edit
                            </Button>
                            <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </>
                    )}
                </Box>

                <Box sx={{ p: '1rem', mt: '1rem', width: '100%' }}>
                    <Typography component="div" variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                        Device Name:{' '}
                        {isEditMode ? (
                            <TextField
                                name="name"
                                value={device.name}
                                onChange={handleChange}
                                sx={{ ml: '1rem', minWidth: '20vw', mb: '1rem' }}
                            />
                        ) : (
                            device.name
                        )}
                    </Typography>

                    <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
                        Plant Name:{' '}
                        {isEditMode ? (
                            <TextField
                                name="plantName"
                                value={device.plantName}
                                onChange={handleChange}
                                sx={{ ml: '1rem', minWidth: '20vw' }}
                            />
                        ) : (
                            device.plantName
                        )}
                    </Typography>

                    <Typography sx={{ display: 'flex', alignItems: 'center', ml: '1rem', mt: '1rem' }}>
                        <ScheduleIcon sx={{ mr: 1 }} />
                        Frequency:{' '}
                        {isEditMode ? (
                            <TextField
                                name="frequency"
                                value={device.frequency}
                                onChange={handleChange}
                                sx={{ ml: '1rem', minWidth: '20vw' }}
                            />
                        ) : (
                            device.frequency
                        )}
                    </Typography>

                    <Typography sx={{ display: 'flex', alignItems: 'center', ml: '1rem' }}>
                        <WaterDropIcon sx={{ mr: 1 }} />
                        Humidity: {isEditMode ? humiditySlider : humiditySlider}
                    </Typography>

                    <Typography sx={{ display: 'flex', alignItems: 'center', ml: '1rem', mt: '1rem' }}>
                        <ScheduleIcon sx={{ mr: 1 }} />
                        Watering Time:{' '}
                        {isEditMode ? (
                            <TextField
                                name="wateringTime"
                                value={device.wateringTime}
                                onChange={handleChange}
                                sx={{ ml: '1rem', minWidth: '20vw' }}
                            />
                        ) : (
                            device.wateringTime
                        )}
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default DeviceDetail;

async function getDeviceData(id) {
    const response = await fetch(`http://localhost:3000/devices/${id}`);
    if (response.ok) {
        const deviceData = await response.json();
        return deviceData;
    } else {
        throw new Error(`Error fetching device with ID ${id}.`);
    }
}

async function updateDeviceData(id, updatedDevice) {
    const response = await fetch(`http://localhost:3000/devices/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedDevice),
    });

    if (response.ok) {
        const updatedDeviceData = await response.json();
        return updatedDeviceData;
    } else {
        throw new Error(`Error updating device with ID ${id}.`);
    }
}

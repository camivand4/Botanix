import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
    Typography,
    Button,
    Paper,
    Box,
    Slider,
    TextField,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
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
            <Paper sx={{ p: '1rem', display: 'flex', flexDirection: 'column', alignItems: 'left', mx: 'auto' }}>
                <Box sx={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end', mb: '1rem' }}>
                    {isEditMode ? (
                        <Button variant="outlined" color="primary" startIcon={<EditIcon />} onClick={handleSave}>
                            Save
                        </Button>
                    ) : (
                        <>
                            <Button variant="outlined" disabled color="primary">
                                ID: {device.id}
                            </Button>
                            <Button variant="outlined" color="primary" startIcon={<EditIcon />} onClick={handleEdit}>
                                Edit
                            </Button>
                            <Button variant="outlined" color="secondary" startIcon={<DeleteIcon />}>
                                Delete
                            </Button>
                        </>
                    )}
                </Box>

                <Box sx={{ p: '1rem', width: '95%' }}>
                    <TextField
                        name="name"
                        label="Device Name"
                        value={device.name}
                        onChange={handleChange}
                        sx={{ mb: '1rem', width: '100%' }}
                        disabled={!isEditMode}
                    />
                    <TextField
                        name="plantName"
                        label="Plant Name"
                        value={device.plantName}
                        onChange={handleChange}
                        sx={{ mb: '1rem', width: '100%' }}
                        disabled={!isEditMode}
                    />
                    <TextField
                        name="litersPerHour"
                        type="number"
                        label="Pump L/H"
                        value={device.litersPerHour}
                        onChange={handleChange}
                        sx={{ mb: '1rem', width: '100%' }}
                        disabled={!isEditMode}
                    />
                    <FormControl sx={{ mb: '1rem', width: '100%' }}>
                        <InputLabel>Mode</InputLabel>
                        <Select
                            name="mode"
                            value={device.mode}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        >
                            <MenuItem value="humidity">Humidity</MenuItem>
                            <MenuItem value="time">Time</MenuItem>
                        </Select>
                    </FormControl>
                    {device.mode === 'humidity' ? (
                        <>
                            <TextField
                                name="dryDays"
                                type="number"
                                label="Dry Days"
                                value={device.dryDays}
                                onChange={handleChange}
                                sx={{ mb: '1rem', width: '100%' }}
                                disabled={!isEditMode}
                            />
                            <TextField
                                name="amountOfWater"
                                type="number"
                                label="Amount of Water"
                                value={device.amountOfWater}
                                onChange={handleChange}
                                sx={{ mb: '1rem', width: '100%' }}
                                disabled={!isEditMode}
                            />
                        </>
                    ) : (
                        <>
                            <TextField
                                name="daysWithNoWater"
                                type="number"
                                label="Days with No Water"
                                value={device.daysWithNoWater}
                                onChange={handleChange}
                                sx={{ mb: '1rem', width: '100%' }}
                                disabled={!isEditMode}
                            />
                            <TextField
                                name="amountOfWater"
                                type="number"
                                label="Amount of Water"
                                value={device.amountOfWater}
                                onChange={handleChange}
                                sx={{ mb: '1rem', width: '100%' }}
                                disabled={!isEditMode}
                            />
                        </>
                    )}
                </Box>
            </Paper>
        </Box>
    );
};

export default DeviceDetail;

async function getDeviceData(id) {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/${id}`);
    if (response.ok) {
        const deviceData = await response.json();
        return deviceData;
    } else {
        throw new Error(`Error fetching device with ID ${id}.`);
    }
}

async function updateDeviceData(id, updatedDevice) {
    const response = await fetch(`${import.meta.env.VITE_REACT_APP_API}/${id}`, {
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

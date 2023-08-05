import React, { useState } from 'react';
import { Typography, Button, Paper, Box, Slider, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const NewDevice = () => {
  const initialDevice = {
    name: '',
    frequency: 'Daily',
    plantName: '',
    humidity: 1,
    wateringTime: '08:00 AM',
    extraInfo1: '',
    extraInfo2: '',
  };

  const marks = [
    { value: 1, label: 'Low' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'High' },
    { value: 4, label: 'Custom 1' },
    { value: 5, label: 'Custom 2' },
  ];

  const [device, setDevice] = useState(initialDevice);
  const [isEditMode, setIsEditMode] = useState(true); // Start with edit mode enabled for a new device

  const handleSave = () => {
    setIsEditMode(false);
    // Add logic here to save the new device to the server or update the state,
    // depending on your implementation. For simplicity, we'll just reset the form
    // here.
    setDevice(initialDevice);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDevice((prevDevice) => ({
      ...prevDevice,
      [name]: value,
    }));
  };

  const handleBack = () => {
    // You can implement custom logic to handle navigation when going back. For
    // simplicity, we'll just use window.history.back() here.
    window.history.back();
  };

  return (
    <Box
      sx={{
        px: '1rem',
        mt: '5vh',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mb: '1rem',
        }}
      >
        <Typography variant="h4" sx={{ textAlign: 'left', flex: 1 }}>
          New Device
        </Typography>
        <Button variant="outlined" onClick={handleBack} sx={{ ml: '1rem' }}>
          <ArrowBackIcon />
        </Button>
      </Box>
      <Paper
        sx={{
          p: '1rem',
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'left',
          mx: 'auto',
        }}
      >
        {/* Paper Part 1: Save Button */}
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
          {isEditMode && (
            <Button variant="outlined" color="primary" onClick={handleSave}>
              Save
            </Button>
          )}
        </Box>

        {/* Paper Part 2: Device Data */}
        <Box sx={{ p: '1rem', mt: '1rem', width: '100%' }}>
          <Typography component="div" variant="h6" sx={{ display: 'flex', alignItems: 'center' }}>
            Plant Name:{' '}
            {isEditMode ? (
              <TextField
                name="plantName"
                value={device.plantName}
                onChange={handleChange}
                sx={{
                  ml: '1rem',
                  minWidth: '20vw',
                }}
              />
            ) : (
              device.plantName
            )}
          </Typography>
          <Typography
            component="div"
            sx={{ display: 'flex', alignItems: 'center', ml: '1rem', mt: '1rem' }}
          >
            Frequency:{' '}
            {isEditMode ? (
              <TextField
                name="frequency"
                value={device.frequency}
                onChange={handleChange}
                sx={{
                  ml: '1rem',
                  minWidth: '20vw',
                }}
              />
            ) : (
              device.frequency
            )}
          </Typography>
          <Typography
            component="div"
            sx={{ display: 'flex', alignItems: 'center', ml: '1rem', mt: '1rem' }}
          >
            Humidity:{' '}
            {isEditMode ? (
              <Slider
                name="humidity"
                value={device.humidity}
                marks={marks}
                valueLabelDisplay="auto"
                step={1}
                min={1}
                max={5}
                onChange={(e, value) => setDevice((prevDevice) => ({ ...prevDevice, humidity: value }))}
                sx={{
                  ml: '1rem',
                  minWidth: '15vw',
                  maxWidth: '25vw',
                }}
              />
            ) : (
              <Slider
                name="humidity"
                value={device.humidity}
                marks={marks}
                valueLabelDisplay="auto"
                step={1}
                min={1}
                max={5}
                disabled // Disable the slider during view mode
                sx={{
                  ml: '1rem',
                  minWidth: '15vw',
                  maxWidth: '25vw',
                }}
              />
            )}
          </Typography>
          <Typography
            component="div"
            sx={{ display: 'flex', alignItems: 'center', ml: '1rem', mt: '1rem' }}
          >
            Watering Time:{' '}
            {isEditMode ? (
              <TextField
                name="wateringTime"
                value={device.wateringTime}
                onChange={handleChange}
                sx={{
                  ml: '1rem',
                  minWidth: '20vw',
                }}
              />
            ) : (
              device.wateringTime
            )}
          </Typography>
          <Typography
            component="div"
            sx={{ display: 'flex', alignItems: 'center', ml: '1rem', mt: '1rem' }}
          >
            Extra Info 1:{' '}
            {isEditMode ? (
              <TextField
                name="extraInfo1"
                value={device.extraInfo1}
                onChange={handleChange}
                sx={{
                  ml: '1rem',
                  minWidth: '20vw',
                }}
              />
            ) : (
              device.extraInfo1
            )}
          </Typography>
          <Typography
            component="div"
            sx={{ display: 'flex', alignItems: 'center', ml: '1rem', mt: '1rem' }}
          >
            Extra Info 2:{' '}
            {isEditMode ? (
              <TextField
                name="extraInfo2"
                value={device.extraInfo2}
                onChange={handleChange}
                sx={{
                  ml: '1rem',
                  minWidth: '20vw',
                }}
              />
            ) : (
              device.extraInfo2
            )}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

import React, { useState, useEffect } from 'react';
import { Typography, Button, Paper, Box, Slider, TextField } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { v4 as uuid } from 'uuid';
import { auth } from "../../firebase.js";
import { onAuthStateChanged } from 'firebase/auth';

export const NewDevice = () => {
  const [authUser, setAuthUser] = useState(null);
  const [device, setDevice] = useState(null);
  const [isEditMode, setIsEditMode] = useState(true);

  const marks = [
    { value: 1, label: 'Low' },
    { value: 2, label: 'Medium' },
    { value: 3, label: 'High' },
    { value: 4, label: 'Custom 1' },
    { value: 5, label: 'Custom 2' },
  ];

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);

        const initialDevice = {
          id: uuid().slice(0, 8),
          userId: user.uid,
          name: '',
          frequency: 'Daily',
          plantName: '',
          humidity: 1,
          wateringTime: '08:00 AM',
        };

        setDevice(initialDevice);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const handleSave = async () => {
    try {
      const response = await fetch(import.meta.env.VITE_REACT_APP_API, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(device),
      });

      if (response.ok) {
        // Device creation was successful
        console.log('Device created successfully.');
        setIsEditMode(false);
        setDevice(initialDevice);
      } else {
        console.log('Error creating device.');
      }
    } catch (error) {
      console.error('Error creating device:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setDevice((prevDevice) => ({
      ...prevDevice,
      [name]: value,
    }));
  };

  const handleBack = () => {
    window.history.back();
  };

  // Don't attempt to render if device is not initialized yet
  if (!device) {
    return null;
  }

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
        <Box sx={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
          {isEditMode && (
            <Button variant="outlined" color="primary" onClick={handleSave}>
              Save
            </Button>
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
                sx={{
                  ml: '1rem',
                  minWidth: '20vw',
                  mb: '1rem'
                }}
              />
            ) : (
              device.name
            )}
          </Typography>
          
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
              device.name
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
                disabled
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
        </Box>
      </Paper>
    </Box>
  );
};

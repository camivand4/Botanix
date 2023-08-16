import React, { useState, useEffect } from 'react';
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
  Grid,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { v4 as uuid } from 'uuid';
import { auth } from '../../firebase.js';
import { onAuthStateChanged } from 'firebase/auth';

export const NewDevice = () => {
  const [authUser, setAuthUser] = useState(null);
  const [device, setDevice] = useState(null);
  const [isEditMode, setIsEditMode] = useState(true);


  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);

        const initialDevice = {
          id: uuid().slice(0, 8),
          userId: user.uid,
          name: '',
          plantName: '',
          litersPerHour: 1,
          mode: 'humidity',
          dryDays: 1,
          amountOfWater: 1,
          daysWithNoWater: 1,
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
        // setDevice(initialDevice);
        window.location.href = '/devices/';
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          mx: 'auto',
        }}
      >
        <Box sx={{ width: '100%', justifyContent: 'flex-end' }}>
          {isEditMode && (
            <Button variant="outlined" color="primary" onClick={handleSave}>
              Save
            </Button>
          )}
        </Box>
        <Box sx={{ p: '1rem', width: '100%', textAlign: 'left' }}>
          <TextField
            name="name"
            label="Device Name"
            value={device.name}
            onChange={handleChange}
            sx={{ mb: '1rem', width: '100%' }}
          />
          <TextField
            name="plantName"
            label="Plant Name"
            value={device.plantName}
            onChange={handleChange}
            sx={{ mb: '1rem', width: '100%' }}
          />
          <TextField
            name="litersPerHour"
            label="Pump L/H"
            type="number"
            value={device.litersPerHour}
            onChange={handleChange}
            InputProps={{
              endAdornment: (
                <Typography variant="body2" color="textSecondary" component="span">
                  L/H
                </Typography>
              ),
            }}
            sx={{ mb: '1rem', width: '100%' }}
          />
          <FormControl sx={{ width: '100%', mb: '1rem' }}>
            <InputLabel>Mode</InputLabel>
            <Select
              name="mode"
              value={device.mode}
              onChange={handleChange}
            >
              <MenuItem value="humidity">Humidity</MenuItem>
              <MenuItem value="time">Time</MenuItem>
            </Select>
          </FormControl>
          {device.mode === 'humidity' ? (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="dryDays"
                  label="Dry Days"
                  type="number"
                  value={device.dryDays}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        days
                      </Typography>
                    ),
                  }}
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="amountOfWater"
                  label="Amount of Water in liter"
                  type="number"
                  value={device.amountOfWater}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        L
                      </Typography>
                    ),
                  }}
                  sx={{ width: '100%' }}
                />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <TextField
                  name="daysWithNoWater"
                  label="Days with No Water"
                  type="number"
                  value={device.daysWithNoWater}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        days
                      </Typography>
                    ),
                  }}
                  sx={{ width: '100%' }}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="amountOfWater"
                  label="Amount of Water"
                  type="number"
                  value={device.amountOfWater}
                  onChange={handleChange}
                  InputProps={{
                    endAdornment: (
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="span"
                      >
                        L
                      </Typography>
                    ),
                  }}
                  sx={{ width: '100%' }}
                />
              </Grid>
            </Grid>
          )}
        </Box>
      </Paper>
    </Box>
  );
};

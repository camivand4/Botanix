import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { dataFetcher } from '../../components/DataFetcher.js'; // Adjust import path

const deviceListStyle = {
  backgroundColor: '#f5f5f5',
  overflow: 'auto',
  maxHeight: 400,
  border: '1px solid #ccc',
  borderRadius: 8,
};

export const Device = () => {
  const [devices, setDevices] = useState([]);
  const loggedInUserId = 'hiylW4UeGDbbjNAV648RZ1w0udw1';

  useEffect(() => {
    const fetchData = async () => {
      const result = await dataFetcher(`/devices/user/${loggedInUserId}`);
      if (result.status === 200) {
        setDevices(result.data);
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (deviceId) => {
    try {
      const response = await fetch(`http://localhost:3000/devices/${deviceId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        setDevices((prevDevices) => prevDevices.filter(device => device.id !== deviceId));
        console.log(`Device with ID ${deviceId} deleted.`);
      } else {
        console.log(`Error deleting device with ID ${deviceId}.`);
      }
    } catch (error) {
      console.error('Error deleting device:', error);
    }
  };

  return (
    <Box sx={{ px: '1rem', mt: '5vh' }}>
      <Typography variant="h4">Devices</Typography>
      <Box sx={{ mt: '2rem' }}>
        <Button
          component={Link}
          to={`/devices/new`}
          variant="contained"
          color="primary"
          sx={{
            mb: '1rem'
          }}
        >
          Add New Device
        </Button>
      </Box>
      <Paper style={deviceListStyle}>
        <List>
          {devices.map((device) => (
            <ListItem
              key={device.id}
              sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-between',
                cursor: 'pointer',
                transition: 'background-color 0.2s',
                '&:hover': {
                  backgroundColor: '#e0e0e0',
                },
              }}
            >
              <Box component={Link} to={`/devices/${device.id}`} sx={{ flex: '1 1 auto', minWidth: 0 }}>
                <Typography variant="body1" noWrap>{device.name}</Typography>
                <Typography variant="body2" color="textSecondary">ID: {device.id}</Typography>
              </Box>
              <Box>
                <Button
                  variant="outlined"
                  color="secondary"
                  startIcon={<DeleteIcon />}
                  onClick={() => handleDelete(device.id)}
                >
                  Delete
                </Button>
              </Box>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Box>
  );
};

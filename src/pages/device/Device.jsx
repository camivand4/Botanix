import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Box,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const deviceListStyle = {
  backgroundColor: '#f5f5f5',
  overflow: 'auto',
  maxHeight: 400,
  border: '1px solid #ccc',
  borderRadius: 8,
};

const listItemTextStyle = {
  flex: '1 1 auto',
  minWidth: 0,
};

export const Device = () => {
  // Static devices data (replace with actual data when available)
  const devices = [
    {
      id: 1,
      name: 'Device 1',
      frequency: 'Daily',
      plantName: 'Plant A',
      humidity: 3,
      wateringTime: '08:00 AM',
      extraInfo1: 'Extra Info 1',
      extraInfo2: 'Extra Info 2',
    },
    {
      id: 2,
      name: 'Device 2',
      frequency: 'Weekly',
      plantName: 'Plant B',
      humidity: 4,
      wateringTime: '10:00 AM',
      extraInfo1: 'Extra Info 1',
      extraInfo2: 'Extra Info 2',
    },
    // Add more static devices here
  ];

  const handleDelete = (deviceId) => {
    // Add the logic to delete the device with the given ID
    console.log(`Deleting device with ID: ${deviceId}`);
  };

  return (
    <Box sx={{ px: '1rem', mt: '5vh' }}>
      <Typography variant="h4">Devices</Typography>
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
              <Box component={Link} to={`/devices/${device.id}`} style={listItemTextStyle}>
                <ListItemText primary={device.name} />
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

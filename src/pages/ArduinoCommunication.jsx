import React, { useEffect } from 'react';
import io from 'socket.io-client';

const ArduinoCommunication = () => {
  useEffect(() => {
    const socket = io('ws://192.168.0.151:81');

    socket.on('connect', () => {
      console.log('Connected to Arduino');
    });

    socket.on('data_from_arduino', (data) => {
      console.log('Data received from Arduino:', data);
      // Do something with the data received from the Arduino
    });

    // Function to send data to Arduino
    const sendDataToArduino = (data) => {
      socket.emit('data_to_arduino', data);
    };

    // Clean up the WebSocket connection on unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return <div>React App communicating with Arduino</div>;
};

export default ArduinoCommunication;

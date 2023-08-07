import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";

export const dataFetcher = async () => {
    try {
      const response = await fetch('http://localhost:3000/devices');
      const data = await response.json();
  
      if (response.ok) {
        // If the response status is in the range 200-299 (success status codes)
        return {
          data: data,
          status: response.status,
        };
      } else {
        // If the response status is not in the success range
        return {
          data: [],
          status: response.status,
          message: `Error: ${response.status} - ${response.statusText}`,
        };
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      return {
        data: [],
        status: error.status || 500,
        message: error.message || 'Internal Server Error',
      };
    }
  };
  

  export const Test = () => {
    const [data, setData] = useState([]);
    const [statusCode, setStatusCode] = useState(0);
    const [errorMessage, setErrorMessage] = useState('');
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await dataFetcher();
        setData(result.data);
        setStatusCode(result.status);
        setErrorMessage(result.message);
      };
      fetchData();
    }, []);
  
    return (
      <div>
        {statusCode === 200 ? (
          data.map((device) => (
            <div key={device.id}>
              <p>Name: {device.name}</p>
              <p>Plant: {device.plant}</p>
              <p>Humidity: {device.humidity}</p>
              <p>Watering Time: {device.wateringTime}</p>
              {/* Add other device properties as needed */}
            </div>
          ))
        ) : (
          <p>Error occurred. Status Code: {statusCode}</p>
        )}
  
        {errorMessage && <p>Error Message: {errorMessage}</p>}
      </div>
    );
  };
  
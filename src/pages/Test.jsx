import React, { useEffect, useState } from 'react';
import { useLoaderData } from "react-router-dom";
import { dataFetcher } from '../components/DataFetcher.js';

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
  
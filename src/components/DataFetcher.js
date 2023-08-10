export const dataFetcher = async () => {
    try {
      const response = await fetch("https://13.53.41.118/devices");
      const data = await response.json();
  
      if (response.ok) {
        // If the response status is in the range 200-299 (success status codes)
        console.log(data)
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
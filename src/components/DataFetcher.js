export const dataFetcher = async (url) => {
    try {
      const response = await fetch(import.meta.env.VITE_REACT_APP_API + url);
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
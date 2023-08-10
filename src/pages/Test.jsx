import React, { useState, useEffect } from 'react';

export const dataFetcher = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await response.json();
    return data;
}

export const Test = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        dataFetcher().then(setData);
    }, []);

    return (
        <div>{data ? data.title : 'Loading...'}
        {import.meta.env.VITE_REACT_APP_API}
        </div>
    )
}

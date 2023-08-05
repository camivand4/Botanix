import React from 'react';
import { useLoaderData } from "react-router-dom";

export const dataFetcher = async () => {
    const rest = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data = await rest.json();
    return data;
}

export const Test = () => {
    const data = useLoaderData();
    return (
        <div>{data.title}</div>
    )
}

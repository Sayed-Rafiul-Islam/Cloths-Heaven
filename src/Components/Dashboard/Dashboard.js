import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Area, Bar, BarChart, CartesianGrid, ComposedChart, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data));
    }, [])

    return (
        <div className='flex lg:flex-row flex-col flex-wrap justify-between mt-12 w-full'>
            <div className='lg:w-1/2 w-full flex flex-col items-center mb-10'>
                <h1 className='lg:mb-12 mb-8'>Bar<span className='text-red-500'>Chart</span></h1>
                <BarChart width={700} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis datakey="investment" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#ef4444" />
                    <Bar dataKey="investment" fill="#20c997" />
                </BarChart>
            </div>
            <div className='lg:w-1/2 w-full flex flex-col items-center'>
                <h1 className='lg:mb-12 mb-8'>Composed<span className='text-red-500'>Chart</span></h1>
                <ComposedChart width={700} height={250} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="investment" />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="investment" fill="#ef4444" stroke="#ef4444" />
                    <Bar dataKey="sell" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Dashboard;
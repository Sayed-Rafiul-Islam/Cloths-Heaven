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
        <div className='flex flex-wrap justify-between mt-12 w-full'>
            <div className='w-1/2 flex flex-col items-center'>
                <h1 className='mb-12'>Bar<span className='text-red-500'>Chart</span></h1>
                <BarChart width={700} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis datakey="investment" />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="sell" fill="#8884d8" />
                    <Bar dataKey="revenue" fill="#ef4444" />
                </BarChart>
            </div>
            <div className='w-1/2 flex flex-col items-center'>
                <h1 className='mb-12'>Composed<span className='text-red-500'>Chart</span></h1>
                <ComposedChart width={700} height={250} data={data}>
                    <XAxis dataKey="month" />
                    <YAxis dataKey="revenue" />
                    <Tooltip />
                    <Legend />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Area type="monotone" dataKey="sell" fill="#ef4444" stroke="#ef4444" />
                    <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
                    <Line type="monotone" dataKey="investment" stroke="#ff7300" />
                </ComposedChart>
            </div>
        </div>
    );
};

export default Dashboard;
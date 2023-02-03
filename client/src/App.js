import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './components/Login';
import Dashboard from './components/Dashboard';
import { Navigate } from 'react-router';

export default function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/*  <Route path="/" element={<Register />} /> */}
                    <Route path="/" element={<Login />} />
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

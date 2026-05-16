import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import Dashboard from './Dashboard.tsx';
import Usage from './Usage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/dashboard" element={
          <div className="min-h-screen relative overflow-hidden font-sans bg-[#FAFAFA] text-[#111827] dark:bg-[#0A0A0A] dark:text-[#F9FAFB]">
             <Dashboard />
          </div>
        } />
        <Route path="/usage" element={
          <div className="min-h-screen relative overflow-hidden font-sans bg-[#FAFAFA] text-[#111827] dark:bg-[#0A0A0A] dark:text-[#F9FAFB]">
             <Usage />
          </div>
        } />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);


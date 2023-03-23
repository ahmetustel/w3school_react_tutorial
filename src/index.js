import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Car from './Car'
import Garage from './Garage'
import Allgarage from './Allgarage'
import Football from './Football'
import Goal from './Goal'
import Team from './Team'
import MyForm from './MyForm';
import FavoriteColor from './FavoriteColor'
import Blogs from './pages/Blogs'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Layout from './pages/Layout'
import NoPage from './pages/NoPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import App from './Example1'
import Header from './Header'
import Withmystyle from './Withmystyle'
import SassExample from './SassExample'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SassExample/>
  </React.StrictMode>
);
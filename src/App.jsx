import React from 'react'
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './layouts/Layout';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import ContactScreen from './screens/ContactScreen';
import SkillScreen from './screens/SkillScreen';
import PortfolioScreen from './screens/PortfolioScreen';

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? '/' : '/portfolio/'}>
      <Routes>
        <Route path='/' Component={Layout}>
          <Route index Component={HomeScreen}></Route>
          <Route path='about' Component={AboutScreen}></Route>
          <Route path='skills' Component={SkillScreen}></Route>
          <Route path='projects' Component={PortfolioScreen}></Route>
          <Route path='contact' Component={ContactScreen}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
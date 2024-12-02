import React from 'react';
import 'boxicons';
import '../index.css'
import Navbar from '../components/Sidebar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';

// Pages Components
import Intro from '../components/Home/Intro';
import Testimoni from '../components/Home/testimoni';
import Consultan from '../components/Home/Consultan';
import Quotes from '../components/Home/Quotes';

const Home = () => {
  return (
    <>
      <Intro/>
      <Consultan/>
      <Testimoni/>
      <Quotes/>
    </>
  );
};

export default Home;

import React from 'react';
import 'boxicons';
import '../index.css'
import Navbar from '../components/Sidebar';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Button from '../components/Button';

// Pages Components
import AcademyIndex from '../components/Academy/Academy';
import KelasDetail from '../components/Academy/KelasDetail';

const Academy = () => {
  return (
    <>
        <AcademyIndex />
    </>
  );
};

export default Academy;
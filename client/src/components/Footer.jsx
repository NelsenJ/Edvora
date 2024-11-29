import React from 'react';

const Footer = () => {
  return (
    <footer className="">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Edvora. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

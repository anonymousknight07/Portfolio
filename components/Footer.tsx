import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-700 text-white text-center py-4">
      <p>&copy; {currentYear} Akshat Pandey</p>
    </footer>
  );
};

export default Footer;

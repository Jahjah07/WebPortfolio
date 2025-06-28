import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 mt-16">
      <div className="container-custom text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Jahred Uy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-4 mt-16">
      <div className="container-custom text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Jahred Uy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer; 
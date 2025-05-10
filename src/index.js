import React, { useEffect } from 'react';
import { initGA, logPageView } from './utils/analytics';

const App = () => {
  useEffect(() => {
    initGA(); // Initialize Google Analytics
    logPageView(); // Log the initial page view
  }, []);

  return (
    <>
      {/* ...existing code... */}
    </>
  );
};

export default App;

import ReactGA from 'react-ga4';

export const initGA = () => {
  console.log('Initializing Google Analytics...');
  ReactGA.initialize(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID); // Use environment variable
};

export const logPageView = () => {
  console.log('Logging page view:', window.location.pathname);
  ReactGA.send({ hitType: 'pageview', page: window.location.pathname });
};
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="robots" content="index, follow" />
    <meta charSet="utf-8" />
    <link rel="canonical" href="https://your-portfolio-domain.com" />
  </Helmet>
);

export default SEO;

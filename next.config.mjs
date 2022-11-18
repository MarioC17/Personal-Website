/**
   * @type {import('next').NextConfig}
   */
 const nextConfig   = {
    images: {
      loader: 'akamai',
      path: '',
    },
    assetPrefix: './',
  };
  
  module.exports = {
    reactStrictMode: true,
  };
  
  
  export default   nextConfig;
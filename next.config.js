// 以下 next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
     includePaths: [path.join(__dirname, 'styles')]
    },
    // images: {
    //     domains: ['example.com', 'example.org'],
    // },
}
  
module.exports = nextConfig